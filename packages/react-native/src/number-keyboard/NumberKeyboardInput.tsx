import React, { FC, useCallback, useEffect, useState } from 'react';
import { TouchableOpacity } from 'react-native';
import Text from '../text';
import helpers from '../helpers';
import NumberKeyboardModal from './NumberKeyboardModal';
import { NumberKeyboardInputProps } from './type';
import { Theme } from '../theme';
import { useTheme } from '@shopify/restyle';
import { Toast } from '..';
import { formatValue } from './util';

const { px } = helpers;
const NumberKeyboardInput: FC<NumberKeyboardInputProps> = ({
  value,
  onChange,
  placeholder = '请输入',
  type,
  style,
  ...restProps
}) => {
  const theme = useTheme<Theme>();
  const [visible, setVisible] = useState(false);
  const [currentText, setCurrentText] = useState(placeholder);

  useEffect(() => {
    setCurrentText(value ? value + '' : placeholder);
  }, [value, placeholder]);

  const handleSubmit = useCallback(
    (value: string) => {
      if (value.split('').filter(item => item === '.').length > 1) {
        Toast.fail({ content: '输入的数字格式不合法' });
        return;
      }
      const text = formatValue(value, type) + '';
      setCurrentText(`${text}` ?? placeholder);
      setVisible(false);
      onChange?.(`${text}`);
    },
    [onChange, placeholder, type]
  );

  return (
    <>
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => setVisible(true)}
        style={[
          {
            height: px(40),
            justifyContent: 'center',
            alignItems: 'flex-end',
            paddingHorizontal: theme.spacing.x4,
          },
          style,
        ]}
      >
        <Text variant="p0" color="gray300">
          {currentText}
        </Text>
      </TouchableOpacity>
      <NumberKeyboardModal
        {...restProps}
        type={type}
        value={currentText === placeholder ? '' : currentText}
        visible={visible}
        onClose={() => setVisible(false)}
        onSubmit={handleSubmit}
      />
    </>
  );
};

export default NumberKeyboardInput;
