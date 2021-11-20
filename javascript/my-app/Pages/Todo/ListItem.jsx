import React from "react";
import {
  Container,
  FormControl,
  Radio,
  Input,
  Box,
  Button,
  Text,
  Icon,
  Stack,
  WarningOutlineIcon,
  Center,
  NativeBaseProvider,
} from "native-base";

export default function ListItem(item,key) {
  
    const { name , type } = item;

  
    const log = () => {
    console.log(item);
    console.log(name);
    
  };

  return (
    <Center w="64" h="20" bg="primary.500" rounded="md" shadow={3}>
      {/* <Button iconLeft dark>
        <Icon name="cog" />
        <Text>Settings</Text>
      </Button> */}

<Text>
    {name}
</Text>
 
 <Button onPress={log}>
     LOG
 </Button>

    </Center>
    //   <Center w="64" h="20" bg="secondary.500" rounded="md" shadow={3} />
    //   <Center w="64" h="20" bg="emerald.500" rounded="md" shadow={3} />
  );
}
