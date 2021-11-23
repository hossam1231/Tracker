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

const Landing = ({ setAuth }) => {
  let CompanyName = "Ardent";

  const SA = () => {
    setAuth(true);
  };

  return (
    <VStack>
      {/* width 100% */}

      <Text>{CompanyName}</Text>

      <VStack>
        <Text>
          Create an account and join a friend to take 30% off a future purchase
        </Text>

        <Button onPress={SA}>Sign In</Button>

        <Button onPress={SA}>Create Account</Button>

        <Button onPress={SA} variant="ghost ">
          Skip for now
        </Button>
      </VStack>
    </VStack>
  );
};

export default Landing;
