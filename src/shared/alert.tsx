import React from "react";

interface AlertProps {
  label?: boolean;
  message: string;
  type: "info" | "danger" | "success" | "warning" | "dark";
  style?: string;
}

const Alert: React.FC<AlertProps> = ({label = true, message, type, style}) => {
  return (
    <div
      className={`border drop-shadow shadow border-${type} rounded ${style ? style : "p-4"}`}
      role="alert"
    >
      {label && (
        <p className={`text-${type} capitalize font-bold`}>
          {(type === "danger" && "Error Alert") ||
            (type === "success" && "Success Alert") ||
            (type === "warning" && "Warning Alert") ||
            (type === "dark" && "Default Alert") ||
            (type === "info" && "Info Alert")}
        </p>
      )}
      <p>{message}</p>
    </div>
  );
};

export default Alert;
