import { Text, View } from "react-native";
import { StyleSheet } from "react-native";

export interface ProfileTextContainerProps {
  title: string
  description: string
}

function ProfileTextContainer({ title, description }: ProfileTextContainerProps) {
  const styles = StyleSheet.create({
    root: {
      gap: 5,
    },
    title: {
      fontSize: 18,
      fontWeight: '700',
    },
    description: {
      fontSize: 16,
    }
  });

  return (
    <>
      <View style={styles.root}>
        <Text style={styles.title}>
          {title}
        </Text>
        <Text style={styles.description}>
          {description}
        </Text>
      </View>
    </>
  )
}

export default ProfileTextContainer;
