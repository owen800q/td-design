import React from 'react';
import { ThemeProvider } from '@td-design/react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { useAtomValue } from 'jotai/utils';

import { MainStack } from './stacks/mainStack';
import { darkTheme, lightTheme } from './theme';
import { themeAtom } from './atom';

/**启动时注册自定义图标 */
const App = () => {
  const theme = useAtomValue(themeAtom);

  return (
    <SafeAreaProvider>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <ThemeProvider theme={theme === 'dark' ? darkTheme : lightTheme}>
          <NavigationContainer>
            <MainStack />
          </NavigationContainer>
        </ThemeProvider>
      </GestureHandlerRootView>
    </SafeAreaProvider>
  );
};

export default App;
