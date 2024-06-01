import { LogBox } from "react-native";
LogBox.ignoreAllLogs();

import dayjs from "dayjs";
import "dayjs/locale/pt-br";
dayjs.locale("pt-br");

// Disable deprecated error from 'react-native-country-picker-modal' library
if (process.env.NODE_ENV !== "production") {
  const originalWarn = console.error;

  console.error = (...args) => {
    if (
      args[0].includes(
        "Support for defaultProps will be removed from function components in a future major release."
      )
    ) {
      return;
    }

    originalWarn(...args);
  };
}
