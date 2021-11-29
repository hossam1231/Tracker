import React from "react";
import {
  Link,
  HStack,
  Center,
  Heading,
  Switch,
  Box,
  useColorMode,
  NativeBaseProvider,
  extendTheme,
  VStack,
  Code,
} from "native-base";
import { View, Text } from "react-native";
import NativeBaseIcon from "./components/NativeBaseIcon";
import BottomNav from "./components/BottomNav";

export default function App() {
  return (
    <NativeBaseProvider>
      <BottomNav />
    </NativeBaseProvider>
  );
}
