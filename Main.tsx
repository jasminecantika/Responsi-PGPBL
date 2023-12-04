import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import NativeStack from './navigation/NativeStack'

const Main = () => {
  return (
    <NavigationContainer>
        <NativeStack/>
    </NavigationContainer>
  )
}

export default Main