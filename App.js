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
import { createDrawerNavigator } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/Ionicons';

const HomeStack = createStackNavigator();
const DetailStack = createStackNavigator();
const Drawer = createDrawerNavigator();



const HomeStackScreen = ({navigation})=> (
  
  <HomeStack.Navigator screenOptions={{
    headerStyle:{
      backgroundColor:"red"
    },
    headerTintColor:"#fff",
    headerTitleStyle:{
      fontWeight:"bold"
    }
  }}>
    <HomeStack.Screen name="Home" component={HomeScreen} options={{
      title:'Overview',
      headerLeft:()=>(
        <Icon.Button name="ios-menu" size={25}
        backgroundColor="red"
        onPress={() =>  navigation.openDrawer() } > 
        </Icon.Button>
      )
    }}/>
    
  </HomeStack.Navigator>
  

);




const DetailStackScreen = ({navigation})=> (
  
  <DetailStack.Navigator screenOptions={{
    headerStyle:{
      backgroundColor:"red"
    },
    headerTintColor:"#fff",
    headerTitleStyle:{
      fontWeight:"bold"
    }
  }}>
    
    <DetailStack.Screen name="Details" component={DetailsScreen} 
      options={{
      title:'Details',
      headerLeft:()=>(
        <Icon.Button name="ios-menu" size={25}
        backgroundColor="red"
        onPress={() =>  navigation.openDrawer() } > 
        </Icon.Button>
      )
    }}/>
  </DetailStack.Navigator>
  

);
  

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
  {/*<Stack.Navigator>
    <Stack.Screen name="Home" component={HomeScreen} />
    <Stack.Screen name="Details" component={DetailsScreen} />
  </Stack.Navigator>*/}
  <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeStackScreen} />
        <Drawer.Screen name="Details" component={DetailStackScreen} />
  </Drawer.Navigator>
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
