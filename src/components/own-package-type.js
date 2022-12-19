
import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { mvs } from '../constants/merices';
import PALETTE from '../constants/palette';
import SemiBold from './typo-graphy/semiBold';



class OwnPackageType extends React.Component {
  render() {

    const { title, onPress = () => { }, status } = this.props

    return (
      <TouchableOpacity
        activeOpacity={0.5}
        onPress={onPress}
        style={{
          ...styles.container,
          borderColor: status ? PALETTE.CF2D39 : `${PALETTE.black}20`,
          backgroundColor: status ? `${PALETTE.CF2D39}02` : PALETTE.white,
        }}>
        <View style={{ flex: 1 }}>
          <SemiBold
            label={title}
            custTextStyle={{
              ...styles.title,
              color: status ? PALETTE.CF2D39 : `${PALETTE.black}`,
            }}
          />
        </View>
        {/* <View
          style={{ flex: 0.15, justifyContent: 'center', alignItems: 'center' }}>
          <Icon height={mvs(22)} width={mvs(22)} />
        </View> */}
      </TouchableOpacity>
    );
  };
}

export default OwnPackageType

const styles = StyleSheet.create({
  container: {
    borderWidth: mvs(1),
    marginVertical: mvs(10),
    borderColor: `${PALETTE.black}20`,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: mvs(14),
    borderRadius: mvs(6),
  },
  title: {
    fontSize: mvs(16),
    color: PALETTE.black,
  },
});
