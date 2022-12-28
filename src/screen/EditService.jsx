import { useMutation } from '@apollo/client';
import { View, Text, Button, Center } from 'native-base'
import { TextInput } from 'react-native'
import { Delete_Service, GET_Services } from '../utils/Query';

const EditService = ({ navigation, route }) => {
    const { item } = route.params || {};
    const [deleteService] = useMutation(Delete_Service, {
        variables: { id: item.id },
        refetchQueries: [{ query: GET_Services }]
    })

    return (
        <View flex={1} bg='bg' >
            <Text fontFamily='body' fontSize={18} alignSelf='center'
                mt={12} underline fontWeight={600}
            >Your Service</Text>

            <View p={5} borderRadius={16} bg="#fff" m={5} >
                <View>
                    <Text fontWeight={500} fontSize={12} fontFamily="body" mb={0.5} >
                        Service Name</Text>
                    <TextInput
                        placeholder={`${item?.title}`}
                        style={{
                            backgroundColor: "#f7f7f7", padding: 6, borderRadius: 12, fontSize: 14, fontWeight: '500', paddingHorizontal: 12
                        }}
                    />
                </View>
                {/* price */}
                <View mt={4} >
                    <Text fontWeight={500} fontSize={12} fontFamily="body" mb={0.5} >
                        Service Price</Text>
                    <TextInput
                        placeholder={`${item?.price}`}
                        style={{
                            backgroundColor: "#f7f7f7", padding: 6, borderRadius: 12, fontSize: 14, fontWeight: '500', paddingHorizontal: 12
                        }}
                    />
                </View>
                {/* tag */}
                <View mt={4} >
                    <Text fontWeight={500} fontSize={12} fontFamily="body" mb={0.5} >
                        Service Price</Text>
                    <TextInput
                        placeholder={`${item?.tag}`}
                        style={{
                            backgroundColor: "#f7f7f7", padding: 6, borderRadius: 12, fontSize: 14, fontWeight: '500', paddingHorizontal: 12
                        }}
                    />
                </View>

                <Button p={3} bg="text" borderRadius={12} mt={10}
                    onPress={() => navigation.navigate("HomeScreen")} >
                    <Text color='white' fontSize={16} fontFamily='body'>Update</Text>
                </Button>

                <Button p={3} bg="bg" borderRadius={12}
                    borderWidth={1} borderColor='red.500'
                    mt={6}
                    onPress={deleteService}
                    onPressOut={() => navigation.goBack()}
                >
                    <Text color='red.500' fontSize={16} fontFamily='body'>Delete</Text>
                </Button>

            </View>
        </View>
    )
}

export default EditService