// components/technology/PatentChart.jsx
"use client";

import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts';

const PatentChart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    if (!chartRef.current) return;

    const chart = echarts.init(chartRef.current);
    
    const option = {
      tooltip: {
        trigger: 'item',
        formatter: function (params) {
          // 使用ECharts提供的百分比
          return `
            <div style="font-weight: bold; color: #0c5398; margin-bottom: 8px; font-size: 16px;">
              ${params.name}
            </div>
            <div style="margin-bottom: 5px;">
              Number: <span style="font-weight: bold; color: #0c5398;">${params.value} items</span>
            </div>
            <div style="margin-bottom: 5px;">
              Percentage: <span style="font-weight: bold; color: #0c5398;">${params.percent}%</span>
            </div>
            <div style="color: #666; font-size: 12px;">
              Total: 370 items
            </div>
          `;
        },
        backgroundColor: 'rgba(255, 255, 255, 0.97)',
        borderColor: '#0c5398',
        borderWidth: 2,
        padding: 15,
        textStyle: {
          color: '#333',
          fontSize: 14
        }
      },
      legend: {
        orient: 'vertical',
        right: 20,
        top: 'center',
        textStyle: {
          color: '#666',
          fontSize: 14,
          fontWeight: 'bold'
        },
        itemWidth: 12,
        itemHeight: 12,
        itemGap: 20,
        data: ['Utility Model Patents', 'Invention Patents']
      },
      series: [
        {
          name: 'Patent Distribution',
          type: 'pie',
          radius: ['45%', '70%'],
          center: ['35%', '50%'],
          avoidLabelOverlap: true,
          itemStyle: {
            borderColor: '#fff',
            borderWidth: 3,
            shadowBlur: 10,
            shadowColor: 'rgba(0, 0, 0, 0.2)'
          },
          label: {
            show: true,
            position: 'inside',
            formatter: '{d}%',
            fontSize: 16,
            fontWeight: 'bold',
            color: '#fff',
            textShadowColor: 'rgba(0, 0, 0, 0.5)',
            textShadowBlur: 5
          },
          emphasis: {
            label: {
              show: true,
              fontSize: 18,
              fontWeight: 'bold'
            },
            itemStyle: {
              shadowBlur: 15,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.3)'
            }
          },
          labelLine: {
            show: false
          },
          data: [
            { 
              value: 256, 
              name: 'Utility Model Patents',
              itemStyle: { 
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  { offset: 0, color: '#4caf50' },
                  { offset: 1, color: '#2e7d32' }
                ])
              }
            },
            { 
              value: 114, 
              name: 'Invention Patents',
              itemStyle: { 
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  { offset: 0, color: '#0c5398' },
                  { offset: 1, color: '#083e6f' }
                ])
              }
            }
          ]
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

export default PatentChart;