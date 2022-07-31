import { View} from 'react-native';
import { Switch, TextInput, Text, Modal } from 'react-native-web';
import { AntDesign } from '@expo/vector-icons';

function Settings(props) {
  return (
    <Modal>
   <View>
    <View>
      <TextInput>Set count = 20</TextInput>
    </View>
    <View>
      <Switch title="Limit off/on"/>
       <Text>Maximum = </Text>
       <TextInput/>
    </View>
    <View>

    </View>
    <View>

    </View>
    <AntDesign 
    name="closecircleo"
     size={24}
     color="black" />
   </View>
   </Modal>
  )
}

export default Settings;