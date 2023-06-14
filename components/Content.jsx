import React from 'react'
import { Text, View,StyleSheet } from 'react-native';
import { Chip } from 'react-native-paper';

const Content = () => {
  return (
   
    <View style={{padding:15}}>
        <Text style={{fontWeight:'bold', paddingBottom:10}}>지난 월요일에 했던 이벤트 중 가장 괜찮은 상품 뭐야? {"\n"}</Text>
        <Text style={{paddingBottom:20}}>
            지난 월요일에 2023년 S/S 트렌드 알아보기 이벤트 참석했던 팝들아~
            혹시 어떤 상품이 제일 괜찮았어? {"\n"}
        </Text>

        <Text style={{paddingBottom:20}}> 
                후기 올라오는거 보면 로우라이즈? 그게 제일 반응 좋고 그 테이블이 
            제일 재밌었다던데 맞아???{"\n"}
        </Text >

            <Text style={{paddingBottom:15}}> 올해 로우라이즈가 트렌드라길래 나도 도전해보고 싶은데 말라깽이가
            아닌 사람들도 잘 어울릴지 너무너무 궁금해ㅜㅜ로우라이즈 테이블에
            있었던 팝들 있으면 어땠는지 후기 좀 공유해주라~~!{"\n"}</Text>

        <View style={{flexDirection:'row',flexWrap:'wrap'}}>
            <Text style={styles.chip}>#2023</Text>
            <Text style={styles.chip}>#TODAYISMONDAY</Text>
            <Text style={styles.chip}>#TOP</Text>
            <Text style={styles.chip}>#POPS!</Text>
            <Text style={styles.chip}>#WOW</Text>
            <Text style={styles.chip}>#ROW</Text>
            
        </View>
        
    </View>
   
  )
}

export default Content

const styles = StyleSheet.create({
    chip: {
        marginRight:'5px',
        marginBottom:'5px',
        marginTop:'5px',
        textTransform:'uppercase',
        color:'#5A6B87',
        fontWeight:'700',
        fontSize:'12px',
        lineHeight:'12px',
        backgroundColor:'#F7F8FA',
        paddingVertical:'5px',
        paddingHorizontal:'12px',
        borderRadius:20,
        borderTopWidth:1,
        borderRightWidth:1,
        borderBottomWidth:1,
        borderLeftWidth:1,
        borderColor:'#CED3DE'
    },
  });