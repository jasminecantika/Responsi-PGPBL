import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { Image, ImageBackground, ScrollView, StyleSheet, Text, View } from 'react-native';
import Fontawesome5 from 'react-native-vector-icons/FontAwesome5';
import Portofolio from '../App'
import { WebView } from 'react-native-webview';
import Getjsonfile from '../Getjsonfile';
import Pura from '../Pura'

const Tab = createBottomTabNavigator();

//Form Input dari github pages
const forminput = 'https://jasminecantika.github.io/Pura-Bali/';

//Peta web dari github pages
const webmap = 'https://jasminecantika.github.io/Pura-Bali/map.html';

function HomeScreen() {
  return (
    <ImageBackground source={require('../peta/bg.jpg')}>
    <ScrollView> 
            <Text style={styles.title}>APLIKASI PETA LOKASI PURA</Text> 
            <Text style={styles.description}> Provinsi Bali</Text> 
            <View style={styles.container}>  
            <Image style={styles.image} 
        source={require('AwesomeProject/peta/pura.png')}/> 
            </View> 
            <View style={styles.container}>  
            <Text style={{textAlign: 'justify',color:'#1B3D6C', margin: 20}}>
            Pura merupakan tempat untuk melaksanakan upacara-upacara keagamaan, seperti pemujaan dewa-dewi Hindu, ritual penyucian, dan perayaan keagamaan seperti Galungan dan Kuningan. Pentingnya pura tidak hanya terletak pada fungsi keagamaan, tetapi juga sebagai pusat kegiatan budaya dan sosial masyarakat Bali. Pura menjadi tempat berkumpulnya komunitas, tempat untuk menyelenggarakan pertunjukan seni dan tarian, serta sebagai pusat kegiatan sosial yang mempererat ikatan antarwarga. Pada momen-momen tertentu, seperti perayaan piodalan (ulang tahun pura), pura dihiasi dengan hiasan-hiasan khas, dan masyarakat lokal berkumpul untuk merayakan bersama. Secara keseluruhan, pura bukan hanya sebagai bangunan fisik, melainkan juga sebagai simbol keberagaman, spiritualitas, dan warisan budaya yang dijunjung tinggi oleh masyarakat Hindu Bali.</Text> 
            </View> 
            <View style={styles.container}>  
            <Text> Stack:</Text> 
            <Text> 1. React Native</Text> 
            <Text> 2. HTML</Text> 
            <Text> 3. LeafletJS</Text> 
            <Text> 4. Google Sheets</Text> 
            <Text> 5. App Script</Text> 
            <Text> 6. FontAwesome5</Text> 
            <Text> 7. Github</Text> 
            </View> 
        </ScrollView>
        </ImageBackground>
  );

}

function MapScreen() {
  return (
    <WebView
      source={{ uri: webmap }}
    />
  );
}
function AddDataScreen() {
  return (
    <WebView
      source={{ uri: forminput }}
    />
  );
}

function ProfileScreen() {
  return (
    <View>
      <Portofolio />
    </View>
  );
}

function ListScreen() {
  return (
    <View>
      <Pura />
    </View>
  );
}

function MyTabs() {
  return (
      <Tab.Navigator screenOptions={{ headerShown: false,
      tabBarStyle: {backgroundColor: '#31304D', marginBottom: 10, marginRight: 10, marginLeft:10, borderRadius: 40}, }}  >
        <Tab.Screen name="Home" component={HomeScreen} options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <Fontawesome5 name="home" color={color} size={size} />
          ),
        }}
        />
        <Tab.Screen name="Map" component={MapScreen} options={{
          tabBarLabel: 'Map',
          tabBarIcon: ({ color, size }) => (
            <Fontawesome5 name="map-marked-alt" color={color} size={size} />
          ),
        }}
        />
        <Tab.Screen name="Add Data" component={AddDataScreen} options={{
          tabBarLabel: 'Add Data',
          tabBarIcon: ({ color, size }) => (
            <Fontawesome5 name="plus-circle" color={color} size={size} />
          ),
        }}
        />
        <Tab.Screen name="Pura" component={ListScreen} options={{
          tabBarLabel: 'Pura',
          tabBarIcon: ({ color, size }) => (
            <Fontawesome5 name="th-list" color={color} size={size} />
          ),
        }}
        />
        <Tab.Screen name="Profile" component={ProfileScreen} options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color, size }) => (
            <Fontawesome5 name="user-circle" color={color} size={size} />
          ),
        }}
        />

      </Tab.Navigator>
  );
}

export default MyTabs;

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 300,
    resizeMode: 'stretch'
  },
  listitems: {
    padding: 20,
    alignItems: 'center'
  },
  caption: {
    fontSize: 14,
    fontWeight: 'bold'
  },
  title: {
    fonstsize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 10,
  },
  container: {
    marginHorizontal: 10,
    backgroundColor: '#ECF9FF',
    marginTop: 20,
    padding:20,
}
});