import React, { useState, useEffect } from "react";
import Home from "./pages/Home";
import {
  Link,
  HStack,
  Center,
  Container,
  Heading,
  Switch,
  Box,
  useColorMode,
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
import { MaterialIcons } from "@expo/vector-icons";
import { Entypo, Ionicons, AntDesign, Feather } from "@expo/vector-icons";
import Tracker from "./pages/Tracker";

const Router = () => {
  const [page, setPage] = useState("Home");
  const [previousPage, setPreviousPage] = useState("");

  return (
    <Container w="100%" h="100%" flex="1">
      <Box w="100%" h="100%" flex="1">
        {page == "album" && <Tracker w="100%" h="100%" flex="1" />}

        {page == "Navigation" && (
          <Navigation
            w="100%"
            h="100%"
            flex="1"
            previousPage={previousPage}
            page={page}
            setPage={setPage}
          />
        )}

        {page == "Home" && <Home w="100%" h="100%" flex="1" />}

        <Menu
          page={page}
          setPage={setPage}
          previousPage={previousPage}
          setPreviousPage={setPreviousPage}
          position="absolute"
          bottom="40px"
          left="50%"
        />
      </Box>
    </Container>
  );
};

export const Menu = (props) => {
  const { page, setPage, previousPage, setPreviousPage } = props;

  useEffect(() => {
    setPreviousPage(page);
  }, []);

  return (
    <HStack
      bg="grey"
      opacity="40%"
      borderRadius="md"
      w="150px"
      position="absolute"
      bottom="10%"
      left="53%"
      h="50px"
      shadow={1}
      justifyContent="space-evenly"
    >
      {/* <IconButton icon={<Icon as={Entypo} name="emoji-happy" />} /> */}
      <IconButton
        onPress={() => {
          setPreviousPage(page);
          setPage("Navigation");
        }}
        icon={<Icon as={Entypo} name="menu" />}
      />
    </HStack>
  );
};

export const Navigation = (props) => {
  const { isOpen, onToggle } = useDisclose();
  const { page, setPage, previousPage } = props;

  const icons = [
    { name: "bolt", bg: "amber.600" },
    { name: "build", bg: "emerald.600" },
    { name: "cloud", bg: "blue.600" },
    { name: "delivery-dining", bg: "orange.600" },
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
      <Box safeAreaLeft Zindex={2}>
        <IconButton
          m="20px"
          onPress={() => {
            setPage(previousPage);
          }}
          icon={<Icon as={AntDesign} name="arrowleft" />}
        />
      </Box>

      <Box
        position="absolute"
        left="50%"
        mt="20px"
        alignItems="center"
        pt="8"
        flex={1}
      >
        <Heading mb="40px" fontSize="lg">
          Menu
        </Heading>
        <Input
          placeholder="Search"
          variant="filled"
          width="100%"
          bg="gray.100"
          borderRadius="10"
          py="1"
          px="2"
          placeholderTextColor="gray.500"
          _hover={{ bg: "gray.200", borderWidth: 0 }}
          borderWidth="0"
          _web={{
            _focus: { style: { boxShadow: "none" } },
          }}
          InputLeftElement={
            <Icon
              ml="2"
              size="5"
              color="gray.500"
              as={<Ionicons name="ios-search" />}
            />
          }
        />
        <FlatList
          mt="40px"
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
                  setPage(item.name);
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
    </>
  );
};

export default Router;
