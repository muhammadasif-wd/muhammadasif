import {useState} from "react";
import Link from "next/link";
import {Button} from "@nextui-org/button";
import {motion} from "framer-motion";

import {APINavigation} from "@/assets/api/navigation";
import {IconDownload} from "@/assets/icons/download";
import IconMenu from "@/assets/icons/menu";
import IconClose from "@/assets/icons/close";

const Navigation = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => setIsDrawerOpen(!isDrawerOpen);

  return (
    <section className="py-6 container">
      <div className="flex items-center justify-between py-2 px-8">
        <div>
          <Link className="font-bold uppercase" href={"/"}>
            Asif
          </Link>
        </div>
        <div className="lg:flex hidden gap-5 items-center font-bold">
          {APINavigation.map((nav) => (
            <Link key={nav._id} href={nav.url}>
              <p className="font-bold capitalize">{nav.name}</p>
            </Link>
          ))}
        </div>
        <div>
          <Button className="font-bold lg:flex hidden" color="primary" radius="sm">
            Resume <IconDownload height={15} width={15} />
          </Button>
          <Button
            isIconOnly
            className="font-bold lg:hidden flex"
            color="primary"
            radius="sm"
            variant="light"
            onClick={toggleDrawer}
          >
            <IconMenu height={18} width={27} />
          </Button>
        </div>
      </div>
      {isDrawerOpen && (
        <>
          <motion.div
            animate={{x: 0}}
            className="fixed top-0 right-0 w-3/4 h-full bg-white shadow-lg z-50 lg:hidden"
            exit={{x: "100%"}}
            initial={{x: "100%"}}
            transition={{type: "spring", stiffness: 300, damping: 30, mass: 1}}
          >
            <div className="flex flex-col space-y-1 container my-5">
              <div className="lg:hidden flex justify-end">
                <Button
                  isIconOnly
                  className="font-bold"
                  color="primary"
                  radius="sm"
                  size="sm"
                  onClick={toggleDrawer}
                >
                  <IconClose height={15} width={15} />
                </Button>
              </div>
              {APINavigation.map((nav) => (
                <Button key={nav._id} radius="sm">
                  <Link className="font-bold" href={nav.url}>
                    {nav.name}
                  </Link>
                </Button>
              ))}
              <Button className="font-bold lg:hidden flex" color="primary" radius="sm">
                Resume <IconDownload height={15} width={15} />
              </Button>
            </div>
          </motion.div>
          <motion.div
            animate={{opacity: 1}}
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            exit={{opacity: 0}}
            initial={{opacity: 0}}
            transition={{duration: 0.5, ease: "easeInOut"}}
            onClick={toggleDrawer}
          />
        </>
      )}
    </section>
  );
};

export default Navigation;
