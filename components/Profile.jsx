import React from 'react';
import { View } from 'react-native';
import { Text } from 'react-native';
import { Avatar } from 'react-native-paper';


const Profile = () => {
  return (
    <View style={{padding:15, flexDirection:'row', justifyContent:'space-between'}}>
         <Avatar.Image size={50} source={require('../assets/img.png')} style={{backgroundColor:'#FFDCA9'}} />
        <View style={{paddingLeft:10, flex:1, flexDirection:'row'}}>
            <View>
                <Text style={{fontSize:20, lineHeight:30, fontWeight:'bold'}}>안녕 나 응애 </Text>
                <Text style={{color:'gray'}}>165cm <Text> 53kg</Text></Text>
            </View>
            <View style={{paddingTop:5,flex:1, flexDirection:'row' }}>
                <Avatar.Icon size={20} icon="check" color='white' style={{backgroundColor:'#01B99F' }} />
                <Text style={{paddingLeft:2, color:'gray'}}>1일전</Text>
            </View>
            <View >
                <Text style={{backgroundColor:'#01B99F', paddingHorizontal:15, paddingVertical:12, borderRadius:20, color:'white' }}>팔로우</Text>
            </View>
        </View>
        
    </View>
   
  )
}

export default Profile