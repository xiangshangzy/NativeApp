import { MaterialCommunityIcons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { Image, Pressable, View, Text, ScrollView } from 'react-native';

export default function Home() {

  return (
    <View className='flex-1 items-cente' >
      <Header />
      <View className='w-full px-6'>
        <Text className='text-xl'>Newest Songs</Text>
        <View className='flex-row overflow-x-auto overflow-hidden gap-x-4'>
          {[1, 2, 3, 4, 5].map((item, index) => <MusicItem key={index} />)}
        </View>
      </View>
    </View>
  );
}

function Header() {
  return (
    <View className='h-fit bg-gradient-to-b from-emerald-800 p-6 w-full '>
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
    <View className='rounded-md group bg-neutral-100 active:bg-neutral-300 transition p-2 w-fit shadow-red-400'>
      <Image source={require('@/assets/image/music_cover.jpg')} className='object-cover max-w-[120px] max-h-[120px]' />
      <Text className='font-semibold  mt-2 w-fit'>All of Me</Text>
      <Text className='text-sm my-1'>author</Text>
    </View>
  )
}