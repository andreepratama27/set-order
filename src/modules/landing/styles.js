import { ScaledSheet } from "react-native-size-matters";
import { Spacing, Colors } from "styles";

const baseWrapper = {
  width: "100%"
};

export default ScaledSheet.create({
  full: {
    flex: 1
  },
  container: {
    padding: 50,
    paddingLeft: 40,
    paddingRight: 40,
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    backgroundColor: Colors.dark
  },
  menuWrapper: {
    marginTop: "-80@vs",
    flexDirection: "column",
    justifyContent: "space-between",
    height: "250@vs"
  },
  viewInner: {
    ...baseWrapper,
    padding: Spacing.sm
  },
  viewInnerDesc: {
    ...baseWrapper,
    padding: Spacing.lg
  },
  description: {
    alignSelf: "center"
  },
  descriptionInner: {
    paddingLeft: 15,
    paddingRight: 15
  },
  logoWrapper: {
    width: 140,
    height: 140,
    alignSelf: "center"
  },
  images: {
    width: "100%",
    height: "100%",
    resizeMode: "contain"
  },
  overlay: {
    flex: 1,
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: Colors.dark,
    opacity: 0.5
  },
  textCenter: {
    textAlign: "center"
  },
  bottomWrapper: {
    width: "100%",
    position: "absolute",
    bottom: 20,
    alignSelf: "center"
  },
  btnTransparent: {
    width: "50%"
  }
});
