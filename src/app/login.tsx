import { TextInput, View } from "react-native";

export default function Page(){
    return(
        <View className="flex-1 items-center px-4">
            <TextInput placeholder="请输入账号" className="border-2 p-2 color-blue-500 outline-blue-500 w-full h-10" />
        </View>
    )
}