import { theme } from "@/styles";
import { CaretLeft } from "phosphor-react-native";
import { StatusBar, StyleSheet, View } from "react-native";
import { Button } from "./Button";
import { Logo } from "./Logo";
import { Text } from "./Text";

type HeaderProps = {
  title?: string;
  showBackButton?: boolean;
};

export function Header({ title, showBackButton = false }: HeaderProps) {
  return (
    <View
      style={[
        styles.header,
        {
          marginTop: StatusBar.currentHeight,
          justifyContent:
            !showBackButton && !title ? "center" : "space-between",
        },
      ]}
    >
      <Logo height={46} />
      {title && (
        <Text weight="semibold" size={18}>
          {title}
        </Text>
      )}
      {showBackButton && (
        <Button variant="ghost" style={{ width: 48 }}>
          <CaretLeft color={theme.zinc[900]} />
        </Button>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    paddingVertical: 24,
    paddingHorizontal: 20,
    alignItems: "center",
  },
});
