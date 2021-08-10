import React, { CSSProperties, useCallback, useEffect, useMemo, useRef, useState } from 'react';

import theme from '../../theme';

/**
 * 长方体柱状图，对应figma柱状图4
 */
export default ({ value = 62, max = 100, style = {} }: { max: number; value: number; style?: CSSProperties }) => {
  // 当前的值,保存有动画
  const valueRef = useRef(0);

  const canvasRef = useRef<HTMLCanvasElement>(null);

  const { width = 400, height = 400 } = style;

  const canvasWidth = +width * 2;
  const canvasHeight = +height * 2;

  // 根据长宽最短的进行计算半径
  const radius = Math.min(canvasWidth, canvasHeight) / 2;
  // 间隔最小单位
  const interval = max / 5;

  const lineNums = 120;
  const innerLineNums = 180;
  const colorArr = useMemo(() => {
    return ['#FF50B3', '#FFED44', '#3DE6FF', '#1968FF'];
  }, []);

  const lineColor = useMemo(() => {
    return ['#FF1866', '#21E2FF', '#0A5EFF'];
  }, []);

  const numberColors = useMemo(() => {
    return [
      theme.colors.primary400,
      theme.colors.primary400,
      theme.colors.primary300,
      theme.colors.primary200,
      theme.colors.primary50,
      theme.colors.primary100,
    ];
  }, []);

  const colorRgb = useCallback((color: string) => {
    const reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;
    let sColor = color.toLowerCase();
    if (sColor && reg.test(sColor)) {
      if (sColor.length === 4) {
        let sColorNew = '#';
        for (let i = 1; i < 4; i += 1) {
          sColorNew += sColor.slice(i, i + 1).concat(sColor.slice(i, i + 1));
        }
        sColor = sColorNew;
      }
      //处理六位的颜色值
      const sColorChange = [];
      for (let i = 1; i < 7; i += 2) {
        sColorChange.push(parseInt('0x' + sColor.slice(i, i + 2)));
      }
      return sColorChange;
    } else {
      return sColor;
    }
  }, []);

  const colorHex = useCallback(rgb => {
    const _this = rgb;
    const reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;
    if (/^(rgb|RGB)/.test(_this)) {
      const aColor = _this.replace(/(?:(|)|rgb|RGB)*/g, '').split(',');
      let strHex = '#';
      for (let i = 0; i < aColor.length; i++) {
        let hex = Number(aColor[i]).toString(16);
        hex = +hex < 10 ? 0 + '' + hex : hex; // 保证每个rgb的值为2位
        if (hex === '0') {
          hex += hex;
        }
        strHex += hex;
      }
      if (strHex.length !== 7) {
        strHex = _this;
      }
      return strHex;
    } else if (reg.test(_this)) {
      const aNum = _this.replace(/#/, '').split('');
      if (aNum.length === 6) {
        return _this;
      } else if (aNum.length === 3) {
        let numHex = '#';
        for (let i = 0; i < aNum.length; i += 1) {
          numHex += aNum[i] + aNum[i];
        }
        return numHex;
      }
    } else {
      return _this;
    }
  }, []);

  const gradientColor = useCallback(
    (startColor, endColor, step) => {
      const startRGB = colorRgb(startColor); //转换为rgb数组模式
      const startR = startRGB[0];
      const startG = startRGB[1];
      const startB = startRGB[2];

      const endRGB = colorRgb(endColor);
      const endR = endRGB[0];
      const endG = endRGB[1];
      const endB = endRGB[2];

      const sR = (+endR - +startR) / step; //总差值
      const sG = (+endG - +startG) / step;
      const sB = (+endB - +startB) / step;

      const colorArr = [];

      for (let i = 0; i < step; i++) {
        //计算每一步的hex值
        const hex = colorHex(
          'rgb(' +
            parseInt(+sR * i + +startR + '') +
            ',' +
            parseInt(+sG * i + +startG + '') +
            ',' +
            parseInt(+sB * i + +startB + '') +
            ')'
        );
        colorArr.push(hex);
      }
      return colorArr;
    },
    [colorHex, colorRgb]
  );

  const colorList = useMemo(() => {
    let list: any[] = [];
    for (let i = 0; i < colorArr.length - 1; i++) {
      const next = colorArr[i + 1];
      const cur = colorArr[i];
      const colorStep = 40;
      list = list.concat(gradientColor(cur, next, colorStep));
    }
    return list;
  }, [colorArr, gradientColor]);

  const splitLine = useCallback(() => {
    const ctx = canvasRef.current?.getContext('2d');
    if (!ctx) return;

    ctx.save();

    for (let i = 0; i <= 5; i++) {
      ctx.beginPath();
      ctx.lineWidth = 4;
      const index = Math.ceil((i / 5) * 119);
      ctx.strokeStyle = colorList[index];
      ctx.moveTo(radius * 0.9, 0);
      ctx.lineTo(radius * 0.9 + 26, 0);

      ctx.stroke();
      ctx.rotate(((Math.PI * 12) / (9 * 50)) * 10);
      ctx.closePath();
    }
    ctx.restore();
  }, [colorList, radius]);

  const drawTick = useCallback(() => {
    const ctx = canvasRef.current?.getContext('2d');
    if (!ctx) return;

    ctx.save();
    for (let i = 0; i <= lineNums; i++) {
      ctx.beginPath();
      ctx.lineWidth = 4;
      ctx.strokeStyle = colorList[i];

      ctx.moveTo(radius * 0.9, 0);
      ctx.lineTo(radius * 0.9 + 16, 0);
      ctx.stroke();
      //每个点的弧度,360°弧度为2π,即旋转弧度为 2π / 75
      ctx.rotate((2 * Math.PI) / innerLineNums);
      ctx.closePath();
    }
    ctx.restore();
  }, [colorList, radius]);

  const drawNumber = useCallback(() => {
    const ctx = canvasRef.current?.getContext('2d');
    if (!ctx) return;
    ctx.save();

    ctx.rotate(Math.PI / 2);
    for (let i = 0; i <= 5; i++) {
      const gradient = ctx.createLinearGradient(0, 0, 400, 0);
      gradient.addColorStop(0, numberColors[i][0]);
      gradient.addColorStop(1, numberColors[i][1]);
      ctx.fillStyle = gradient;
      ctx.font = '36px Alibaba PuHuiTi';
      ctx.textAlign = 'center';
      ctx.fillText(interval * i + '', 0, -radius * 0.8);
      ctx.rotate(((Math.PI * 12) / (9 * 50)) * 10);
    }
    ctx.restore();
  }, [interval, numberColors, radius]);

  const drawLine = useCallback(() => {
    const ctx = canvasRef.current?.getContext('2d');
    if (!ctx) return;

    let list: any[] = [];
    for (let i = 0; i < lineColor.length - 1; i++) {
      const next = lineColor[i + 1];
      const cur = lineColor[i];
      const colorStep = 150;
      list = list.concat(gradientColor(cur, next, colorStep));
    }

    //外环渐变线
    for (let i = 0; i < 300; i++) {
      ctx.save();
      ctx.beginPath();
      ctx.lineWidth = 20;
      ctx.strokeStyle = list[i];

      ctx.arc(0, 0, (radius * 3) / 4, (60 / 45 / 300) * i * Math.PI, (60 / 45 / 300) * (i + 1.3) * Math.PI);
      ctx.stroke();
      ctx.closePath();
      ctx.restore();
    }
  }, [gradientColor, lineColor, radius]);

  const drawPointer = useCallback(
    value => {
      const ctx = canvasRef.current?.getContext('2d');
      if (!ctx) return;
      ctx.save();

      ctx.beginPath();
      ctx.rotate((((Math.PI * 4) / 3) * value) / max);
      ctx.moveTo(0, 4);
      ctx.lineTo(0, -4);
      ctx.lineTo(radius * 0.9 + 24, 0);

      ctx.fillStyle = '#3DE6FF';
      ctx.fill();
      ctx.closePath();
      ctx.restore();
    },
    [max, radius]
  );

  const drawCenter = useCallback(() => {
    const ctx = canvasRef.current?.getContext('2d');
    if (!ctx) return;
    ctx.save();
    ctx.beginPath();
    ctx.rotate(((Math.PI * 12) / (9 * 50)) * 0);
    ctx.lineWidth = 3;
    ctx.strokeStyle = '#3DE6FF';
    ctx.arc(0, 0, 12, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.closePath();
    ctx.beginPath();
    ctx.fillStyle = '#3DE6FF';
    ctx.arc(0, 0, 6, 0, 2 * Math.PI);
    ctx.fill();
    ctx.closePath();
    ctx.restore();
  }, []);

  const drawValue = useCallback(value => {
    const ctx = canvasRef.current?.getContext('2d');
    if (!ctx) return;
    ctx.save();
    ctx.rotate((210 / 180) * Math.PI);
    ctx.fillStyle = theme.colors.gray50;
    ctx.font = '72px Roboto';
    ctx.textAlign = 'center';
    ctx.fillText(value + '', 0, 120);
    ctx.restore();
  }, []);

  const init = useCallback(() => {
    if (valueRef.current !== value) {
      if (value > valueRef.current) {
        valueRef.current += 1;
      }
      if (value < valueRef.current) {
        valueRef.current -= 1;
      }
      const ctx = canvasRef.current?.getContext('2d');
      if (!ctx) return;
      ctx.save();
      ctx.clearRect(0, 0, canvasWidth, canvasHeight);
      ctx.translate(canvasWidth / 2, canvasHeight / 2);

      ctx.rotate((150 * Math.PI) / 180);
      drawTick();
      splitLine();
      drawNumber();
      drawLine();
      drawCenter();
      drawValue(valueRef.current);
      drawPointer(valueRef.current);
      ctx.translate(-canvasWidth / 2, -canvasHeight / 2);
      ctx.restore();
      requestAnimationFrame(init);
    }
  }, [drawCenter, drawLine, drawNumber, drawPointer, drawTick, drawValue, canvasHeight, splitLine, value, canvasWidth]);

  useEffect(() => {
    init();
  }, [init]);

  return (
    <div style={{ position: 'relative' }}>
      <canvas ref={canvasRef} height={canvasHeight} width={canvasWidth} style={style}></canvas>
    </div>
  );
};
