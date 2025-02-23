import React, { useState } from 'react';
import { Bell, Search } from 'lucide-react';
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
    trendColor: '#9b87f5',
    lightColor: '#D6BCFA',
    isPositive: true,
  },
  {
    title: 'New This Week',
    value: '4152',
    change: '41.1%',
    trend: [4, 6, 3, 8, 5, 7, 4],
    trendColor: '#0EA5E9',
    lightColor: '#D3E4FD',
    isPositive: true,
  },
  {
    title: 'Critical Alerts',
    value: '5948',
    change: '92.05%',
    trend: [8, 3, 7, 4, 9, 5, 6],
    trendColor: '#F97316',
    lightColor: '#FEC6A1',
    isPositive: false,
  },
  {
    title: 'Appointments',
    value: '5626',
    change: '27.47%',
    trend: [5, 8, 4, 7, 3, 6, 9],
    trendColor: '#8B5CF6',
    lightColor: '#F2FCE2',
    isPositive: true,
  },
];

type Tab = 'overview' | 'medical-reports' | 'patients-overview' | 'diagnose';

const Index = () => {
  const [activeTab, setActiveTab] = useState<Tab>('overview');

  const renderTabContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <>
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
          </>
        );
      case 'medical-reports':
        return (
          <div className="p-4 text-center text-gray-500">
            Medical Reports content coming soon
          </div>
        );
      case 'patients-overview':
        return (
          <div className="p-4 text-center text-gray-500">
            Patients Overview content coming soon
          </div>
        );
      case 'diagnose':
        return (
          <div className="p-4 text-center text-gray-500">
            Diagnose content coming soon
          </div>
        );
    }
  };

  return (
    <div className="flex flex-col h-full">
      <header className="bg-white border-b border-gray-200 px-8 py-4 flex-none">
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
          <button
            onClick={() => setActiveTab('overview')}
            className={`px-1 py-2 transition-colors ${
              activeTab === 'overview'
                ? 'text-primary border-b-2 border-primary'
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            Overview
          </button>
          <button
            onClick={() => setActiveTab('medical-reports')}
            className={`px-1 py-2 transition-colors ${
              activeTab === 'medical-reports'
                ? 'text-primary border-b-2 border-primary'
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            Medical Reports
          </button>
          <button
            onClick={() => setActiveTab('patients-overview')}
            className={`px-1 py-2 transition-colors ${
              activeTab === 'patients-overview'
                ? 'text-primary border-b-2 border-primary'
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            Patients Overview
          </button>
          <button
            onClick={() => setActiveTab('diagnose')}
            className={`px-1 py-2 transition-colors ${
              activeTab === 'diagnose'
                ? 'text-primary border-b-2 border-primary'
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            Diagnose
          </button>
        </div>
      </header>
      
      <div className="flex-1 p-8 overflow-auto">
        {renderTabContent()}
      </div>
    </div>
  );
};

export default Index;
