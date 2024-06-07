import { MagnifyingGlass } from "phosphor-react-native";
import { useState } from "react";
import { StyleSheet, View } from "react-native";

import { Button, Input } from "@/components/ui";
import { theme } from "@/styles";

interface SearchBarProps {
  placeholder: string;
  onSearch?: (query: string) => void;
}

export function SearchBar({ placeholder, onSearch }: SearchBarProps) {
  const [query, setQuery] = useState("");

  return (
    <View style={styles.container}>
      <Input
        hideErrorMessage
        placeholder={placeholder}
        value={query}
        onChangeText={(text) => {
          setQuery(text);
          onSearch?.(text);
        }}
      />
      <Button style={{ width: 48 }}>
        <MagnifyingGlass color={theme.white} />
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    paddingHorizontal: 20,

    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
});
