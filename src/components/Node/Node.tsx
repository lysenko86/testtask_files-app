
import { useContext } from 'react';

import { NodeType } from '../../types';
import { NodesContext } from '../../store';
import { Label } from '../';

import styles from './Node.module.scss';

export const Node = ({
  node,
  data,
}: {
  node: NodeType;
  data: NodeType[];
}) => {
  const { nodesState, setNodesState } = useContext(NodesContext);

  const subNodes: NodeType[] = node.type === 'folder'
    ? data.filter(child => child.parent_id === node.id)
    : [];

  const renderNode = (node: NodeType) => node.type === 'folder'
    ? <Node key={node.id} node={node} data={data}/>
    : <Label key={node.id} node={node} />;

  const handleExpand = () => {
    setNodesState({
      ...nodesState,
      [node.id]: !nodesState[node.id],
    });
  };

  return (
    <div className={styles.container}>
      <Label
        node={node}
        isEmptyFolder={!subNodes.length}
        onClick={handleExpand}
      />
      {nodesState[node.id] && !!subNodes.length && (
        <div className={styles.children}>
          {subNodes.map(node => renderNode(node))}
        </div>
      )}
    </div>
  );
};
