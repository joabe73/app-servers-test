import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import colors from '../constants/colors'

const Blocks = ({ block }) => {
  return (
  <View style={styles.wrapper}>
    <Text style={styles.index}>{block.attributes.index}</Text>
    <Text style={styles.data}>{block.attributes.data}</Text>
  </View>
)}

const styles = StyleSheet.create({
  index: {
    fontWeight: '600',
    color: colors.blue,
    marginBottom: 6
  },
  data: {
    color: colors.gray6,
    fontSize: 16
  },
  wrapper: {
    borderRadius: 4,
    padding: 8,
    marginBottom: 4,
    backgroundColor: colors.grayd9
  }
})

export default Blocks
