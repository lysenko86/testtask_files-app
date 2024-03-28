import { ReactNode, createContext, useState } from 'react';

import { NodesContextType } from '../types';

export const NodesContext = createContext<NodesContextType>({
  nodesState: {},
  setNodesState: () => {},
});

export const StateLayer = ({
  children,
}: {
  children: ReactNode,
}) => {
  const [nodesState, setNodesState] = useState<Record<number, boolean>>({});

  return (
    <NodesContext.Provider value={{ nodesState, setNodesState }}>
      {children}
    </NodesContext.Provider>
  );
};
