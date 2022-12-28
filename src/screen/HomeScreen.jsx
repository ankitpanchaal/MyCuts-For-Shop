import { FontAwesome5 } from '@expo/vector-icons'
import { View, Text, HStack, Image, Spacer, ScrollView, Spinner } from 'native-base'
import React from 'react'
import { TouchableOpacity } from 'react-native'
import BookingsCard from '../Components/BookingsCard'
import ServiceCard from '../Components/ServiceCard'
import { CallAPI } from '../utils/APIcall'
import { GET_Services } from '../utils/Query'

const HomeScreen = ({ navigation }) => {
    const { loading, error, data } = CallAPI(GET_Services, "services")
    // console.log(data);
    return (
        <View flex={1} bg='bg' >
            <HStack bg='text' px={8} py={4} borderBottomRadius={26} alignItems='center' >
                <Image mt={6}
                    source={{ uri: "https://imgd.aeplcdn.com/1056x594/n/cw/ec/102709/ntorq-125-right-front-three-quarter.jpeg?isig=0&q=75" }}
                    alt="Image" h={58} width={58} borderRadius={18}
                />
                <Text fontFamily='body' fontSize={22} color='bg' mt={5} ml="23%" underline
                    fontWeight={600} >Mirror</Text>

                <Spacer />

                <TouchableOpacity onPress={() => navigation.navigate("AddServices")} >
                    <View bg='bg' p={2} borderRadius={14} alignItems='center' mt={6} >
                        <FontAwesome5 name="plus" size={12} color="black" />
                        <Text fontFamily='body' fontSize={10} fontWeight={500} >Service</Text>
                    </View>
                </TouchableOpacity>
            </HStack>

            {/* Services */}
            <View mt={4} ml={2} >
                <Text fontFamily='body' fontSize={16} color='text'
                    fontWeight={600} >Your Services</Text>
                <View mt={2} >
                    {loading ? <Spinner size='lg' color='red' /> :
                        <ServiceCard navigation={navigation} apiData={data.AllServices} />}
                </View>
            </View>

            {/* Dashboard */}
            <View mt={8} >
                <Text fontFamily='body' fontSize={20} color='text'
                    fontWeight={600} alignSelf='center' underline >Dashboard</Text>

                <HStack bg='#fff' borderRadius={12} mt={5} mx={2}
                    alignItems='center'
                    shadow={1} padding={5} justifyContent='space-evenly' >
                    <View padding={4} borderRadius={50} px={5} >
                        <FontAwesome5 name="minus" size={36} color="black" />
                    </View>

                    <View bg='bg' padding={4} borderRadius={50} px={5} >
                        <Text fontSize={38} color="text" px={3.5} fontFamily='body' fontWeight={700} >3</Text>
                    </View>

                    <View padding={4} borderRadius={50} px={5} >
                        <FontAwesome5 name="plus" size={36} color="black" />
                    </View>
                </HStack>
            </View>

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

        </View>
    )
}

export default HomeScreen