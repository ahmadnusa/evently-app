import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t">
      <div className=" wrapper flex-between flex flex-col gap-4 p-5 text-center sm:flex-row">
        <Link href="/">
          <Image
            src="/assets/images/logo.svg"
            alt="logo"
            width={128.28}
            height={38}
            priority
          />
        </Link>
        <p>2023 Evently, All Rights Reserved.</p>
      </div>
    </footer>
  );
}
