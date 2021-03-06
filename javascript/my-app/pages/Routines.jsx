import React, { useState, useEffect, useLayoutEffect } from "react";
import {
  NativeBaseProvider,
  Box,
  Text,
  Heading,
  VStack,
  FormControl,
  Input,
  Link,
  Flex,
  Badge,
  Button,
  Icon,
  Container,
  HStack,
  Modal,
  Center,
  Pressable,
  IconButton,
  ScrollView,
} from "native-base";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart,
} from "react-native-chart-kit";
import Routine from "../components/Routines/Routine";
import { Feather, Entypo } from "@expo/vector-icons";

const Routines = () => {
  const [routines, setRoutines] = useState([]);

  useLayoutEffect(() => {
    FetchLocalRoutinesExist();
  }, []);

  useEffect(() => {
    console.log(routines);
  }, [routines]);

  const FetchLocalRoutinesExist = async () => {
    let value;
    try {
      value = await AsyncStorage.getItem("@storage_RoutinesBOOL");
      if (value !== null) {
        // value previously stored
      }
    } catch (e) {
      // error reading value
    }
    console.log("FetchingLocalStorageExists", value);
    if (value === "true") {
      FetchLocalRoutines();
    }
  };

  const FetchLocalRoutines = async () => {
    console.log("fetching Routines from local ");
    let jsonValue;
    try {
      jsonValue = await AsyncStorage.getItem("@storage_Routines");
      jsonValue = JSON.parse(jsonValue);
    } catch (e) {
      // error reading value
    }
    console.log("JSON LOCAL STORAGE ROUTINES", jsonValue);
    setRoutines(jsonValue);
  };

  return (
    <Center margin="10px" w="100%">
      <Heading>Routines</Heading>

      <VStack margin="10px" space={3} w="100%">
        <Text bold ml="10px">
          All Routines
        </Text>
        <HStack w="100%" direction="row" wrap="wrap">
          <ScrollView flex="1" flexGrow="1" horizontal>
            <HStack margin="10px">
              {routines.map((routine, index) => (
                <Routine
                  key={index}
                  index={index}
                  routines={routines}
                  setRoutines={setRoutines}
                  routine={routine}
                />
              ))}
            </HStack>
            <Center>
              <CreateRoutine routines={routines} setRoutines={setRoutines} />
            </Center>
          </ScrollView>
        </HStack>
      </VStack>

    </Center>
  );
};

export const CreateRoutine = (props) => {
  const { setRoutines, routines } = props;
  const [editMode, setEditMode] = useState(false);
  const [name, setName] = useState("");
  const [tagName, setTagName] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [tag, setTag] = useState();

  useEffect(() => {
    if (routines.length > 0) {
      SaveLocalRoutines();
    }
  }, [routines]);

  const SaveLocalRoutinesExist = async (value) => {
    try {
      await AsyncStorage.setItem("@storage_RoutinesBOOL", value);
    } catch (e) {
      // saving error
    }
    console.log("local storage Exists made ");
  };

  const SaveLocalRoutines = async () => {
    let jsonValue;
    try {
      jsonValue = JSON.stringify(routines);
      await AsyncStorage.setItem("@storage_Routines", jsonValue);
    } catch (e) {
      // saving error
    }
    console.log("saving to local storage");
    SaveLocalRoutinesExist(true);
    console.log(jsonValue);
  };

  return (
    <Box maxW="40" margin="10px">
      <Center>
        <IconButton
          h="75px"
          w="75px"
          borderRadius="full"
          onPress={() => setShowModal(true)}
          icon={<Icon as={Feather} name="plus" size="sm" />}
        />
      </Center>
      <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
        <Modal.Content maxWidth="400px">
          <Modal.CloseButton />

          <Modal.Body mt="40px">
            <Box>
              <FormControl>
                <Input placeholder="name" onChangeText={(v) => setName(v)} />
              </FormControl>
              {!tag && (
                <Button
                  onPress={() => {
                    setEditMode(!editMode);
                  }}
                  mt="20px"
                >
                  Add tag..
                </Button>
              )}

              {editMode == true && (
                <>
                  <HStack mt="20px" space={2}>
                    <Input
                      flex={1}
                      onChangeText={(v) => setTagName(v)}
                      placeholder="Add Tag"
                    />
                    <IconButton
                      borderRadius="sm"
                      variant="solid"
                      icon={
                        <Icon
                          as={Feather}
                          name="plus"
                          size="sm"
                          color="warmGray.50"
                        />
                      }
                      onPress={() => {
                        setTag(tagName);
                        setEditMode(false);
                      }}
                    />
                  </HStack>
                </>
              )}
            </Box>

            <HStack mt="30px">{tag && <Badge>{tag}</Badge>}</HStack>
          </Modal.Body>
          <Modal.Footer>
            <Button.Group space={2}>
              <Button
                onPress={() => {
                  setRoutines((routines) => [
                    {
                      UUID: Math.round(Math.random() * 100),
                      name: name,
                      tag: tag,
                      tasks: [],
                    },
                    ...routines,
                  ]);
                  setTag("");
                  setShowModal(false);
                }}
              >
                Create
              </Button>
            </Button.Group>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
    </Box>
  );
};

export default Routines;
