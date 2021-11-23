import React, { useState } from "react";
import {
  IconButton,
  Icon,
  Center,
  NativeBaseProvider,
  Modal,
  Button,
  FormControl,
  Input,
} from "native-base";
import { Entypo } from "@expo/vector-icons";

export const CreateButton = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      {page == "Home" ||
        ("Routines" && (
          <IconButton
            icon={<Icon as={Entypo} name="emoji-happy" />}
            onPress={() => setShowModal(true)}
            borderRadius="full"
            _icon={{
              color: "orange.500",
              size: "md",
            }}
            _hover={{
              bg: "orange.600:alpha.20",
            }}
            __pressed={{
              bg: "orange.600:alpha.20",
              _icon: {
                name: "emoji-flirt",
              },
              _ios: {
                _icon: {
                  size: "2xl",
                },
              },
            }}
            _ios={{
              _icon: {
                size: "2xl",
              },
            }}
          />
        ))}

      <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
        <Modal.Content maxWidth="400px">
          <Modal.CloseButton />
          <Modal.Header>Contact Us</Modal.Header>
          <Modal.Body>
            <FormControl>
              <FormControl.Label>Name</FormControl.Label>
              <Input />
            </FormControl>
            <FormControl mt="3">
              <FormControl.Label>Email</FormControl.Label>
              <Input />
            </FormControl>
          </Modal.Body>
          <Modal.Footer>
            <Button.Group space={2}>
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
                  setShowModal(false);
                }}
              >
                Save
              </Button>
            </Button.Group>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
    </>
  );
};

export default () => {
  return (
    <NativeBaseProvider>
      <Center flex={1} px="3">
        <CreateButton />
      </Center>
    </NativeBaseProvider>
  );
};
