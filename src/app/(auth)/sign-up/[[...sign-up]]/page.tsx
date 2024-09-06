import { SignUp } from "@clerk/nextjs";

export function SignUpPage() {
  return (
    <main className="auth-page">
      <SignUp />
    </main>
  );
}
