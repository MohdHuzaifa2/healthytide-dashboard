
import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
} from 'recharts';

const data = [
  { month: 'Jan', amount: 112500 },
  { month: 'Feb', amount: 98000 },
  { month: 'Mar', amount: 124000 },
  { month: 'Apr', amount: 85000 },
  { month: 'May', amount: 105000 },
  { month: 'Jun', amount: 92000 },
  { month: 'Jul', amount: 138500 },
  { month: 'Aug', amount: 97000 },
  { month: 'Sep', amount: 113000 },
  { month: 'Oct', amount: 95000 },
  { month: 'Nov', amount: 118000 },
  { month: 'Dec', amount: 102000 },
];

const RevenueChart = () => {
  return (
    <div className="bg-white p-6 rounded-xl border border-gray-100">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Overview</h2>
        <div className="flex gap-2">
          <button className="px-3 py-1 text-sm bg-primary text-white rounded-md">1 Year</button>
          <button className="px-3 py-1 text-sm text-gray-500 hover:bg-gray-100 rounded-md">6 Months</button>
          <button className="px-3 py-1 text-sm text-gray-500 hover:bg-gray-100 rounded-md">3 Months</button>
          <button className="px-3 py-1 text-sm text-gray-500 hover:bg-gray-100 rounded-md">1 Month</button>
        </div>
      </div>
      <div className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis dataKey="month" axisLine={false} tickLine={false} />
            <YAxis
              axisLine={false}
              tickLine={false}
              tickFormatter={(value) => `$${value.toLocaleString()}`}
            />
            <Tooltip
              formatter={(value) => [`$${value.toLocaleString()}`, 'Revenue']}
              contentStyle={{
                backgroundColor: '#fff',
                border: '1px solid #e5e7eb',
                borderRadius: '8px',
              }}
            />
            <Bar dataKey="amount" fill="#4B67F4" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default RevenueChart;
