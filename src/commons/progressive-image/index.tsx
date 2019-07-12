import React from "react";
import { View, Image, StyleSheet } from "react-native";
import { Colors } from "styles";

function ProgressiveImage(props: any) {
  const { thumbnailSource, source, style } = props;

  return (
    <View style={styles.container}>
      <Image {...props} source={thumbnailSource} style={style} />
      <Image {...props} source={source} style={[styles.imageOverlay, style]} />
    </View>
  );
}

const styles = StyleSheet.create({
  imageOverlay: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    top: 0
  },
  container: {
    backgroundColor: Colors.background
  }
});

export default ProgressiveImage;
