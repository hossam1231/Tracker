import React, { useEffect, useContext } from "react";
import {
  NativeBaseProvider,
  Box,
  Text,
  Heading,
  VStack,
  FormControl,
  Input,
  Link,
  IconButton,
  useDisclose,
  Stagger,
  Button,
  Icon,
  HStack,
  Center,
  Pressable,
} from "native-base";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";

import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart,
} from "react-native-chart-kit";

import { Dimensions } from "react-native";
import { Menu } from "../Router";
import { DimensionsContext } from "../context/DimensionsContext";

const Dashboard = (props) => {
  const Dim = useContext(DimensionsContext);
  const { windowHeight, windowWidth } = Dim;

  return (
    <VStack bg="#3232e2" w={windowWidth} h={windowHeight}>
      <Box mt="40px" p="20px">
        <Text>Task</Text>

        <Box>
          <Text>Today</Text>
        </Box>
      </Box>
      <Menu />
    </VStack>
  );
};

export default Dashboard;
