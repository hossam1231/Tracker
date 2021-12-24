import React, { useContext } from "react";
import {
  Link,
  HStack,
  Center,
  Heading,
  Switch,
  Box,
  useColorMode,
  NativeBaseProvider,
  Text,
  extendTheme,
  VStack,
  ZStack,
  Code,
} from "native-base";
import { View } from "react-native";
import NativeBaseIcon from "./components/NativeBaseIcon";
import Router from "./Router";
import { DimensionsProvider } from "./context/DimensionsContext";
import { useFonts, Inter_900Black } from "@expo-google-fonts/inter";

import { Dimensions } from "react-native";
import { RouterProvider } from "./context/RouterContext";

export default function App() {
  const windowWidth = Dimensions.get("window").width;
  const windowHeight = Dimensions.get("window").height;
  let [fontsLoaded] = useFonts({
    Inter_900Black,
    Rubik: require("./assets/fonts/Rubik-VariableFont_wght.ttf"),
    RubikBold: require("./assets/fonts/Rubik-Bold.ttf"),
    RubikExtraBold: require("./assets/fonts/Rubik-ExtraBold.ttf"),
    RubikSemiBold: require("./assets/fonts/Rubik-SemiBold.ttf"),
    RubikMedium: require("./assets/fonts/Rubik-Medium.ttf"),
    RubikLight: require("./assets/fonts/Rubik-Light.ttf"),
    RubikRegular: require("./assets/fonts/Rubik-Regular.ttf"),
  });

  return (
    <>
      {fontsLoaded && (
        <NativeBaseProvider>
          <DimensionsProvider>
            <RouterProvider>
              <Router w="100%" h="100%" flex="1" />
            </RouterProvider>
          </DimensionsProvider>
        </NativeBaseProvider>
      )}
    </>
  );
}

{
  /* <Text fontFamily=" Rubik_900Black">Hello</Text> */
}

//   if (!fontsLoaded) {
//     return <Text>LOADING</Text>;
//   } else { return (
//     <NativeBaseProvider theme={theme}>
//       <DimensionsProvider>
//         <Text fontFamily=" Rubik_900Black">Hello</Text>

//         {/* <Box w="100%" h="100%" flex="1">
//           <Router w="100%" h="100%" flex="1" />
//         </Box> */}
//       </DimensionsProvider>
//     </NativeBaseProvider>
//   );
// }
