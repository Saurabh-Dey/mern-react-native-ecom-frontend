import { Text, TouchableOpacity } from "react-native";
import React from "react";
import { colors } from "../styles/styles";
import { Avatar } from "react-native-paper";

const ButtonBox = ({
  icon,
  text,
  handler,
  reverse = false,
  loading = false,
}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.9}
      style={{
        backgroundColor: reverse ? colors.greenTint : colors.color3,
        height: 80,
        width: 80,
        borderRadius: 20,
        alignItems: "center",
      }}
      onPress={() => handler(text)}
      disabled={loading}
    >
      <Avatar.Icon
        size={50}
        color={colors.color2}
        style={{
          backgroundColor: reverse ? colors.greenTint : colors.color3,
          color: reverse ? colors.color3 : colors.color1,
        }}
        icon={icon}
      />

      <Text
        style={{
          color: reverse ? colors.color3 : colors.greenTint,
          textAlign: "center",
        }}
      >
        {text}
      </Text>
    </TouchableOpacity>
  );
};

export default ButtonBox;
