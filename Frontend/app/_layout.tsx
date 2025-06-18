import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { BorderlessButton, GestureHandlerRootView } from 'react-native-gesture-handler';
import { router, Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context';

function CustomTabBarButton({ children, onPress, accessibilityState }: any) {
  const focused = accessibilityState?.selected;
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 25,
        marginHorizontal: 5,
      }}
    >
      {children}
    </TouchableOpacity>
  );
}

function BottomDrawerLayout() {
  const insets = useSafeAreaInsets();

  return (
    <Tabs
      screenOptions={{
        tabBarStyle: {
          paddingBottom: insets.bottom,
          paddingTop: 5,
          paddingHorizontal: 10,
          height: 70 + insets.bottom,
        },
        headerStyle: {
          backgroundColor: '#FF305B',
        },
        tabBarActiveTintColor: '#000',
        tabBarInactiveTintColor: '#FF305B',
        headerTintColor: '#FFFFFF',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        tabBarLabelStyle: {
          fontSize: 14,
          marginTop: 3,
          fontWeight: 'bold',
        },
        tabBarIconStyle: {
          marginTop: 5,
        },
        tabBarButton: (props) => <CustomTabBarButton {...props} />,
      }}
    >
      <Tabs.Screen 
        name="index" 
        options={{ 
          title: 'Home',
          headerRight: () => (
            <TouchableOpacity 
              style={{ marginRight: 15 }}
              onPress={() => router.push('settings/')}
            >
              <Ionicons name="add" size={24} color="#FFFFFF" />
            </TouchableOpacity>
          ),
        }} 
      />
      <Tabs.Screen 
        name="workouts" 
        options={{ 
          title: 'Treinos',
        }} 
      />
      <Tabs.Screen 
        name="profile" 
        options={{ 
          title: 'Perfil',
        }} 
      />
    </Tabs>
  );
}


export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <BottomDrawerLayout />
      </GestureHandlerRootView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

