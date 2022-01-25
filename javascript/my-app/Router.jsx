import React, { useState, useEffect, useContext } from "react";
import Dashboard, { Example } from "./pages/Dashboard";
import {
  Link,
  HStack,
  Center,
  Container,
  Heading,
  Switch,
  Box,
  useColorMode,
  ZStack,
  Input,
  NativeBaseProvider,
  extendTheme,
  Text,
  VStack,
  Stagger,
  Code,
  ScrollView,
  IconButton,
  useDisclose,
  FlatList,
  Icon,
} from "native-base";
import { MaterialIcons, MaterialCommunityIcons } from "@expo/vector-icons";
import { Entypo, Ionicons, AntDesign, Feather } from "@expo/vector-icons";
import Tracker from "./pages/Tracker";
import { DimensionsContext } from "./context/DimensionsContext";
import { RouterContext } from "./context/RouterContext";
const Router = () => {
  const [page, setPage] = useContext(RouterContext);

  const Dim = useContext(DimensionsContext);
  const { windowHeight, windowWidth } = Dim;
  return (
    <>
      {page.currentPage == "access-alarm" && <Tracker />}
      {page.currentPage == "navigation" && (
        <Navigation w="100%" h="100%" flex="1" />
      )}
      {page.currentPage == "map" && <Dashboard />}
      {page.currentPage == "exploreTrackers" && <Dashboard />}
    </>
  );
};

export const Menu = (props) => {
  const [page, setPage] = useContext(RouterContext);

  const Dim = useContext(DimensionsContext);
  const { windowHeight, windowWidth } = Dim;

  return (
    <>
      <HStack
        bg="#ffffff"
        borderTopRadius="30"
        w={windowWidth}
        h="90px"
        safeAreaBottom
        position="absolute"
        bottom="0px"
        shadow={20}
        justifyContent="space-evenly"
        alignItems="center"
      >
        <IconButton
          onPress={() => {
            setPage({ lastPage: page.currentPage, currentPage: "navigation" });
          }}
          icon={<Icon as={AntDesign} name="home" />}
        />
        {page.currentPage == "access-alarm" && (
          <IconButton
            onPress={() => {
              setPage({
                lastPage: page.currentPage,
                currentPage: "exploreTrackers",
              });
            }}
            icon={<Icon as={AntDesign} name="smileo" />}
          />
        )}
        {page.currentPage == "access-alarm" && (
          <IconButton
            onPress={() => {
              setPage("calendar");
            }}
            icon={<Icon as={AntDesign} name="piechart" />}
          />
        )}
        {page.currentPage == "map" && (
          <IconButton
            onPress={() => {
              setPage("calendar");
            }}
            icon={<Icon as={AntDesign} name="calendar" />}
          />
        )}
        {page.currentPage == "map" && (
          <IconButton
            zIndex={-2}
            onPress={() => {
              setPage("reOrder");
            }}
            icon={<Icon as={AntDesign} name="retweet" />}
          />
        )}
      </HStack>
    </>
  );
};

export const Navigation = (props) => {
  const [page, setPage] = useContext(RouterContext);

  const { isOpen, onToggle } = useDisclose();
  const Dim = useContext(DimensionsContext);
  const { windowHeight, windowWidth } = Dim;

  // MaterialIcons
  const icons = [
    { name: "bolt", bg: "amber.600" },
    { name: "build", bg: "emerald.600" },
    { name: "cloud", bg: "blue.600" },
    { name: "map", bg: "orange.600" },
    { name: "favorite", bg: "rose.600" },
    { name: "music-note", bg: "violet.600" },
    { name: "invert-colors-on", bg: "lime.600" },
    { name: "navigation", bg: "indigo.600" },
    { name: "settings", bg: "pink.600" },
    { name: "sports-esports", bg: "coolGray.600" },
    { name: "shield", bg: "darkBlue.600" },
    { name: "photo-camera", bg: "fuchsia.600" },
    { name: "network-wifi", bg: "amber.500" },
    { name: "nightlight-round", bg: "violet.800" },
    { name: "flight", bg: "blue.800" },
    { name: "extension", bg: "indigo.600" },
    { name: "duo", bg: "orange.600" },
    { name: "album", bg: "rose.600" },
    { name: "access-alarm", bg: "emerald.600" },
    { name: "forum", bg: "indigo.600" },
  ];

  return (
    <>
      <Center h={windowHeight} w={windowWidth}>
        <Box zIndex={-1} position="absolute" top="0px" left="0px" p="12px">
          <IconButton
            onPress={() => {
              setPage({
                lastPage: page.currentPage,
                currentPage: page.lastPage,
              });
            }}
            icon={<Icon as={AntDesign} name="back" />}
          />
        </Box>
        <Box>
          <FlatList
            numColumns={4}
            m={"-8px"}
            data={icons}
            renderItem={({ item }) => {
              return (
                <IconButton
                  m={"8px"}
                  borderRadius="full"
                  bg={item.bg}
                  variant="solid"
                  onPress={() => {
                    setPage({
                      lastPage: page.lastPage,
                      currentPage: item.name,
                    });
                  }}
                  p="3"
                  icon={
                    <Icon
                      color="white"
                      name={item.name}
                      as={MaterialIcons}
                      size="sm"
                    />
                  }
                />
              );
            }}
          />
        </Box>
      </Center>
    </>
  );
};

export default Router;
