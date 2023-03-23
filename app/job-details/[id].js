import { useSearchParams, Stack, useRouter } from "expo-router";
import { useCallback, useState } from "react";
import {
  Text,
  View,
  ScrollView,
  ActivityIndicator,
  RefreshControl,
  SafeAreaView,
  Share,
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
  const [refreshing, setRefreshing] = useState(false);
  const router = useRouter();
  const params = useSearchParams();
  // const {data,isLoading, error,refetch} = useFetch
  const isLoading = false;
  const error = false;
  const job = localeJobsMock.find((item) => item.job_id === params.id);
  const data = [job];
  const handleRefresh = () => {};

  const handleShare = async (jobLink) => {
    try {
      await Share.share({
        message: `Look at this job ${jobLink}`,
        url: jobLink,
      });
    } catch (error) {
      alert(error.message);
    }
  };
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: COLORS.lightWhite },
          headerTitle: "",
          headerBackVisible: false,
          headerShadowVisible: false,
          headerLeft: () => (
            <ScreenHeaderBtn
              iconUrl={icons.left}
              dimension="60%"
              handlePress={() => router.back()}
            />
          ),
          headerRight: () => (
            <ScreenHeaderBtn
              iconUrl={icons.share}
              dimension="60%"
              handlePress={() => handleShare(data[0].job_apply_link)}
            />
          ),
        }}
      />
      <>
        <ScrollView
          showsVerticalScrollIndicator={false}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={handleRefresh} />
          }
        >
          {isLoading ? (
            <ActivityIndicator color={COLORS.primary} />
          ) : error ? (
            <Text>Something went wrong</Text>
          ) : data.length === 0 ? (
            <Text>No data</Text>
          ) : (
            <View
              style={{
                padding: SIZES.medium,
                paddingBottom: 100,
              }}
            >
              <Company
                companyLogo={data[0].employer_logo}
                jobTitle={data[0].job_title}
                companyName={data[0].employer_name}
                location={data[0].job_country}
              />
              <JobTabs />
            </View>
          )}
        </ScrollView>
      </>
    </SafeAreaView>
  );
}

export default Id;