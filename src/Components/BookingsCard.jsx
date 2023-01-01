import { FlatList, HStack, Image, View, Text, Spacer } from 'native-base'

const BookingsCard = () => {
    return (
        <FlatList
            showsVerticalScrollIndicator={false}
            data={[1, 2, 3, 4, 5]}
            keyExtractor={key => key}
            renderItem={({ item }) =>
                <HStack padding={2} bg='bg' borderRadius={12} shadow={1} mb={1.5} alignItems='center' >
                    <Image
                        alt='s'
                        size={12}
                        source={{ uri: "https://cdn-icons-png.flaticon.com/512/470/470372.png" }}
                    />
                    <View ml="4"  >
                        <Text fontFamily='body' fontSize={14} fontWeight={600} color="#ff8000" >Hair cuts</Text>
                    </View>

                    <Spacer />
                    <View mr="2"  >
                        <Text fontFamily='body' fontSize={14} fontWeight={600} color="text" >12rs</Text>
                    </View>
                </HStack>
            }
        />
    )
}

export default BookingsCard