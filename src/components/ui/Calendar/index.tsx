import { useState } from "react";
import { ptBR } from "./locale.config";

import { fontFamily, theme } from "@/styles";
import { CaretLeft, CaretRight } from "phosphor-react-native";
import {
  CalendarProps,
  Calendar as CustomCalendar,
  LocaleConfig,
} from "react-native-calendars";

LocaleConfig.locales["pt-br"] = ptBR;
LocaleConfig.defaultLocale = "pt-br";

export function Calendar(props: CalendarProps) {
  return (
    <CustomCalendar
      renderArrow={(direction) => {
        const Icon = direction === "left" ? CaretLeft : CaretRight;
        return <Icon size={24} color={theme.zinc[900]} />;
      }}
      theme={{
        selectedDayBackgroundColor: theme.primary[500],
        selectedDayTextColor: theme.white,
        todayTextColor: theme.primary[500],
        calendarBackground: "transparent",

        textDayFontFamily: fontFamily.regular,
        textMonthFontFamily: fontFamily.semibold,
        todayButtonFontFamily: fontFamily.medium,
        textDayHeaderFontFamily: fontFamily.medium,
      }}
      style={{
        backgroundColor: "transparent",
      }}
      firstDay={1}
      minDate={new Date().toString()}
      {...props}
    />
  );
}
