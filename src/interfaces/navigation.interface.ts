import {LinkProps} from "next/link";
import {ReactNode} from "react";

export interface INavigationLinkProps extends LinkProps {
  href: string;
  exact?: boolean;
  children: ReactNode;
  className?: string;
}
