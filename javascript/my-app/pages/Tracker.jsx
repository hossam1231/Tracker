import React , {useState} from "react";
import {
  Box,
  useDisclose,
  IconButton,
  Stagger,
  HStack,
  Icon,
  Center,
  NativeBaseProvider,
  Heading,
  Text,
  View,
} from "native-base";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";

export const Tracker = () => {

    const [favourites],[setFavourites] = useState([])
    const [reps],[setReps] = useState([])
    const [tasks],[setTasks] = useState([])
    const [time],[setTime] = useState([])

    
  return (
    <>
      <Box
        w="100%"
        h="100%"
        flex="1"
        position="absolute"
        top="0px"
        left="50%"
        ml="50px"
      >
        <Heading>Trackers</Heading>
      </Box>
      <Box m="30px" mt="10%">
        <Text>Favourites</Text>
        <Box w="100" h="10%" flex="1">
          <ScrollView horizontal>
{favourites.lenth > 0 && <Center> <VStack><Text>Add</Text></VStack> </Center>}

          </ScrollView>
        </Box>
        <Text>Tasks</Text>
        <Box w="100" h="10%" flex="1">
          <ScrollView horizontal>
{tasks.lenth > 0 && <Center> <VStack><Text>Add</Text></VStack> </Center>}

          </ScrollView>
        </Box>
        <Text>Reps</Text>
        <Box w="100" h="10%" flex="1">
          <ScrollView horizontal>
{reps.lenth > 0 && <Center> <VStack><Text>Add</Text></VStack> </Center>}

          </ScrollView>
        </Box>
        <Text>Time</Text>
        <Box w="100" h="10%" flex="1">
          <ScrollView horizontal>
{time.lenth > 0 && <Center> <VStack><Text>Add</Text></VStack> </Center>}

          </ScrollView>
        </Box>
      </Box>
      <Box position="absolute" left="30px" bottom="30px" Zindex={4}>
        <Create />
      </Box>
    </>
  );
};

export default Tracker;

export const Create = () => {
  const { isOpen, onToggle } = useDisclose();
  return (
    <Box>
      <Box alignItems="center" minH="220">
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
            mb="4"
            variant="solid"
            bg="indigo.500"
            colorScheme="indigo"
            borderRadius="full"
            icon={
              <Icon
                as={MaterialIcons}
                size="6"
                name="location-pin"
                _dark={{
                  color: "warmGray.50",
                }}
                color="warmGray.50"
              />
            }
          />
          <IconButton
            mb="4"
            variant="solid"
            bg="yellow.400"
            colorScheme="yellow"
            borderRadius="full"
            icon={
              <Icon
                as={MaterialCommunityIcons}
                _dark={{
                  color: "warmGray.50",
                }}
                size="6"
                name="microphone"
                color="warmGray.50"
              />
            }
          />
          <IconButton
            mb="4"
            variant="solid"
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
                name="video"
                color="warmGray.50"
              />
            }
          />
          <IconButton
            mb="4"
            variant="solid"
            bg="red.500"
            colorScheme="red"
            borderRadius="full"
            icon={
              <Icon
                as={MaterialIcons}
                size="6"
                name="photo-library"
                _dark={{
                  color: "warmGray.50",
                }}
                color="warmGray.50"
              />
            }
          />
        </Stagger>
      </Box>
      <HStack alignItems="center">
        <IconButton
          variant="solid"
          borderRadius="full"
          size="lg"
          onPress={onToggle}
          bg="cyan.400"
          icon={
            <Icon
              as={MaterialCommunityIcons}
              size="6"
              name="dots-horizontal"
              color="warmGray.50"
              _dark={{
                color: "warmGray.50",
              }}
            />
          }
        />
      </HStack>
    </Box>
  );
};
