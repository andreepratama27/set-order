import { Platform } from "react-native";
import { Colors } from "styles";
import { ScaledSheet } from "react-native-size-matters";

const HEADER_MAX_HEIGHT = 220;

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
    marginTop: Platform.OS === "ios" ? 0 : 220,
    height: "120@vs",
    justifyContent: "center",
    paddingLeft: 15,
    paddingRight: 15
  },
  timerSelect: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: Colors.smoke,
    alignItems: "center",
    padding: 15
  },
  center: {
    justifyContent: "center",
    alignItems: "center"
  },
  menuImg: {
    width: "70@s",
    height: "70@vs"
  },
  menuWrapper: {},
  img: {
    width: "100%",
    height: "100%",
    alignSelf: "center",
    borderRadius: 4
  },
  card: {
    borderBottomWidth: 1,
    borderBottomColor: Colors.background,
    height: "140@vs"
  },
  btnSmall: {
    width: "50@s",
    height: "30@vs"
  },
  grid: {
    alignSelf: "center"
  },
  information: {
    paddingLeft: 5,
    paddingRight: 15
  },
  starRating: {
    flexDirection: "row"
  },
  align: {
    flexDirection: "row",
    alignItems: "center"
  },

  modal: {
    backgroundColor: "#fff",
    height: "220@vs",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10
  },
  scrollList: {
    height: "170@vs"
  },

  modalHeader: {
    borderBottomWidth: 1,
    height: "60@vs",
    alignItems: "center",
    flexDirection: "row",
    paddingLeft: 15,
    borderBottomColor: Colors.background
  },

  modalContent: {
    padding: 15
  },

  bottomModal: {
    justifyContent: "flex-end",
    margin: 0
  },
  list: {}
});

export default styles;
