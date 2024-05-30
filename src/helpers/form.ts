import type { UseFormReturn } from "react-hook-form";

export function register(name: string, form: UseFormReturn<any>) {
    console.log("ARAR")
  return {
    onChangeText: (text: string) => {
      form.setValue(name, text);
      form.clearErrors(name);
    },
    error: form.formState.errors[name]?.message?.toString(),
  };
}
