import loadingStyle from "../styles/loading.module.css";
export default function Loading() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div id={loadingStyle.wifi_loader}>
        <svg className={loadingStyle.circle_outer} viewBox="0 0 86 86">
          <circle className={loadingStyle.back} cx="43" cy="43" r="40" />
          <circle className={loadingStyle.front} cx="43" cy="43" r="40" />
          <circle className={loadingStyle.new} cx="43" cy="43" r="40" />
        </svg>
        <svg className={loadingStyle.circle_middle} viewBox="0 0 60 60">
          <circle className={loadingStyle.back} cx="30" cy="30" r="27" />
          <circle className={loadingStyle.front} cx="30" cy="30" r="27" />
        </svg>
        <svg className={loadingStyle.circle_inner} viewBox="0 0 34 34">
          <circle className={loadingStyle.back} cx="17" cy="17" r="14" />
          <circle className={loadingStyle.front} cx="17" cy="17" r="14" />
        </svg>
        <div className={loadingStyle.text} data-text="Loading..." />
      </div>
    </div>
  );
}
