import React from 'react';
import { Image, Text, View } from 'react-native';
import { IconButton } from 'react-native-paper';
import Icon from 'react-native-vector-icons/AntDesign';





const ImageSection = () => {
 
  
  return (
    
    <View style={{alignItems:'center', borderBottomWidth:3, borderBottomColor:'#F7F8FA', paddingBottom:5 }}>
      <Image  style={{width:'375px', height:'450px'}} source={require('../assets/img1.jpg')} />

      <View style={{flexDirection:'row', marginRight:'auto'}}>
        <IconButton
            icon="heart-outline"
            size={25}
            style={{margin:0}}
          />
          <Text style={{color:'#919EB6' , paddingTop:15, fontSize:'12px' }}>5</Text>

          <Icon.Button
              name="message1"
              backgroundColor={'none'}
              color={'#AFB9CA'}
              style={{paddingTop:10, paddingRight:0, marginRight:0}}
              />
            
          <Text style={{color:'#919EB6' , paddingTop:15, fontSize:'12px' }}>5</Text>
          <IconButton
            icon="bookmark-outline"
            size={25}
            style={{margin:0}}
          />
          <IconButton
            icon="dots-horizontal"
            size={25}
            style={{margin:0}}
          />
          
      </View>
    </View>
  )
}

export default ImageSection