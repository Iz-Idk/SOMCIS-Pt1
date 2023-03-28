import React, { useEffect } from "react";
import Logo from '../../assets/images/Person.png';
import {View, Text, Image, StyleSheet, useWindowDimensions, Stack} from 'react-native'



const Emocion = () => {
    const {height} = useWindowDimensions();
    
    return(
        <View style = {styles.root}>
            <Image source={Logo} style = {[styles.logo, {height: height * 0.3}] } resizeMode="contain" />
            <Text style = {styles.body}> Actualmente te estás sintiendo.. {"\n"} Feliz {"\n"} {"\n"} {"\n"} {"\n"}{"\n"}{"\n"}{"\n"}{"\n"}{"\n"}{"\n"}{"\n"}{"\n"}{"\n"}{"\n"}</Text>
        </View>
        
    );
};

const styles = StyleSheet.create({
    root:{
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#FFFFE8',
        
    },
    logo: {
        width: '70%',
        maxWidth: 300,
        maxHeight: 200,
    },
    body:{
        alignItems: 'center',
        fontSize: 20,
        textAlign: 'center',
        
    },
});


export default Emocion;
