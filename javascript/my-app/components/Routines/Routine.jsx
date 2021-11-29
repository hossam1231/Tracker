import React, { useState, useEffect, useLayoutEffect } from "react";
import {
  Button,
  Modal,
  FormControl,
  Input,
  Box,
  Checkbox,
  Text,
  IconButton,
  Badge,
  Icon,
  VStack,
  Heading,
  HStack,
  Center,
  NativeBaseProvider,
  CircularProgress,
} from "native-base";
import { AnimatedCircularProgress } from "react-native-circular-progress";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { Feather, Entypo, MaterialIcons } from "@expo/vector-icons";

const Routine = (props) => {
  const [tasks, setTasks] = useState([]);
  const [completed, setCompleted] = useState(0);
  const [progress, setProgress] = useState(0);
  const [favorite, setFavorite] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [completedPercentage, setCompletedPercentage] = useState(0);
  const { routine, routines, setRoutines, index } = props;
  const { name, tag, UUID, key } = routine;

  let routinesCopy = [...routines];

  useLayoutEffect(() => {
    setTasks(routine.tasks);
    console.log("routine.tasks", routine.tasks);
  }, []);

  useEffect(() => {
    console.log(completedPercentage);
  }, [completedPercentage]);

  useEffect(() => {
    const tasksIsCompleteArray = tasks.filter(
      (task) => task.isCompleted == true
    );
    console.log(
      "COMPLETED TASKS NO",
      tasksIsCompleteArray.length,
      "tasks Length",
      tasks.length
    );
    let progress = (tasksIsCompleteArray.length / tasks.length) * 100;

    if (progress >= 0) {
      setCompletedPercentage(progress);
    }
  }, [tasks]);

  useEffect(() => {
    if (tasks.length > 0) {
      let objIndex = routinesCopy.findIndex(
        (routineOBJ) => routineOBJ.UUID == UUID
      );
      routinesCopy[objIndex].tasks = tasks;
      SaveLocalRoutines();
    }
  }, [tasks]);

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

  const SaveLocalRoutinesExist = async (value) => {
    try {
      await AsyncStorage.setItem("@storage_RoutinesBOOL", value);
    } catch (e) {
      // saving error
    }
    console.log("local storage Exists made ");
  };

  return (
    <Box margin="10px" rounded="xl" w="400px" h="140px" bg="indigo.400">
      <Box
        bg="indigo.600"
        w="400px"
        h="100px"
        rounded="xl"
        shadow={1}
        _text={{
          fontSize: "md",
          fontWeight: "medium",
          color: "warmGray.50",
          textAlign: "center",
        }}
      >
        <HStack justifyContent="space-evenly">
          {/* <AddTask /> */}
          <VStack mt="10px">
            <Text fontSize="lg">{name}</Text>
            <Badge>{tag}</Badge>
          </VStack>
          <VStack mt="10px">
            <HStack>
              <AnimatedCircularProgress
                size={70}
                width={10}
                fill={completedPercentage}
                tintColor="#f0f0fd"
                backgroundColor="#726deb"
              >
                {(completedPercentage) => <Text>%{completedPercentage}</Text>}
              </AnimatedCircularProgress>
              <Box>
                <IconButton
                  onPress={() => console.log(tasks)}
                  icon={<Icon as={Entypo} name="emoji-happy" />}
                />
              </Box>
            </HStack>
          </VStack>
        </HStack>
        <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
          <Modal.Content maxWidth="400px">
            <Modal.CloseButton />

            <Modal.Body>
              <TodoList tasks={tasks} setTasks={setTasks} routine={routine} />
            </Modal.Body>
          </Modal.Content>
        </Modal>
      </Box>
      <HStack justifyContent="space-between">
        <Button onPress={() => setShowModal(true)} variant="ghost">
          Open
        </Button>
        <Settings
          index={index}
          key={key}
          routine={routine}
          setRoutines={setRoutines}
          routines={routines}
        />
      </HStack>
    </Box>
  );
};

