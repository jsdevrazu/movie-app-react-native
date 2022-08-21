import React, { useState } from "react";
import { useFormikContext } from "formik";
import AppErrorMessage from "../AppErrorMessage";
import { TextInput, TouchableOpacity, View } from "react-native";
import { EyeIcon, EyeOffIcon } from "react-native-heroicons/outline";

export default function AppFormFeilds({
  name,
  password = false,
  ...otherProps
}) {
  const [showPassword, setShowPassword] = useState(password);
  const { setFieldTouched, handleChange, errors, touched, values } =
    useFormikContext();

  return (
    <View className="relative">
      <TextInput
        onBlur={() => setFieldTouched(name)}
        onChangeText={handleChange(name)}
        {...otherProps}
        className="border-2 border-gray-200 rounded-lg px-5 py-2 mt-4"
        secureTextEntry={showPassword}
        value={values[name]}
      />
      {password && (
        <TouchableOpacity
          className="absolute top-[30px] right-[15px]"
          onPress={() => setShowPassword(!showPassword)}
        >
          {showPassword ? (
            <EyeIcon size={24} color="#000" />
          ) : (
            <EyeOffIcon size={24} color="#000" />
          )}
        </TouchableOpacity>
      )}
      <AppErrorMessage visible={touched[name]} error={errors[name]} />
    </View>
  );
}