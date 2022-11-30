import React, { useMemo } from 'react';
import { View } from 'react-native';

import { useStyles } from './Pagination.styles';

type PaginationProps = {
  itemsCount: number;
  activeIndex: number;
};

export const Pagination: React.FC<PaginationProps> = ({
  itemsCount,
  activeIndex,
}) => {
  const styles = useStyles();
  const dots = useMemo(() => {
    const result = [];

    for (let i = 0; i < itemsCount; i++) {
      const activeStyle = activeIndex === i ? styles.activeDot : null;
      const dot = <View key={i} style={[styles.dots, activeStyle]} />;
      result.push(dot);
    }

    return result;
  }, [activeIndex, itemsCount, styles]);

  return <View style={styles.root}>{dots}</View>;
};

Pagination.displayName = 'Pagination';
