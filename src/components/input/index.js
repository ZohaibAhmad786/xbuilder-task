
import { Box, Input, HStack, VStack, Center } from 'native-base';
import React, { useState } from 'react';
import { StyleSheet, Text } from 'react-native';
import { mvs } from '../../constants/merices';

const PrimaryInput = ({
  maxlength = 25,
  label,
  placeholder,
  secureTextEntry,
  value,
  onChangeText,
  fieldType,
  deletField,
  allowExtraFields = false,
  ...props
}) => {


  const [focused, setFocused] = useState(false);

  const [isSecure, setIsSecure] = useState(secureTextEntry);


  return (
    <VStack>
      <Box
        left={mvs(22)}
        top={-10}
        px={mvs(5)}
        zIndex={1001}
        bg={"#fff"}
        position="absolute">
        <Text

          style={{
            fontSize: mvs(15),
            fontWeight: '400',
            color: '#000',
          }}
        >
          {label}
        </Text>
      </Box>
      <HStack bgColor={'green.100.800'} >
        <HStack borderColor={'#000'}
          borderWidth={StyleSheet.hairlineWidth} flex={1}
          borderRadius={mvs(8)}>
          <Input
            height={mvs(46)}
            width={allowExtraFields?'70%':'100%'}
            {...props}
            value={value}
            secureTextEntry={isSecure}
            borderColor={'#000'}
            borderWidth={mvs(1)}
            px={mvs(10)}
            placeholder={placeholder}
            fontSize={mvs(15)}
            fontWeight="400"
            // fontFamily={fonts.carosSoftRegular}
            borderRadius={mvs(8)}
            maxLength={maxlength}
            color={'#000'}
            backgroundColor={"#fff"}
            placeholderTextColor={'#E0E0E0'}
            onFocus={() => setFocused(true)}
            onChangeText={onChangeText}
            _focus={{ borderColor: "#000" }}
          />

          {allowExtraFields && <Center flex={1}>
            <Text>{fieldType}</Text>
          </Center>}

        </HStack>
        {allowExtraFields && <Center style={{ width: '20%' }}>
          <Text>Delete</Text>
        </Center>
        }
      </HStack>
    </VStack>
  );
};
export default PrimaryInput;

const styles = StyleSheet.create({
  errorText: {
    fontSize: mvs(14),
    color: 'red',
    marginTop: mvs(3),
  },
});
