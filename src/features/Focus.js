import React, { useState, useCallback } from "react";
import { View, Text, StyleSheet } from "react-native";
import { TextInput } from "react-native-paper";
import { colors } from "../utils/colors";
import { RoundedButton } from "../components/RoundedButton";
import { spacing } from "../utils/sizes";

export const Focus = ({ addSubject }) => {
  const [textInput, setTextInput] = useState(null);
  const submitSubject = useCallback(() => {
    addSubject(textInput);
  }, [textInput, addSubject]);

  return (
    <View style={style.container}>
      <View style={style.inputContainer}>
        <TextInput style={style.textInput} onChangeText={setTextInput} label="What would you like to focus on?" />
        <View style={style.button}>
          <RoundedButton onPress={submitSubject} title="+" size={50} />
        </View>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  container: {},
  inputContainer: {
    padding: spacing.lg,
    justifyContent: "top",
    flexDirection: "row",
  },
  text: {
    color: colors.white,
  },
  textInput: {
    flex: 1,
    marginRight: spacing.sm,
  },
  button: {
    justifyContent: "center",
  },
});
