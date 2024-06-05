import AsyncStorage from "@react-native-async-storage/async-storage";
import { createContext, useState } from "react";

import { signInRequest } from "@/helpers/requests";
import type { SignInSchema } from "@/helpers/validators";
import { UserModel } from "@/models";

interface AuthContextProps {
  user?: UserModel;
  signIn: (data: SignInSchema) => Promise<void>;
  signOut: () => Promise<void>;
}

export const AuthContext = createContext({} as AuthContextProps);

export function AuthProvider({
  children,
  user: defaultUser,
}: {
  children: React.ReactNode;
  user?: UserModel;
}) {
  const [user, setUser] = useState<UserModel | undefined>(defaultUser);

  async function signIn(data: SignInSchema) {
    const response = await signInRequest(data);

    setUser(response?.data.user);

    await AsyncStorage.setItem(
      "@bluetrip/user",
      JSON.stringify(response?.data.user)
    );
  }

  async function signOut() {
    setUser(undefined);

    await AsyncStorage.removeItem("@bluetrip/user");
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        signIn,
        signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export async function getUser() {
  const asyncStorageUser = await AsyncStorage.getItem("@bluetrip/user");
  const loadedUser = asyncStorageUser
    ? JSON.parse(asyncStorageUser)
    : undefined;

  return loadedUser;
}
