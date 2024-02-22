import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

import { requestNodeStatus, getBlocks } from './node.models'
import NodeScreen from './node.view'

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
    const selectedItem = (node.url === expandedNodeURL)
    if (!selectedItem) {
      getBlocks(node)
    }
    setNodeUrl(selectedItem ? null : node.url)
  }

  const controllers = {
    nodes: nodes.list, 
    expandedNodeURL, 
    toggleNodeExpanded
  }
  
  return <NodeScreen controllers={controllers} />
}

export default NodeController