
import classNames from 'classnames';

import { NodeType } from '../../types';

import folderImg from '../../images/folder.png';
import emptyFolderImg from '../../images/emptyFolder.png';
import fileImg from '../../images/file.png';
import styles from './Label.module.scss';

export const Label = ({
  node,
  isEmptyFolder,
  onClick,
}: {
  node: NodeType;
  isEmptyFolder?: boolean;
  onClick?: () => void;
}) => {
  const handleClick = () => {
    if (node.accessLevel === 0 && onClick) {
      onClick();
    }
  };
  const imgSrc =
    node.type === 'file' ? fileImg
    : isEmptyFolder ? emptyFolderImg
    : folderImg;

  return (
    <div
      className={classNames({
        [styles.container]: true,
        [styles.empty]: isEmptyFolder,
        [styles.forbidden]: node.accessLevel > 0,
      })}
      onClick={handleClick}
    >
      <img
        src={imgSrc}
        alt={node.title}
        className={styles.icon}
      />
      <div className={styles.title}>
        {node.title}
      </div>
    </div>
  );
};
