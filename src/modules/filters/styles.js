import { ScaledSheet } from "react-native-size-matters";
import { Colors } from "styles/";

const styles = ScaledSheet.create({
  container: {
    flex: 1
  },
  content: {
    padding: 15,
    flexDirection: "row",
    flexWrap: "wrap"
  },
  pill: {
    width: "auto",
    height: 30,
    paddingLeft: 15,
    paddingRight: 15,
    marginBottom: 15,
    marginRight: 15,
    alignSelf: "flex-start",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.background,
    borderRadius: 30
  },
  pillActive: {
    backgroundColor: Colors.warning
  },
  buttonWrapper: {
    width: "100%",
    position: "absolute",
    bottom: 10,
    alignSelf: "center",
    paddingLeft: 15,
    paddingRight: 15
  }
});

export default styles;
