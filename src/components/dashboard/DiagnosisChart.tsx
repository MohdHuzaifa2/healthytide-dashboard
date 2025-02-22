
import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from 'recharts';

const data = [
  { name: 'Neurology', value: 120, color: '#4B67F4' },
  { name: 'Oncology', value: 30, color: '#F97171' },
  { name: 'Urology', value: 24, color: '#6C7693' },
];

const DiagnosisChart = () => {
  return (
    <div className="bg-white p-6 rounded-xl border border-gray-100">
      <h2 className="text-lg font-semibold mb-4">Avg Diagnose</h2>
      <div className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={80}
              paddingAngle={5}
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Legend
              verticalAlign="middle"
              align="right"
              layout="vertical"
              iconType="circle"
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default DiagnosisChart;
