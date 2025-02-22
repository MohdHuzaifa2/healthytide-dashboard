
import React from 'react';
import { Link } from 'react-router-dom';
import {
  LayoutDashboard,
  Users,
  MessageSquare,
  Calendar,
  FileText,
  BarChart2,
  DollarSign,
  Settings,
  LogOut,
} from 'lucide-react';

const menuItems = [
  { icon: LayoutDashboard, label: 'Dashboard', path: '/' },
  { icon: Users, label: 'Patient', path: '/patients' },
  { icon: MessageSquare, label: 'Message', path: '/messages' },
  { icon: Calendar, label: 'Appointment', path: '/appointments' },
  { icon: FileText, label: 'Medical Record', path: '/records' },
  { icon: BarChart2, label: 'Analytics', path: '/analytics' },
  { icon: DollarSign, label: 'Billing', path: '/billing' },
  { icon: Settings, label: 'Settings', path: '/settings' },
];

const Sidebar = () => {
  return (
    <div className="h-screen w-64 bg-white border-r border-gray-200 flex flex-col">
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
            <span className="text-white font-bold">X</span>
          </div>
          <span className="text-xl font-semibold">Xenityhealth</span>
        </div>
      </div>
      
      <nav className="flex-1 p-4">
        <ul className="space-y-2">
          {menuItems.map((item) => (
            <li key={item.label}>
              <Link
                to={item.path}
                className="flex items-center gap-3 px-4 py-3 text-gray-600 hover:bg-gray-50 rounded-lg transition-colors duration-200"
              >
                <item.icon className="w-5 h-5" />
                <span>{item.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      
      <div className="p-4 border-t border-gray-200">
        <button className="flex items-center gap-3 px-4 py-3 text-gray-600 hover:bg-gray-50 rounded-lg transition-colors duration-200 w-full">
          <LogOut className="w-5 h-5" />
          <span>Log out</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
