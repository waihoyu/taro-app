/*
 *@description:
 *@author: Wai HoYu
 *@date: 2019-09-01 09:20:36
 *@version: V1.0.5
*/

import Taro, {Component} from '@tarojs/taro'         
import {View, Text, Image} from '@tarojs/components' 
import {AtTabs, AtTabsPane} from 'taro-ui'

class Food  extends Component {                
   constructor(){                                    
       super(...arguments)                           
       this.state = { }                              
    }                                                   
   render(){                                         
       return (
            <View>
                <AtTabs tabs={
                    [
                        {title:"标签1"},
                        {title:"标签1"},
                        {title:"标签1"}
                    ]}></AtTabs>
            </View>
       )                
   }                                                 
 }
 export default Food                             