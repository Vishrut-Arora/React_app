import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image, ImageBackground, Button, TouchableOpacity,Dimensions } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import EStyleSheet from 'react-native-extended-stylesheet';
let entireScreenWidth = Dimensions.get('window').width;
EStyleSheet.build({$rem: entireScreenWidth / 380});

var name="Vishrut";
var date = new Date().getDate(); 
var month = new Date().getMonth()+1;
var year = new Date().getFullYear();
const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];
var images=[require("./assets/Ellipse1.png"),require("./assets/Ellipse2.png"),require("./assets/Ellipse3.png"),require("./assets/Ellipse4.png")];
const list = [];
const array = [{num:1, name: "Mr. Guy Dude", phone: 88888888,prof:"Management Guy"},{num:2, name: "Mr. Guy persno", phone: 88888888, prof:"I am Warden"},{num:3, name: "Mr. dwyance rock", phone: 88888888, prof:"Security Guy"},{num:4,name: "Mr. person Man", phone: 88888888, prof:"Management Guy"}]
function HomeScreen({navigation}) {
    return (
        <SafeAreaView style={styles.container}>
          <Text style= {{fontSize: 15 ,marginLeft: '5%', marginTop:"15%"}}>WELCOME BACK</Text>           
          <Text style= {{fontSize: 30 ,marginLeft: '7%', marginTop:"2%",fontWeight: 'bold'}}>{name}</Text>
          <StatusBar style="auto" />
          <ImageBackground style={styles.r62}      
           source={require("./assets/Rectangle62.png")} >
          <Text style= {{fontSize: 12 ,marginLeft: '5%', marginTop:"5%"}}>RENT DUE ON</Text> 
          <Text style= {{fontSize: 20 ,marginLeft: '5%', marginTop:"5%"}}>{date} {monthNames[month]}, {year}</Text>         
          <Image style={styles.v27}source={require("./assets/Vector27.png")}/> 
          
          <Image style={styles.pana}source={require("./assets/pana.png")}/>   
          </ImageBackground>
          <Text style= {{fontSize: 20 ,marginLeft: '10%', marginTop:"-40%"}}>Dashboard</Text>
          <ImageBackground style={styles.r1}      
           source={require("./assets/Rectangle62.png")}>
          <Image style={styles.i1}source={require("./assets/MaskGroup.png")}/>
          <Text style= {{fontSize: 20 ,marginLeft: '10%', marginTop:"-47%"}}>Payments</Text> 
            </ImageBackground>
          <ImageBackground style={styles.r2}      
           source={require("./assets/Rectangle62.png")}>
          <Image style={styles.i2}source={require("./assets/MaskGroup2.png")}/> 
          <Text style= {{fontSize: 20 ,marginLeft: '10%', marginTop:"-47%"}}>Visitors</Text>
          </ImageBackground>  
          <ImageBackground style={styles.r2}      
           source={require("./assets/Rectangle62.png")}>
          <Image style={styles.i3}source={require("./assets/MaskGroup3.png")}/> 
          <Text style= {{fontSize: 20 ,marginLeft: '10%', marginTop:"-47%"}}>Mess Info</Text>
          </ImageBackground>  
          <ImageBackground style={styles.r3}      
           source={require("./assets/Rectangle62.png")}>
          <Image style={styles.i4}source={require("./assets/MaskGroup4.png")}/> 
          <Text style= {{fontSize: 20 ,marginLeft: '10%', marginTop:"-47%"}}>Tickets</Text>
          </ImageBackground>  

          <ImageBackground style={styles.r4}      
           source={require("./assets/Rectangle62.png")}>
             <TouchableOpacity style={styles.touchable} onPress={() => navigation.navigate('Details')}>
          <Image style={styles.i5}source={require("./assets/MaskGroup5.png")}/> 
          </TouchableOpacity>
          <Text style= {{fontSize: 20 ,marginLeft: '10%', marginTop:"-70%"}}>Directory</Text>
          </ImageBackground> 
          <ImageBackground style={styles.r4}      
           source={require("./assets/Rectangle62.png")}>
          <Image style={styles.i6}source={require("./assets/MaskGroup6.png")}/> 
          <Text style= {{fontSize: 20 ,marginLeft: '10%', marginTop:"-47%"}}>Nearby</Text>
          </ImageBackground>                          
    
        </SafeAreaView>
      );
    }
