import { FlatList, View, type FlatListProps } from "react-native";
import { Text } from "../ui";

interface DataSectionProps
  extends Omit<
    FlatListProps<any>,
    "ItemSeparatorComponent" | "contentContainerStyle"
  > {
  title: string;
  gap?: number;
}

export function DataSection({
  title,
  gap = 16,
  horizontal = true,
  data,
  ...props
}: DataSectionProps) {
  return (
    <View>
      <Text
        weight="semibold"
        size={18}
        style={{ marginLeft: 20, marginBottom: 4 }}
      >
        {title}
      </Text>
      <FlatList
        contentContainerStyle={{ paddingHorizontal: 20 }}
        ItemSeparatorComponent={() => (
          <View style={{ width: gap, height: gap }} />
        )}
        showsHorizontalScrollIndicator={false}
        horizontal={horizontal}
        data={data || []}
        {...props}
      />
    </View>
  );
}
