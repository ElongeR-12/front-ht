import React from "react";
import { SafeAreaView, View, ScrollView } from "react-native";
import HTDescription from "../components/HTDescription";
import ImageBackgroundZone from "../components/ImageBackgroundZone";
import Organizing from "../components/Organizing";
const Explorer = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <ImageBackgroundZone />
        <HTDescription />
        <Organizing />
        {/* en savoir plus */}
        <View></View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default Explorer;
