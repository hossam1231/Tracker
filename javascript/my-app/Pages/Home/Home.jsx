import React from 'react'
import { View, Text } from 'react-native'
import ListItem from '../Todo/ListItem'


export default function Home() {
const [listItem, setlistItem] = useState([])

    return (
<Center>
    <Box>
        <Button>Add</Button>
        {/* open modal  */}

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
