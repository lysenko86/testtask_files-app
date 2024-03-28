import { NodeType } from "../types";

export const buildPath = (node: NodeType, data: NodeType[]) => {
  let path = ` > ${node.title}`;
  if (node.parent_id !== 0) {
    const parent = data.find(item => item.id === node.parent_id)!;
    path = buildPath(parent, data) + path;
  } else {
    path = path.slice(3);
  }
  return path;
};
