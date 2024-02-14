import { Button, Input, SearchBar, Text } from '@rneui/themed';
import { Link, Stack, router } from 'expo-router';
import { Image, TextInput, View } from 'react-native';

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
      <Text>Home</Text>
      <Button onPress={() => router.push('hello')}>Go to Details</Button>
      <TextInput />

    </View>
  );
}
