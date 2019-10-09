import React, {Component} from 'react'
import {View, Text, StyleSheet, Image, Dimensions, TouchableOpacity, ScrollView,} from 'react-native'
import config from './config'
import { Video } from 'expo-av'


class InstaClone extends Component {

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

    const imageUri1 = "https://www.eluniversal.com.mx/sites/default/files/styles/f03-651x400/public/2017/08/29/robert_pattinson.jpg?itok=vHYt9x-S&c=ed1383e22ed774436b81a238ade18387" + "=s" + imageHeight + "-c";
    const imageUri2 = "https://cnnespanol2.files.wordpress.com/2019/05/190506210508-pba-ranking-actores-full-169.jpg?quality=100&strip=info" + "=s" + imageHeight + "-c";
    const imageUri3 = "https://www.eluniversal.com.mx/sites/default/files/styles/f03-651x400/public/2017/08/29/robert_pattinson.jpg?itok=vHYt9x-S&c=ed1383e22ed774436b81a238ade18387" + "=s" + imageHeight + "-c";
    const imageUri4 = "https://cnnespanol2.files.wordpress.com/2019/05/190506210508-pba-ranking-actores-full-169.jpg?quality=100&strip=info" + "=s" + imageHeight + "-c";
    const imageUri5 = "https://www.eluniversal.com.mx/sites/default/files/styles/f03-651x400/public/2017/08/29/robert_pattinson.jpg?itok=vHYt9x-S&c=ed1383e22ed774436b81a238ade18387" + "=s" + imageHeight + "-c";
    const heartIconColor=(this.state.liked) ? 'red' : null;
    return (
      
<View style={{flex:1, width:100 + "%", height:100 + "%"}}>
<View style={style.tempNav}>
<Text>Instagram</Text>
</View>

<View style={style.userBar}>

      <View style={{flexDirection: "column"}}>
      <Image 
      style={style.usePic}
      source={{
        uri:"https://cnnespanol2.files.wordpress.com/2019/05/190506210508-pba-ranking-actores-full-169.jpg?quality=100&strip=info"}} />
        <Text >Mariana <Text style={style.useMas}>+</Text></Text>
       
      </View>
  <View>
  
  </View>

       <View style={{flexDirection: "column",marginLeft: 10}}>
      <Image 
      style={style.usePic}
      source={{
        uri:"https://www.eleconomista.com.mx/__export/1507905034001/sites/eleconomista/img/historico/dwayne_johnson_afp.jpg_73367373.jpg"}} />
        <Text >La roca</Text>
       
      </View>

      <View style={{flexDirection: "column",marginLeft: 10}}>
      <Image 
      style={style.usePic}
      source={{
        uri:"http://www.lne.es/elementosWeb/gestionCajas/MMP/Image/winslet.jpg"}} />
        <Text >Rosse</Text>
       
      </View>

      <View style={{flexDirection: "column",marginLeft: 10}}>
      <Image 
      style={style.usePic}
      source={{
        uri:"https://forbes.es/app/uploads/2018/10/GettyImages-1028931386web.jpg"}} />
        <Text >Laura</Text>
       
      </View>

            <View style={{flexDirection: "column", marginLeft: 10}}>
      <Image 
      style={style.usePic}
      source={{
        uri:"https://www.lahiguera.net/cinemania/actores/scarlett_johansson/fotos/25587/scarlett_johansson.jpg"}} />
        <Text >Beyonce</Text>
       
      </View>
</View>


<ScrollView vertical>


<View style={{flexDirection: "row", alignItems: "center"}}>
      <Image 
      style={style.usePic}
      source={{
        uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtvlDKVm-bWUSry-MI2leVNQvGIGxlrVLus5d4Qo54r0-G0Gag"}} />
        <Text  style={{marginLeft:10}}>Mariana</Text>
      </View>
<TouchableOpacity 
activeOpacity={0.7}
onPress ={()=>{
  this.likeToggled
}}>
      

<Image 
style={{width: this.state.screewidth,height:350}}
source={{
  uri: imageUri1}} />
  </TouchableOpacity>
  <View style={style.iconBar}>
  <Image style={[style.icon, {height:40, width: 40, tintColor: heartIconColor}]} source={config.images.heartIcon}/>
  <Image style={[style.icon, {height:35, width: 35}]} source={config.images.chattIcon}/>
  <Image style={[style.icon, {height:35, width: 35}]} source={config.images.compartirIcon}/>
  
</View>
<View style={{flexDirection: "row", alignItems: "center"}}>
      <Image 
      style={style.usePic}
      source={{
        uri:"https://previews.123rf.com/images/cthoman/cthoman1508/cthoman150800154/42990661-una-ilustraci%C3%B3n-de-dibujos-animados-de-un-mu%C3%B1eco-de-vud%C3%BA-con-llamas-m%C3%A1gicas-.jpg"}} />
        <Text  style={{marginLeft:10}}>Maria</Text>
      </View>
<TouchableOpacity 
activeOpacity={0.7}
onPress ={()=>{
  this.likeToggled
}}>
      

<Image 
style={{width: this.state.screewidth,height:350}}
source={{
  uri: imageUri2}} />
  </TouchableOpacity>
  <View style={style.iconBar}>
  <Image style={[style.icon, {height:40, width: 40, tintColor: heartIconColor}]} source={config.images.heartIcon}/>
  <Image style={[style.icon, {height:35, width: 35}]} source={config.images.chattIcon}/>
  <Image style={[style.icon, {height:35, width: 35}]} source={config.images.compartirIcon}/>
  
</View>
<View style={{flexDirection: "row", alignItems: "center"}}>
      <Image 
      style={style.usePic}
      source={{
        uri:"https://www.comparaiso.es/sites/comparaiso.es/files/images/shin-chan-dibujos.png"}} />
        <Text  style={{marginLeft:10}}>Roberto</Text>
      </View>
<TouchableOpacity 
activeOpacity={0.7}
onPress ={()=>{
  this.likeToggled
}}>
      

<Image 
style={{width: this.state.screewidth,height:350}}
source={{
  uri: imageUri3}} />
  </TouchableOpacity>
  <View style={style.iconBar}>
  <Image style={[style.icon, {height:40, width: 40, tintColor: heartIconColor}]} source={config.images.heartIcon}/>
  <Image style={[style.icon, {height:35, width: 35}]} source={config.images.chattIcon}/>
  <Image style={[style.icon, {height:35, width: 35}]} source={config.images.compartirIcon}/>
  
</View>
<View style={{flexDirection: "row", alignItems: "center"}}>
      <Image 
      style={style.usePic}
      source={{
        uri:"http://www.xdviral.com/wp-content/uploads/2015/11/10-ranking-dibujos-animados-tiempos-xdviral.jpg"}} />
        <Text  style={{marginLeft:10}}>Carlos</Text>
      </View>
<TouchableOpacity 
activeOpacity={0.7}
onPress ={()=>{
  this.likeToggled
}}>
      

<Image 
style={{width: this.state.screewidth,height:350}}
source={{
  uri: imageUri4}} />
  </TouchableOpacity>
  <View style={style.iconBar}>
  <Image style={[style.icon, {height:40, width: 40, tintColor: heartIconColor}]} source={config.images.heartIcon}/>
  <Image style={[style.icon, {height:35, width: 35}]} source={config.images.chattIcon}/>
  <Image style={[style.icon, {height:35, width: 35}]} source={config.images.compartirIcon}/>
  
</View>
<View style={{flexDirection: "row", alignItems: "center"}}>
      <Image 
      style={style.usePic}
      source={{
        uri:"https://s3.amazonaws.com/bkt-lt-antiguas/wp-content/uploads/sites/7/2017/04/01/homero-yuju-gr-960x623.jpg"}} />
        <Text  style={{marginLeft:10}}>MuñozTitan</Text>
      </View>
<TouchableOpacity 
activeOpacity={0.7}
onPress ={()=>{
  this.likeToggled
}}>
      

<Image 
style={{width: this.state.screewidth,height:350}}
source={{
  uri: imageUri5}} />
  </TouchableOpacity>
  <View style={style.iconBar}>
  <Image style={[style.icon, {height:40, width: 40, tintColor: heartIconColor}]} source={config.images.heartIcon}/>
  <Image style={[style.icon, {height:35, width: 35}]} source={config.images.chattIcon}/>
  <Image style={[style.icon, {height:35, width: 35}]} source={config.images.compartirIcon}/>
  
</View>

<View style={{flexDirection: "row", alignItems: "center"}}>
      <Image 
      style={style.usePic}
      source={{
        uri:"https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/disney-plus-1555050299.jpg?resize=480:*"}} />
        <Text  style={{marginLeft:10}}>Cortometrajes</Text>
      </View>
<Video
  source={{ uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4' }}
  rate={1.0}
  volume={1.0}
  isMuted={false}
  resizeMode="cover"
  shouldPlay
  isLooping
  style={{ width: 300, height: 300 }}
/>
<TouchableOpacity 
activeOpacity={0.7}
onPress ={()=>{
  this.likeToggled
}}>
  <View style={style.iconBar}>
  <Image style={[style.icon, {height:40, width: 40, tintColor: heartIconColor}]} source={config.images.heartIcon}/>
  <Image style={[style.icon, {height:35, width: 35}]} source={config.images.chattIcon}/>
  <Image style={[style.icon, {height:35, width: 35}]} source={config.images.compartirIcon}/>
</View>    
  </TouchableOpacity>
<View style={style.comentBar}>
        <Text>120 Likes</Text>
         <Text>@CortoMetrajeAnimado </Text>
         <Text>#Reflexión </Text>
         <Text>#Animalista</Text>
         <Text>#Pajaritos</Text>
         <Text>@Disney </Text>
         <Text>@Production</Text>
        </View>
    </ScrollView>
    </View>);
  }
}
const style = StyleSheet.create ({
  tempNav: {
      width:100 + "%",
      height:56,
      marginTop: 20,
      backgroundColor:"rgb(250,250,250)",
      borderBottomColor:"rgb(233,233,233)",
      borderBottomWidth: StyleSheet.hairlineWidth,
      justifyContent: "center",
      alignItems:"center",
       marginBottom: 30
       },
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
    comentBar:{
    width: '100 %',
    height: config.styleConstants.rowHeight, 
    borderColor: 'rgb(233,233,233)',
    borderTopWidth: StyleSheet.hairlineWidth,
    borderBottomWidth: StyleSheet.hairlineWidth,
  }
  
});
export default InstaClone;