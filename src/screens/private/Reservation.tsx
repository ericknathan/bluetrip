import { StatusBar } from "expo-status-bar";
import { ScrollView, StyleSheet, View } from "react-native";

import { Header } from "@/components/app";
import {
  Button,
  Calendar,
  DatePicker,
  FormInput,
  FormSelectGroup,
  Label,
  Text,
} from "@/components/ui";
import { ErrorMessage } from "@/components/ui/ErrorMessage";
import {
  CreateReservationSchema,
  createReservationSchema,
} from "@/helpers/validators/reservation";
import type { ScreenProps } from "@/navigation";
import { theme } from "@/styles";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
import { useForm } from "react-hook-form";

export function ReservationScreen({ navigation }: ScreenProps<"Reservation">) {
  const {
    control,
    setValue,
    watch,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<CreateReservationSchema>({
    resolver: zodResolver(createReservationSchema),
  });

  function onCreateReservation(data: CreateReservationSchema) {
    console.log(data);
    navigation.navigate("ReservationSuccess");
  }

  useEffect(() => {
    reset();
  }, []);

  return (
    <ScrollView style={{ flex: 1 }}>
      <View style={styles.headerContainer}>
        <Header showBackButton background="primary" />
        <Text
          weight="medium"
          color={theme.white}
          size={32}
          style={[{ maxWidth: 300 }, styles.headerContent]}
        >
          Informações da reserva
        </Text>
      </View>

      <View style={styles.container}>
        <FormInput
          control={control}
          name="quantity"
          label="Quantidade de pessoas"
          placeholder="Informe a quantidade de pessoas"
          keyboardType="numeric"
          maxLength={2}
        />
        <FormSelectGroup
          control={control}
          name="paymentMethod"
          options={[
            { label: "Cartão", value: "C" },
            { label: "Dinheiro", value: "M" },
            { label: "PIX", value: "P" },
          ]}
          label="Forma de pagamento"
        />
        <View style={styles.calendar}>
          <Label>Data da reserva</Label>
          <Calendar
            onDayPress={(day) => {
              setValue("date", day.dateString);
            }}
            markedDates={{
              [watch("date")]: {
                selected: true,
                disableTouchEvent: true,
              },
            }}
          />
          <ErrorMessage>{errors.date?.message}</ErrorMessage>
        </View>
        <DatePicker
          name="time"
          control={control}
          label="Hora da reserva"
          mode="time"
          onChange={(time) => setValue("time", time.toString())}
        />

        <Button onPress={handleSubmit(onCreateReservation)}>Confirmar</Button>
      </View>
      <StatusBar backgroundColor={theme.primary[500]} translucent={false} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: theme.primary[500],
    paddingBottom: 20,
    gap: 24,
  },
  headerContent: {
    paddingHorizontal: 20,
  },
  container: {
    flex: 1,
    padding: 20,
    gap: 4,
  },
  calendar: {
    marginBottom: 20,
  },
});
