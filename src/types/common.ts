export interface NodesContextType {
  nodesState: Record<number, boolean>;
  setNodesState: (state: Record<number, boolean>) => void;
}
