/* eslint-disable no-undef */
import {Button} from "@nextui-org/button";
import {Chip} from "@nextui-org/chip";
import {useDisclosure} from "@nextui-org/modal";

import {EvervaultCard, Icon} from "@/components/ui/evervault-card";
import PopupModal from "@/components/ui/modal";

export default function AboutSkill() {
  const {onOpen, isOpen, onOpenChange} = useDisclosure();
  const recipient = "muhammadasif.wd@gmail.com";
  const subject = "Contact from Portfolio";
  const body = "Hello ASIF, I visited your portfolio and I would like to contact you.";
  const handleHire = () => {
    if (typeof window !== "undefined" && window.open) {
      window.open(
        `https://mail.google.com/mail/u/0/?view=cm&fs=1&to=${recipient}&su=${encodeURIComponent(
          subject,
        )}&body=${encodeURIComponent(body)}`,
      );
    }
  };

  return (
    <div className="my-10 grid grid-cols-3">
      <div className="border border-black/[0.2] dark:border-white/[0.2] flex flex-col items-start max-w-80 mx-auto p-4 relative h-[26rem]">
        <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
        <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
        <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
        <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />

        <EvervaultCard text="Frontend Development" />

        <h2 className="dark:text-white text-black mt-4 text-sm font-light">
          Harnessing the power of JavaScript and TypeScript, I specialize in crafting interactive
          and responsive user interfaces. My toolkit includes React.js, Next.js, Vue.js, and Redux
          for robust frontend solutions.
        </h2>
        <Button
          className="mt-3 py-3 border border-white/30"
          size="sm"
          variant="light"
          onPress={onOpen}
        >
          See full info
        </Button>
      </div>

      <PopupModal
        actions={[
          {label: "Close", color: "danger", variant: "flat"},
          {
            label: "Hire",
            color: "primary",
            variant: "flat",
            handler: () => handleHire(),
          },
        ]}
        body={
          <div className="space-y-3">
            <Chip color="danger">HTML</Chip> <Chip color="primary">CSS</Chip>{" "}
            <Chip color="secondary">Bootstrap</Chip> <Chip color="default">Tailwind CSS</Chip>{" "}
            <Chip color="warning">Tailwind Merge</Chip>{" "}
            <Chip color="danger">All Tailwind Components Library</Chip>{" "}
            <Chip color="warning">JavaScript</Chip> <Chip>TypeScript</Chip>{" "}
            <Chip color="primary">React.js</Chip> <Chip color="secondary">Next.js</Chip>{" "}
            <Chip color="default">Vue.js</Chip> <Chip color="warning">Redux</Chip>
          </div>
        }
        header="Frontend Development Skills"
        isOpen={isOpen}
        size="xl"
        onOpenChange={onOpenChange}
      />
    </div>
  );
}
