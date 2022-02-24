import React, { FC } from 'react';
import { View } from 'react-native';
import { spacing, SpacingProps, border, BorderProps, layout, LayoutProps, useRestyle } from '@shopify/restyle';
import { Theme } from '../theme';

const restyleFunctions = [spacing, border, layout];

type FlexItemProps = SpacingProps<Theme> & BorderProps<Theme> & LayoutProps<Theme>;

const FlexItem: FC<FlexItemProps> = ({ children, ...restProps }) => {
  const props = useRestyle(restyleFunctions, {
    flex: 1,
    justifyContent: 'center',
    ...restProps,
  });
  return <View {...props}>{children}</View>;
};

export default FlexItem;
