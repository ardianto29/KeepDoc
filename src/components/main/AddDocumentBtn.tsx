"use client";

import { Button } from "@/components";
import Image from "next/image";
import { createDocument } from "@/lib/actions/room.actions";
import { useRouter } from "next/navigation";

import Icon2 from "@public/assets/icons/add.svg";

export function AddDocumentBtn({ userId, email }: AddDocumentBtnProps) {
  const router = useRouter();
  const addDocumentHandler = async () => {
    try {
      const room = await createDocument({ userId, email });

      if (room) router.push(`/documents/${room.id}`);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Button
      type="submit"
      onClick={addDocumentHandler}
      className="gradient-blue flex gap-1 shrink-md">
      <Image src={Icon2} alt="Add Document Icon" width={24} height={24} />
      <p className="hidden sm:block">Start a new document</p>
    </Button>
  );
}
