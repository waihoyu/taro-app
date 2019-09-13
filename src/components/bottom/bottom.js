/*
 *@description:
 *@author: Wai HoYu
 *@date: 2019-09-12 22:28:06
 *@version: V1.0.5
*/

                                                     
import Taro, {Component} from '@tarojs/taro'         
import {View, Text, Image} from '@tarojs/components' 

import './bottom.less'

class Bottom  extends Component {                
   constructor(){                                    
       super(...arguments)                           
       this.state = { 
           Num:10,
           sendPrice:3,
           supportTakeBySelf:false,
           sendMustPrice:20
       }                              
   }                                                   
   render(){     
       let {Num, sendPrice, supportTakeBySelf, sendMustPrice} = this.state;                                    
       return (<View className="bottom">
           <View className="bottom_body">
                {Num? <Text className="num">{Num}</Text>:null}
                <Image className="store_img" src={require('../../assets/img/emptystore.png')}>
                </Image>
                <View className="info">
                    <Text >{sendPrice? "另需配送费￥ "+ sendPrice:""}</Text>
                    <Text>{supportTakeBySelf? "支持自取"+ sendPrice:"不支持自取"}</Text>
                </View>
                <View className="submit"><Text>{sendMustPrice?"￥"+ sendMustPrice+ "起送":"'"}</Text></View>
           </View>
       </View>)                
   }                                                 
 }
 export default Bottom                             

