import React, { useState, useEffect, useContext } from "react";
import {
  Box,
  useDisclose,
  IconButton,
  ScrollView,
  VStack,
  Button,
  Stagger,
  HStack,
  Icon,
  Input,
  CheckIcon,
  Center,
  Badge,
  NativeBaseProvider,
  Heading,
  Text,
  View,
} from "native-base";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import { DimensionsContext } from "../context/DimensionsContext";
import { Menu } from "../Router";

export const Tracker = () => {
  const Dim = useContext(DimensionsContext);
  const { windowWidth, windowHeight } = Dim;
  const [createTracker, setCreateTracker] = useState();
  const [trackers, setTrackers] = useState([]);

  return (
    <>
      <VStack bg="#fbfafe" w={windowWidth} h={windowHeight}>
        {!createTracker && (
          <Box mt="40px" p="20px">
            <CreateButton
              createTracker={createTracker}
              setCreateTracker={setCreateTracker}
            />

            <Text fontFamily="RubikMedium" fontSize="xl">
              Task
            </Text>

            <Box p="10px">
              <ActiveTracker />
            </Box>

            <Box mt="10px">
              <HStack alignItems="center" justifyContent="space-between">
                <Box>
                  <Text fontFamily="RubikMedium" fontSize="xl">
                    Today
                  </Text>
                </Box>
                <Box>
                  <Text>See All</Text>
                </Box>
              </HStack>
              <VStack space={2} w="100%" h="100%" flex="1" mb="10px" mt="10px">
                {/* limit */}
                {trackers.map(
                  (tracker, index) =>
                    index < 3 && <EachTracker tracker={tracker} index={index} />
                )}
              </VStack>
            </Box>
          </Box>
        )}
        {createTracker && (
          <Create
            trackers={trackers}
            setTrackers={setTrackers}
            createTracker={createTracker}
            setCreateTracker={setCreateTracker}
          />
        )}
      </VStack>
      {!createTracker && <Menu safeAreaBottom />}
    </>
  );
};

const ActiveTracker = (props) => {
  let active = "false";

  return (
    <HStack
      borderRadius="12"
      p="20px"
      alignItems="center"
      justifyContent="space-between"
      h="100px"
      bg="black"
      w="100%"
    >
      <VStack w="100%" justifyContent="space-between">
        <HStack alignItems="center" w="100%" justifyContent="space-between">
          {active == "false" && (
            <Text color="white" fontSize="2xl">
              00:32:10
            </Text>
          )}
          {active == "false" && (
            <IconButton
              p="0"
              m="0"
              icon={
                <Icon
                  as={MaterialIcons}
                  name="arrow-right"
                  color="warmGray.50"
                  _dark={{
                    color: "warmGray.50",
                  }}
                />
              }
            />
          )}
        </HStack>

        <HStack>
          <Text fontSize="md" color="white">
            Ranison Project
          </Text>
        </HStack>
      </VStack>
    </HStack>
  );
};

const EachTracker = (props) => {
  const { tracker } = props;
  const { name, type } = tracker;

  return (
    <HStack
      borderRadius="12"
      p="20px"
      alignItems="center"
      justifyContent="space-between"
      h="100px"
      bg="white"
      w="100%"
    >
      <VStack w="100%" justifyContent="space-between">
        <HStack alignItems="center" w="100%" justifyContent="space-between">
          <Text color="black" fontSize="2xl">
            {name}
          </Text>

          <Text color="black" fontSize="sm">
            00:42:10
          </Text>
        </HStack>

        <HStack justifyContent="space-between">
          <HStack alignItems="center" mw="20px" space={2}>
            <Badge>{type}</Badge>
            <Badge>Hello</Badge>
          </HStack>
          <IconButton
            p="0"
            m="0"
            icon={
              <Icon
                as={MaterialIcons}
                name="arrow-right"
                color="black"
                _dark={{
                  color: "white",
                }}
              />
            }
          />
        </HStack>
      </VStack>
    </HStack>
  );
};

export const CreateTrackerSuccess = () => {
  const Dim = useContext(DimensionsContext);
  const { windowWidth, windowHeight } = Dim;

  return (
    <Center w={windowWidth} h={windowHeight}>
      <HStack space={2}>
        <CheckIcon size="5" mt="0.5" color="emerald.500" />
        <Text color="emerald.500" fontSize="md">
          Tracker Created Successfully
        </Text>
      </HStack>
    </Center>
  );
};

