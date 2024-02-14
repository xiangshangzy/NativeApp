import { useUserStore } from "@/common/store";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import { Button, Icon, Input } from "@rneui/themed";
import { Link, Stack, router } from "expo-router";
import { View, Text, TextInput, Pressable } from "react-native";

export default function Page() {
    const user = useUserStore()
    return (
        <View>
            <Stack.Screen options={{ title: 'Hello' }} />
            <Input placeholder="账号" />
            <Input placeholder="密码" />
            <Button onPress={()=>router.push('setting')}><MaterialCommunityIcons name={'email-outline'} size={24} color={'white'} />登录 </Button>
        </View>
    )
}