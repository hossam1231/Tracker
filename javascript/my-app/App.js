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
import Router from "./Router";

export default function App() {
  return (
    <NativeBaseProvider>
      <Box w="100%" h="100%" flex="1">
        <Router w="100%" h="100%" flex="1" />
      </Box>
    </NativeBaseProvider>
  );
}
