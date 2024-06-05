import { theme } from "@/styles";
import { useEffect } from "react";
import { StyleSheet } from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withSequence,
  withTiming,
} from "react-native-reanimated";

interface SkeletonProps {
  height: number;
  width: number;
}

export function Skeleton({ height, width }: SkeletonProps) {
  const opacity = useSharedValue(1);

  useEffect(() => {
    opacity.value = withRepeat(
      withSequence(
        withTiming(0.3, {
          duration: 1000,
        }),
        withTiming(1, {
          duration: 1000,
        })
      ),
      Infinity,
      true
    );
  }, []);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      opacity: opacity.value,
    };
  });

  return (
    <Animated.View
      style={[
        styles.skeleton,
        animatedStyle,
        {
          height,
          width,
        },
      ]}
    />
  );
}

const styles = StyleSheet.create({
  skeleton: {
    borderRadius: 12,
    backgroundColor: theme.zinc[200],
  },
});
