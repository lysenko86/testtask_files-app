import { useEffect, useState } from 'react';

import { NodeType } from '../../types';
import { buildPath } from '../../utils';

import styles from './Search.module.scss';

export const Search = ({
  data,
}: {
  data: NodeType[];
}) => {
  const [searchValue, setSearchValue] = useState('');
  const [searchResults, setSearchResults] = useState<string[]>([]);
  const [timerId, setTimerId] = useState<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (timerId) {
      clearTimeout(timerId);
    }
    const newTimerId = setTimeout(() => {
      if (searchValue === '') {
        setSearchResults([]);  
      } else {
        const foundNodes = data.filter(node => node.title.toUpperCase().includes(searchValue.toUpperCase()));
        const newSearchResults = foundNodes.map(node => buildPath(node, data));
        setSearchResults([
          ...newSearchResults,
        ]);
      }
      setTimerId(null);
    }, 1000);
    setTimerId(newTimerId);
  }, [searchValue]);

  return (
    <div>
      <input
        className={styles.input}
        value={searchValue}
        onChange={({ target }) => setSearchValue(target.value)}
      />
      {!!searchResults.length && (
        <div className={styles.searchResults}>
          {searchResults.map(str => (
            <div key={str}>- {str}</div>
          ))}
        </div>
      )}
    </div>
  );
};
