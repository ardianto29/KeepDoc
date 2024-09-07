"use client";

import { ClientSideSuspense, RoomProvider } from "@liveblocks/react/suspense";
import { Header, Editor } from "@/components";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";

export function CollaborativeRoom() {
  return (
    <RoomProvider id="my-room">
      <ClientSideSuspense fallback={<div>Loading…</div>}>
        <div className="collaborative-room">
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
      </ClientSideSuspense>
    </RoomProvider>
  );
}
