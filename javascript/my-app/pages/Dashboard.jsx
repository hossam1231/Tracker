import React, { useEffect } from "react";
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

const Dashboard = (props) => {
  const windowWidth = Dimensions.get("window").width;
  const windowHeight = Dimensions.get("window").height;

  const data = {
    labels: ["Swim", "Bike", "Run", "Bike", "Run"], // optional
    data: [0.4, 0.6, 0.8, 0.6, 0.8],
  };
  useEffect(() => {
    console.log(windowWidth);
    console.log(windowHeight);
  }, []);

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
