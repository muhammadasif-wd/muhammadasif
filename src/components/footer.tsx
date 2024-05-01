import {Button} from "@nextui-org/button";
import Link from "next/link";

import {APISocial} from "@/assets/api/navigation";
import {IconFacebook} from "@/assets/icons/facebook";
import IconGithub from "@/assets/icons/github";
import IconLinkedin from "@/assets/icons/linkedin";

export default function Footer() {
  return (
    <footer className="border-t py-5 bottom-0 absolute w-full">
      <div className="container">
        <div className="grid sm:grid-cols-3 grid-cols-1 place-content-center place-items-center">
          <div className="flex items-center gap-3 sm:order-1 order-3 text-xs sm:text-sm text-center text-dark dark:text-light">
            <Link href="/terms">Terms</Link>
            <Link href="/privacy">Privacy</Link>
            <Link href="/policy">Policy</Link>
          </div>
          <p className="text-xs sm:text-sm text-center order-2">
            &copy; {new Date().getFullYear()} Muhammad Asif
          </p>
          <div className="flex items-center gap-1  sm:order-3 order-1">
            {APISocial.map(({icon, id, url}) => (
              <Button
                key={id}
                isIconOnly
                as={Link}
                color="default"
                href={url}
                size="sm"
                target="_blank"
                variant="light"
              >
                {icon === "github" && <IconGithub className="w-5 h-5" />}
                {icon === "linkedin" && <IconLinkedin className="w-5 h-5" />}
                {icon === "facebook" && <IconFacebook className="w-5 h-5" />}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
