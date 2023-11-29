import Link from "next/link";
import logo from "../../public/images/logo.webp";
import logoLight from "../../public/images/logo-light.webp";
import Image from "next/image";

function Logo({ mode, toggle }) {
  return (
    <div className="lg:-mt-6 lg:pt-12 pt-1.5">
      <Link onClick={toggle} href={"/"}>
        {mode === "dark" ? (
          <Image
            priority
            sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw"
            src={logoLight}
            className="w-16 mx-auto"
            alt="logo"
          />
        ) : (
          <Image
            priority
            sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw"
            src={logo}
            className="w-16 mx-auto"
            alt="logo"
          />
        )}
      </Link>
    </div>
  );
}

export default Logo;