export const Create = (props) => {
  const Dim = useContext(DimensionsContext);
  const { windowWidth, windowHeight } = Dim;
  const { createTracker, setCreateTracker, trackers, setTrackers } = props;
  const [completed, setCompleted] = useState(false);
  const [name, setName] = useState();
  let trackersCopy = [...trackers];

  const handleChangeName = (event) => {
    setName(event.target.value);
    console.log(name);
  };

  const AddTracker = () => {
    trackersCopy = [...trackersCopy, { name: name, type: createTracker }];
    setTrackers(trackersCopy);
    setCompleted(true);
    setTimeout(() => {
      setCreateTracker(false);
    }, 2000);
  };

  return (
    <VStack bg="#fbfafe" w={windowWidth} h={windowHeight}>
      {!completed && (
        <Box mt="40px" p="20px">
          <Text fontFamily="RubikMedium" fontSize="xl">
            Type
          </Text>

          <HStack
            borderRadius="12"
            mt="20px"
            p="20px"
            alignItems="center"
            h="100px"
            bg="black"
            w="100%"
          >
            <VStack mr="20px">
              {createTracker == "Counter" && (
                <Icon
                  as={MaterialCommunityIcons}
                  name="counter"
                  color="white"
                  _dark={{
                    color: "warmGray.50",
                  }}
                />
              )}

              {createTracker == "Pomadoro" && (
                <Icon
                  as={MaterialCommunityIcons}
                  size="6"
                  name="infinity"
                  _dark={{
                    color: "warmGray.50",
                  }}
                  color="warmGray.50"
                />
              )}
              {createTracker == "Clock" && (
                <Icon
                  as={MaterialCommunityIcons}
                  size="6"
                  name="av-timer"
                  _dark={{
                    color: "warmGray.50",
                  }}
                  color="warmGray.50"
                />
              )}
              {createTracker == "Instant" && (
                <Icon
                  as={MaterialIcons}
                  size="6"
                  name="bolt"
                  _dark={{
                    color: "warmGray.50",
                  }}
                  color="warmGray.50"
                />
              )}
            </VStack>
            <Center>
              <VStack>
                <Text fontFamily="RubikMedium" color="white" fontSize="2xl">
                  {createTracker}
                </Text>

                {createTracker == "Timer" && (
                  <Text fontFamily="RubikRegular" color="white" fontSize="lg">
                    Time based tracker
                  </Text>
                )}

                {createTracker == "Counter" && (
                  <Text fontFamily="RubikRegular" color="white" fontSize="lg">
                    Incremental based tracker
                  </Text>
                )}
                {createTracker == "Instant" && (
                  <Text fontFamily="RubikRegular" color="white" fontSize="lg">
                    One off actions & tasks
                  </Text>
                )}
                {createTracker == "Pomadoro" && (
                  <Text fontFamily="RubikRegular" color="white" fontSize="lg">
                    Inverval based regime
                  </Text>
                )}
              </VStack>
            </Center>
          </HStack>

          <Box mt="10px">
            <HStack alignItems="center" justifyContent="space-between"></HStack>
            <ScrollView
              _contentContainerStyle={{
                px: "10px",
                mb: "4",
                mt: "10px",
                minW: "72",
              }}
            >
              <Text mb="20px" fontFamily="RubikMedium" fontSize="xl">
                Info
              </Text>
              <Input
                placeholder="name"
                onChange={handleChangeName}
                w={{
                  base: "100%",
                  md: "25%",
                }}
              />

              <HStack
                w="100%"
                space={2}
                mt="20px"
                justifyContent="space-between"
              >
                <Button
                  w="40%"
                  onPress={() => {
                    setCreateTracker(false);
                  }}
                >
                  Cancel
                </Button>
                <Button
                  w="40%"
                  onPress={() => {
                    AddTracker();
                  }}
                >
                  Create
                </Button>
              </HStack>
            </ScrollView>
          </Box>
        </Box>
      )}
      <CreateTrackerSuccess />
    </VStack>
  );
};

export const CreateButton = (props) => {
  const { createTacker, setCreateTracker } = props;
  const { isOpen, onToggle } = useDisclose();
  return (
    <HStack mb="20px" alignItems="center">
      <IconButton
        variant="solid"
        borderRadius="full"
        size="lg"
        onPress={onToggle}
        bg="black"
        icon={
          <Icon
            as={MaterialCommunityIcons}
            size="6"
            name="plus"
            color="warmGray.50"
            _dark={{
              color: "warmGray.50",
            }}
          />
        }
      />

      <Stagger
        visible={isOpen}
        initial={{
          opacity: 0,
          scale: 0,
          translateY: 34,
        }}
        animate={{
          translateY: 0,
          scale: 1,
          opacity: 1,
          transition: {
            type: "spring",
            mass: 0.8,
            stagger: {
              offset: 30,
              reverse: true,
            },
          },
        }}
        exit={{
          translateY: 34,
          scale: 0.5,
          opacity: 0,
          transition: {
            duration: 100,
            stagger: {
              offset: 30,
              reverse: true,
            },
          },
        }}
      >
        <IconButton
          ml="10px"
          variant="solid"
          size="lg"
          bg="indigo.500"
          colorScheme="indigo"
          borderRadius="full"
          onPress={() => {
            setCreateTracker("Counter");
          }}
          icon={
            <Icon
              as={MaterialCommunityIcons}
              size="6"
              name="counter"
              _dark={{
                color: "warmGray.50",
              }}
              color="warmGray.50"
            />
          }
        />
        <IconButton
          ml="10px"
          variant="solid"
          size="lg"
          bg="yellow.400"
          colorScheme="yellow"
          onPress={() => {
            setCreateTracker("Instant");
          }}
          borderRadius="full"
          icon={
            <Icon
              as={MaterialIcons}
              _dark={{
                color: "warmGray.50",
              }}
              size="6"
              name="bolt"
              color="warmGray.50"
            />
          }
        />
        <IconButton
          ml="10px"
          variant="solid"
          size="lg"
          bg="teal.400"
          colorScheme="teal"
          borderRadius="full"
          onPress={() => {
            setCreateTracker("Clock");
          }}
          icon={
            <Icon
              as={MaterialCommunityIcons}
              _dark={{
                color: "warmGray.50",
              }}
              size="6"
              name="av-timer"
              color="warmGray.50"
            />
          }
        />
        <IconButton
          ml="10px"
          variant="solid"
          size="lg"
          bg="red.500"
          onPress={() => {
            setCreateTracker("Pomadoro");
          }}
          colorScheme="red"
          borderRadius="full"
          icon={
            <Icon
              as={MaterialCommunityIcons}
              size="6"
              name="infinity"
              _dark={{
                color: "warmGray.50",
              }}
              color="warmGray.50"
            />
          }
        />
      </Stagger>
    </HStack>
  );
};
export default Tracker;
