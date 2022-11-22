import { View } from 'react-native'
import React from 'react'
import PostView from '../../components/feed/PostView'

export default function Post({navigation, route}) {
  return (
    <View>
     <PostView item={route.params.PostData}/>
    </View>
  )
}