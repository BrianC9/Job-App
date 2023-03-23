import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
} from "react-native";
import { useRouter } from "expo-router";

import styles from "./popularjobs.style";
import { COLORS, SIZES } from "../../../constants";
import PopularJobCard from "../../common/cards/popular/PopularJobCard";
import { useFetch } from "../../../hooks/useFetch";
import { jobsMock, localeJobsMock } from "../../../mocks/jobs";
import { ScrollView } from "react-native-gesture-handler";
const Popularjobs = ({ searchQuery }) => {
  const router = useRouter();
  // const { data, error, isLoading } = useFetch({
  //   endpoint: "search",
  //   query: { query: "Junior developer", num_pages: 1 },
  // });
  const data = localeJobsMock;
  const error = false;
  const isLoading = false;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Popular jobs</Text>
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
            data={data}
            renderItem={({ item }) => (
              <PopularJobCard
                item={item}
                handleNavigateCard={() =>
                  router.push(`/job-details/${item.job_id}`)
                }
              />
            )}
            keyExtractor={(item) => item.job_id}
            contentContainerStyle={{ columnGap: SIZES.medium }}
            horizontal
          />
        )}
      </View>
    </View>
  );
};

export default Popularjobs;
