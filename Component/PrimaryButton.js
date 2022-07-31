import { View, Text, Pressable, StyleSheet } from 'react-native';

function PrimaryButton({ children, onPress }) {

    return (
        <View style={styles.buttonOuterContainer}>
            <Pressable
                style={({ pressed }) => pressed
                    ? [styles.buttonInnerContainer, styles.pressed]
                    : styles.buttonInnerContainer
                }
                onPress={onPress}
                android_ripple={{ color: 'gray' }}
            >
                <Text style={styles.buttonText}>{children}</Text>
            </Pressable>
        </View>
    );
}

export default PrimaryButton;

const styles = StyleSheet.create({
    buttonOuterContainer: {
        borderRadius: "50%",
        margin: 40,
        overflow: 'hidden',
        borderWidth: 2,
        borderColor: "black"
    },
    buttonInnerContainer: {
        backgroundColor: 'white',
        // paddingVertical: 0,
        paddingHorizontal: 20,
        elevation: 2,

    },
    buttonText: {
        color: 'black',
        textAlign: 'center',
        fontSize: 50

    },
    pressed: {
        opacity: 0.75
    }
})
