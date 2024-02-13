import { Link, Stack } from "expo-router";
import { View, Text, TextInput } from "react-native";

export default function Page() {
    return (
        <View>
            <Stack.Screen options={{ title: 'Hello' }} />

            <Text>
                Hello
            </Text>
            <TextInput />
            <Link href={'setting'}>Push</Link>
        </View>
    )
}