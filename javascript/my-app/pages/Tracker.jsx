{
  /* <Box w="100" h="10%" flex="1">
<ScrollView horizontal>
{favourites.lenth > 0 && <Center> <VStack><Text>Add</Text></VStack> </Center>}

</ScrollView>
</Box> */
}

import React, { useState, useContext } from "react";
import {
  Box,
  useDisclose,
  IconButton,
  ScrollView,
  VStack,
  Stagger,
  HStack,
  Icon,
  Input,
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
              <ScrollView
                _contentContainerStyle={{
                  px: "10px",
                  mb: "4",
                  mt: "10px",
                  minW: "72",
                }}
              >
                <EachTracker />
              </ScrollView>
            </Box>
          </Box>
        )}
        {createTracker && (
          <Create
            createTracker={createTracker}
            setCreateTracker={setCreateTracker}
          />
        )}
      </VStack>
      {!createTracker && <Menu />}
    </>
  );
};

export default Tracker;

const ActiveTracker = () => {
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

const EachTracker = () => {
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
            UI Design
          </Text>

          <Text color="black" fontSize="sm">
            00:42:10
          </Text>
        </HStack>

        <HStack justifyContent="space-between">
          <HStack alignItems="center" mw="20px" space={2}>
            <Badge>Hello</Badge>
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

export const Create = (props) => {
  const Dim = useContext(DimensionsContext);
  const { windowWidth, windowHeight } = Dim;
  const { createTacker, setCreateTracker } = props;

  return (
    <VStack bg="#fbfafe" w={windowWidth} h={windowHeight}>
      <Box mt="40px" p="20px">
        <Text fontFamily="RubikMedium" fontSize="xl">
          Type
        </Text>

        <Box p="10px">
          <ActiveTracker />
        </Box>

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
            <Text>Info</Text>
            <Input
              mx="3"
              placeholder="name"
              w={{
                base: "75%",
                md: "25%",
              }}
            />
          </ScrollView>
        </Box>
      </Box>
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
