import React from 'react';
import { Text } from 'react-native';

const Regular = ({label, custTextStyle = {}, ...props}) => {
  return (
    <Text style={{ ...custTextStyle}} {...props}>
      {label}
      {props.children}
    </Text>
  );
};

export default React.memo(Regular);
