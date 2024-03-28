import { useContext, useEffect } from 'react';

import data from '../../data.json';
import { NodeType } from '../../types';
import { StateLayer, NodesContext } from '../../store';
import { Search, Node } from '../';

import styles from './App.module.scss';

export const App = () => {
  const { setNodesState } = useContext(NodesContext);

  useEffect(() => {
    const nodesObj = data.reduce((acc: Record<number, boolean>, item) => {
      acc[item.id] = false;
      return acc;
    }, {});
    setNodesState({ ...nodesObj });
  }, []);

  const rootNodes: NodeType[] = data.filter(node => node.parent_id === 0);

  return (
    <StateLayer>
      <div className={styles.container}>
        <Search data={data} />
        <div className={styles.divider} />
        <div className={styles.nodes}>
          {rootNodes.map(node => <Node key={node.id} node={node} data={data}/>)}
        </div>
      </div>
    </StateLayer>
  );
};
