import Link from "next/link";
import React from "react";
import logo from "@/assets/public/logo.png";
import Image from "next/image";
import { buttonVariants } from "../ui/button";
import { ThemeToggle } from "../theme/ThemeToggle";
import { auth } from "@/utils/auth";
import UserDropdown from "./UserDropdown";

const DashboardNavbar = async () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const session = (await auth()) as any;

  return (
    <nav className="flex items-center justify-between py-5">
      <Link href="/" className="flex items-center gap-2">
        <Image src={logo} alt="logo" width={40} height={40} />
        <h1 className="text-2xl font-bold hidden sm:block">
          Aur<span className="text-primary">en</span>
        </h1>
      </Link>

      {/* Desktop navigation */}
      <div className="flex items-center gap-3.5 md:gap-5">
        <ThemeToggle />
        <Link
          className={`cursor-pointer ${buttonVariants({
            size: "lg",
            className: "text-white",
          })}`}
          href="/new-project"
        >
          New Project
        </Link>

        {session?.user ? (
          <UserDropdown
            email={session.user.email!}
            name={session.user.name!}
            image={session.user.image!}
          />
        ) : (
          <Link
            href="/login"
            className={`cursor-pointer  ${buttonVariants({
              variant: "outline",
              size: "lg",
            })} !shadow-none`}
          >
            Login
          </Link>
        )}
      </div>
    </nav>
  );
};

export default DashboardNavbar;
