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
  Button,
  Icon,
  HStack,
  Center,
  Pressable,
} from "native-base";

import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart,
} from "react-native-chart-kit";

const Home = () => {
  const data = {
    labels: ["Swim", "Bike", "Run", "Bike", "Run"], // optional
    data: [0.4, 0.6, 0.8, 0.6, 0.8],
  };

  return (
    <VStack m="20px" w="100%" flex="1" h="100%">
      <ProgressChart
        data={data}
        width={800}
        height={600}
        strokeWidth={16}
        radius={32}
        chartConfig={{
          backgroundColor: "#4e47e5",
          backgroundGradientFrom: "#4e47e5",
          backgroundGradientTo: "#4e47e5",
          decimalPlaces: 2, // optional, defaults to 2dp
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          style: {
            borderRadius: 16,
          },
          propsForDots: {
            r: "6",
            strokeWidth: "2",
            stroke: "#ffa726",
          },
        }}
        bezier
        style={{
          marginVertical: 8,
          borderRadius: 16,
        }}
        hideLegend={false}
      />
    </VStack>
  );
};

export default Home;
