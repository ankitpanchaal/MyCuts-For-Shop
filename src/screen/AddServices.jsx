import { useMutation } from '@apollo/client';
import { Ionicons } from '@expo/vector-icons';
import { View, Text, Button, KeyboardAvoidingView, HStack } from 'native-base'
import { useState } from 'react'
import { TextInput } from 'react-native'
import { ADDSERVICE_s, GET_Services, GET_SHOPS } from '../utils/Query'

const AddServices = ({ route, navigation }) => {
    const { shopsData } = route.params || {};

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [shopID, setShopID] = useState(shopsData?.ShopID);
    const [image, setImage] = useState('');
    const [offer, setOffer] = useState(false);
    const [offerDis, setOfferDis] = useState('NA');
    const [Tag, settag] = useState('');

    const [AddSer] = useMutation(ADDSERVICE_s, {
        variables: { title, description, price, shopID, image, offer, offerDis, Tag },
        refetchQueries: [{ query: GET_Services }],
    });

    const ADDSERVICE = async () => {

        if (title == "" || price == "" || Tag == "" || description == "") {
            return alert("Please fill in all field");
        }

        await AddSer(title, description, price, shopID, image, offer, offerDis, Tag)

        navigation.goBack();

        setTitle('')
        setDescription('')
        setPrice('')
        setImage('')
        setOffer(false)
        setOfferDis('')
        settag('')

    }

    return (
        <View flex={1} bg='bg' >
            <HStack mt={12} alignItems='center' ml={4} >
                <Button onPress={() => navigation.goBack()} p={0} m={0} >
                    <Ionicons name="ios-arrow-back" size={28} color="black" />
                </Button>
                <Text color='text' fontWeight={600} fontSize={22} ml="3"
                    fontFamily="body" >Add Services</Text>
            </HStack>

            <KeyboardAvoidingView>
                <View p={5} borderRadius={16} bg="#fff" m={5} >

                    <View>
                        <Text fontWeight={500} fontSize={12} fontFamily="body" mb={0.5} >
                            Service Name</Text>
                        <TextInput
                            onChangeText={(e) => setTitle(e)}
                            placeholder={`Service Name`}
                            style={{
                                backgroundColor: "#f7f7f7",
                                padding: 6, borderRadius: 12,
                                fontSize: 14,
                                fontWeight: '500', paddingHorizontal: 12
                            }}
                        />
                    </View>
                    {/* price */}
                    <View mt={4} >
                        <Text fontWeight={500} fontSize={12} fontFamily="body" mb={0.5} >
                            Price</Text>
                        <TextInput
                            placeholder={`Service Price`}
                            onChangeText={(e) => setPrice(e)}
                            style={{
                                backgroundColor: "#f7f7f7", padding: 6, borderRadius: 12, fontSize: 14, fontWeight: '500', paddingHorizontal: 12
                            }}
                        />
                    </View>
                    {/* tag */}
                    <View mt={4} >
                        <Text fontWeight={500} fontSize={12} fontFamily="body" mb={0.5} >
                            Tag</Text>
                        <TextInput
                            placeholder={`Service Tag`}
                            onChangeText={(e) => settag(e)}
                            style={{
                                backgroundColor: "#f7f7f7", padding: 6, borderRadius: 12, fontSize: 14, fontWeight: '500', paddingHorizontal: 12
                            }}
                        />
                    </View>
                    {/* description */}
                    <View mt={4} >
                        <Text fontWeight={500} fontSize={12} fontFamily="body" mb={0.5} >
                            Description</Text>
                        <TextInput
                            placeholder={`Service Description`}
                            onChangeText={(e) => setDescription(e)}
                            style={{
                                backgroundColor: "#f7f7f7", padding: 6, borderRadius: 12, fontSize: 14, fontWeight: '500', paddingHorizontal: 12
                            }}
                        />
                    </View>



                    <Button p={3} bg="text" borderRadius={12} mt={10}
                        // onPress={() => navigation.navigate("HomeScreen")}
                        onPress={ADDSERVICE}
                    >
                        <Text color='white' fontWeight={600} fontSize={16} fontFamily='body'>ADD</Text>
                    </Button>

                </View>
            </KeyboardAvoidingView>
        </View>
    )
}

export default AddServices