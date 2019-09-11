/*
 *@description:
 *@author: Wai HoYu
 *@date: 2019-09-01 09:20:36
 *@version: V1.0.5
*/

import Taro, {Component} from '@tarojs/taro'         
import {View, Text, Image} from '@tarojs/components' 
import {AtTabs, AtTabsPane} from 'taro-ui'
import Cata from './cata'
import 'taro-ui/dist/style/components/tabs.scss'
import './food.less'

class Food  extends Component {                
   constructor(){                                    
       super(...arguments)                           
       this.state = { 
           current: 0,
           tabList: [{title: "点菜"}, {title: "评价"}, {title: "商家"}]
       }                              
    }   
    changeTab(value){
        this.setState({current: value})
    }                                                
   render(){    
       let {current, tabList} = this.state                                     
       return (
            <View>
                <AtTabs current={current} onClick={this.changeTab.bind(this)} tabList={tabList}>
                    <AtTabsPane>
                        <Cata></Cata>
                    </AtTabsPane>
                    <AtTabsPane>评价</AtTabsPane>
                    <AtTabsPane>商家</AtTabsPane>
                </AtTabs>
            </View>
       )                
   }                                                 
 }
 export default Food                             