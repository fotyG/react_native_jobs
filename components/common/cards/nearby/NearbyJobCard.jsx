import React from "react";

import styles from "./nearbyjobcard.style";
import { checkImageURL } from "../../../../utils";
import { View, Text, TouchableOpacity, Image } from "react-native";

const NearbyJobCard = ({ job, handleNavigate }) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={handleNavigate}
    >
      <TouchableOpacity style={styles.logoContainer}>
        <Image
          resizeMode="contain"
          style={styles.logoImage}
          source={{
            uri: checkImageURL(job.employer_logo)
              ? job.employer_logo
              : "https://www.pngitem.com/pimgs/m/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png",
          }}
        />
      </TouchableOpacity>

      <View style={styles.textContainer}>
        <Text
          numberOfLines={1}
          style={styles.jobName}
        >
          {job.job_title}
        </Text>
        <Text style={styles.jobType}>{job.job_employment_type}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default NearbyJobCard;
