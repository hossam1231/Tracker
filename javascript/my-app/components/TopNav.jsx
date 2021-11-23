import React from "react";
import {
  NativeBaseProvider,
  Box,
  Text,
  Heading,
  VStack,
  FormControl,
  Input,
  Link,
  Button,
  Icon,
  HStack,
  Center,
  Pressable,
} from "native-base";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import SearchBar from "./SearchBar";
import { CreateButton } from './CreateButton';

export default function TopNav() {
  return (
    <NativeBaseProvider>
      <VStack justifyContent="center">
        <HStack margin={5}>
          <SearchBar />
          <CreateButton  />
        </HStack>
      </VStack>
    </NativeBaseProvider>
  );
}
