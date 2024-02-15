import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

import { requestNodeStatus, getBlocks } from '../actions/nodes'
import NodeScreen from './Node.screen'

const NodeController = () => {
  const { nodes } = useSelector((state) => state.initial)

  const [expandedNodeURL, setNodeUrl] = useState(null)

  useEffect(() => {
    handleNodeStatus()
  }, [])

  const handleNodeStatus = () => {
    requestNodeStatus()
  }

  const toggleNodeExpanded = (node) => {
    getBlocks(node)
    setNodeUrl(node.url === expandedNodeURL ? null : node.url)
  }


  const controllers = {
    nodes: nodes.list, 
    expandedNodeURL, 
    toggleNodeExpanded
  }
  
  return <NodeScreen controllers={controllers} />
}

export default NodeController