export const TodoList = (props) => {
  const [inputValue, setInputValue] = useState("");
  const [editMode, setEditMode] = useState(false);
  const { routine, tasks, setTasks } = props;
  const { name } = routine;

  return (
    <Box>
      <HStack>
        <Heading mb="5">{name}</Heading>
        {editMode == false && (
          <IconButton
            onPress={() => {
              setEditMode(!editMode);
            }}
            icon={<MaterialIcons name="edit" size={24} />}
          />
        )}
        {editMode == true && (
          <IconButton
            onPress={() => {
              setEditMode(!editMode);
            }}
            icon={<MaterialIcons name="edit-off" size={24} />}
          />
        )}
      </HStack>
      <VStack space={4}>
        {editMode == true && (
          <HStack space={2}>
            <Input
              flex={1}
              onChangeText={(v) => setInputValue(v)}
              value={inputValue}
              placeholder="Add Task"
            />
            <IconButton
              borderRadius="sm"
              variant="solid"
              icon={
                <Icon as={Feather} name="plus" size="sm" color="warmGray.50" />
              }
              onPress={() => {
                setTasks((tasks) => [
                  ...tasks,
                  {
                    name: inputValue,
                    isCompleted: false,
                    taskUUID: Math.round(Math.random() * 100),
                  },
                ]);
                setInputValue("");
              }}
            />
          </HStack>
        )}

        <VStack space={2}>
          {tasks.map((task, index) => (
            <TaskItem
              key={index}
              tasks={tasks}
              setTasks={setTasks}
              task={task}
            />
          ))}
        </VStack>
      </VStack>
      {/* if save button is needed */}
    </Box>
  );
};

export const TaskItem = (props) => {
  const { tasks, setTasks } = props;
  const [task, setTask] = useState(props.task);

  const tasksCopy = [...tasks];

  useEffect(() => {
    if (tasks.length > 0) {
      let objIndex = tasksCopy.findIndex(
        (taskOBJ) => taskOBJ.taskUUID == task.taskUUID
      );
      tasksCopy[objIndex].isCompleted = task.isCompleted;
      setTasks(tasksCopy);
    }
  }, [task]);

  return (
    <HStack w="100%" justifyContent="space-between" alignItems="center">
      <Checkbox
        onChange={(value) => {
          setTask({
            name: props.task.name,
            isCompleted: value,
            taskUUID: props.task.taskUUID,
          });
        }}
        isChecked={task.isCompleted}
      >
        <Text
          mx="2"
          strikeThrough={task.isCompleted}
          _light={{
            color: task.isCompleted ? "gray.400" : "coolGray.800",
          }}
          _dark={{
            color: task.isCompleted ? "gray.400" : "coolGray.50",
          }}
        >
          {task.name}
        </Text>
      </Checkbox>
      <IconButton
        size="sm"
        colorScheme="trueGray"
        icon={<Icon as={Entypo} name="minus" size="xs" color="trueGray.400" />}
      />
    </HStack>
  );
};

export const Settings = (props) => {
  const [showModal, setShowModal] = useState(false);
  const { key, routines, routine, setRoutines, index } = props;
  const { UUID } = routine;
  const routinesCopy = [...routines];

  useEffect(() => {
    console.log("NEW ROUTINES", routines);
  }, [routines]);

  const deleteRoutine = () => {
    let filteredArray = routines.filter((routine) => routine.UUID !== UUID);
    setRoutines(filteredArray);
  };

  return (
    <>
      <Button variant="ghost" onPress={() => setShowModal(true)}>
        Settings
      </Button>
      <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
        <Modal.Content maxWidth="400px">
          <Modal.Body>
            <Button onPress={() => deleteRoutine()}>Delete</Button>
          </Modal.Body>
        </Modal.Content>
      </Modal>
    </>
  );
};

export default Routine;
