/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


const Stack = createStackNavigator();


const HomeScreen = ({navigation})=> {
  return (
    <View style={styles.container}>
      <Text>hello HomeScreen</Text>
      <Button 
        title="Goto DetailsScreen"
        onPress={()=> navigation.navigate("Details")}
      />
    </View>
  );
};



const DetailsScreen = ({navigation})=> {
  return (
    <View style={styles.container}>
      <Text>hello DetailsScreen</Text>

      <Button 
        title="Goto DetailsScreen agian"
        onPress={()=> navigation.push("Details")}
      />

      <Button 
        title="Goto HomeScreen"
        onPress={()=> navigation.navigate("Home")}
      />

      <Button 
        title="Go Back"
        onPress={()=> navigation.goBack()}
      />

      
      <Button 
        title="pop to top or first screen"
        onPress={()=> navigation.popToTop()}
      />
      
    </View>
  );
};



const App = () =>{
  return(
  <NavigationContainer>
  <Stack.Navigator>
    <Stack.Screen name="Home" component={HomeScreen} />
    <Stack.Screen name="Details" component={DetailsScreen} />
  </Stack.Navigator>
</NavigationContainer>
  );

};


const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:"center",
    justifyContent:"center"
  }
});

export default App;
