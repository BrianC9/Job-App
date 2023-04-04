import { Stack, useRouter, useSearchParams } from "expo-router";
import { useState } from "react";
import {
  ActivityIndicator,
  RefreshControl,
  SafeAreaView,
  ScrollView,
  Share,
  Text,
  View
} from "react-native";
import {
  Company,
  JobFooter,
  JobTabs,
  ScreenHeaderBtn
} from "../../components";
import InfoTabs from "../../components/jobdetails/tabs/InfoTabs";
import { COLORS, SIZES, icons } from "../../constants";
import { useFetch } from "../../hooks/useFetch";
const TABS = ["About", "Qualifications", "Responsibilities", "Benefits"];
function Id() {
  const [refreshing, setRefreshing] = useState(false);
  const [activeTab, setActiveTab] = useState(TABS[0]);
  const router = useRouter();
  const params = useSearchParams();
  // const isLoading = false;
  // const error = false;
  // const job = localeJobsMock.find((item) => item.job_id === params.id);
  // const data = [job];
  const { data, isLoading, error, refetch } = useFetch({
    endpoint: "job-details",
    query: { job_id: params.id },
  });
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
              <JobTabs
                TABS={TABS}
                activeTab={activeTab}
                setActiveTab={setActiveTab}
              />
              <InfoTabs activeTab={activeTab} job={data[0]} />
            </View>
          )}
        </ScrollView>
        <JobFooter
          url={
            data[0]?.job_google_link ?? "https://careers.google.com/jobs/results"
          }
        />
      </>
    </SafeAreaView>
  );
}

export default Id;
