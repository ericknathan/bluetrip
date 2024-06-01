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
          const star = index + 1;
          if (rate >= star) {
            return <Star key={star} />;
          }
          if (rate + 1 > star) {
            return <StarHalf key={star} />;
          }
          return <Star key={star} weight="regular" />;
        })}
      </View>
    </IconContext.Provider>
  );
}
