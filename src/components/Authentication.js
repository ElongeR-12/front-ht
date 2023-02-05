import React, { useState } from "react";
import {
  SafeAreaView,
  Text,
  View,
  Dimensions,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from "react-native";

const Authentication = () => {
  const [sign, setSign] = useState(true);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name: username, email: email, password: password }),
  };

  const postUser = async () => {
    try {
      await fetch(
        "https://test-henri-api.onrender.com/api/v1/authentications/register",
        requestOptions
      ).then((response) => {
        response.json().then((data) => {
          Alert.alert("Registration successfully", data.createdAt);
          setSign((prev) => !prev);
        });
      });
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <SafeAreaView style={styles.main}>
      <View style={styles.formContainer}>
        {!sign && (
          <View style={styles.itemFormContainer}>
            <Text style={styles.titleForm}>Nom</Text>
            <TextInput
              style={styles.form}
              placeholder="nom"
              value={username}
              onChangeText={(text) => setUsername(text)}
            />
          </View>
        )}
        <View style={styles.itemFormContainer}>
          <Text style={styles.titleForm}>Adresse email</Text>
          <TextInput
            style={styles.form}
            placeholder="email"
            value={email}
            onChangeText={(text) => setEmail(text)}
          />
        </View>
        <View style={styles.itemFormContainer}>
          <Text style={styles.titleForm}>Password</Text>
          <TextInput
            style={styles.form}
            textContentType="newPassword"
            secureTextEntry
            placeholder="password"
            value={password}
            onChangeText={(text) => setPassword(text)}
          />
        </View>
        <TouchableOpacity
          style={styles.touch}
          onPress={() => {
            postUser();
            setPassword("");
            setEmail("");
            setUsername("");
          }}
        >
          <Text style={styles.connect}>
            {sign ? "Se connecter" : "S'inscrire"}
          </Text>
        </TouchableOpacity>
        {sign && (
          <Text style={styles.noAccount}>
            Vous n'avez pas encore de compte ?
          </Text>
        )}
        <TouchableOpacity
          style={styles.infoConnect}
          onPress={() => setSign((prev) => !prev)}
        >
          <Text style={styles.textInfoConnect}>
            {sign ? "Inscrivez-vous !" : "j'ai déjà un compte"}
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Authentication;

const styles = StyleSheet.create({
  main: { flex: 1, justifyContent: "center", alignItems: "center" },
  titleForm: { fontSize: 17, fontWeight: "500" },
  formContainer: { flex: 2 / 3 },
  form: {
    width: Dimensions.get("screen").width / 2,
    backgroundColor: "#ffffff",
    padding: 8,
    borderWidth: 2,
    borderColor: "#d7d7d7",
    borderRadius: 5,
    marginTop: 5,
  },
  touch: {
    backgroundColor: "#000000",
    padding: 10,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  connect: { color: "#ffffff", fontSize: 16 },
  noAccount: { marginTop: 15 },
  infoConnect: { justifyContent: "center", alignItems: "center" },
  textInfoConnect: { marginTop: 15, fontSize: 20, fontWeight: "500" },
  itemFormContainer: { flex: 1, justifyContent: "center" },
});
