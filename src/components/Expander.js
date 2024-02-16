import React from 'react'
import Icon from 'react-native-vector-icons/AntDesign'

import colors from '../constants/colors'

export const Expander = ({ expanded, style }) => {
  return (
    <Icon
      size={20}
      name={expanded ? 'up' : 'down'}
      color={colors.faded}
    />
  )
}
