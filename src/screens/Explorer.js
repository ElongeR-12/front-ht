import React from "react";
import { SafeAreaView, View, ScrollView } from "react-native";
import HTDescription from "../components/HTDescription";
import ImageBackgroundZone from "../components/ImageBackgroundZone";
const Explorer = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <ImageBackgroundZone />
        <HTDescription />
        {/* planifiez profitez partagez */}
        <View></View>
        {/* en savoir plus */}
        <View></View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default Explorer;
