import React from 'react';
import {Text} from 'react-native';

const Bold = ({label, custTextStyle = {}, ...props}) => {
  return (
    <Text style={{ ...custTextStyle}} {...props}>
      {label}
      {props.children}
    </Text>
  );
};

export default React.memo(Bold);
