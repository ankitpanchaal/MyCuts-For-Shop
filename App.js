import React from 'react'
import MainStack from './src/navigation/MainStack'
import { extendTheme, NativeBaseProvider } from 'native-base'
import { useFonts } from 'expo-font';
import {
  Poppins_700Bold,
  Poppins_600SemiBold,
  Poppins_500Medium,
  Poppins_400Regular,
} from "@expo-google-fonts/poppins";
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: "https://server-graphql.onrender.com/graphql",
  cache: new InMemoryCache()
})

const theme = extendTheme({
  fontConfig: {
    Poppins: {
      400: {
        normal: "Poppins_400Regular",
      },
      500: {
        normal: "Poppins_500Medium",
      },
      600: {
        normal: "Poppins_600SemiBold",
      },
      700: {
        normal: "Poppins_700Bold",
      },
    },
  },
  colors: {
    text: "#00684a",
    bg: "#e3fcf7",
    primary: "#FF676D",
    // heading: "#00ed64",
  },
  fonts: {
    body: "Poppins",
  },
});

const App = () => {
  const [fontsLoaded] = useFonts({
    Poppins_700Bold,
    Poppins_600SemiBold,
    Poppins_500Medium,
    Poppins_400Regular,
  });
  if (!fontsLoaded) {
    return null;
  } else
    return (
      <ApolloProvider client={client} >
        <NativeBaseProvider theme={theme}>
          <MainStack />
        </NativeBaseProvider>
      </ApolloProvider>
    );
}

export default App