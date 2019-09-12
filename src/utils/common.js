/*
 *@description:
 *@author: Wai HoYu
 *@date: 2019-09-12 07:43:06
 *@version: V1.0.5
*/
import Taro from '@tarojs/taro'
import Event from './events'
const foodkey = "taro_meituan"
let myEvent = new Event()


export function getFoodCount(food){
    let store = Taro.getStorageSync(foodkey);
        if (store && store[food.id]) {
            return store[food.id].Num
        }else{
            return 0;
        }  
}

export function setFoodCount(food, Num, type, callBack){
    if (food) {
            let store = Taro.getStorageSync(foodkey)
            
            if (!store) {
                store = {}
            }
            
            if (type == "cut") {
                 if (Num == 1) {
                     if (store[food.id]) {
                        delete store[food.id]
                     }    
                 }
                 else{
                     if (store[food.id]) {
                            store[food.id].Num = Num - 1
                     }
                 }  
                 Taro.setStorageSync(foodkey, store) 
                 callBack && callBack()
            }
            if (type == "add") {
                
                if (store[food.id]) {
                    store[food.id].Num = Num + 1    
                    
                }else{
                    
                    store[food.id] = {Num: 1, ...food}
                    // console.log(store[food.id])
                }
                Taro.setStorageSync(foodkey, store) 
                callBack && callBack()
            }            
    }
}

export function getEvent(){
    return myEvent
}