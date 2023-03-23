import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { SIZES } from "../../../constants";

import styles from "./tabs.style";

const Tabs = ({ TABS, activeTab, setActiveTab }) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={TABS}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.btn(item, activeTab)}
            onPress={() => {
              setActiveTab(item);
            }}
          >
            <Text style={styles.btnText(item, activeTab)}>{item}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ columnGap: SIZES.small }}
      />
    </View>
  );
};

export default Tabs;
