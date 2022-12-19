import React from 'react';
import {Text} from 'react-native';

const Medium = ({label, custTextStyle = {}, ...props}) => {
  return (
    <Text style={{ ...custTextStyle}} {...props}>
      {label}
    </Text>
  );
};

export default Medium
