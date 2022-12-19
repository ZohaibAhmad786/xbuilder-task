// import PALETTE from '@config/palette';
import DateTimePicker from "react-native-modal-datetime-picker";
import React from 'react';
import PALETTE from "../constants/palette";

export const DateModal = ({ minimumDate = new Date(), date = new Date(), open = false, onConfirm = () => { }, onCancel = () => { }, mode = 'time' }) => {

    return (
        <React.Fragment>

                <DateTimePicker
                    testID="dateTimePicker"
                    date={date}
                    isVisible={open}
                    mode={mode}
                    display="default"
                    buttonTextColorIOS={PALETTE.black}
                    minimumDate={minimumDate}
                    is24Hour={true}
                    onConfirm={onConfirm}
                    onCancel={onCancel}
                    
                />
        </React.Fragment>
    )
}
