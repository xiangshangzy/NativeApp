import '../global.css'
import { Slot, Stack } from 'expo-router';
export default function RootLayout() {
  return (
    <Stack >
      <Stack.Screen name='(tab)' options={{headerShown:false}} />
      <Stack.Screen name='login' options={{title:'账号登录'}} />
    </Stack>
  );
}
