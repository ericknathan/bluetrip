import { CameraView, useCameraPermissions } from "expo-camera";
import { useRef, useState } from "react";
import {
  ActivityIndicator,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";

import { Header } from "@/components/app";
import { toast } from "@/helpers";
import { identifySpecieRequest } from "@/helpers/requests";
import type { ScreenProps } from "@/navigation";
import { theme } from "@/styles";

export * from "./Specie";

export function SpecieIdentifierScreen({
  navigation,
}: ScreenProps<"SpecieIdentifier">) {
  const cameraRef = useRef<CameraView>(null);
  const [permission] = useCameraPermissions();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [image, setImage] = useState<string>();

  if (!permission) {
    return <View />;
  }

  async function handleTakePicture() {
    try {
      setIsSubmitting(true);

      const picture = await cameraRef.current?.takePictureAsync({
        imageType: "png",
        quality: 1,
      });

      setImage(picture?.uri);

      const response = await identifySpecieRequest(picture?.uri!);

      setIsSubmitting(false);
      navigation.navigate("Specie", {
        ...response.data,
        image: picture?.uri!,
      });
    } catch (error) {
      toast({
        type: "error",
        text1: "Erro ao identificar espécie",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <View style={styles.container}>
      <Header title="Espécies" />
      <CameraView style={styles.camera} facing="back" ref={cameraRef}>
        {isSubmitting ? (
          <ImageBackground style={styles.loading} source={{ uri: image }}>
            <ActivityIndicator size="large" color={theme.zinc[50]} />
          </ImageBackground>
        ) : (
          <View style={styles.buttonsContainer}>
            <TouchableOpacity
              style={styles.pictureButtonContainer}
              onPress={handleTakePicture}
            >
              <View style={styles.pictureButton} />
            </TouchableOpacity>
          </View>
        )}
      </CameraView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  camera: {
    flex: 1,
  },
  buttonsContainer: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "transparent",
    margin: 64,
    justifyContent: "center",
    alignItems: "flex-end",
  },
  pictureButtonContainer: {
    borderWidth: 3,
    borderColor: theme.zinc[50],
    borderRadius: 99,
    padding: 4,
    height: 70,
    width: 70,
  },
  pictureButton: {
    width: "100%",
    height: "100%",
    borderRadius: 99,

    backgroundColor: theme.zinc[50],
  },
  loading: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
  },
});
