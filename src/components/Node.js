import React from 'react'
import { View, TouchableOpacity, StyleSheet, ActivityIndicator } from 'react-native'
import { Paper, Subtitle, BodyText, Caption } from 'material-bread'

import colors from '../constants/colors'
import { Expander } from './Expander'
import Block from './Blocks'
import Status from './Status'

const Node = ({ node, blocks, expanded, toggleNodeExpanded }) => (
  <TouchableOpacity onPress={() => toggleNodeExpanded(node)}>
    <Paper elevation={2} style={styles.container}>
      <View style={styles.headingContainer}>
        <Subtitle
          type={6}
          text={node.name || 'Unknown'}
          style={styles.heading}
        />
        <View style={styles.headingStatus}>
          <Status loading={(node.loading && !expanded)} online={node.online} />
          <Expander expanded={expanded} style={styles.icon(expanded)} />
        </View>
      </View>
      <View style={styles.headingContainer}>
        <Caption
          text={node.url}
          color={colors.gray}
          style={styles.secondaryHeading}
        />
      </View>
      {expanded && (
        <View style={styles.heading}>
          {node.loading ? <ActivityIndicator color={colors.gray} /> :
            blocks.length ? blocks.map((item, ix) => (
              <Block key={ix} block={item} />
            )) : <BodyText type={1} text={'this node has no blocks'} />
          }
        </View>
      )}
    </Paper>
  </TouchableOpacity>
)

const styles = StyleSheet.create({
  container: {
    padding: 10,
    marginVertical: 10,
    marginHorizontal: 30
  },
  heading: {
    marginTop: 5,
    color: colors.text
  },
  headingContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingEnd: 10,
    alignItems: 'center',
    width: '100%'
  },
  headingStatus: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  secondaryHeading: {
    marginTop: 5,
    color: colors.faded
  },
  icon: expanded => ({
    position: 'absolute',
    top: expanded ? 10 : 20,
    right: 10
  })
})

export default Node
