import { auth } from "@/auth";
import NavigationBar from "@/components/NavigationBar";
import { redirect } from "next/navigation";
import { Suspense } from "react";

export default async function SSRPage() {
  const session = await auth();

  if (!session) {
    redirect("/signin");
  }

  return (
    <div className="flex flex-col h-full">
      <NavigationBar session={session} />
      <main className="isolate flex-1 pt-16">
        <div className="mx-auto container max-w-7xl px-6 sm:px-6 lg:px-8">
          <Suspense fallback={<div>Loading...</div>}>
            <div className="container mx-auto max-w-7xl">
              {JSON.stringify(session)}
            </div>
          </Suspense>
        </div>
      </main>
    </div>
  );
}
