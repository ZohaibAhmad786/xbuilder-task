import React from 'react';
import { Text } from 'react-native';

const SemiBold = ({label, custTextStyle = {}, ...props}) => {
  return (
    <Text style={{ ...custTextStyle}} {...props}>
      {label}
    </Text>
  );
};

export default React.memo(SemiBold);
