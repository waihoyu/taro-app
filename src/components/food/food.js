/*
 *@description:
 *@author: Wai HoYu
 *@date: 2019-09-01 09:20:36
 *@version: V1.0.5
*/

import Taro, {Component} from '@tarojs/taro'         
import {View, Text, Image} from '@tarojs/components' 
import {AtTabs, AtTabsPane} from 'taro-ui'
import FoodList from './foodlist'
import Cata from './cata'
import 'taro-ui/dist/style/components/tabs.scss'
import './food.less'

class Food  extends Component {                
   constructor(){                                    
       super(...arguments)                           
       this.state = { 
           current: 0,
           tabList: [{title: "点菜"}, {title: "评价"}, {title: "商家"}],
           foodList: [],
           currentList: [],
           selectCata:null
       }                              
    }   
    changeTab(value){
        this.setState({current: value})
    }
    changeCata(selectCata){
        this.setState({selectCata: selectCata});
        if(this.state.foodList.some(item=>item.pid==selectCata.id)){
            this.setState({
                currentList: this.state.foodList.filter(item=>item.pid==selectCata.id)
            })
        }else {
            this.setState({
                foodList: this.state.foodList.concat(this.getData(selectCata))
            },()=>{
                this.setState({
                    currentList: this.state.foodList.filter(item=>item.pid==selectCata.id)
                })
            })
        }
    } 
    getData(selectCata){
        let count = Math.round(Math.random()*2)
        let imgurl = `../../assets/img/${count}.jpg`
        return  Array.from(Array(Math.round(Math.random()*20)),(v,k)=>({
            price: Math.round(Math.random()*20),
            sole:  Math.round(Math.random()*50),
            img:   imgurl,
            pid:   selectCata.id, 
            id:    selectCata.id + "_" + k,
            title: "分类" + selectCata.id + "菜品" + k + 1
        }))       
    }                                               
   render(){    
       let {current, tabList, currentList, selectCata} = this.state                                     
       return (
            <View>
                <AtTabs current={current} onClick={this.changeTab.bind(this)} tabList={tabList}>
                    <AtTabsPane>
                        <View className="food_body">
                            <Cata onChangeCata={this.changeCata.bind(this)}></Cata>
                            <FoodList selectCata={selectCata} currentList={currentList}></FoodList>
                        </View>
                    </AtTabsPane>
                    <AtTabsPane>评价</AtTabsPane>
                    <AtTabsPane>商家</AtTabsPane>
                </AtTabs>
            </View>
       )                
   }                                                 
 }
 export default Food                             