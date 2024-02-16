import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Button, Input } from "@rneui/themed";
import { router } from "expo-router";
import { TextInput, View } from "react-native";

export default function Page() {
    return (
        <View className="flex-1 items-center p-4">
            <Input placeholder="邮箱或手机号" label='账号'/>
            <Input placeholder="你的密码" label='密码'/>
            <Button size="lg" onPressOut={()=>router.back()}><MaterialCommunityIcons name='login' size={24} color={'white'}/> 登录</Button>
        </View>
    )
}