/*
 *@description:
 *@author: Wai HoYu
 *@date: 2019-09-12 08:23:31
 *@version: V1.0.5
*/

// const events = {}
class Event {
    constructor(){
        this.events = {}
    }
    on(eventName, callBack){
        if (this.events[eventName]) {
           this.events[eventName].push(callBack)     
        }else{
            this.events[eventName]=[callBack] 
        }
    }
    emit(eventName, params){
        if (this.events[eventName]) {
                this.events[eventName].map((callBack)=>{
                    callBack(params)
                }
                )
        }
    }
}

export default Event