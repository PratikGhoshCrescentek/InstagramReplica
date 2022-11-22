import { View, Image, Dimensions, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'
import Text from '../../components/common/Text'
import { FlashList } from "@shopify/flash-list";
import truncateText from '../common/helpers/truncateText';

export default function PostView({ item, onImagePress }) {
    const [currentFocusedIndex, setCurrentFocusedIndex] = useState(0)

    const renderImage = ({ item, index }) => {
        return (
            <TouchableOpacity onPress={onImagePress}>
                <Image source={{ uri: item }} style={{ height: Dimensions.get('screen').width, width: Dimensions.get('screen').width }} />
            </TouchableOpacity>
        )
    }

    const handleScroll = (event) => {
        const slideSize = event.nativeEvent.layoutMeasurement.width;
        const index = event.nativeEvent.contentOffset.x / slideSize;
        const roundIndex = Math.round(index);
        setCurrentFocusedIndex(roundIndex)
    }

    return (
        <View>
            <View style={styles.headerContainer}>
                <View style={styles.headerContaint}>
                    <Image source={{
                        uri: item.profile_picture
                    }} style={styles.profileImage} />
                    <Text variant={"heading"} fontWeight={'700'} fontSize={12}>{item.name}</Text>
                </View>
                <Icon name='ellipsis-h' style={{
                    alignSelf: 'center'
                }} size={18} color={"#000000"} />
            </View>
            <FlashList
                data={item.images}
                renderItem={renderImage} s
                napToInterval={Dimensions.get('screen').width}
                decelerationRate={'normal'}
                snapToAlignment='end'
                estimatedItemSize={200}
                horizontal={true}
                onScroll={handleScroll}
                showsHorizontalScrollIndicator={false}
            />
            <View style={styles.functionsContainer}>
                <View style={{
                    flexDirection: 'row'
                }}>
                    <Icon name="heart-o" size={18} color={"#000000"} />
                    <Icon name="comment-o" size={18} color={"#000000"} style={{ marginHorizontal: 16 }} />
                    <Icon name="paper-plane-o" size={18} color={"#000000"} />
                </View>
                <View style={{ flexDirection: 'row', marginLeft: -70 }}>
                    {item.images.length > 1 && item.images.map((item, index) => {
                        return <Icon name='circle' size={10} color={currentFocusedIndex === index ? "red" : "#000000"} style={{
                            marginLeft: 5
                        }} key={item.toString()} />;
                    })}
                </View>
                <Icon name='bookmark-o' size={18} color={"#000000"} />
            </View>
            <Text variant={"heading"} style={{ marginVertical: 7, marginHorizontal: 10 }}>
                {item.like_count} {item.like_count > 1 ? "likes" : "like"}
            </Text>
            {item.comment != null && <Text variant={'heading'} style={{ marginHorizontal: 10, marginBottom: 10 }} fontSize={12} lineHeight={16}>
                <Text variant={'heading'} fontWeight={'800'} fontSize={12} lineHeight={16}>{item.name}</Text> {truncateText(item.comment, 125)}
            </Text>}
        </View>
    )
}

const styles = StyleSheet.create({
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 10
    },
    headerContaint: {
        height: 49,
        flexDirection: 'row',
        alignItems: 'center'
    },
    profileImage: {
        height: 30,
        width: 30,
        borderRadius: 15
    },
    functionsContainer: {
        flexDirection: 'row',
        marginHorizontal: 10,
        justifyContent: 'space-between',
        marginTop: 10
    },
})