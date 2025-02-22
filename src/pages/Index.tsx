
import React from 'react';
import { Bell, Search } from 'lucide-react';
import Sidebar from '@/components/dashboard/Sidebar';
import StatCard from '@/components/dashboard/StatCard';
import RevenueChart from '@/components/dashboard/RevenueChart';
import DiagnosisChart from '@/components/dashboard/DiagnosisChart';
import Schedule from '@/components/dashboard/Schedule';
import { Avatar } from '@/components/ui/avatar';

const stats = [
  {
    title: 'Patients',
    value: '6025',
    change: '66.89%',
    trend: [3, 7, 5, 9, 4, 6, 8],
    trendColor: '#4B67F4',
    isPositive: true,
  },
  {
    title: 'New This Week',
    value: '4152',
    change: '41.1%',
    trend: [4, 6, 3, 8, 5, 7, 4],
    trendColor: '#4B67F4',
    isPositive: true,
  },
  {
    title: 'Critical Alerts',
    value: '5948',
    change: '92.05%',
    trend: [8, 3, 7, 4, 9, 5, 6],
    trendColor: '#F97171',
    isPositive: false,
  },
  {
    title: 'Appointments',
    value: '5626',
    change: '27.47%',
    trend: [5, 8, 4, 7, 3, 6, 9],
    trendColor: '#4B67F4',
    isPositive: true,
  },
];

const Index = () => {
  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      <div className="flex-1 overflow-auto">
        <header className="bg-white border-b border-gray-200 px-8 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-semibold">Dashboard</h1>
            <div className="flex items-center gap-6">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search anything here ..."
                  className="pl-10 pr-4 py-2 border border-gray-200 rounded-lg w-64 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                />
                <Search className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
              </div>
              <button className="relative">
                <Bell className="w-6 h-6 text-gray-600" />
                <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>
              <Avatar className="w-8 h-8">
                <img src="/placeholder.svg" alt="User" />
              </Avatar>
            </div>
          </div>
          <div className="flex gap-8 mt-6">
            <button className="text-primary border-b-2 border-primary px-1 py-2">Overview</button>
            <button className="text-gray-500 hover:text-gray-700 px-1 py-2">Medical Reports</button>
            <button className="text-gray-500 hover:text-gray-700 px-1 py-2">Patients Overview</button>
            <button className="text-gray-500 hover:text-gray-700 px-1 py-2">Diagnose</button>
          </div>
        </header>
        
        <main className="p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
            {stats.map((stat) => (
              <StatCard key={stat.title} {...stat} />
            ))}
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <RevenueChart />
            </div>
            <div>
              <DiagnosisChart />
            </div>
          </div>
          
          <div className="mt-6">
            <Schedule />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Index;
