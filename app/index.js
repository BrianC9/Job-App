import { View, Text, SafeAreaView } from 'react-native';
import { useState } from 'react';
import { Stack, useRouter } from 'expo-router';

import { COLORS, SIZES, icons, images } from '../constants';
import {
  Popularjobs,
  Nearbyjobs,
  ScreenHeaderBtn,
  Welcome,
} from '../components';
import { ScrollView } from 'react-native-gesture-handler';

export default function Home() {
  const handlePress = (e) => {};
  return (
    <SafeAreaView
      style={{
        flex: 1,
        padding: SIZES.medium,
        backgroundColor: COLORS.lightWhite,
      }}
    >
      <Stack.Screen
        options={{
          headerStyle: {
            backgroundColor: COLORS.lightWhite,
          },

          headerTitle: '',
          headerShadowVisible: false,
          headerLeft: () => (
            <ScreenHeaderBtn
              iconUrl={icons.menu}
              dimension='60%'
              handlePress={handlePress}
            />
          ),
          headerRight: () => (
            <ScreenHeaderBtn
              iconUrl={images.profile}
              dimension='100%'
              handlePress={handlePress}
            />
          ),
        }}
      />
      <ScrollView
        style={{
          flex: 1,
          backgroundColor: COLORS.lightWhite,
        }}
      >
        <Welcome />
        <Popularjobs />
        <Nearbyjobs />
      </ScrollView>
    </SafeAreaView>
  );
}
