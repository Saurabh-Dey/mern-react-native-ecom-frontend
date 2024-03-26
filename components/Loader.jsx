import { View, Text } from "react-native";
import React from "react";
import { ActivityIndicator } from "react-native-paper";
import { colors } from "../styles/styles";

const Loader = () => {
  return (
    <ActivityIndicator
      animating={true}
      color={colors.greenTint}
      size={"large"}
      style={{
        top: "50%",
        position: "absolute",
        alignSelf: "center",
      }}
    />
  );
};

export default Loader;
