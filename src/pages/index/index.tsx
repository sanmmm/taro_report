import { Component } from 'react'
import { View, Text } from '@tarojs/components'
import './index.less'
import Taro from '@tarojs/taro'

export default function Index () {
  const u = Taro.useRouter()
  console.log(u)
  return 'test'
}