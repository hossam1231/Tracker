import React from "react";
import {
  Button,
  Modal,
  FormControl,
  Input,
  IconButton,
  Icon,
  Center,
  Text,
  Box,
  NativeBaseProvider,
} from "native-base";
import { useState } from "react";
import { View } from "react-native";
import { CreateListForm } from "./CreateListForm";
import { Entypo } from "@expo/vector-icons";

export default function CreateListItem({ setlistItem }, listItem) {
  const [showModal, setShowModal] = useState(false);
  const [page, setpage] = useState(1);
  return (
    <>
      <IconButton
        onPress={() => setShowModal(true)}
        icon={<Icon as={Entypo} name="emoji-happy" />}
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

      <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
        <Modal.Content maxWidth="400px">
          <Modal.CloseButton />
          <Modal.Header>Create</Modal.Header>

          <Modal.Body>
            {/* options */}
            <CreateListForm
              listItem={listItem}
              setShowModal={setShowModal}
              setlistItem={setlistItem}
            />
          </Modal.Body>
        </Modal.Content>
      </Modal>
    </>
  );
}
