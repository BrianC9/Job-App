import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';
import { icons, SIZES } from '../../../constants';
import { useRouter } from 'expo-router';
import styles from './welcome.style';

const Welcome = () => {
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
            placeholder='FullStack Engineer, Project Manager...'
          />

          <TouchableOpacity></TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Welcome;
