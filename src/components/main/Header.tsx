import Link from "next/link";
import Image from "next/image";

import Logo1 from "@public/assets/icons/logo.svg";
import Logo2 from "@public/assets/icons/logo-icon.svg";

export function Header({ children }: HeaderProps) {
  return (
    <div className="header">
      <Link href="/" className="md:flex-1">
        <Image
          src={Logo1}
          alt="logo with name"
          width={120}
          height={32}
          className="hidden md:block"
        />
        <Image
          src={Logo2}
          alt="Logo"
          width={32}
          height={32}
          className="mr-2 md:hidden"
        />
      </Link>
      {children}
    </div>
  );
}
