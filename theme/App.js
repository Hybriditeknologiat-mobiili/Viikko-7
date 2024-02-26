import React from 'react';
import { StyleSheet } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'react-native';
import { PaperProvider } from 'react-native-paper';
import MainAppbar from './components/MainAppBar';
import Settings from './screens/Settings';
import Home from './screens/Home'; // Import Home component
import { ThemeProvider } from './context/useTheme'; // Import ThemeProvider

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <ThemeProvider>
      <PaperProvider>
        <NavigationContainer>
          <StatusBar backgroundColor="#666" barStyle="light-content" />
          <Stack.Navigator
            initialRouteName='Home'
            screenOptions={{
              header: (props) =>
                <MainAppbar {...props} backgroundColor="#666" icon="cog" color="#fff" />
            }}
          >
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Settings" component={Settings} />
          </Stack.Navigator>
        </NavigationContainer>
      </PaperProvider>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});