import * as React from 'react';
import { Text } from 'react-native';
import { Appbar } from 'react-native-paper';

const Nav = () => (
  <Appbar.Header style={{width:'100%'}}>
     <Appbar.Action icon="chevron-left" size={30} />
    <Appbar.Content  title="자유톡" titleStyle={{fontWeight:"bold", alignSelf:'center'}}  />
   
    <Appbar.Action icon="bell-outline"  />
  </Appbar.Header>
);






export default Nav;