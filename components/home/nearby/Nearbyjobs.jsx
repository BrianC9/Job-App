import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
} from "react-native";
import { useRouter } from "expo-router";

import styles from "./nearbyjobs.style";
import { COLORS, SIZES } from "../../../constants";
import PopularJobCard from "../../common/cards/popular/PopularJobCard";
import { useFetch } from "../../../hooks/useFetch";
import { jobsMock, localeJobsMock } from "../../../mocks/jobs";
const Nearbyjobs = ({ searchQuery }) => {
  const router = useRouter();
  // const { data, error, isLoading } = useFetch({
  //   endpoint: "search",
  //   query: { query: "React Developer", num_pages: 1 },
  // });
  const error = false;
  const isLoading = false;
  const handleCardPress = (item) => {};

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Popularjobs</Text>
        <TouchableOpacity>
          <Text style={styles.headerBtn}>Show all</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.cardsContainer}>
        {isLoading ? (
          <ActivityIndicator size="large" color={COLORS.primary} />
        ) : error ? (
          <Text>Something went wrong</Text>
        ) : (
          <FlatList
            data={localeJobsMock}
            renderItem={({ item }) => (
              <PopularJobCard handleCardPress={handleCardPress} item={item} />
            )}
            keyExtractor={(item) => item.job_id}
            contentContainerStyle={{ columnGap: SIZES.medium }}
          />
        )}
      </View>
    </View>
  );
};

export default Nearbyjobs;
