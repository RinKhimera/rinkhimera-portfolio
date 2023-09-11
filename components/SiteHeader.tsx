import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { buttonVariants } from "@/components/ui/button";
import { Github, Linkedin } from "lucide-react";
import Link from "next/link";
import { ModeToggle } from "./theme-toggle";

const SiteHeader = () => {
  return (
    <header className="">
      <div className="flex items-center justify-between py-5">
        <Link className="flex items-center space-x-5" href="/">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>SP</AvatarFallback>
          </Avatar>
        </Link>

        <nav className="hidden space-x-6 rounded-full bg-white/90 px-6 py-2 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10 md:flex">
          <Link href={""}>About</Link>
          <Link href={""}>Skills</Link>
          <Link href={""}>Projects</Link>
          <Link href={""}>Contact</Link>
          <Link href={""}>Blog</Link>
        </nav>

        <div className="flex items-center">
          <Link
            className={buttonVariants({ variant: "ghost", size: "icon" })}
            href={"/"}
          >
            <Github />
          </Link>
          <Link
            className={buttonVariants({ variant: "ghost", size: "icon" })}
            href={"/"}
          >
            <Linkedin />
          </Link>
          <ModeToggle />
        </div>
      </div>
    </header>
  );
};

export default SiteHeader;
