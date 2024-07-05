import {Button} from "@nextui-org/button";
import Link from "next/link";

import {APISocial} from "@/assets/api/navigation";
import {IconFacebook} from "@/assets/icons/facebook";
import IconGithub from "@/assets/icons/github";
import IconLinkedin from "@/assets/icons/linkedin";
import {IconWhatsapp} from "@/assets/icons/whatsapp";

export default function Footer() {
  return (
    <footer className="bg-primary dark:border-t-1 text-light py-5 w-full">
      <div className="container">
        <div className="flex sm:flex-nowrap flex-wrap gap-5 items-center justify-between">
          <div className="space-x-1 text-start">
            <p className="font-semibold uppercase pb-1">Muhammad Asif</p>
            {APISocial.map(({icon, _id, url}) => (
              <Button
                key={_id}
                isIconOnly
                as={Link}
                className="border text-light"
                href={url}
                radius="sm"
                size="sm"
                target="_blank"
                variant="light"
              >
                {icon === "github" && <IconGithub className="w-5 h-5" />}
                {icon === "linkedin" && <IconLinkedin className="w-5 h-5" />}
                {icon === "facebook" && <IconFacebook className="w-5 h-5" />}
                {icon === "whatsapp" && <IconWhatsapp className="w-5 h-5" />}
              </Button>
            ))}
          </div>
          <div>
            <p className="sm:text-end text-start">&copy; 2021 - {new Date().getFullYear()}</p> All
            rights reserved
          </div>
        </div>
      </div>
    </footer>
  );
}
