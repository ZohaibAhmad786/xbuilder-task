import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Center, HStack, Input, VStack } from 'native-base'
import { mvs, width } from '../constants/merices'
import PrimaryInput from './../components/input'
import { Container, Header, Content, Picker, Form } from 'native-base';
import {fieldsMock} from './../constants/mock'
import Button from '../components/button'
import ExtraFieldsModal from '../components/extra-fields-modal'
const MainScreen = () => {

    const [fields, setFields] = React.useState([])
    const [openModal,setOpenModal] = React.useState(false)


    return (
        <VStack flex={1} bgColor="#fff">

            <VStack p={mvs(10)} flex={1}>
                <VStack>
                    <PrimaryInput placeholder="Company Name" label={"Company Name"} onChangeText={() => { }} />
                    {fields.map((field, i) => (
                        <VStack my={mvs(30)} key={i}>
                            <PrimaryInput placeholder="Field" label={"Field 1"} fieldType="NUMBER" allowExtraFields />
                        </VStack>
                    ))}

                    <HStack justifyContent={"space-between"} alignItems="center">
                        <Button btntitle={"Add New Field"} width={'47%'} onPress={() => {

                            // let cloneList = [...fields];
                            // cloneList.push({ title: '', type: 'TEXT', isTitle: false });
                            // setFields(cloneList)
                            setOpenModal(true)

                        }} />
                        <Button btntitle={"Remove"} width={'47%'} onPress={() => { }} />
                    </HStack>
                </VStack>


            </VStack>
            {openModal && (
        <ExtraFieldsModal
          visible={openModal}
          title="Choose new field type"
          list={fieldsMock}
        //   prevVal={openModal}
          onClose={() =>
           setOpenModal(false)
          }
          onSubmit={obj =>
            setOpenModal(false)
          }
        />
      )}
           
        </VStack>
    )
}

export default MainScreen

const styles = StyleSheet.create({})