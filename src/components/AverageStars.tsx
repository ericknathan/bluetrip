import { theme } from "@/styles";
import { IconContext, Star, StarHalf } from "phosphor-react-native";
import { View } from "react-native";

interface AverageStarsProps {
  rate: number;
}

export function AverageStars({ rate }: AverageStarsProps) {
  return (
    <IconContext.Provider
      value={{ color: theme.yellow[500], weight: "fill", size: 16 }}
    >
      <View style={{ flexDirection: "row" }}>
        {Array.from({ length: 5 }, (_, index) => {
          if (rate >= index + 1) {
            return <Star key={index} />;
          }

          if (rate >= index + 0.5) {
            return <StarHalf key={index} />;
          }

          return <Star key={index} />;
        })}
      </View>
    </IconContext.Provider>
  );
}
