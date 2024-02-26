import MainAppbar from './components/MainAppBar';
import Settings from './screens/Settings';
import ThemeProvider from './context/useTheme';

export default function App() {
  const Stack = createNativeStackNavigator()

  return (
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

          <Stack.Screen name="Home">
            {() =>
              <Home />
            }
          </Stack.Screen>
          <Stack.Screen name="Settings" component={Settings} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});