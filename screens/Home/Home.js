import { View, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { FlashList } from "@shopify/flash-list";
import PostView from '../../components/feed/PostView';

export default function Home({ navigation }) {
  const [feedData, setFeedData] = useState()

  useEffect(() => {
    getData()
  }, [])

  const getData = () => {

    console.log('getData called')

    axios('https://www.jsonkeeper.com/b/GWPC')
      .then((response) => {
        // handle success
        setFeedData(response.data)
      })
  }

  const renderItem = ({ item, index }) => {
    return (
        <PostView
          item={item}
          onImagePress={()=> navigation.navigate("Post", {PostData: item})}
        />
    )
  }

  return (
    <View style={{ flex: 1, justifyContent: 'center' }}>
      <FlashList
        data={feedData}
        renderItem={renderItem}
        estimatedItemSize={200}
      />
    </View>
  )
}
