import { Pressable, StyleSheet, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

function IconButton({ icon, size, color, onPress }) {
  return (
    <View style={styles.outerContainer}>
      <Pressable
        onPress={onPress}
        style={({ pressed }) => (pressed ? styles.pressed : "")}
      >
        <View style={styles.buttonContainer}>
          <Ionicons name={icon} size={size} color={color} />
        </View>
      </Pressable>
    </View>
  );
}

export default IconButton;

const styles = StyleSheet.create({
  outerContainer: {
    borderRadius: 24,
    marginHorizontal: 8,
    // marginVertical: 2,
  },
  buttonContainer: {
    borderRadius: 24,
    padding: 6,
    borderWidth: 1,
    borderColor: "white",
  },
  pressed: {
    opacity: 0.7,
  },
});
