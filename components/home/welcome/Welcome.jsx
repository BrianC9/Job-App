import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList,
  ScrollView,
} from "react-native";
import { icons, SIZES } from "../../../constants";
import { useRouter } from "expo-router";
import styles from "./welcome.style";
import { Alert } from "react-native";
const jobTypes = ["All", "Full-time", "Part-time", "Contractor"];
const Welcome = ({ searchQuery, handleChangeSearchQuery, handleSearch }) => {
  const [activeJobType, setActiveJobType] = useState("all");
  const router = useRouter();
  const handlePressTab = (item) => {
    console.log(item);
  };

  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.userName}>Welcome Bryan</Text>
        <Text style={styles.welcomeMessage}>Find you next job</Text>
      </View>
      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput
            style={styles.searchInput}
            value={searchQuery}
            onChangeText={handleChangeSearchQuery}
            placeholder="FullStack Engineer, Project Manager..."
          />
        </View>
        <TouchableOpacity style={styles.searchBtn} onPress={handleSearch}>
          <Image
            source={icons.search}
            style={styles.searchBtnImage}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>
      <ScrollView horizontal={true} style={styles.tabsContainer}>
        <FlatList
          data={jobTypes}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.tab(activeJobType, item.toLowerCase())}
              onPress={() => {
                setActiveJobType(item.toLowerCase());
                router.push(`/search/${item}`);
              }}
            >
              <Text style={styles.tabText(activeJobType, item.toLowerCase())}>
                {item}
              </Text>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item}
          horizontal
          contentContainerStyle={{ columnGap: SIZES.small }}
        />
      </ScrollView>
    </View>
  );
};

export default Welcome;
