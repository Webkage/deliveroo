import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'

const CategoryCard = ({imgURL, title}) => {
  return (
    <TouchableOpacity className="relative mr-2">
      <Image
        source={{
            uri: imgURL,
        }}
        className="h-20 w-20 rounded-lg rounded"
      />
      <Text className="  absolute bottom-1 left-1 bg-green-600 opacity-75 text-white font-bold">
        {title}
      </Text>
    </TouchableOpacity>
  )
}

export default CategoryCard