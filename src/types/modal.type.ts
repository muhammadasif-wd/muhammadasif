import {JSX} from "react";
export type TModalAction = {
  label: string;
  color: "default" | "primary" | "secondary" | "success" | "warning" | "danger" | undefined;
  variant: "light" | "solid" | "bordered" | "flat" | "faded" | "shadow" | "ghost" | undefined;
  handler?: () => void;
}[];
export type TModalProps = {
  header: string;
  body: JSX.Element;
  actions: TModalAction;
  isOpen: boolean;
  size: "sm" | "md" | "lg" | "xl" | "2xl" | "xs" | "3xl" | "4xl" | "5xl" | "full" | undefined;
  onOpenChange: () => void;
};
