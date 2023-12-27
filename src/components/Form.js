import React, { useState, useEffect } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import { useDispatch } from "react-redux";
import { addUser } from "../features/users/userSlice";
import SelectDropdown from "react-native-select-dropdown"; 

const Form = () => {
  const dispatch = useDispatch() 
  const initialValues = {
    name: "",
    email: "",
    password: "",
    role: "",
  };
  const [name, setName] = useState(initialValues.name);
  const [email, setEmail] = useState(initialValues.email);
  const [password, setPassword] = useState(initialValues.password);
  const [role, setRole] = useState(initialValues.role); 
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [roleError, setRoleError] = useState(""); 
  const validateName = (value) => {
    if (!value) {
      setNameError("Name is required");
    } else {
      setNameError("");
    }
  };
  const validateEmail = (value) => {
    if (!value) {
      setEmailError("Email is required");
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
      setEmailError("Invalid email address");
    } else {
      setEmailError("");
    }
  };
  const validatePassword = (value) => {
    if (!value) {
      setPasswordError("Password is required");
    } else if (value.length < 8) {
      setPasswordError("Password must have at least 8 characters");
    } else {
      setPasswordError("");
    }
  };
  const validateRole = (value) => {
    if (!value) {
      setRoleError("Role is required");
    } else {
      setRoleError("");
    }
  };
  const handleSubmit = () => {
    validateName(name);
    validateEmail(email);
    validatePassword(password);
    validateRole(role); 
    if (!nameError && !emailError && !passwordError && !roleError) {
      console.log({ name, email, password, role }); 
      dispatch(addUser({ name, email, password, role }));
      }
  };
  const handleNameChange = (value) => {
    setName(value);
    validateName(value);
  };
  const handleEmailChange = (value) => {
    setEmail(value);
    validateEmail(value);
  };
  const handlePasswordChange = (value) => {
    setPassword(value);
    validatePassword(value);
  };
  const handleRoleChange = (value) => {
    setRole(value);
    validateRole(value);
  };
  const roles = ["user", "admin"];
  return (
    <View style={styles.form}>
      <Text style={styles.label}>Name</Text>
      <TextInput
        style={styles.input}
        name="name"
        value={name}
        onChangeText={handleNameChange}
        onSubmitEditing={handleSubmit}
        placeholder="Enter name"
      />
      {nameError && <Text style={styles.error}>{nameError}</Text>}
      <Text style={styles.label}>Email</Text>
      <TextInput
        style={styles.input}
        name="email"
        value={email}
        onChangeText={handleEmailChange}
        onSubmitEditing={handleSubmit}
        placeholder="Enter email"
        keyboardType="email-address"
      />
      {emailError && <Text style={styles.error}>{emailError}</Text>}
      <Text style={styles.label}>Password</Text>
      <TextInput
        style={styles.input}
        name="password"
        value={password}
        onChangeText={handlePasswordChange}
        onSubmitEditing={handleSubmit}
        placeholder="Enter password"
        secureTextEntry={true}
      />
      {passwordError && <Text style={styles.error}>{passwordError}</Text>}
      <Text style={styles.label}>Role</Text>
      <SelectDropdown 
        data={roles} 
        onSelect={handleRoleChange} 
        defaultButtonText="Select role" 
        buttonStyle={styles.dropdownButton} 
        buttonTextStyle={styles.dropdownButtonText} 
        renderDropdownIcon={() => null} 
        dropdownStyle={styles.dropdown} 
        rowStyle={styles.dropdownRow} 
        rowTextStyle={styles.dropdownRowText} 
      />
      {roleError && <Text style={styles.error}>{roleError}</Text>}
      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  form: {
    padding: 10,
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    margin: 5,
  },
  input: {
    fontSize: 16,
    padding: 10,
    margin: 5,
    borderWidth: 1,
    borderColor: "#9CBEE4",
    borderRadius: 5,
  },
  error: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
    margin: 10,
    color: "#EAB2E1",
  },
  dropdownButton: {
    width: "100%",
    height: 50,
    margin: 5,
    padding: 10,
    borderWidth: 1,
    borderColor: "#9CBEE4",
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  dropdownButtonText: {
    fontSize: 16,
  },
  dropdown: {
    width: "100%",
    marginTop: 5,
    borderRadius: 5,
  },
  dropdownRow: {
    height: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  dropdownRowText: {
    fontSize: 16,
  },
});

export default Form;

