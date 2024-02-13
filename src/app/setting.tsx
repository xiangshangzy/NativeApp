import { Stack } from "expo-router";
import { View, Text } from "react-native";

export default function Page() {
    return (
        <View>
            <Stack.Screen
                options={{
                    title: 'Setting',
                }}
            />
            <Text>
                Settings
            </Text>
        </View>
    )
}