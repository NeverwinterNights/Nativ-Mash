import {Button, FlatList, Modal, StyleSheet, TextInputProps, TouchableWithoutFeedback, View} from 'react-native';
import {MaterialCommunityIcons} from "@expo/vector-icons";
import colors from "../config/colors";
import defaultStyles from "../config/styles"
import AppText from "./AppText";
import React, {ReactElement, useState} from 'react';
import {Screen} from "./Screen";
import {CategoryType} from "../App";
import {PickerItem} from "./PickerItem";

type  AppPickerPropsType = {
    icon?: keyof typeof MaterialCommunityIcons.glyphMap
    placeholder: string
    items: CategoryType[]
    selectedItem: CategoryType | null
    onSelectItem: (item: CategoryType) => void
    name?: string
    width?: string
    PickerItemComponent: ReactElement
}

export const AppPicker = ({
                              icon,
                              placeholder,
                              items,
                              selectedItem,
                              onSelectItem,
                              width = "100%",
                              PickerItemComponent=PickerItem,
                              ...restProps
                          }: AppPickerPropsType & TextInputProps) => {
    const [modalVisible, setModalVisible] = useState<boolean>(false);
    return (
        <>
            <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
                <View style={[styles.container, {width:width}]}>
                    {icon && <MaterialCommunityIcons name={icon} style={styles.icon} size={20} color={colors.medium}/>}
                    {selectedItem ? <AppText style={styles.text}>{selectedItem?.label}</AppText> :
                        <AppText style={styles.placeholder}>{placeholder}</AppText>}


                    {/*<AppText style={styles.placeholder}>{selectedItem ? selectedItem?.label : placeholder}</AppText>*/}
                    <MaterialCommunityIcons name={"chevron-down"} size={20} color={colors.medium}/>
                </View>
            </TouchableWithoutFeedback>
            <Modal visible={modalVisible} animationType={"slide"}>
                <Screen>
                    <Button title={"Close"} onPress={() => setModalVisible(false)}/>
                    <FlatList data={items}
                              keyExtractor={(item) => item.value.toString()}
                              renderItem={({item}) =>
                                  // <PickerItem
                                  <PickerItemComponent
                                  label={item.label}
                                  onPress={() => {
                                      setModalVisible(false)
                                      onSelectItem(item)
                                  }}/>}
                    />
                </Screen>
            </Modal>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: defaultStyles.colors.light,
        borderRadius: 25,
        flexDirection: "row",
        padding: 15,
        marginVertical: 10,
        alignItems: "center"
    },
    text: {
        flex: 1,
        fontSize: 18
    },
    placeholder: {
        color: defaultStyles.colors.medium,
        flex: 1,
        fontSize: 18
    },
    icon: {
        marginRight: 10
    },

});
