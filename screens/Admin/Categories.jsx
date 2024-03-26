import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import {
  colors,
  defaultStyle,
  formHeading,
  inputOptions,
} from "../../styles/styles";
import Header from "../../components/Header";
import { Avatar, Button, IconButton, TextInput } from "react-native-paper";

const categories = [
  {
    name: "laptop",
    _id: "agqwgdiuqwgfiuqwgfgqw",
  },
  {
    name: "laptop",
    _id: "agqwgdiuqwgggfiudwqwgfgqw",
  },
];

const Categories = () => {
  const [category, setCategory] = useState("");
  const deleteHandler = (id) => {
    console.log(`Deleting category ${id}`);
  };

  const submitHandler = () => {
    console.log("added category");
  };
  const loading = false;
  return (
    <View
      style={{
        ...defaultStyle,
        backgroundColor: colors.color5,
      }}
    >
      <Header back={true} />
      {/* Heading */}
      <View style={{ marginBottom: 20, paddingTop: 70 }}>
        <Text style={formHeading}>Categories</Text>
      </View>

      <ScrollView
        style={{
          marginBottom: 20,
        }}
      >
        <View
          style={{
            backgroundColor: colors.color2,
            padding: 20,
            minHeight: 400,
          }}
        >
          {categories.map((i) => (
            <CategoryCard
              name={i.name}
              id={i._id}
              key={i._id}
              deleteHandler={deleteHandler}
            />
          ))}
        </View>
      </ScrollView>

      <View style={styles.container}>
        <TextInput
          {...inputOptions}
          placeholder="Category"
          value={category}
          onChangeText={setCategory}
        />

        <Button
          textColor={colors.color3}
          style={{
            backgroundColor: colors.greenTint,
            margin: 20,
            padding: 6,
          }}
          loading={loading}
          disabled={!category}
          onPress={submitHandler}
        >
          Add Category
        </Button>
      </View>
    </View>
  );
};

const CategoryCard = ({ name, id, deleteHandler }) => {
  return (
    <View style={styles.cardContainer}>
      <Text style={styles.cardText}>{name}</Text>
      <TouchableOpacity onPress={() => deleteHandler(id)}>
        {/* <Avatar.Icon
          icon={"delete"}
          size={30}
          iconColor={"#f65858"}
            style={{
              backgroundColor: "#f65858",
            }}
        /> */}
        <IconButton
          icon="delete"
          iconColor={"#f65858"}
          size={20}
          mode="contained"
        />
      </TouchableOpacity>
    </View>
  );
};
export default Categories;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    elevation: 10,
    borderRadius: 10,
    backgroundColor: colors.color3,
  },
  cardContainer: {
    backgroundColor: colors.color2,
    elevation: 5,
    margin: 10,
    padding: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: 10,
  },
  cardText: {
    fontWeight: "600",
    textTransform: "uppercase",
    letterSpacing: 1,
  },
});
