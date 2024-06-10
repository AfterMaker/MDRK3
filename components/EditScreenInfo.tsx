import React from "react";
import { StyleSheet } from "react-native";
import { Image } from "react-native";

import { ExternalLink } from "./ExternalLink";
import { MonoText } from "./StyledText";
import { Text, View } from "./Themed";

import Colors from "@/constants/Colors";

export default function EditScreenInfo({ path }: { path: string }) {
  return (
    <View style={styles.screen}>
      <View>
        <Image
          source={require("../assets/images/iconsScreen/MZK2.png")}
          style={styles.imageStyle}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  getStartedContainer: {
    alignItems: "center",
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightContainer: {
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    lineHeight: 24,
    textAlign: "center",
  },
  helpContainer: {
    marginTop: 15,
    marginHorizontal: 20,
    alignItems: "center",
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    textAlign: "center",
  },
  imageStyle: {
    alignItems: "center",
    position: "absolute",
    zIndex: 10,
    margin: 20,
    top: 30,
  },
  imageStyle2: {
    alignItems: "center",
  },
  screen: {
    flex: 1,
  },
});
