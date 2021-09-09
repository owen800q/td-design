import React, { CSSProperties, useMemo } from 'react';
import ReactEcharts from 'echarts-for-react';
import * as echarts from 'echarts/core';
import {
  CustomChart,
  // 系列类型的定义后缀都为 SeriesOption
  CustomSeriesOption,
} from 'echarts/charts';
import {
  TooltipComponent,
  TooltipComponentOption,
  // 组件类型的定义后缀都为 ComponentOption
  GridComponent,
  GridComponentOption,
} from 'echarts/components';
import { CanvasRenderer } from 'echarts/renderers';
import { SingleAxisComponentOption } from 'echarts';
import { merge } from 'lodash-es';

import createLinearGradient from '../../utils/createLinearGradient';
import createCylinderSeries from '../../utils/createCylinderSeries';
import { TooltipOption } from 'echarts/types/dist/shared';
import useTheme from '../../hooks/useTheme';
import useBaseChartConfig from '../../hooks/useBaseChartConfig';

// 通过 ComposeOption 来组合出一个只有必须组件和图表的 Option 类型
type ECOption = echarts.ComposeOption<CustomSeriesOption | TooltipComponentOption | GridComponentOption>;

// 注册必须的组件
echarts.use([TooltipComponent, GridComponent, CustomChart, CanvasRenderer]);

/**
 * 圆柱体柱状图，对应figma柱状图1
 */
export default ({
  xAxisData,
  unit,
  seriesData,
  style,
  config,
}: {
  xAxisData: SingleAxisComponentOption['data'];
  unit?: string;
  seriesData: { name: string; data: (string | number | { name: string; value: string | number })[] }[];
  style?: CSSProperties;
  config?: ECOption;
}) => {
  const theme = useTheme();
  const baseChartConfig = useBaseChartConfig();
  const option = useMemo(() => {
    return merge(
      {
        color: [createLinearGradient(theme.colors.primary50), createLinearGradient(theme.colors.primary300)],
        legend: {
          ...baseChartConfig.legend,
        },
        grid: {
          ...baseChartConfig.grid,
        },
        tooltip: {
          ...baseChartConfig.tooltip,
          axisPointer: {
            ...(baseChartConfig.tooltip as TooltipOption).axisPointer,
            type: 'shadow',
          },
        },
        xAxis: {
          type: 'category',
          data: xAxisData,
          ...baseChartConfig.xAxis,
        },
        yAxis: {
          name: unit,
          ...baseChartConfig.yAxis,
        },
        series: seriesData.slice(0, 2).map(item => createCylinderSeries(theme, item)),
      },
      config
    ) as ECOption;
  }, [
    baseChartConfig.grid,
    baseChartConfig.legend,
    baseChartConfig.tooltip,
    baseChartConfig.xAxis,
    baseChartConfig.yAxis,
    seriesData,
    theme,
    unit,
    xAxisData,
    config,
  ]);

  return <ReactEcharts echarts={echarts} option={option} style={style} />;
};
