
import React from 'react';
import { Area, AreaChart, ResponsiveContainer } from 'recharts';

interface StatCardProps {
  title: string;
  value: string;
  change: string;
  trend: number[];
  trendColor: string;
  isPositive?: boolean;
}

const StatCard: React.FC<StatCardProps> = ({
  title,
  value,
  change,
  trend,
  trendColor,
  isPositive = true,
}) => {
  const data = trend.map((value, index) => ({ value, index }));

  return (
    <div className="bg-white p-6 rounded-xl border border-gray-100 hover:shadow-lg transition-shadow duration-200">
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
                  <stop offset="0%" stopColor={trendColor} stopOpacity={0.2} />
                  <stop offset="100%" stopColor={trendColor} stopOpacity={0} />
                </linearGradient>
              </defs>
              <Area
                type="monotone"
                dataKey="value"
                stroke={trendColor}
                fill={`url(#gradient-${title})`}
                strokeWidth={2}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default StatCard;
