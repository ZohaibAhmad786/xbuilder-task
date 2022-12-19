
import {Pressable, Text} from 'native-base';
import React from 'react';
import { mvs } from '../../constants/merices';

const Button = ({btntitle,width=null,onPress}) => {

  return (
    <Pressable
      onPress={onPress}
      _pressed={{
        bg: `#ffffff80`,
      }}
      height={mvs(46)}
      justifyContent="center"
      alignItems="center"
      borderColor={'#000'}
      borderWidth={mvs(1)}
      px={mvs(10)}
      borderRadius={mvs(8)}
      width={width ?width : '100%'}
      bg={"#ffffff"}>
      <Text>{btntitle}</Text>
    </Pressable>
  );
};

export default Button
