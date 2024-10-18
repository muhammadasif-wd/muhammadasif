export type TBanner = {
  _id?: string;
  name: string;
  url: string;
  icon: string;
};

export interface IBannerProps {
  bannerData?: TBanner[];
  bannerError?: string;
}
