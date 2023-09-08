import React from "react";

import styles from "./popularjobcard.style";
import { checkImageURL } from "../../../../utils";
import { View, Text, TouchableOpacity, Image } from "react-native";

const PopularJobCard = ({ item, selectedJob, handleCardPress }) => {
  return (
    <TouchableOpacity
      style={styles.container(selectedJob, item)}
      onPress={() => handleCardPress(item)}
    >
      <TouchableOpacity style={styles.logoContainer(selectedJob, item)}>
        <Image
          resizeMode="contain"
          style={styles.logoImage}
          source={{
            uri: checkImageURL(item.employer_logo)
              ? item.employer_logo
              : "https://www.pngitem.com/pimgs/m/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png",
          }}
        />
      </TouchableOpacity>
      <Text
        numberOfLines={1}
        style={styles.companyName}
      >
        {item.employer_name}
      </Text>

      <View style={styles.infoContainer}>
        <Text
          numberOfLines={1}
          style={styles.jobName(selectedJob, item)}
        >
          {item.job_title}
        </Text>
        <Text style={styles.location}>{item.job_country}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default PopularJobCard;
