import { FontAwesome5, Fontisto, MaterialIcons } from '@expo/vector-icons'
import { View, Text, HStack, Image, Spacer, ScrollView, Spinner, Button } from 'native-base'
import React, { useEffect } from 'react'
import { TouchableOpacity } from 'react-native'
import BookingsCard from '../Components/BookingsCard'
import Dashboard from '../Components/Dashboard'
import ServiceCard from '../Components/ServiceCard'
import { CallAPI } from '../utils/APIcall'
import { GET_Services } from '../utils/Query'

const HomeScreen = ({ navigation, route }) => {
    const { shopsData } = route.params || {};
    console.log(shopsData);

    const { loading, error, data } = CallAPI(GET_Services, "services")

    return (
        <View flex={1} bg='bg' >
            <HStack bg='text' px={8} py={4}
                borderBottomRadius={26} alignItems='center' alignSelf='center'
            >
                <TouchableOpacity onPress={() => navigation.navigate("Profile", { shopsData })} >
                    <Image mt={6}
                        source={
                            {
                                uri: shopsData?.Image ? `${shopsData?.Image}` :
                                    "https://www.shutterstock.com/image-photo/adult-woman-hairdresser-wearing-protective-600w-1756653821.jpg"
                            }
                        }
                        alt="Image" h={58} width={58} borderRadius={18} mr={4}
                    />
                </TouchableOpacity>

                <View>
                    <Text fontFamily='body' fontSize={16} color='bg' mt={5} underline
                        fontWeight={700}
                        mr={20}
                    >{shopsData?.ShopName}</Text>
                </View>

                <Spacer />

                <TouchableOpacity onPress={() => navigation.navigate("AddServices", { shopsData })} >
                    <View bg='bg' p={2} borderRadius={14} alignItems='center' mt={6} >
                        <FontAwesome5 name="plus" size={12} color="black" />
                        <Text fontFamily='body' fontSize={10} fontWeight={500} >Service</Text>
                    </View>
                </TouchableOpacity>
            </HStack>

            {/* Services */}
            <View mt={4} ml={2} >
                <HStack alignItems='center' >
                    <MaterialIcons name="design-services" size={18} color="green" />
                    <Text fontFamily='body' fontSize={16} color='text' mt={2} ml={2}
                        fontWeight={600} >Your Services</Text>
                </HStack>
                <View mt={2} >
                    {loading ? <Spinner size='lg' color='red' /> :
                        <ServiceCard navigation={navigation} apiData={data.AllServices}
                            currShopID={shopsData?.ShopID} />}
                </View>
            </View>

            {/* Dashboard */}
            <Dashboard currShopID={shopsData?.ShopID} />

            {/* Bookings */}
            <View mt={6} mx={2} >
                <Text fontFamily='body' fontSize={16} color='text'
                    fontWeight={600} >Bookings</Text>
                <View mt={2} h={190} bg="#fff" borderRadius={12} shadow={2} p={5} >
                    <BookingsCard />
                </View>

                <TouchableOpacity>
                    <Text fontFamily='body' underline color='text' fontWeight={600} ml="83%" mt={1}
                    >View All</Text>
                </TouchableOpacity>
            </View>

        </View >
    )
}

export default HomeScreen