import React, {Component} from 'react'
import {View, Text, StyleSheet, Image, Dimensions, TouchableOpacity} from 'react-native'
import config from '../../src/config'

class Post extends Component {

constructor(){
  super ();
    this.state = {
      liked: false,
      screewidth: Dimensions.get("window").width
    };
  }

 likeToggled(){
   this.setState ({
     liked: !this.state.liked
   })
 }

  render(){
    const imageHeight = Math.floor(this.state.screewidth * 1.1);
    const imageUri = "https://cnnespanol2.files.wordpress.com/2019/05/190506210508-pba-ranking-actores-full-169.jpg?quality=100&strip=info" + "=s" + imageHeight + "-c";

    const heartIconColor=(this.state.liked) ? "rgb(252,61,57)" : null;
   
    return (

<View>

<View style={style.userBar}>

      <View style={{flex:"1", width: 100 + "%", marginTop: "20"}}>
      <Image 
      style={style.usePic}
      source={{
        uri:"https://cnnespanol2.files.wordpress.com/2019/05/190506210508-pba-ranking-actores-full-169.jpg?quality=100&strip=info"}} />
        <Text>Mariana <Text style={style.useMas}>+</Text></Text>
       
      </View>
  <View>
  
  </View>
      

    
    <View/> 
</View>


<View/>


<View style={{flexDirection: "row", alignItems: "center"}}>
      <Image 
      style={style.usePic}
      source={{
        uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtvlDKVm-bWUSry-MI2leVNQvGIGxlrVLus5d4Qo54r0-G0Gag"}} />
        <Text  style={{marginLeft:10}}>Mariana</Text>
      </View>

<TouchableOpacity
activeOpacity={0.7}
onPress={()=>{ 
  this.likeToggled();
}}>
<Image 
style={{width: this.state.screewidth,height:350}}
source={{
  uri: imageUri
  }} 
  />
</TouchableOpacity>
  <View style={style.iconBar}>
  <Image style={[style.icon, {height:40, width: 40, tintColor: heartIconColor}]} source={config.images.heartIcon}/>
  <Image style={[style.icon, {height:35, width: 35}]} source={config.images.chattIcon}/>
  <Image style={[style.icon, {height:35, width: 35}]} source={config.images.compartirIcon}/>
  
</View>
<View style={style.iconBar}>
<Image style={[style.icon, {height:40, width: 40}]} source={config.images.heartIcon}/>
<Text>12 Me gusta
</Text>
</View>
</View>

    );
  }
}

const style = StyleSheet.create ({

   userBar:{
         width: 100 + "%",
         height: config.styleConstants.rowHeigth,
         backgroundColor: "rgb(255,255,255",
         flexDirection:"row",
         marginHorizontal:20,
         marginBottom: 40,
      justifyContent:"space-between"
       },
       useMas:{
         width: 100 + "%",
         height: 50, 
         backgroundColor: "rgb(255,255,255",
         flexDirection:"column",
         marginBottom: 10
         
       },
    usePic: {
      height:50,
      width: 50,
      borderRadius: 25
      
    },
    iconBar: {
      height: config.styleConstants.rowHeigth,
      width: 100 + "%",
      borderTopWidth:StyleSheet.hairlineWidth,
      borderBottomWidth: StyleSheet.hairlineWidth,
      flexDirection: "row",
      alignItems:"center"
    },
    icon: {
      marginLeft:5
    }
});
export default Post;