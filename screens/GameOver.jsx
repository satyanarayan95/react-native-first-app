import React from "react";
import { Text,View,StyleSheet,Button } from "react-native";

const GameOver=props=>{
    return(
        <View style={styles.screen}>
            <Text>Game Over</Text>
            <Text>Number of rounds : {props.roundsNumber}</Text>
            <Text>Number was : {props.userNumber}</Text>
            <Button title="NEW GAME" onPress={props.onRestart} />
        </View>
    )
}

const styles=StyleSheet.create({
    screen:{
        flex:1,
        alignItems:"center",
        justifyContent:"center"
    }
})

export default GameOver;