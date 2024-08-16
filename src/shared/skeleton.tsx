import {Skeleton} from "@nextui-org/skeleton";

import {TSkeleton} from "@/types/navigation.type";

export default function SkeletonLoading({skeleton, layout, style}: TSkeleton) {
  const skeletons = new Array(skeleton ?? 10).fill(null);

  return (
    <>
      <div className="flex w-full items-center gap-3">
        <div className={`w-full ${layout ? layout : "flex flex-col gap-2"}`}>
          {skeletons &&
            skeletons?.map((_, index) => (
              <Skeleton key={index} className={`${style ?? "h-10 w-full rounded-lg"}`} />
            ))}
        </div>
      </div>
    </>
  );
}
