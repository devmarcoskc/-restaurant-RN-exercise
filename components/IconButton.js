import { TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const IconButton = ({icon, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Ionicons name={icon} size={24} color="orange"/>
    </TouchableOpacity>
  )
};

export default IconButton;