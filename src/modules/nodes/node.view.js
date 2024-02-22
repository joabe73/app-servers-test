import React from 'react'
import { View, StyleSheet } from 'react-native'
import Node from '../../components/Node'
import { Heading } from 'material-bread'

const NodeScreen = ({ controllers }) => {
  const {nodes, expandedNodeURL, toggleNodeExpanded} = controllers
  return (
    <View>
      <Heading style={styles.heading} type={4}>
        Nodes
      </Heading>
      {nodes.map(node => (
        <Node
          node={node}
          blocks={node.blocks}
          key={node.url}
          expanded={node.url === expandedNodeURL}
          toggleNodeExpanded={toggleNodeExpanded}
        />
      ))}
    </View>
  )
}

const styles = StyleSheet.create({
  heading: { marginLeft: 30, marginTop: 45, fontWeight: "700" }
})

export default NodeScreen
