import React from "react";
import Graph from "./components/Graph";
import NavBar from "./components/NavBar";
import NodeDrawer from "./components/NodeDrawer";
import {
  ClusterCompactness,
  PairwisseClusterDistance,
} from "./helpers/constants";
import { SharedTypes } from "./shared/sharedTypes";

class App extends React.Component<{}, SharedTypes.App.IAppState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      nodes: [],
      nodeDrawerOpen: false,
      nodeDrawerContent: {
        author: "",
        publishedAt: "",
        text: "",
        distances: {},
      },
      dynamicGraph: true,
      showEdges: false,
      clusterCompactness: ClusterCompactness.ClusterCompactness,
      pairwiseClusterDistance:
        PairwisseClusterDistance.PairwisseClusterDistance,
    };
  }

  private assignNodes = (nodes: SharedTypes.Graph.INode[]): void =>
    this.setState({ nodes });

  private toggleNodeDrawer = (): void =>
    this.setState({ nodeDrawerOpen: !this.state.nodeDrawerOpen });

  private toggleDynamicGraph = (): void =>
    this.setState({ dynamicGraph: !this.state.dynamicGraph });

  private toggleShowEdges = (): void =>
    this.setState({ showEdges: !this.state.showEdges });

  private assignClusterCompactness = (
    clusterCompactness: ClusterCompactness
  ): void => this.setState({ clusterCompactness });

  private assignPairwiseClusterDistance = (
    pairwiseClusterDistance: PairwisseClusterDistance
  ): void => this.setState({ pairwiseClusterDistance });

  private assignNodeDrawerContent = (
    nodeObject: SharedTypes.Graph.INode
  ): void => {
    this.setState({
      nodeDrawerContent: {
        author: nodeObject.author,
        text: nodeObject.text,
        publishedAt: nodeObject.publishedAt,
        distances: nodeObject.distances,
      },
    });
  };

  render() {
    return (
      <>
        <NavBar
          dynamicGraph={this.state.dynamicGraph}
          showEdges={this.state.showEdges}
          toggleDynamicGraph={this.toggleDynamicGraph}
          toggleShowEdges={this.toggleShowEdges}
          assignClusterCompactness={this.assignClusterCompactness}
          assignPairwiseClusterDistance={this.assignPairwiseClusterDistance}
        />
        <Graph
          assignNodes={this.assignNodes}
          isNodeDrawerOpen={this.state.nodeDrawerOpen}
          toggleNodeDrawer={this.toggleNodeDrawer}
          assignNodeDrawerContent={this.assignNodeDrawerContent}
          dynamicGraph={this.state.dynamicGraph}
          showEdges={this.state.showEdges}
          clusterCompactness={this.state.clusterCompactness}
          pairwiseClusterDistance={this.state.pairwiseClusterDistance}
        />
        <NodeDrawer
          nodes={this.state.nodes}
          toggleNodeDrawer={this.toggleNodeDrawer}
          isOpen={this.state.nodeDrawerOpen}
          content={this.state.nodeDrawerContent}
        />
      </>
    );
  }
}

export default App;
