import React from 'react'
import { View, Text } from 'react-native'
import propTypes from 'prop-types'

const Blocks = ({ block }) => {
  console.log('dddd', block)
  return (
  <View>
    <Text>{block.attributes.index}</Text>
    <Text>{block.attributes.data}</Text>
  </View>
)}

Blocks.propTypes = {
  block: propTypes.shape({
    index: propTypes.number,
    data: propTypes.string
  }).isRequired
}

export default Blocks
