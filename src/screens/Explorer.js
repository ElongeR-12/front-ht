import React from "react";
import { SafeAreaView, ScrollView } from "react-native";
import DetailsToogleAndButtonContainer from "../components/DetailsToogleAndButtonContainer";
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
        <DetailsToogleAndButtonContainer />
      </ScrollView>
    </SafeAreaView>
  );
};
export default Explorer;
