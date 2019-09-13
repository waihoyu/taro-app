/*
 *@description:
 *@author: Wai HoYu
 *@date: 2019-09-12 22:28:06
 *@version: V1.0.5
*/

                                                     
import Taro, {Component} from '@tarojs/taro'         
import {View, Text, Image} from '@tarojs/components' 
import {getAllFoodInfo, getEvent} from '../../utils/common.js' 

import './bottom.less'
let events = getEvent();
class Bottom  extends Component {                
   constructor(){                                    
       super(...arguments)                           
       this.state = { 
           Num: 0,
           sendPrice: 3,
           supportTakeBySelf: false,
           sendMustPrice: 20,
           allPrice:0
       }                              
   } 
   componentDidMount(){
        let {allPrice, allNum} = getAllFoodInfo();
        this.setState({
            Num: allNum,
            allPrice: allPrice
        })
        events.on("addcut",()=>{
            let {allPrice, allNum} = getAllFoodInfo();
            this.setState({
                Num: allNum,
                allPrice: allPrice
            })
        })
   }                                                  
   render(){     
       let {Num, sendPrice, supportTakeBySelf, sendMustPrice, allPrice} = this.state;                                    
       return (<View className="bottom">
           <View className="bottom_body">
                {Num? <Text className="num">{Num}</Text>:null}
                <Image className="store_img" src={Num?require('../../assets/img/fullstore.png'):require('../../assets/img/emptystore.png')}>
                </Image>
                <View className="info">{allPrice?<Text className="price">{"总价格￥ " + allPrice + "  "}</Text>:<Text >{sendPrice? " 另需配送费￥ "+ sendPrice + " | ":""}</Text>}
                    <Text>{supportTakeBySelf? " 支持自取"+ sendPrice:" 不支持自取"}</Text>
                </View>
                <View className="submit"><Text>{sendMustPrice > allPrice?"￥"+ sendMustPrice+ "起送":<Text className="goPay">支付结算</Text>}</Text></View>
           </View>
       </View>)                
   }                                                 
 }
 export default Bottom                             

