import { handleSignIn } from "@/app/actions/signin";

export function SignIn() {
  return (
    <form action={handleSignIn}>
      <button type="submit">Sign in</button>
    </form>
  );
}
