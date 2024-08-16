export type TSocialNavigation = {
  _id?: string;
  name: string;
  url: string;
  icon: string;
};

export type TSubmenuNavigation = {
  _id?: string;
  name: string;
  url: string;
};
export type TNavigation = {
  _id?: string;
  name: string;
  url: string;
  submenu?: TSubmenuNavigation[];
  social?: TSocialNavigation[];
};

export interface INavigationProps {
  navigationData?: TNavigation[];
  error?: string;
  loading?: boolean;
}
export type TSkeleton = {
  skeleton?: number;
  layout?: string;
  style?: string;
};
