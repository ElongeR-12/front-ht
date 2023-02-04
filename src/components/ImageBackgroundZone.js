import React from "react";
import {
  ImageBackground,
  View,
  Image,
  TextInput,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from "react-native";
const ImageBackgroundZone = () => {
  const [focus, setFocus] = React.useState(false);
  return (
    <View>
      <ImageBackground
        source={{
          uri: "https://general-henri-1-paris.s3.fr-par.scw.cloud/couverture.jpg",
        }}
        style={styles.image}
      >
        <View style={styles.contentContainer}>
          <View style={styles.logoContainer}>
            <Image
              source={require("../../assets/logo/Logo_henri-side.png")}
              style={styles.logo}
              alt="logo"
            />
          </View>
          <View style={styles.inputAndTooltipContainer}>
            <View style={[styles.containerInfo, { marginBottom: 10 }]}>
              <TextInput
                placeholder="où allez vous?"
                onFocus={() => setFocus(true)}
              />
            </View>
            {focus && (
              <View
                style={[
                  styles.containerInfo,
                  { marginHorizontal: 50, alignItems: "center" },
                ]}
              >
                <TouchableOpacity onPress={() => setFocus((prev) => !prev)}>
                  <Text>
                    <Text>Autour de moi</Text>
                  </Text>
                </TouchableOpacity>
              </View>
            )}
          </View>
          <View
            style={{
              flex: 1,
              alignItems: "center",
            }}
          >
            <Text style={styles.title}>J'organise mon itinéraire</Text>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default ImageBackgroundZone;

const styles = StyleSheet.create({
  image: {
    flex: 1,
    width: "100%",
    height: Dimensions.get("screen").height / 3,
    resizeMode: "cover",
    flexDirection: "column",
  },
  containerInfo: {
    height: 40,
    backgroundColor: "#ffffff",
    borderRadius: 50,
    justifyContent: "center",
    paddingHorizontal: 30,
  },
  contentContainer: { flex: 1, padding: 40 },
  logoContainer: {
    flex: 1,
    paddingLeft: 20,
  },
  logo: { width: 100, height: 20 },
  inputAndTooltipContainer: {
    flex: 2,
  },
  title: { color: "#ffffff", fontSize: 19, fontWeight: "800" },
});
