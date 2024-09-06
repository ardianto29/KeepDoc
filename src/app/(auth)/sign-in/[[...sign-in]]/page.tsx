import { SignIn } from "@clerk/nextjs";

export function SignInPage() {
  return (
    <main className="auth-page">
      <SignIn />
    </main>
  );
}
