import { Text, TouchableHighlight, View } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

import defaultStyles from './styles';

export interface BackButtonProps {
  iconName: string
  label: string
  onPress?: () => void
}

function BackButton({ iconName, label, onPress }: BackButtonProps) {
  const styles = StyleSheet.create({
    root: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    label: {
      fontSize: 20,
      textTransform: 'capitalize',
    },
  });;

  return (
    <>
      <TouchableHighlight onPress={onPress}>
        <View style={styles.root}>
          <Icon name={iconName} size={40} />
          <Text style={styles.label}>
            {label}
          </Text>
        </View>
      </TouchableHighlight>
    </>
  );
}


export default BackButton;
