import { MaterialCommunityIcons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { Image, Pressable, View, Text } from 'react-native';

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
    <View className='flex-1 items-center text-white'>
      <Header />
      <View className='w-full px-6'>
        <Text className='text-xl'>Newest Songs</Text>
        <View>
          <MusicItem />
        </View>
      </View>
    </View>
  );
}

function Header() {
  return (
    <View className='h-fit bg-gradient-to-b from-emerald-800 p-6 w-full'>
      <View>
        <Text className=' text-white text-3xl font-semibold mb-2'>Welcome back</Text>
        <Pressable className='relative h-14 group flex flex-row items-center rounded-md  gap-x-6 bg-neutral-100/10 active:bg-neutral-100/20 transition w-fit pr-4'>
          <Image source={require('@/assets/image/liked_cover.png')} className='max-w-14 max-h-14' />
          <Text className=' font-medium truncate py-5 text-lg'>Favorite Songs</Text>
          <Pressable className=' rounded-full bg-green-500 p-2 active:scale-110 drop-shadow-md' onPressOut={() => router.push('login')}>
            <MaterialCommunityIcons name='play' size={30} />
          </Pressable>
        </Pressable>
      </View>
    </View>
  )
}
function MusicItem() {
  return (
    <Pressable className=' bg-neutral-400/5 active:bg-neutral-400/10 transition p-3'>
      <Image />
    </Pressable>
  )
}