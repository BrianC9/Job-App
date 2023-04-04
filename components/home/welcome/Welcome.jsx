import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
  FlatList,
  Image,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SIZES, icons } from "../../../constants";
import styles from "./welcome.style";
const jobTypes = ["Full-time", "Part-time", "Contractor"];
const Welcome = () => {
  const [activeJobType, setActiveJobType] = useState("all");
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");
 const handleChangeQuery = (e) => {
    setSearchQuery(e);
  };
  const handleSearch = () => {
    if (searchQuery.trim().length < 3) {
      alert("Introduce 3 chars at least");
      return;
    }
    router.push(`/search/${searchQuery}`);
  };
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
            onChangeText={handleChangeQuery}
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
      <ScrollView  style={styles.tabsContainer}>
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
