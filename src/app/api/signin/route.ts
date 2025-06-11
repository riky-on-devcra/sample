import { NextRequest, NextResponse } from "next/server";

const tempUser = {
  email: "test@test.com",
  name: "test",
  role: "admin",
  id: 1,
  password: "helloworld",
  saltedPassword: "$2a$10$1234567890",
};

export async function POST(request: NextRequest) {
  console.log("[POST][/api/signin]", JSON.stringify(request.body));

  try {
    const { email, password } = await request.json();

    if (!email || !password) {
      console.log("[POST][/api/signin][400] Invalid credentials");
      return NextResponse.json(
        { error: "Invalid credentials" },
        { status: 400 },
      );
    }

    if (email === tempUser.email && password === tempUser.password) {
      console.log("[POST][/api/signin][200] Success");
      return NextResponse.json(
        {
          user: {
            id: tempUser.id,
            email: tempUser.email,
            name: tempUser.name,
            role: tempUser.role,
          },
        },
        { status: 200 },
      );
    }

    console.log("[POST][/api/signin][401] Invalid credentials");
    return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
  } catch (e) {
    console.error(
      "[POST][/api/signin][500] Internal server error",
      JSON.stringify(e),
    );
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}
