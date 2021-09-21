
import React, { useState } from 'react';
import { StyleSheet, View ,Button , Text , TouchableWithoutFeedback,Keyboard,Alert} from 'react-native';
import Card from '../components/Card';
import Color from '../constants/Color';
import Input from '../components/Input';
import NumberConatiner from '../components/NumberContainer';
const StartGameScreen=props=>{
    const [enterdValue,setEnteredValue]=useState('');
    const [confirmed,setConfirmed]=useState(false);
    const [selectedNumber,setSelectedNumber] =useState();
    const numberInputHandler=e=>{
        setEnteredValue(e.replace(/[^0-9]/g, ''));
    }
    const resetInputHandler=()=>{
        setEnteredValue('');
        setConfirmed(false);
    }
    const confirmedInputHandler=()=>{
        const choosenNumber=parseInt(enterdValue);
        if(isNaN(choosenNumber) || choosenNumber <=0 || choosenNumber >99){
            Alert.alert(
                'Invalid number !',
                'Number has to be a number between  1 and 99',
                [{text:'okay',style:'destructive',onPress:resetInputHandler}]
            )
            return;
        }
        setConfirmed(true);
        setEnteredValue('');
        setSelectedNumber(parseInt(enterdValue));
        Keyboard.dismiss();

    }
    let confirmedOutput;
    if(confirmed){
        confirmedOutput=(
            <Card style={styles.summaryConatiner}>
            <Text>You Selected</Text>
            <NumberConatiner>{selectedNumber}</NumberConatiner>
                <Button title="START GAME" onPress={()=>{props.onStartGame(selectedNumber )}} />
        </Card>
        )
    }
    return(
        <TouchableWithoutFeedback onPress={()=>{
            Keyboard.dismiss();
        }}>
        <View style={styles.screen}>
            <Text style={styles.title}>The Game Screen</Text>
            <Card style={styles.inputContainer}>
                <Text>Select a Number</Text>
                <Input style={styles.input} blurrOnSubmit keyboardType='number-pad' maxLength={2} onChangeText={numberInputHandler} value={enterdValue} />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button title="reset" color={Color.accent} onPress={resetInputHandler}></Button>
                    </View>
                    <View style={styles.button}>
                        <Button title="confirm"  color={Color.primary} onPress={confirmedInputHandler}></Button>
                    </View>
                </View>
            </Card>
            {confirmedOutput}
        </View>
        </TouchableWithoutFeedback>
        
    );
}

const styles=StyleSheet.create({
    screen:{
        flex:1,
        padding:10,
        alignItems:'center'
    },
    title:{
        fontSize:20,
        marginVertical:10,
        fontFamily:'open-sans-bold'
    },
    inputContainer:{
        width:300,
        maxWidth:'80%',
        alignItems:'center',

    },
    buttonContainer:{
        flexDirection:'row',
        width:'100%',
        justifyContent:'space-between',
        paddingHorizontal:15
    },
    button:{
        width:100
    },
    input:{
        width:50,
        textAlign:'center'
    },
    summaryConatiner:{
        marginTop:20,
        alignItems:'center' 
    }
})
export default StartGameScreen;