import { StyleSheet, Text, View } from 'react-native';
import { createStaticNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context'

function NavLayout({ children }) {
  const insets = useSafeAreaInsets();
  return <View style={{ flex: 1, paddingTop: insets.top }}>{children}</View>;
}

function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'yellow' }}>
      <Text>Home Screen</Text>
    </View>
  );
}

const NativeStack = createNativeStackNavigator({
  screens: {
    Home: {
      screen: HomeScreen,
      options: {
        title: "NativeStack",
      },
    }
  }
})

const Tabs = createBottomTabNavigator({
  layout: NavLayout,
  screens: {
    Home: {
      screen: NativeStack,
      options: {
        title: "Tabs",
      },
    }
  }
})

const RootStack = createNativeStackNavigator({
  screens: {
    BottomTabs: Tabs,
  },
});

const Navigation = createStaticNavigation(RootStack);

export default function App() {
  return (
    <SafeAreaProvider>
      <Navigation />
    </SafeAreaProvider>
  )
}

