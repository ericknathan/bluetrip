import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { View } from "react-native";

import {
  Button,
  CountrySelector,
  DatePicker,
  FormInput,
  FormSelectGroup,
  Label,
} from "@/components/ui";
import { userDataSchema, type UserDataSchema } from "@/helpers/validators";

const PHONE_MASK = ['(', /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];

interface UserFormProps {
  onSubmit: (data: UserDataSchema) => void;
  buttonLabel: string;
  showPassword?: boolean;
  defaultValues?: Omit<UserDataSchema, "password">;
}

export function UserForm({
  onSubmit,
  buttonLabel,
  showPassword = true,
  defaultValues,
}: UserFormProps) {
  const { control, handleSubmit, setValue } = useForm<UserDataSchema>({
    resolver: zodResolver(userDataSchema),
    defaultValues: {
      password: showPassword ? "" : "Empty123!",
      ...defaultValues,
    },
  });

  return (
    <View style={{ flex: 1 }}>
      <FormInput
        name="name"
        control={control}
        label="Nome completo"
        placeholder="Alan turing Oliveira"
        autoComplete="name"
      />
      <View style={{ marginBottom: 14 }}>
        <Label>Nacionalidade</Label>
        <CountrySelector
          onSelect={(nationality) =>
            setValue("nationality", nationality.name.toString())
          }
        />
      </View>
      <FormInput
        name="phone"
        control={control}
        label="Telefone"
        placeholder="(••) ••••• ••••"
        autoComplete="tel"
        mask={PHONE_MASK}
      />
      <DatePicker
        name="birthDate"
        control={control}
        label="Data de nascimento"
        placeholder="__/__/____"
        onChange={(date) => setValue("birthDate", date)}
      />
      <FormSelectGroup
        name="gender"
        control={control}
        label="Gênero"
        options={[
          { label: "Masculino", value: "m" },
          { label: "Feminino", value: "f" },
        ]}
      />
      <FormSelectGroup
        name="language"
        control={control}
        label="Idioma"
        options={[
          { label: "Português", value: "pt" },
          { label: "Inglês", value: "en" },
          { label: "Espanhol", value: "es" },
        ]}
      />
      <FormInput
        name="email"
        control={control}
        label="E-mail"
        placeholder="alan.turing@email.com"
        keyboardType="email-address"
        autoComplete="email"
        autoCapitalize="none"
      />
      {showPassword ? (
        <FormInput
          name="password"
          control={control}
          label="Senha"
          placeholder="••••••••"
          secureTextEntry
          autoCapitalize="none"
          autoComplete="current-password"
        />
      ) : null}
      <Button onPress={handleSubmit(onSubmit)} style={{ marginTop: 12 }}>
        {buttonLabel}
      </Button>
    </View>
  );
}
