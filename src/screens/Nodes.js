import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { View, StyleSheet } from "react-native";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actionsBlock from '../actions/blocks';
import * as actions from "../actions/nodes";
import Node from "../components/Node";
import { Heading } from "material-bread";

export class Nodes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expandedNodeURL: null
    };
    this.toggleNodeExpanded = this.toggleNodeExpanded.bind(this);
  }

  componentDidMount() {
    this.props.actions.checkNodeStatuses(this.props.nodes.list);
  }

  toggleNodeExpanded(node) {
    this.setState({
      expandedNodeURL: node.url === this.state.expandedNodeURL ? null : node.url
    });
  }

  render() {
    const { nodes } = this.props;
    console.log('>>>>>', nodes)
    return (
      <View>
        <Heading style={styles.heading} type={4}>
          Nodes
        </Heading>
        {nodes.list.map(node => (
          <Node
            node={node}
            blocks={node.blocks}
            key={node.url}
            expanded={node.url === this.state.expandedNodeURL}
            toggleNodeExpanded={this.toggleNodeExpanded}
          />
        ))}
      </View>
    );
  }
}

Nodes.propTypes = {
  actions: PropTypes.object.isRequired,
  nodes: PropTypes.object.isRequired
};
const styles = StyleSheet.create({
  heading: { marginLeft: 30, marginTop: 45, fontWeight: "700" }
});

function mapStateToProps(state) {
  return {
    nodes: state.nodes
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Nodes);
