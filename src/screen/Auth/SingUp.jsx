import { useMutation } from '@apollo/client'
import { FontAwesome5, Ionicons } from '@expo/vector-icons'
import { View, Text, HStack, Button, Image, ScrollView, Spinner } from 'native-base'
import React, { useState } from 'react'
import { TextInput } from 'react-native'
import { ADD_SHOP } from '../../utils/Query'

const SingUp = ({ navigation }) => {
    const [shopID, setShopID] = useState(12);
    const [shopName, setShopName] = useState('');
    const [image, setImage] = useState('d');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [phoneNo, setPhoneNo] = useState('');
    const [Dis, setDis] = useState('');
    const [name, setName] = useState('');
    const [location, setLocation] = useState('');
    const [Otime, setOtime] = useState('');
    const [Ctime, setCtime] = useState('');

    const [addShop] = useMutation(ADD_SHOP, {
        variables: { shopID, image, shopName, email, password, phoneNo, Dis, name, location, Otime, Ctime },

        // refetchQueries: [{ query: ADD_SHOP }]
    });

    const HandelSingUp = async () => {
        if (shopName == "" || email == "" || password == "" || phoneNo == "" || Dis == "" || name == "" || location == "" || Otime == "") {
            return alert("Please fill in all field");
        }
        //8016702347
        await addShop(shopID, image, shopName, email, password, phoneNo, Dis, name, location, Otime, Ctime);

        setShopName('')
        setEmail('')
        setPassword('')
        setPhoneNo('')
        setDis('')
        setName('')
        setLocation('')
        setOtime('')
        setCtime('')


        setTimeout(() => {
            <View flex={1} bg='red.300' >
                <Spinner />
            </View>
        }, 1000);

        if (!shopName == "" || !email == "" || !password == "" || !phoneNo == "" || !Dis == "" || !name == "" || !location == "" || !Otime == "") {
            navigation.goBack()
        }


    }

    return (
        <ScrollView flex={1} p={6} bg="bg" >
            {/* Header */}
            <HStack mt={8} alignItems='center' >
                <Button onPress={() => navigation.goBack()} p={0} m={0} >
                    <Ionicons name="ios-arrow-back" size={28} color="black" />
                </Button>
                <Text color='text' fontWeight={600} fontSize={22} ml="31%"
                    fontFamily="body" >Sing Up</Text>
            </HStack>

            <View py={12} mt={8} shadow={1} borderRadius="12px" bg='#f9fbfa' p={5} >

                <HStack>
                    <Button m={0} p={0}>
                        <Image
                            source={{ uri: "https://cdn-icons-png.flaticon.com/512/8775/8775475.png" }}
                            alt="Image" h={58} width={58} borderRadius={50}
                        />
                        <View position='absolute' right={0} top={10} >
                            <Ionicons name="ios-add-circle" size={24} color="black" />
                        </View>
                    </Button>
                    {/* shop name */}
                    <View ml={5} mt={3} w="55%" >
                        <TextInput
                            placeholder='Shop Name'
                            onChangeText={(e) => setShopName(e)}
                            style={{
                                borderBottomWidth: 1, borderColor: 'text', fontSize: 14, fontWeight: '500', paddingHorizontal: 12
                            }}
                        />
                    </View>
                </HStack>

                {/* Email */}
                <View mt={6} >
                    <Text fontWeight={500} fontSize={12} fontFamily="body" mb={0.5} >Email</Text>
                    <TextInput
                        placeholder='example@gmail.com'
                        onChangeText={(e) => setEmail(e)}
                        style={{
                            backgroundColor: "#FFF", padding: 6, borderRadius: 12, fontSize: 14, fontWeight: '500', paddingHorizontal: 12
                        }}
                    />
                </View>

                {/* Password */}
                <View mt={4} >
                    <Text fontWeight={500} fontSize={12} fontFamily="body" mb={0.5} >Password</Text>
                    <TextInput
                        placeholder='@!#$%^'
                        onChangeText={(e) => setPassword(e)}
                        style={{
                            backgroundColor: "#FFF", padding: 6, borderRadius: 12, fontSize: 14, fontWeight: '500', paddingHorizontal: 12
                        }}
                    />
                </View>

                {/* Phone no. */}
                <View mt={4} >
                    <Text fontWeight={500} fontSize={12} fontFamily="body" mb={0.5} >Phone No.</Text>
                    <TextInput
                        placeholder='999999999'
                        onChangeText={(e) => setPhoneNo(e)}
                        style={{
                            backgroundColor: "#FFF", padding: 6, borderRadius: 12, fontSize: 14, fontWeight: '500', paddingHorizontal: 12
                        }}
                    />
                </View>

                {/* Disc */}
                <View mt={4} >
                    <Text fontWeight={500} fontSize={12} fontFamily="body" mb={0.5} >Description</Text>
                    <TextInput
                        placeholder='My shop is good'
                        onChangeText={(e) => setDis(e)}
                        style={{
                            backgroundColor: "#FFF", padding: 6, borderRadius: 12, fontSize: 14, fontWeight: '500', paddingHorizontal: 12
                        }}
                    />
                </View>

                {/* your name */}
                <View mt={4} >
                    <Text fontWeight={500} fontSize={12} fontFamily="body" mb={0.5} >Your Name</Text>
                    <TextInput
                        placeholder='Your Name'
                        onChangeText={(e) => setName(e)}
                        style={{
                            backgroundColor: "#FFF", padding: 6, borderRadius: 12, fontSize: 14, fontWeight: '500', paddingHorizontal: 12
                        }}
                    />
                </View>

                {/* location */}
                <View mt={4} >
                    <Text fontWeight={500} fontSize={12} fontFamily="body" mb={0.5} >Location</Text>
                    <HStack w="100%" >
                        <TextInput
                            placeholder='Location'
                            onChangeText={(e) => setLocation(e)}
                            style={{
                                width: "90%", backgroundColor: "#FFF", padding: 6, borderRadius: 12, fontSize: 14, fontWeight: '500', paddingHorizontal: 12
                            }}
                        />
                        <Button m={0} p={0} alignItems='center' ml={3} >
                            <FontAwesome5 name="map-marker-alt" size={20} color="#00684a" />
                        </Button>
                    </HStack>
                </View>

                {/* Time */}
                <View mt={4} >
                    <Text fontWeight={500} fontSize={12} fontFamily="body" mb={0.5} >Time</Text>
                    <HStack w="100%" justifyContent='space-between' >
                        <TextInput
                            placeholder='Open Time'
                            onChangeText={(e) => setOtime(e)}
                            style={{
                                width: "46%", backgroundColor: "#FFF", padding: 6, borderRadius: 12, fontSize: 14, fontWeight: '500', paddingHorizontal: 12
                            }}
                        />

                        <TextInput
                            placeholder='Close Time'
                            onChangeText={(e) => setCtime(e)}
                            style={{
                                width: "46%", backgroundColor: "#FFF", padding: 6, borderRadius: 12, fontSize: 14, fontWeight: '500', paddingHorizontal: 12
                            }}
                        />
                    </HStack>
                </View>

                <Button p={3} bg="text" borderRadius={12} mt={10}
                    onPress={HandelSingUp}
                // onPressOut={() => navigation.navigate("HomeScreen")}
                >
                    <Text color='white' fontSize={16} fontFamily='body'>Sing Up</Text>
                </Button>

            </View>
        </ScrollView>
    )
}

export default SingUp