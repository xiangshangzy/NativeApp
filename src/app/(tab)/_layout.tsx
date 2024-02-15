import { Tabs } from 'expo-router';
import { MaterialCommunityIcons } from '@expo/vector-icons';
export default function TabLayout() {
  return (
    <Tabs screenOptions={{
      headerShown: false,
      tabBarLabelStyle: { fontSize: 16 },
    }}>
      <Tabs.Screen
        name="index"
        options={{
          tabBarLabel: '音乐',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          )
        }}
      />
      <Tabs.Screen
        name="detail"
        options={{
          tabBarLabel: '详情',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="bell" color={color} size={size} />
          ),
          headerShown:true,
          headerTitle:'详情'
        }}
      />
      <Tabs.Screen
        name="user"
        options={{
          tabBarLabel: '用户',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
          headerShown:true,
          headerTitle:'用户'
        }}
      />
    </Tabs>
  );
}
