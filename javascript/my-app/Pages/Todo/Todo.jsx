import React , {useState} from 'react'
import ListItem from '../Todo/ListItem'
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
  } from "native-base"
import CreateListItem from './CreateListItem'


export default function Todo() {
const [listItem, setlistItem] = useState([])

    return (
<Center
 height={200}
 width={{
   base: 200,
   lg: 400,
 }}
>
    <Box>
        <Text>Daily Digest</Text>
   <CreateListItem/>

<Box>
    {/* Tasks */}
{listItem.map((item, index) => (
        <ListItem item={item} />
    ))}
</Box>

    </Box>
</Center>
    )
}

