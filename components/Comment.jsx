import React from 'react'
import { Text, TextInput, View } from 'react-native';
import { Button } from 'react-native-paper';

const Comment = () => {
  return (
    <View style={{padding:15,flexDirection:'row' }}>
        <View>
            <Button icon="image-outline" />
        </View>
  
        <View >
            <TextInput
            placeholder='댓글을 남겨주세요.'
            variant='outlined'
            style={{color:'#AFB9CA',width:'100%'}}
            />
        </View>
        <View style={{marginLeft:'auto'}}>
            <Button>등록</Button>
        </View>
    </View>
  )
}

export default Comment