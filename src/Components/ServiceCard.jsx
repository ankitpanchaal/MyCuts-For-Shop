import { MaterialIcons } from '@expo/vector-icons'
import { View, Text, FlatList, HStack } from 'native-base'
import React from 'react'
import { TouchableOpacity } from 'react-native'

const data = [
    {
        id: 1,
        title: 'Hear Cuts',
        price: 80,
        description: "loram ashha agfhagf fahgfh agfgauuufaaf agfha",
        tag: "H dasfdssss"
    },
    {
        id: 2,
        title: 'Face Cleanning',
        price: 80,
        description: "loram ashha agfhagf fahgfh agfgauuufaaf agfha",
        tag: "a agfhagf fahg"
    },
    {
        id: 3,
        title: 'Beard Sawing',
        price: 80,
        description: "loram ashha agfhagf fahgfh agfgauuufaaf agfha",
        tag: "a agfhagf"
    },
    {
        id: 4,
        title: 'Spa',
        price: 80,
        description: "loram ashha agfhagf fahgfh agfgauuufaaf agfha",
        tag: "HI"
    },
]

const ServiceCard = ({ navigation, apiData, currShopID }) => {

    return (
        <FlatList
            data={apiData}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => {
                return (
                    item?.ShopID === currShopID ?
                        <TouchableOpacity activeOpacity={0.8}
                            onPress={() => navigation.navigate("EditService", { item })} >
                            <View borderRadius={12} shadow={1} p={3} px={6} bg="#FFF" mb={1} ml={2} >
                                <Text fontFamily='body' fontSize={12} color='text' fontWeight={500} >{item.title}</Text>

                                <HStack alignItems='center' my={1} >
                                    <MaterialIcons name="star-half" size={18} color="#ff8000" />
                                    <Text fontFamily='body' ml={1} fontSize={10} color="#ff8000"  >{item.tag}</Text>
                                </HStack>

                                <Text fontFamily='body' fontSize={12} color='text' mt={1} >Price: {item.price}</Text>
                            </View>
                        </TouchableOpacity>
                        : null
                )
            }}
        />
    )
}

export default ServiceCard