import styles from "./nearbyjobcard.style";

import { View, Text, TouchableOpacity, Image } from "react-native";
import { checkImageURL } from "../../../../utils/checkImage";

const NearbyJobCard = ({ item, handleNavigateCard }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={handleNavigateCard}>
      <TouchableOpacity>
        <TouchableOpacity style={styles.logoContainer}>
          <Image
            source={{
              uri: checkImageURL(item?.employer_logo)
                ? item.employer_logo
                : "https://t4.ftcdn.net/jpg/05/05/61/73/360_F_505617309_NN1CW7diNmGXJfMicpY9eXHKV4sqzO5H.jpg",
            }}
            style={styles.logImage}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </TouchableOpacity>

      <View style={styles.textContainer}>
        <Text numberOfLines={1} style={styles.jobName}>
          {item.job_title}
        </Text>
        <Text style={styles.jobType}>{item.job_employment_type}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default NearbyJobCard;
