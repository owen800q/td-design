import React, { FC } from 'react';
import { View } from 'react-native';
import { useRestyle } from '@shopify/restyle';
import { Spacing } from '../theme';

export interface WingBlankProps {
  size?: Spacing;
}

const WingBlank: FC<WingBlankProps> = ({ children, size = 'x3' }) => {
  const props = useRestyle([], {
    marginHorizontal: size,
  });
  return (
    <View style={{ flex: 1, backgroundColor: 'transparent' }} {...props}>
      {children}
    </View>
  );
};

export default WingBlank;
