import {Button} from "@nextui-org/button";

import ThemeSwitcher from "./theme-switcher";

export default function Home() {
  return (
    <main>
      <ThemeSwitcher />
      <Button className="bg-primary">primary</Button>
      <Button className="bg-secondary">secondary</Button>
      <Button className="bg-foreground">foreground</Button>
      <Button className="bg-default">default</Button>
      <Button className="bg-light">light</Button>
      <Button className="bg-dark">dark</Button>
      <Button className="bg-warning">warning</Button>
      <Button className="bg-success">success</Button>
      <Button className="bg-danger">danger</Button>
    </main>
  );
}
