import {
  NunitoSans_400Regular,
  NunitoSans_700Bold,
  useFonts,
} from '@expo-google-fonts/nunito-sans'
import { Text, View } from 'react-native'
import { ThemeProvider } from 'styled-components/native'

import theme from './src/theme'

export default function App() {
  const [fontsLoaded] = useFonts({ NunitoSans_400Regular, NunitoSans_700Bold })

  return (
    <ThemeProvider theme={theme}>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        {fontsLoaded ? <Text>hello world</Text> : <Text>Loading...</Text>}
      </View>
    </ThemeProvider>
  )
}
