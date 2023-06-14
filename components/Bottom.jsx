import React from 'react'
import { Text, View } from 'react-native';
import { Avatar } from 'react-native-paper';
import { IconButton } from 'react-native-paper';

const Bottom = () => {
  return (
    <View style={{padding:15}}>
    
   <View style={{ flex:1, flexDirection:'row'}}>
        <Avatar.Image size={40} source={require('../assets/img.png')} style={{backgroundColor:'#FFDCA9'}} />
            <View style={{alignSelf:'center'}}>
                <Text style={{fontSize:15, lineHeight:15, fontWeight:'bold',paddingLeft:10}}>안녕 나 응애 </Text>
            </View>
            <View style={{paddingTop:5, flex:1, flexDirection:'row',alignSelf:'center' }}>
                <Avatar.Icon size={20} icon="check" color='white' style={{backgroundColor:'#01B99F' }} />
                <Text style={{paddingLeft:2, color:'gray'}}>1일전</Text>
            </View>
            <View >
            <IconButton
                    icon="dots-horizontal"
                    size={25}
                    style={{margin:0}}
                />
            </View>
   </View>
   <View style={{paddingLeft:50}}>
        <Text style={{color:'#313B49'}}>어머 제가 있던 테이블이 제일 반응이 좋았나보네요🤭 
            우짤래미님도 아시겠지만 저도 일반인 몸매 그 이상도 이하도
            아니잖아요?! 그런 제가 기꺼이 도전해봤는데 생각보다
            괜찮았어요! 오늘 중으로 라이브 리뷰 올라온다고 하니
            꼭 봐주세용~!
        </Text>
   </View>

   
   
</View>
    )
}

export default Bottom