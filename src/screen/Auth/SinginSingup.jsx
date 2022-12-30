
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Button, Center, HStack, Image, Spacer, Spinner, Text, View } from 'native-base'
import React, { useState } from 'react'
import { TextInput, TouchableOpacity } from 'react-native'
import { CallAPI } from '../../utils/APIcall';
import { GET_SHOPS } from '../../utils/Query';

const SinginSingup = ({ navigation }) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [incorrect, setIncorrect] = useState(false);

  const { loading, error, data } = CallAPI(GET_SHOPS, "ALLSHOPS")

  {
    loading ?
      <View>
        <Spinner size='lg' />
      </View> : null
  }

  let shopsData;
  let lastIndex = 0;

  // For last shop id or index
  for (let i = 0; i < data?.AllShopes?.length + 2; i++) {
    if (lastIndex < i) {
      lastIndex = i;
    }
  }
  // console.log(lastIndex);

  // sing in auth
  const handelSingin = async () => {
    await data.AllShopes.map((item, i) => {
      if (data?.AllShopes[i]?.email == email && data?.AllShopes[i]?.password == password) {
        shopsData = item;
        navigation.navigate("HomeScreen", { shopsData });
      }
    })
    if (email === "" || password === "") {
      return alert("Enter somthing")
    }
    setIncorrect(true)

  }

  return (
    <View flex={1} p={6} bg="bg" >
      <Text alignSelf='center' color='text' mt={8} fontWeight={600} fontSize={22} fontFamily="body" >Sing In</Text>

      <View mt={8} py={12} shadow={1} borderRadius="12px" bg='#f9fbfa' p={5} >
        <View>
          <Text fontWeight={500} fontSize={12} fontFamily="body" mb={0.5} >Your Email</Text>
          <TextInput
            placeholder='example@gmail.com'
            onChangeText={(e) => setEmail(e)}
            style={{
              backgroundColor: "#FFF", padding: 6, borderRadius: 12, fontSize: 14, fontWeight: '500', paddingHorizontal: 12
            }}
          />
        </View>

        <View mt={4} >
          <Text fontWeight={500} fontSize={12} fontFamily="body" mb={0.5} >Your Password</Text>
          <TextInput
            placeholder='@!#$%^'
            onChangeText={(e) => setPassword(e)}
            style={{
              backgroundColor: "#FFF", padding: 6, borderRadius: 12, fontSize: 14, fontWeight: '500', paddingHorizontal: 12
            }}
          />
          {incorrect ? <HStack>
            <Spacer />
            <Text fontSize={10} underline color='red.800' fontFamily='body' >Incorrect password</Text>
          </HStack> : null}
        </View>

        <Button p={3} bg="text" borderRadius={12} mt={10}
          onPress={handelSingin}
        >
          <Text color='white' fontWeight={600} fontSize={16} fontFamily='body' >Sing In</Text>
        </Button>
      </View>

      <View mt={6}  >
        <HStack alignItems='center' >
          <View borderBottomWidth={1} w="45%" />
          <Text fontSize={12} mx={2} >or</Text>
          <View borderBottomWidth={1} w="45%" />
        </HStack>
        <Image
          source={{ uri: "https://cdn-icons-png.flaticon.com/512/2991/2991148.png" }}
          alt="12"
          size={8} alignSelf='center' mt={4}
        />
      </View>

      <HStack mt={6} alignSelf='center' >
        <Text fontSize={12} color='text' fontFamily='body' >Dont have an account? </Text>
        <Button p={0} bg="text" px={1} borderRadius={4}
          onPress={() => navigation.navigate("SingUp", { lastIndex })}
        >
          <Text fontSize={10} fontWeight="600" underline color='white' fontFamily='body' >SingUp</Text>
        </Button>
      </HStack>
    </View>
  )
}

export default SinginSingup

