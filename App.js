import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Feather } from "@expo/vector-icons";
import { MotiView } from "moti";
import { Easing } from "react-native-reanimated"
import "react-native-reanimated";

export default function App() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <View style={[styles.dot, styles.center]}>
      {[...Array(3).keys()].map((index) => {
        return(
          <MotiView 
        from ={{opacity: 0.5,scale: 1}}
        animate={{opacity:0,scale: 4}}
        transition={{type:"timing",
        duration: 2000,
        easing:Easing.out(Easing.ease),
        delay:index*400,
        repeatReverse:false,
        loop:true
        }}
        key={index}
        style={[StyleSheet.absoluteFillObject, styles.dot]}/>);
      })}
        <Feather name="phone-outgoing" size={32} color="#fff" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  dot: {
    width: 100,
    height: 100,
    borderRadius: 100,
    backgroundColor: "#6E01EF",
    elevation:10,
  },
  center: { alignItems: "center", justifyContent: "center" },
});
