import { useSearchParams, Stack, useRouter } from "expo-router";
import { useCallback, useState } from "react";
import {
  Text,
  View,
  ScrollView,
  ActivityIndicator,
  RefreshControl,
} from "react-native";
import { localeJobsMock } from "../../mocks/jobs";
import {
  Company,
  JobAbout,
  JobFooter,
  JobTabs,
  ScreenHeaderBtn,
  Specifics,
} from "../../components";
import { COLORS, SIZES, icons } from "../../constants";
import { useFetch } from "../../hooks/useFetch";
function Id() {
  const router = useRouter();
  const params = useSearchParams();
  // const {data,isLoading, error,refetch} = useFetch
  const job = localeJobsMock.find((item) => item.job_id === params.id);
  return (
    <View>
      <Text>{job.job_title}</Text>
    </View>
  );
}

export default Id;
