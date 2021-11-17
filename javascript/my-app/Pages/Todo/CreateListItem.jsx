import React from "react"
import {
  Button,
  Modal,
  FormControl,
  Input,
  Center,
  Text,
  Box,
  NativeBaseProvider,
} from "native-base"
import { useState } from "react"
import { View } from 'react-native'
import { CreateListItemRadio } from "./CreateListItemRadio"
export default function CreateListItem() {


  const [showModal, setShowModal] = useState(false)
  const [page, setpage] = useState(1)
  return (
    <>
      <Button onPress={() => setShowModal(true)}>Button</Button>
      <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
        <Modal.Content maxWidth="400px">
          <Modal.CloseButton />
          <Modal.Header>Create</Modal.Header>
      
          <Modal.Body>




{/* options */}
<CreateListItemRadio/>


o

    
          
          </Modal.Body>
          <Modal.Footer>
            <Button.Group space={2}>
              <Button
                variant="ghost"
                colorScheme="blueGray"
                onPress={() => {
                  setShowModal(false)
                }}
              >
                Cancel
              </Button>
              <Button
                onPress={() => {
                  setShowModal(false)
                  
                }}
              >
                Save
              </Button>
            </Button.Group>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
    </>
  )
}

