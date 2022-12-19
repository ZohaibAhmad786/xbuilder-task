
import React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import ReactNativeModal from 'react-native-modal';
import { mvs } from '../constants/merices';
import PALETTE from '../constants/palette';
import OwnPackageType from './own-package-type';
import Bold from './typo-graphy/bold';

const ExtraFieldModal = ({
  visible,
  title,
  list,
  prevVal,
  onClose,
  onSubmit,
}) => {

  return (
    <ReactNativeModal
      onBackdropPress={onClose}
      isVisible={visible}
      style={{ margin: 0, padding: 0 }}
      onBackButtonPress={onClose}>
      <View style={styles.CONTAINER}>
        <View style={{ marginBottom: mvs(20) }}>
          <Bold label={title} custTextStyle={styles.heading} />
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
          {list.map((item, index) => (
            <OwnPackageType
              key={index}
              title={item.title || item.value || item.name || item.type || `${item.brand} ${item.model}`}
              status={false}
              onPress={() =>
                onSubmit({
                  index: index,
                  ...item,
                })
              }
            />
          ))}
        </ScrollView>
      </View>
    </ReactNativeModal>
  );
};

export default React.memo(ExtraFieldModal);

const styles = StyleSheet.create({
  LABEL_WRAPPER: {
    width: '100%',
    paddingHorizontal: mvs(16),
    minHeight: mvs(52),
    backgroundColor: PALETTE.white,
    borderWidth: mvs(1),
    borderColor: `${PALETTE.black}20`,
    borderRadius: mvs(6),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: mvs(10),
  },
  CONTAINER: {
    position: 'absolute',
    bottom: -2,
    left: mvs(0),
    padding: mvs(22),
    right: mvs(0),
    maxHeight: mvs(300),
    borderTopLeftRadius: mvs(6),
    borderTopRightRadius: mvs(6),
    backgroundColor: PALETTE.white,
  },
  rowContainer: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
  },
  heading: { fontSize: mvs(18), color: PALETTE.black },
  description: { fontSize: mvs(16), color: PALETTE.black },
  btnLabel: {
    fontSize: mvs(16),
    color: PALETTE.black,
    marginHorizontal: mvs(10),
  },
});
