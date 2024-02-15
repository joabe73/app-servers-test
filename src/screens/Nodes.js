import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { View, StyleSheet } from "react-native";
import { connect } from "react-redux";
import { useDispatch, useSelector } from 'react-redux'
import { bindActionCreators } from "redux";
import * as actionsBlock from '../actions/blocks';
import * as actions from "../actions/nodes";
import Node from "../components/Node";
import { Heading } from "material-bread";
import { checkNodeSatus } from '../reducers/index'

const Nodes = () => {
  const nodes = useSelector((state) => state.initial.nodes.list)
  const dispatch = useDispatch()
  const [expandedNodeURL, setNodeUrl] = useState(null)

  useEffect(() => {
    // handleNodeStatus()
  }, [])

  const handleNodeStatus = () => {
    dispatch(checkNodeSatus({ nodes: nodes }))
  }

  const toggleNodeExpanded = (node) => {
    setNodeUrl(node.url === expandedNodeURL ? null : node.url)
  }

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

export default Nodes
