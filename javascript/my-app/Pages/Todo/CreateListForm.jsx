import React, { useReducer, useState, useEffect } from "react";
import {
  Container,
  FormControl,
  Radio,
  Input,
  Box,
  Button,
  Text,
  Stack,
  HStack,
  WarningOutlineIcon,
  Center,
  NativeBaseProvider,
} from "native-base";
import AsyncStorage from "@react-native-async-storage/async-storage";

const initialState = { page: 1, type: null, name: null };

function reducer(state, action) {
  switch (action.type) {
    case "setType":
      return { page: 2, type: action.payload, name: null };
    // this is the prop that gets passed its called payload for the action that called it
    case "setName":
      return {
        page: 3,
        type: state.type,
        name: action.payload,
      };
    default:
      throw new Error();
  }
}

export const CreateListForm = ({ setlistItem, setShowModal, listItem }) => {
  const [groupValue, setGroupValue] = React.useState();

  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    console.log(listItem);
  }, [listItem]);

  let listItemData = {
    name: state.name,
    type: state.type,
  };

  const saveListitem = async () => {
    setlistItem((listItem) => [...listItem, listItemData]);

    // try {
    //   const jsonValue = JSON.stringify(listItem);
    //   await AsyncStorage.setItem("@listItem", jsonValue);
    // } catch (e) {
    //   // saving error
    //   console.log(e);
    // }
    // // setShowModal(false);
    console.log(listItemData);
    console.log(listItem);
  };

  return (
    <Container>
      {!state.type && (
        <FormControl>
          {/* page one */}
          <FormControl.Label
            _text={{
              fontSize: "lg",
              bold: true,
            }}
          >
            Select Type
          </FormControl.Label>
          <Radio.Group
            name="exampleGroup"
            accessibilityLabel="select prize"
            defaultValue={groupValue}
            onChange={(value) => {
              dispatch({ type: "setType", payload: value });
            }}
          >
            <Radio value="Routine" my="1">
              Routine
            </Radio>
            <Radio value="Timer" my="1">
              Timer
            </Radio>
            <Radio value="Task" my="1">
              Task
            </Radio>
            <Radio value="Reps" my="1">
              Reps
            </Radio>
          </Radio.Group>
        </FormControl>
      )}

      {state.type && (
        <FormControl>
          <Stack space={5}>
            <Stack>
              <FormControl.Label>Name</FormControl.Label>
              <Input
                onChange={(event) => {
                  dispatch({ type: "setName", payload: event.target.value });
                }}
                variant="rounded"
                p={2}
                placeholder="Name"
              />
            </Stack>
            {/* <Stack>
          <FormControl.Label>Password</FormControl.Label>
          <Input variant="rounded" p={2} placeholder="Password" />
        </Stack> */}
          </Stack>
        </FormControl>
      )}

      <HStack justifyContent="space-evenly">
        <Button
          variant="ghost"
          colorScheme="blueGray"
          onPress={() => {
            setShowModal(false);
          }}
        >
          Cancel
        </Button>
        <Button
          onPress={() => {
            saveListitem();
          }}
        >
          Save
        </Button>
      </HStack>
    </Container>
  );
};

export default () => {
  return (
    <Center flex={1} px="3">
      <Example />
    </Center>
  );
};
