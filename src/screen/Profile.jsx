import { AntDesign, Entypo, Feather, FontAwesome, Ionicons, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import { View, Text, Image, HStack, Spacer, Button } from 'native-base'
import React from 'react'

const Profile = ({ route, navigation }) => {
    const { shopsData } = route.params || {};

    return (
        <View flex={1} bg="bg" >
            <HStack mt={12} alignItems='center' ml={4} >
                <Button onPress={() => navigation.goBack()} p={0} m={0} >
                    <Ionicons name="ios-arrow-back" size={28} color="black" />
                </Button>
                <Text color='text' fontWeight={600} fontSize={18} ml="3"
                    fontFamily="body" >Profile</Text>
            </HStack>

            <View mt={4} >
                <Image
                    alt='img'
                    h="170" w="96%" borderRadius={16} alignSelf='center'
                    source={{ uri: shopsData?.Image }}
                />
                <View mx={4} bg='text' borderRadius={16} p={7} mt="6">
                    <DetailsCard t1='Shop Name' t2={shopsData?.ShopName}
                        icon={
                            <View mr={1} >
                                <Entypo name="shop" size={20} color="#e3fcf7" />
                            </View>
                        }
                    />
                    <DetailsCard t1='Shop Description' t2={shopsData?.description}
                        icon={
                            <View mr={1} >
                                <MaterialCommunityIcons name="subtitles-outline" size={20} color="#e3fcf7" />
                            </View>
                        }
                    />
                    <DetailsCard t1='Shop Email' t2={shopsData?.email}
                        icon={
                            <View mr={1} >
                                <MaterialIcons name="email" size={20} color="#e3fcf7" />
                            </View>
                        }
                    />
                    <DetailsCard t1='Shop Phone No.' t2={shopsData?.phone}
                        icon={
                            <View mr={1} >
                                <Feather name="phone-call" size={20} color="#e3fcf7" />
                            </View>
                        }
                    />
                    <DetailsCard t1='Shop Location' t2={shopsData?.Location}
                        icon={
                            <View mr={1} >
                                <Ionicons name="ios-location" size={20} color="#e3fcf7" />
                            </View>
                        }
                    />
                    <DetailsCard t1='password' t2={shopsData?.password}
                        icon={
                            <View mr={1} >
                                <MaterialIcons name="keyboard-hide" size={20} color="#e3fcf7" />
                            </View>
                        }
                    />
                    <DetailsCard t1='Shop ID' t2={shopsData?.ShopID}
                        icon={
                            <View mr={1} >
                                <FontAwesome name="id-card" size={20} color="#e3fcf7" />
                            </View>
                        }
                    />
                    <DetailsCard t1='For Mans' t2={shopsData?.isMan ? "YES" : "NO"}
                        icon={
                            <View mr={1} >
                                <AntDesign name="question" size={20} color="#e3fcf7" />
                            </View>
                        }
                    />
                    <DetailsCard t1='For Womans' t2={shopsData?.isWoman ? "YES" : "NO"}
                        icon={
                            <View mr={1} >
                                <AntDesign name="question" size={20} color="#e3fcf7" />
                            </View>
                        }
                    />
                </View>
            </View>
        </View>
    )
}

export default Profile

const DetailsCard = ({ t1, t2, icon = "" }) => {
    return (
        <HStack mb={3} alignItems='center' >
            {icon}
            <Text fontFamily='body' fontSize={14}
                w="45%" fontWeight={500} color='white'
            >{t1} - </Text>
            <Text fontFamily='body' fontSize={14} w="52%"
                fontWeight={400} color="#c2c2c2"
            >{t2}</Text>
        </HStack>
    )
}