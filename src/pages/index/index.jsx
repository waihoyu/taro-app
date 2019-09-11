import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './index.less'
import Head from '../../components/head/head.js'
import top from '../../components/head/top'
import Food from '../../components/food/food'
import Test from '../../components/food/test'
export default class Index extends Component {

  config = {
    navigationBarTitleText: '首页'
  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='index'>
        <Head/>
        <Food></Food>
        {/* <Test></Test> */}
      </View>
    )
  }
}
