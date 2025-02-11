import { useEffect } from 'react';
import { useAnimatedProps, useSharedValue, withTiming } from 'react-native-reanimated';

import { ProgressProps } from './type';

export default function useLineProgress({
  width = 0,
  strokeWidth = 0,
  value = 0,
  showUnit,
}: Pick<ProgressProps, 'width' | 'strokeWidth' | 'value' | 'showUnit'>) {
  const progressWidth = useSharedValue(0);
  const textLabel = useSharedValue('');

  useEffect(() => {
    progressWidth.value = withTiming((value * width) / 100 - strokeWidth / 2, { duration: 600 });
    textLabel.value = showUnit ? `${value}%` : `${value}`;
  }, [textLabel, progressWidth, showUnit, value, width, strokeWidth]);

  const animatedProps = useAnimatedProps(() => ({
    x2: progressWidth.value,
  }));

  return { textLabel, animatedProps };
}
