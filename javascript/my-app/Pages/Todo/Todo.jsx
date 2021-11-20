import React, { useState, useRef, useEffect, useLayoutEffect } from "react";
import ListItem from "../Todo/ListItem";
import {
  Box,
  Text,
  Heading,
  VStack,
  FormControl,
  Input,
  Link,
  Button,
  HStack,
  Center,
  NativeBaseProvider,
} from "native-base";
import CreateListItem from "./CreateListItem";
import AsyncStorage from "@react-native-async-storage/async-storage";

export function Todo() {
  const [listItem, setlistItem] = useState([]);

  useLayoutEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    let Data;

    if (listItem.length <= 0) {
      console.log("empty will try fetch");

      try {
        Data = await AsyncStorage.getItem("@listItem");
        let JSONPARSEDATA = JSON.parse(Data);
        try {
          if (JSONPARSEDATA.length > 0) {
            console.log("Done.");
            setlistItem(JSON.parse(Data));
          }
        } catch (error) {
          console.log(error);
        }
      } catch (e) {
        // read error
        console.log(e)
      }
    }
  };

  // const storeData = async () => {
  //   let Data;
  //   if (listItem.length > 0) {
  //     console.log("data to store");
  //     try {
  //       const jsonValue = JSON.stringify(listItem);
  //       Data = await AsyncStorage.setItem("@listItem", jsonValue);
  //     } catch (e) {
  //       // save error
  //     }

  //     console.log("Done.");
  //     setlistItem(Data);
  //     console.log(listItem);
  //   }
  // };

  return (
    <Center
      height={200}
      width={{
        base: 200,
        lg: 400,
      }}
    >
      <HStack>
        <Heading textAlign="center" mb="10">
          Routines
        </Heading>
        <CreateListItem listItem={listItem} setlistItem={setlistItem} />
      </HStack>

      {/* Tasks */}

      <VStack space={4} alignItems="center">
        {/* {listItem.length > 0 && (
          <>
            {" "}
            {listItem.map((item, index) => (
              <ListItem key={index} item={item} />
            ))}{" "}
          </>
        )} */}
      </VStack>
    </Center>
  );
}

export default () => {
  return (
    <NativeBaseProvider>
      <Center flex={1} px="3">
        <Todo />
      </Center>
    </NativeBaseProvider>
  );
};
