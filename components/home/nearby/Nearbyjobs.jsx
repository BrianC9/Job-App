import { useRouter } from "expo-router";
import React from "react";
import {
  ActivityIndicator,
  FlatList,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import { COLORS, SIZES } from "../../../constants";
import { localeJobsMock } from "../../../mocks/jobs";
import { useFetch } from "../../../hooks/useFetch";
import NearbyJobCard from "../../common/cards/nearby/NearbyJobCard";
import styles from "./nearbyjobs.style";
const Nearbyjobs = () => {
  const router = useRouter();
  const { data, error, isLoading } = useFetch({
    endpoint: "search",
    query: { query: "Developer in Madrid", num_pages: 1 },
  });
  // const error = false;
  // const isLoading = false;
const handleShowAll = () =>{
  router.push('/search/Developer in Madrid')
}
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Nearby jobs</Text>
        <TouchableOpacity onPress={handleShowAll} >
          <Text style={styles.headerBtn}>Show all</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.cardsContainer}>
        {isLoading ? (
          <ActivityIndicator size="large" color={COLORS.primary} />
        ) : error ? (
          <Text>Something went wrong</Text>
        ) : (
          data?.map((job) => (
            <NearbyJobCard
              key={`nearby-job-${job.job_id}`}
              item={job}
              handleNavigateCard={() =>
                router.push(`/job-details/${job.job_id}`)
              }
            />
          ))
        )}
      </View>
    </View>
  );
};

export default Nearbyjobs;
