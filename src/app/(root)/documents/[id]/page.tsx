import { Header, Editor } from "@/components";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";

export default function Document() {
  return (
    <div>
      <Header>
        <div className="flex w-fit items-center justify-center gap-2">
          <p className="documents-title">This is a fake dokumens</p>
        </div>
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </Header>
      <Editor />
    </div>
  );
}
