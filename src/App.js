import React from "react";
import {SafeAreaView,View,FlatList,Text,StyleSheet,ScrollView,Image, Dimensions } from "react-native";
import news_data from './news_data.json';
import NewsCard from "./components/NewsCard";
import news_banner_data from './news_banner_data.json';

function App(){

  const renderNews = ({item}) => <NewsCard news={item}/>
  const newsKeyExtractor = (item,index) => item.u_id.toString() 

  return(

    <SafeAreaView style = {styles.container}>
      <View>
        <Text style={styles.header}>NEWS</Text>
        <FlatList
        ListHeaderComponent={() => 
          <ScrollView horizontal showsHorizontalScrollIndicator = {false}>
          {
            news_banner_data.map(newsBanner => (<Image
              style = {styles.banner_image} 
              source={{uri : newsBanner.imageUrl}}></Image>))
          }
          </ScrollView>}
        keyExtractor={newsKeyExtractor} 
        data={news_data} 
        renderItem = {renderNews}
        />
        
      </View>
    </SafeAreaView>
  )
}

export default App;

const styles = StyleSheet.create({
  container : {
    flex : 1,
    backgroundColor : 'white'

  },
  banner_image : {
    height : Dimensions.get('window').height / 4,
    width : Dimensions.get('window').width / 2,
    
  },
  header : {
    fontSize : 35,
    marginBottom : 5,
    fontWeight : 'bold'
  }
})