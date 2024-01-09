"use client";
import { headerLinks } from "@/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavItems() {
  const pathname = usePathname();
  return (
    <ul className=" flex w-full flex-col gap-5 items-start md:flex-between md:flex-row">
      {headerLinks.map((link) => {
        const isActive = pathname === link.route;
        return (
          <li key={link.label}>
            <Link
              href={link.route}
              className={`${
                isActive && " text-primary-500 hover:text-primary-600"
              } flex-center p-medium-16 whitespace-nowrap`}
            >
              {link.label}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
