import { View, Text, Image } from 'react-native'
import React from 'react'

const Search = () => {
  return (
    <View style={{flex:1, justifyContent:'center'}}>
      <Text>Search</Text>
      <Image source = {{ uri: "https://pbs.twimg.com/profile_images/486929358120964097/gNLINY67_400x400.png"}}
   style = {{ width: 200, height: 200}}
   />
    </View>
  )
}

export default Search