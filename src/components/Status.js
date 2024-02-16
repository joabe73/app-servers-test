import React from 'react'
import { Subtitle } from 'material-bread'
import EntypoIcon from 'react-native-vector-icons/Entypo'
import { View, StyleSheet } from 'react-native'

import colors from '../constants/colors'

function Status({ online, loading }) {
  const color = loading
    ? colors.warning
    : online
    ? colors.success
    : colors.danger;
  return (
    <View style={styles.container}>
      <EntypoIcon name='dot-single' color={color} size={30} />
      <Subtitle
        type={6}
        text={loading ? 'LOADING' : online ? 'ONLINE' : 'OFFLINE'}
        style={styles.textColor(online)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  textColor: online => ({
    color: online ? colors.text : colors.faded,
    letterSpacing: 1,
    left: -7,
    fontSize: 12
  }),
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    alignContent: 'center'
  }
});

export default Status
