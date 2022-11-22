import React, { useState, forwardRef } from "react";
import { TextInput, TouchableOpacity, View } from "react-native";
import { createVariant, useRestyle, useTheme } from "@shopify/restyle";
import Box from "../common/Box";
import ClearSearchUpdated from "../../assets/svgs/ClearSearchUpdated.svg";

const restyleFunctions = [createVariant({ themeKey: "textVariants" })];

export const useFormikInputProps = ({ handleChange, handleBlur, values }) => (
  name
) => ({
  onChangeText: handleChange(name),
  onBlur: handleBlur(name),
  value: values[name],
});

const TextInput = forwardRef(
  ({ value, onChangeText, handleBlur, multiline, noClear, testID, ...props }, ref) => {
    const [focused, setFocused] = useState(false);
    const restyle = useRestyle(restyleFunctions, { variant: "body" });
    const theme = useTheme();
    const { mainForeground, secondaryForeground, primary } = theme.colors;

    return (
      <Box
        height={multiline ? "auto" : 51}
        flexDirection="row"
        alignItems={multiline ? "stretch" : "center"}
        paddingHorizontal={4}
        paddingVertical={multiline ? 3 : 0}
        minHeight={multiline ? 92 : 0}
        {...props}
      >
        <TextInput
          testID={testID}
          {...{ ref, value, onChangeText }}
          {...{ multiline }}
          {...props}
          {...restyle}
          selectionColor={primary}
          placeholderTextColor={secondaryForeground}
          style={[
            ...restyle.style,
            {
              height: multiline ? "auto" : 50,
              flex: 1,
              color: mainForeground,
              lineHeight: multiline ? 20 : null,
              paddingHorizontal: multiline ? 1 : null,
            },
          ]}
          onFocus={(e) => {
            if (handleBlur) {
              handleBlur(e);
            }
            setFocused(true);
          }}
          onBlur={() => setFocused(false)}
        ></TextInput>
        {!noClear && focused && value.length > 0 && (
          <TouchableOpacity
            onPress={() => onChangeText("")}
            hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
          >
            <View>
              <ClearSearchUpdated
                fill={mainForeground}
                height={14}
                width={14}
              />
            </View>
          </TouchableOpacity>
        )}
      </Box>
    );
  }
);

export default TextInput