/*
 *@description:
 *@author: Wai HoYu
 *@date: 2019-09-12 07:01:27
 *@version: V1.0.5
*/

                                                     
import Taro, {Component} from '@tarojs/taro'         
import {View, Text, Image} from '@tarojs/components' 
import './AddCut.less';
import {getFoodCount, setFoodCount, getEvent} from '../../utils/common.js'


const myEvent = getEvent()
class AddCut  extends Component {                
   constructor(){                                    
       super(...arguments)                           
       this.state = { 
        Num:0
       }                              
     }
     componentDidMount(){
        let num =  getFoodCount(this.props.food)
        this.setState({
            Num: num
        })
        myEvent.on("changeCata", ()=>{
            let num =  getFoodCount(this.props.food)
            this.setState({
                Num: num
            })
        })
     }
    CutFood(){
        if (this.props.food) {
            if (this.state.Num >= 1) {
                setFoodCount(this.props.food, this.state.Num, "cut",()=>{
                    let num =  getFoodCount(this.props.food)
                    this.setState({
                        Num: num
                    })   
                })
            }else{
                console.error("异常");
            }
        } 
    }
    AddFood(){
        if (this.props.food) {
            setFoodCount(this.props.food, this.state.Num, "add",()=>{
                let num =  getFoodCount(this.props.food)
                this.setState({
                    Num: num
                })
            })
        } 

    }                                                  
   render(){     
       let {Num} = this.state;
       let hideClass = Num > 0? "":"hide";                                    
       return (
            <View className="addcut">
                <Image onClick={this.CutFood.bind(this)} className= {"opeate_img " + hideClass} src={require('../../assets/img/cut.png')}></Image>
                <Text className={"food_num " + hideClass} >{this.state.Num}</Text>
                <Image onClick={this.AddFood.bind(this)}  className= "opeate_img" src={require('../../assets/img/add.png')}></Image>
            </View>
       )                
   }                                                 
 }
 export default AddCut                             