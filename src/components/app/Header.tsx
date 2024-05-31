import { useNavigation } from "@react-navigation/native";
import { CaretLeft } from "phosphor-react-native";
import { StyleSheet, View } from "react-native";

import { Text, Button } from "@/components/ui";
import { theme } from "@/styles";
import { Logo } from "./Logo";

type HeaderProps = {
  title?: string;
  showBackButton?: boolean;
};

export function Header({ title, showBackButton = false }: HeaderProps) {
  const navigation = useNavigation();

  return (
    <View
      style={[
        styles.header,
        {
          justifyContent:
            !showBackButton && !title ? "center" : "space-between",
        },
      ]}
    >
      <Logo height={46} />
      {title && (
        <Text weight="semibold" size={20}>
          {title}
        </Text>
      )}
      {showBackButton && (
        <Button
          variant="ghost"
          style={{ width: 48 }}
          onPress={navigation.goBack}
        >
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
