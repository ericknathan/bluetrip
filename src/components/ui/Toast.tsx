import { baseToastStyles } from "@/helpers";
import { theme } from "@/styles";
import BaseToaster, { BaseToast } from "react-native-toast-message";

export function Toaster() {
  return (
    <BaseToaster
      position="top"
      config={{
        success: (props) => (
          <BaseToast
            {...props}
            {...baseToastStyles}
            style={{ borderColor: theme.green[500] }}
          />
        ),
        error: (props) => (
          <BaseToast
            {...props}
            {...baseToastStyles}
            style={{ borderColor: theme.red[500] }}
          />
        ),
        info: (props) => (
          <BaseToast
            {...props}
            {...baseToastStyles}
            style={{ borderColor: theme.primary[500] }}
          />
        ),
      }}
    />
  );
}
