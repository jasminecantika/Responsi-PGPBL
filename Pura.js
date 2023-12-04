import React, {useState, useEffect} from 'react'; 
import {View, Text, FlatList, StyleSheet} from 'react-native'; 
import Fontawesome5 from 'react-native-vector-icons/FontAwesome5'; 
import {SafeAreaView} from 'react-native-safe-area-context'; 
 
const Callapi = () => { 
  const jsonUrl = 
    'https://script.google.com/macros/s/AKfycbyThMrJjCU9qJhhZYFgpfL9ljzdWl3TCqZDwBVvQB0QTX97zETftsGqh1ZjHeoxILAJ/exec'; 
  const [isLoading, setLoading] = useState(true); 
  const [dataUser, setDataUser] = useState({}); 
  const [refresh, setRefresh] = useState(false); 
 
  useEffect(() => { 
    fetch(jsonUrl) 
      .then(response => response.json()) 
      .then(json => { 
        console.log(json); 
        setDataUser(json); 
      }) 
      .catch(error => console.error(error)) 
      .finally(() => setLoading(false)); 
  }, []); 
 
  function refreshPage() { 
    fetch(jsonUrl) 
      .then(response => response.json()) 
      .then(json => { 
        console.log(json); 
        setDataUser(json); 
      }) 
      .catch(error => console.error(error)) 
      .finally(() => setLoading(false)); 
  } 
  return ( 
    <SafeAreaView> 
      {isLoading ? ( 
        <View> 
          <Text>Loading...</Text> 
        </View> 
      ) : ( 
        <View> 
          <View style={{alignItems:'center', justifyContent:'center', backgroundColor:'#17A2B8', height:50}}>
            <Text style={{fontSize:20, fontWeight:'bold'}}>List Pura</Text>
          </View>
          <FlatList 
            data={dataUser} 
            onRefresh={() => { 
              refreshPage(); 
            }} 
            refreshing={refresh} 
            keyExtractor={({id}, index) => id} 
            renderItem={({ item }) => (
              <View style={styles.card}>
                <View style={styles.avatar}>
                  <Fontawesome5 name={item.icon} size={50} color={item.color} />
                </View>
                <View>
                  <Text style={styles.cardtitle}>{String(item.nama)}</Text>
                  <Text>{String(item.deskripsi)}</Text>
                  <Text>{String(item.jamoperasional)}</Text>
                </View>
              </View>
            )}
          /> 
        </View> 
      )} 
    </SafeAreaView> 
  ); 
}; 
export default Callapi; 
 
const styles = StyleSheet.create({ 
  title: { 
    paddingVertical: 12, 
    backgroundColor: '#333', 
    color: 'white', 
    fontSize: 20, 
    fontWeight: 'bold', 
    textAlign: 'center', 
  }, 
  avatar: { 
    borderRadius: 100, 
    width: 80, 
  }, 
  cardtitle: { 
    fontSize: 11, 
    fontWeight: 'bold', 
  }, 
  card: { 
    flexDirection: 'row', 
    padding: 20, 
    borderRadius: 10, 
    backgroundColor: 'white', 
    shadowColor: '#000', 
    shadowOffset: { 
      width: 1, 
      height: 1, 
    }, 
    shadowOpacity: 0.2, 
    shadowRadius: 1.41, 
    elevation: 2, 
    marginHorizontal: 20, 
    marginVertical: 7, 
  }, 
});