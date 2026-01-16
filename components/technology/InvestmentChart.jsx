// components/technology/InvestmentChart.jsx
"use client";

import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts';

const InvestmentChart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    if (!chartRef.current) return;

    const chart = echarts.init(chartRef.current);
    
    const option = {
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow'
        },
        backgroundColor: 'rgba(255, 255, 255, 0.95)',
        borderColor: '#0c5398',
        borderWidth: 2,
        padding: 10,
        textStyle: {
          color: '#333',
          fontSize: 14
        },
        formatter: function (params) {
          const value = params[0].value;
          const year = params[0].name;
          const growthRate = year === '2022' ? 'Base Year' : 
                           year === '2023' ? 'increase 24.8%' : 'increase 47.5%';
          
          return `
            <div style="margin-bottom: 8px; font-weight: bold; color: #0c5398; font-size: 16px;">
              ${year}
            </div>
            <div style="margin-bottom: 5px;">
              R&D Investment: <span style="font-weight: bold; color: #0c5398;">${value} million CNY</span>
            </div>
            <div style="color: #666; font-size: 12px;">
              ${growthRate}
            </div>
          `;
        }
      },
      grid: {
        left: '5%',
        right: '5%',
        bottom: '8%',
        top: '15%',
        containLabel: true
      },
      xAxis: {
        type: 'category',
        data: ['2022', '2023', '2024'],
        axisLine: {
          lineStyle: {
            color: '#666',
            width: 2
          }
        },
        axisTick: {
          show: true,
          alignWithLabel: true
        },
        axisLabel: {
          color: '#666',
          fontWeight: 'bold',
          fontSize: 14,
          margin: 10
        }
      },
      yAxis: {
        type: 'value',
        name: 'Investment (million CNY)',
        nameTextStyle: {
          color: '#666',
          fontWeight: 'bold',
          fontSize: 14,
          padding: [0, 0, 0, 10]
        },
        axisLine: {
          show: true,
          lineStyle: {
            color: '#666',
            width: 2
          }
        },
        axisLabel: {
          color: '#666',
          fontWeight: 'bold',
          fontSize: 12,
          formatter: '{value}'
        },
        splitLine: {
          lineStyle: {
            type: 'dashed',
            color: '#e0e0e0'
          }
        },
        min: 0,
        max: 50,
        interval: 10
      },
      series: [
        {
          name: 'R&D Investment',
          type: 'bar',
          data: [
            { 
              value: 22.04, 
              itemStyle: { 
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  { offset: 0, color: '#0c5398' },
                  { offset: 1, color: '#1e88e5' }
                ])
              } 
            },
            { 
              value: 27.51, 
              itemStyle: { 
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  { offset: 0, color: '#1565c0' },
                  { offset: 1, color: '#42a5f5' }
                ])
              } 
            },
            { 
              value: 40.55, 
              itemStyle: { 
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  { offset: 0, color: '#1976d2' },
                  { offset: 1, color: '#64b5f6' }
                ])
              } 
            }
          ],
          barWidth: '50%',
          itemStyle: {
            borderRadius: [8, 8, 0, 0],
            shadowColor: 'rgba(0, 0, 0, 0.2)',
            shadowBlur: 8,
            shadowOffsetY: 3
          },
          label: {
            show: true,
            position: 'top',
            formatter: '{c}',
            color: '#0c5398',
            fontWeight: 'bold',
            fontSize: 14,
            textShadowColor: 'rgba(255, 255, 255, 0.8)',
            textShadowBlur: 5
          },
          emphasis: {
            itemStyle: {
              shadowBlur: 15,
              shadowColor: 'rgba(0, 0, 0, 0.4)'
            }
          }
        }
      ]
    };

    chart.setOption(option);

    const handleResize = () => chart.resize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      chart.dispose();
    };
  }, []);

  return <div ref={chartRef} style={{ width: '100%', height: '350px' }} />;
};

export default InvestmentChart;