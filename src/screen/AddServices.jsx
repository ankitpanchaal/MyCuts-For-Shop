import { View, Text, Button } from 'native-base'
import { TextInput } from 'react-native'

const AddServices = () => {
    return (
        <View flex={1} bg='bg' >
            <Text fontFamily='body' fontSize={18} alignSelf='center'
                mt={12} underline fontWeight={600}
            >Add Services</Text>

            <View p={5} borderRadius={16} bg="#fff" m={5} >
                <View>
                    <Text fontWeight={500} fontSize={12} fontFamily="body" mb={0.5} >
                        Service Name</Text>
                    <TextInput
                        placeholder={`name`}
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
                        placeholder={`price`}
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
                        placeholder={`tag`}
                        style={{
                            backgroundColor: "#f7f7f7", padding: 6, borderRadius: 12, fontSize: 14, fontWeight: '500', paddingHorizontal: 12
                        }}
                    />
                </View>

                <Button p={3} bg="text" borderRadius={12} mt={10}
                // onPress={() => navigation.navigate("HomeScreen")}
                >
                    <Text color='white' fontSize={16} fontFamily='body'>Update</Text>
                </Button>

                <Button p={3} bg="bg" borderRadius={12}
                    borderWidth={1} borderColor='red.500'
                    mt={6}
                >
                    <Text color='red.500' fontSize={16} fontFamily='body'>Delete</Text>
                </Button>

            </View>
        </View>
    )
}

export default AddServices