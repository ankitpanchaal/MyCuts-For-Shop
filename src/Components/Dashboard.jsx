import { useMutation } from '@apollo/client'
import { FontAwesome5, Fontisto, MaterialCommunityIcons } from '@expo/vector-icons'
import { View, Text, HStack, Button, Spinner } from 'native-base'
import React, { useState } from 'react'
import { CallAPI } from '../utils/APIcall'
import { GET_SHOPS, UPDATE_QUEUE } from '../utils/Query'

const Dashboard = ({ currShopID }) => {

    const { loading, error, data } = CallAPI(GET_SHOPS, "ALLSHOPS")

    let Mydata = 0;
    data.AllShopes.map((item, i) => {
        if (data?.AllShopes[i]?.ShopID == currShopID) {
            Mydata = item;
        }
    })

    //Updating the queuy
    const [Queue, setQueue] = useState(Mydata?.Queue)
    const [ID, setID] = useState(Mydata.id)

    const [UpdateQ] = useMutation(UPDATE_QUEUE, {
        variables: { id: ID, Queue: Queue },
        refetchQueries: [{
            query: GET_SHOPS,
            variables: { id: ID }
        }]
    })

    const ActivityMinus = async () => {
        await setQueue(Queue - 1);
        await UpdateQ(ID, Queue);
        console.log("minus");
    }
    const ActivityPlus = async () => {
        await setQueue(Queue + 1);
        await UpdateQ(ID, Queue);
        console.log("plus");
    }

    return (
        <View mt={8} >
            <HStack alignSelf='center' alignItems='center' >
                <MaterialCommunityIcons name="view-dashboard-edit-outline" size={22} color="black" />
                <Text fontFamily='body' fontSize={20} color='text' ml={2}
                    fontWeight={600} underline >Dashboard</Text>
            </HStack>
            <View bg='#fff' borderRadius={12} mt={5} mx={4} >
                <HStack alignItems='center' m={3} >
                    <Fontisto name="persons" size={16} color="black" />
                    <Text color='text' ml={2}
                        fontSize={12} fontFamily='body' fontWeight={600}
                    >Update Current Queue</Text>
                </HStack>
                <HStack alignItems='center'
                    shadow={1} padding={5} justifyContent='space-evenly' >
                    <Button padding={4} borderRadius={50} px={5}
                        onPress={ActivityMinus}
                    >
                        <FontAwesome5 name="minus" size={36} color="black" />
                    </Button>

                    <View bg='bg' padding={4} borderRadius={50} px={5} >
                        {
                            loading ? <Spinner /> :
                                <Text fontSize={38} color="text" px={3.5} fontFamily='body'
                                    fontWeight={700} >{Mydata?.Queue}</Text>
                        }
                    </View>

                    <Button padding={4} borderRadius={50} px={5}
                        onPress={ActivityPlus}
                    >
                        <FontAwesome5 name="plus" size={36} color="black" />
                    </Button>
                </HStack>
            </View>
        </View>
    )
}

export default Dashboard