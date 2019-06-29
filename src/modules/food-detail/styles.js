import { Platform } from "react-native";
import { ScaledSheet } from "react-native-size-matters";
import { Colors } from "styles";

const HEADER_MAX_HEIGHT = 150;

const styles = ScaledSheet.create({
  fill: {
    flex: 1
  },
  content: {
    flex: 1
  },
  header: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: Colors.light,
    borderBottomWidth: 1,
    borderBottomColor: Colors.background,
    overflow: "hidden",
    height: HEADER_MAX_HEIGHT
  },
  backgroundImage: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    width: null,
    height: HEADER_MAX_HEIGHT,
    resizeMode: "cover"
  },
  bar: {
    backgroundColor: "transparent",
    marginTop: Platform.OS === "ios" ? 28 : 38,
    height: 32,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    top: 0,
    left: 0,
    right: 0
  },
  title: {
    color: "white",
    fontSize: 18
  },
  scrollViewContent: {
    // iOS uses content inset, which acts like padding.
    paddingTop: Platform.OS !== "ios" ? HEADER_MAX_HEIGHT : 0
  },
  row: {
    height: 40,
    margin: 16,
    backgroundColor: "#D3D3D3",
    alignItems: "center",
    justifyContent: "center"
  },
  headerTitle: {
    height: "140@vs",
    justifyContent: "center",
    paddingLeft: 15,
    paddingRight: 15
  },
  timerSelect: {
    backgroundColor: Colors.smoke,
    padding: 15
  },
  menuImg: {
    width: "70@s",
    height: "70@vs",
    justifyContent: "center"
  },
  menuWrapper: {
    padding: 15,
    paddingTop: 0,
    paddingBottom: 0
  },
  img: {
    width: "100%",
    height: "100%",
    alignSelf: "center",
    borderRadius: 4
  },
  card: {
    borderBottomWidth: 1,
    borderBottomColor: Colors.background,
    height: "90@vs"
  },
  btnSmall: {
    width: "40@s",
    height: "25@vs"
  },
  list: {
    height: "50@vs",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: Colors.background
  },
  noBorder: {
    borderBottomWidth: 0
  },
  buttonWrapper: {
    height: "120@vs",
    justifyContent: "flex-end",
    flexDirection: "column",
    alignItems: "flex-end",
    padding: 15
  },
  btnFull: {
    width: "100%"
  },
  radio: {
    width: 20,
    height: 20,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: Colors.background
  }
});

export default styles;
