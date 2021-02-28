import { NodeObject } from "react-force-graph-2d";
import {
  ClusterCompactness,
  PairwisseClusterDistance,
} from "../helpers/constants";

export namespace SharedTypes {
  export namespace App {
    export interface IAppState {
      nodeDrawerOpen: boolean;
      nodeDrawerContent: NodeDrawer.INodeDrawerContent;
      dynamicGraph: boolean;
      showEdges: boolean;
      nodes: Graph.INode[];
      clusterCompactness: ClusterCompactness;
      pairwiseClusterDistance: PairwisseClusterDistance;
    }
  }

  export namespace Graph {
    export interface IGraphProps {
      assignNodes: (nodes: INode[]) => void;
      toggleNodeDrawer: () => void;
      isNodeDrawerOpen: boolean;
      assignNodeDrawerContent: (node: INode) => void;
      dynamicGraph: boolean;
      showEdges: boolean;
      clusterCompactness: ClusterCompactness;
      pairwiseClusterDistance: PairwisseClusterDistance;
    }

    export interface IGraphState {
      renderCounter: number;
      data: IData;
      nodeGroups: { [group: number]: number };
      groupConvexHullCoordinations: IGroupConvexHullCoordinations;
      nodeWithNewlyAssignedCluster?: { node: INode; newGroupKey: number };
    }

    export interface IData {
      nodes: INode[];
      links: ILink[];
    }

    export interface INode {
      id: number;
      distances: { [nodeId: number]: number };
      nodeLabel: string;
      text: string;
      group: number;
      author: string;
      publishedAt: string;
      color: string;
      index: number;
      fx: number;
      fy: number;
      x: number;
      y: number;
      __bckgDimensions: number[];
    }

    export interface ILink {
      source: INode;
      target: INode;
      weight: number;
    }

    export interface IGroupConvexHullCoordinations {
      [group: number]: number[][];
    }

    export interface IGroupNodeCoordinations {
      [group: number]: {
        x: number[];
        y: number[];
      };
    }

    export interface IForceFn {
      distanceMax: Function;
      strength: Function;
      distance: Function;
      (alpha: number): void;
      initialize?: (nodes: NodeObject[]) => void;
    }
  }

  export namespace NodeDrawer {
    export interface INodeDrawerProps {
      isOpen: boolean;
      toggleNodeDrawer: () => void;
      content: INodeDrawerContent;
      nodes: Graph.INode[];
    }

    export interface INodeDrawerState {
      nodeInfo: INodeInfo;
    }

    export interface INodeInfo {
      [nodeId: number]: { text: string; author: string };
    }

    export interface INodeDrawerContent {
      author: string;
      publishedAt: string;
      distances: { [nodeId: number]: number };
      text: string;
    }
  }

  export namespace NavBar {
    export interface INavBarProps {
      dynamicGraph: boolean;
      showEdges: boolean;
      toggleDynamicGraph: () => void;
      toggleShowEdges: () => void;
      assignClusterCompactness: (
        clusterCompactness: ClusterCompactness
      ) => void;
      assignPairwiseClusterDistance: (
        pairwiseClusterDistance: PairwisseClusterDistance
      ) => void;
    }
  }
}