function DetailsScreen({navigation}) {
  return (
    <SafeAreaView style={styles2.container}>
    <TouchableOpacity style={styles2.touchable} onPress={() => navigation.navigate('Home')}>
    <Image style={styles2.r1}source={require("./assets/Rectangle65.png")}/>
    <Image style={styles2.v1}source={require("./assets/Vector.png")}/> 
    </TouchableOpacity>
    <Text style= {{fontSize: 35 ,marginLeft: '10%', marginTop:"-24%"}}>Directory</Text>
    <Image style={styles2.r2}source={require("./assets/Rectangle82.png")}/>
    <Text style= {{fontSize: 15 ,marginLeft: '15%', marginTop:"-8%"}}>Includes Relevant Info and numbers...</Text>


    {array.map((dir, index) => (  
      <>
    <Image style={styles2.r3}source={require("./assets/Rectangle62.png")}/>
    <Image style={styles2.r4}source={images[index]}/>    
    <Text style= {{fontSize: 20 ,marginLeft: '15%', marginTop:"-27%"}}>{dir.prof}{"\n"}</Text>
    <Text style= {{fontSize: 14,marginLeft: '39%',color:'black'}}>{dir.name}</Text>
    <Text style={{marginLeft: '39%',color: 'gray'}}>+91 {dir.phone}</Text> 
              </>
            ))}

    </SafeAreaView>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home"   screenOptions={{
    headerShown: false
  }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

const styles2 = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E5E5E5',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  touchable: {
    alignItems: 'center',
    justifyContent: 'center'
  }, 
  r1: {
    position:"relative",
    marginLeft:"-70%",
    marginTop: "-12%",
    height: "25%",
    width: "15%",
  },
  v1: {
    position:"relative",
    marginLeft:"-70%",
    marginTop: "-10%",
    height: "11%",
    width: "6%",
  },     
  r2: {
    position:"relative",
    marginLeft:"10%",
    marginTop: "2%",
    height: "6%",
    width: "75%",
  },  
  r3: {
    position:"relative",
    marginLeft:"10%",
    marginTop: "12%",
    height: "14%",
    width: "75%",
  }, 
  r4: {
    position:"relative",
    marginLeft:"15%",
    marginTop: "-16%",
    height: "7%",
    width: "14%",
  },           
});
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E5E5E5',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  touchable: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  r62: {
    // flex: 1,
    width: '80%',
    height: '38%',
    marginTop:"10%",
    marginLeft: "10%",
  },
  v27: {
    // flex: 1,
    width: '25%',
    height: '35%',
    marginTop:"-20%",
    marginLeft: "55%",
  },
  pana: {
    // flex: 1,
    width: '18%',
    height: '23%',
    marginTop:"-26%",
    marginLeft: "60%",
  },

  r1: {
    // flex: 1,
    width: '60%',
    height: '38%',
    marginTop:"5%",
    marginLeft: "10%",
  },  
  r2: {
    // flex: 1,
    width: '60%',
    height: '38%',
    marginTop:"-40%",
    marginLeft: "10%",
  },  
  r3: {
    // flex: 1,
    position:"relative",
    width: '60%',
    height: '38%',
    marginTop:"-158%",
    marginLeft: "55%",
  }, 
  r4: {
    // flex: 1,
    width: '60%',
    height: '38%',
    marginTop:"-40%",
    marginLeft: "55%",
  },  
  i1: {
    width: '60%',
    height: '38%',
    marginTop:"-2%",
    marginLeft: "0%",
  } ,  
  i2: {
    width: '28%',
    height: '26%',
    marginTop:"14%",
    marginLeft: "0%",
  } ,  
  i3: {
    width: '53%',
    height: '40%',
    marginTop:"-2%",
    marginLeft: "0%",
  } ,  
  i4: {
    width: '28%',
    height: '26%',
    marginTop:"14%",
    marginLeft: "0%",
  } ,  
  i5: {
    width: '60%',
    height: '70%',
    marginTop:"-21%",
    marginLeft: "-40%",
  } ,  
  i6: {
    width: '50%',
    height: '38%',
    marginTop:"-2%",
    marginLeft: "0%",
  } ,  
       
});
