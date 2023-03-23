import React from "react";
import { View, Text, Image } from "react-native";
import { checkImageURL } from "../../../utils/checkImage";

import styles from "./company.style";

const Company = ({ companyLogo, companyName, jobTitle, location }) => {
  return (
    <View style={styles.container}>
      <View style={styles.logoBox}>
        <Image
          source={{
            uri: checkImageURL(companyLogo)
              ? companyLogo
              : "https://t4.ftcdn.net/jpg/05/05/61/73/360_F_505617309_NN1CW7diNmGXJfMicpY9eXHKV4sqzO5H.jpg",
          }}
          style={styles.logoImage}
          resizeMode="contain"
        />
      </View>
      <Text style={styles.jobTitle}>{jobTitle}</Text>
      <Text style={styles.companyName}>{companyName}</Text>
      <Text style={styles.locationName}>{location}</Text>
    </View>
  );
};

export default Company;
