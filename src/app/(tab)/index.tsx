import { Link, Stack } from 'expo-router';
import { Image, Text, TextInput, View } from 'react-native';

function LogoTitle() {
  return (
    <Image
      style={{ width: 50, height: 50 }}
      source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
    />
  );
}

export default function Home() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <TextInput />
      <Text>Home Screen</Text>
      <Link href={{ pathname: 'hello', params: {} }}>Go to Details</Link>
    </View>
  );
}
