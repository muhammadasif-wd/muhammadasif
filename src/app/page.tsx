import {Button} from "@nextui-org/button";

import {ThemeSwitcher} from "./theme-switcher";

export default function Home() {
  return (
    <main>
      <ThemeSwitcher />
      <Button color="primary">Click me Check</Button>
    </main>
  );
}
