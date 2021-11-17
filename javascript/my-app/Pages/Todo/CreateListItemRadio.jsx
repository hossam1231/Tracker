import React , {useReducer , useState , useEffect} from "react"
import {
  Container,
  FormControl,
  Radio,
  Box,
  Button,
  WarningOutlineIcon,
  Center,
  NativeBaseProvider,
} from "native-base"

const initialState = {page: 0 , type : null };

function reducer(state, action) {
  switch (action.type) {
    case 'setType':
      return {page: 1 , type: action.payload  };
      // this is the prop that gets passed its called payload for the action that called it 
    default:
      throw new Error();
  }
}

export const CreateListItemRadio = () => {
  const [groupValue, setGroupValue] = React.useState()

  const [state, dispatch] = useReducer(reducer, initialState);


 const log = () => {
   console.log(state)
 }

  return (
    <Container>
   

      
      <FormControl>

        <FormControl.Label
          _text={{
            fontSize: "lg",
            bold: true,
          }}
        >
          Select Prize
        </FormControl.Label>
        <Radio.Group
          name="exampleGroup"
          accessibilityLabel="select prize"
          defaultValue={groupValue}
          onChange={(value) => {
            dispatch({type: 'setType' , payload: value })
          }}
        >
          <Radio value="1" my="1">
            First
          </Radio>
          <Radio value="2" my="1">
            Second
          </Radio>
          <Radio value="3" my="1">
            Third
          </Radio>
        </Radio.Group>

        <Button onPress={log}>
          LOG
        </Button>



      
      
      </FormControl>




    </Container>
  )
}
 
export default () => {
  return ( <Center flex={1} px="3">
        <Example />
      </Center>
     
  )
}
