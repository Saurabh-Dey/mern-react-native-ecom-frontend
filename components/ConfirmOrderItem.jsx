import { View, Text, Image } from "react-native";
import React from "react";
import { colors } from "../styles/styles";

const ConfirmOrderItem = ({ price, quantity, image, name }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        margin: 10,
        // backgroundColor: "red",
      }}
    >
      <Image
        source={{
          uri: image,
        }}
        style={{
          width: 50,
          height: 50,
          resizeMode: "contain",
          marginRight: 5,
        }}
      />

      <Text
        style={{
          width: 190,
          borderRadius: 5,
          borderWidth: 1,
          padding: 5,
          borderColor: colors.greenTint,
        }}
      >
        {name}
      </Text>
      <View style={{ flexDirection: "row" }}>
        <Text style={{ marginLeft: 2 }}>{quantity}</Text>
        <Text style={{ marginHorizontal: 10 }}>X</Text>
        <Text>₹{price}</Text>
      </View>
    </View>
  );
};

export default ConfirmOrderItem;
