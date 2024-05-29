import { fontFamily, theme } from "@/styles";
import { useState } from "react";
import { TextInput } from "react-native";
import CountryPicker, {
  type Country,
  type CountryCode,
} from "react-native-country-picker-modal";

interface CountrySelectorProps {
  onSelect?: (country: Country) => void;
}

export function CountrySelector({
  onSelect: setCountry,
}: CountrySelectorProps) {
  const [countryCode, setCountryCode] = useState<CountryCode>("BR");

  const onSelect = (country: Country) => {
    setCountryCode(country.cca2);
    setCountry?.(country);
  };

  return (
    <CountryPicker
      countryCode={countryCode}
      withFilter={true}
      withFlag={true}
      withCountryNameButton={true}
      withAlphaFilter={true}
      withEmoji={false}
      onSelect={onSelect}
      translation="por"
      containerButtonStyle={{
        height: 48,
        justifyContent: "center",
        width: "100%",

        paddingHorizontal: 12,
        borderRadius: 6,
        borderWidth: 1,

        backgroundColor: theme.zinc[100],
        borderColor: theme.zinc[200],
      }}
      theme={{
        fontFamily: fontFamily.regular,
        fontSize: 14,
      }}
      renderCountryFilter={(props) => {
        return (
          <TextInput
            {...props}
            placeholder="Insira o nome do país"
            placeholderTextColor={theme.zinc[400]}
            selectionColor={theme.primary.opaque}
            selectionHandleColor={theme.primary[500]}
            style={{
              fontFamily: fontFamily.regular,
              fontSize: 14,
            }}
          />
        );
      }}
    />
  );
}
