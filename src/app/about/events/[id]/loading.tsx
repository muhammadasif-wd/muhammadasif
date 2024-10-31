import {Skeleton} from "@nextui-org/skeleton";

const Loading = () => {
  return (
    <div>
      <div className="h-fit w-full flex items-center gap-3">
        <div className="w-full space-y-4">
          <Skeleton className="h-5 w-40 rounded-lg" />
          <Skeleton className="h-8 w-full rounded-lg" />
        </div>
      </div>
      <div className="w-full flex gap-3 mt-10">
        <Skeleton className="h-10 w-40 rounded-lg" />
        <Skeleton className="h-10 w-40 rounded-lg" />
      </div>
      <div className="w-full flex flex-col gap-3 mt-10">
        <Skeleton className="h-5 w-3/5 rounded-lg" />
        <Skeleton className="h-5 w-4/5 rounded-lg" />
        <Skeleton className="h-5 w-4/5 rounded-lg" />
        <Skeleton className="h-5 w-4/5 rounded-lg" />
      </div>
      <div className="mt-10">
        <Skeleton className="w-full h-96 rounded-lg" />
      </div>
      <div className="w-full flex flex-col gap-3 mt-10">
        <Skeleton className="h-5 w-3/5 rounded-lg" />
        <Skeleton className="h-5 w-4/5 rounded-lg" />
        <Skeleton className="h-5 w-4/5 rounded-lg" />
        <Skeleton className="h-5 w-4/5 rounded-lg" />
      </div>
      <div className="w-full flex gap-3 mt-10">
        <Skeleton className="h-10 w-40 rounded-lg" />
        <Skeleton className="h-10 w-40 rounded-lg" />
      </div>
    </div>
  );
};

export default Loading;
