import React from 'react'
// import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'
import { AtButtonProps, AtButtonState } from '../../../types/button'

export default class BcButton extends React.Component<
  AtButtonProps,
  AtButtonState
> {
  public render(): JSX.Element {
    return <View>button</View>
  }
}
