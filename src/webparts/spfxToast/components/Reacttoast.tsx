import * as React from "react";
import { ToastProvider, useToasts } from "react-toast-notifications";

interface ToastDemoProps {
  mycontent: string;
}

const ToastDemo: React.FC<ToastDemoProps> = ({ mycontent }) => {
  const { addToast } = useToasts();
  return (
    <>
      <button
        onClick={() =>
          addToast(mycontent, {
            appearance: "success",
            autoDismiss: false,
            PlacementType: "bottom-left",
          })
        }
      >
        success Toast
      </button>
      <button
        onClick={() =>
          addToast(mycontent, {
            appearance: "error",
            autoDismiss: false,
          })
        }
      >
        error Toast
      </button>
      <button
        onClick={() =>
          addToast(mycontent, {
            appearance: "warning",
            autoDismiss: false,
          })
        }
      >
        warning Toast
      </button>
      <button
        onClick={() =>
          addToast(mycontent, {
            appearance: "info",
            autoDismiss: false,
          })
        }
      >
        Info Toast
      </button>
    </>
  );
};

interface MyReactToastProps {
  mycontent: string;
}

export const MyReactToast: React.FC<MyReactToastProps> = ({ mycontent }) => (
  <ToastProvider>
    <ToastDemo mycontent={mycontent} />
  </ToastProvider>
);
