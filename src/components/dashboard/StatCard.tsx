
import React from 'react';
import { Area, AreaChart, ResponsiveContainer, Tooltip } from 'recharts';

interface StatCardProps {
  title: string;
  value: string;
  change: string;
  trend: number[];
  trendColor: string;
  lightColor: string;
  isPositive?: boolean;
}

const StatCard: React.FC<StatCardProps> = ({
  title,
  value,
  change,
  trend,
  trendColor,
  lightColor,
  isPositive = true,
}) => {
  const data = trend.map((value, index) => ({ value, name: `Day ${index + 1}` }));

  return (
    <div className="bg-white p-6 rounded-xl border border-gray-100 hover:shadow-lg transition-all duration-300">
      <h3 className="text-gray-500 text-sm font-medium">{title}</h3>
      <div className="flex items-center justify-between mt-2">
        <div>
          <p className="text-2xl font-semibold">{value}</p>
          <p className="text-sm mt-1">
            <span className={`${isPositive ? 'text-green-500' : 'text-red-500'}`}>
              {change}
            </span>
            <span className="text-gray-400 ml-1">Since last week</span>
          </p>
        </div>
        <div className="h-16 w-24">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data}>
              <defs>
                <linearGradient id={`gradient-${title}`} x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor={lightColor} stopOpacity={0.7} />
                  <stop offset="95%" stopColor={lightColor} stopOpacity={0} />
                </linearGradient>
              </defs>
              <Tooltip 
                content={({ active, payload }) => {
                  if (active && payload && payload.length) {
                    return (
                      <div className="bg-white p-2 rounded-lg shadow-md border border-gray-100">
                        <p className="text-sm text-gray-600">{payload[0].value}</p>
                      </div>
                    );
                  }
                  return null;
                }}
              />
              <Area
                type="monotone"
                dataKey="value"
                stroke={trendColor}
                fill={`url(#gradient-${title})`}
                strokeWidth={2}
                dot={{ fill: trendColor, r: 2 }}
                activeDot={{ r: 4, strokeWidth: 0 }}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default StatCard;

