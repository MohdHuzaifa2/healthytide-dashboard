
import React from 'react';
import { Avatar } from '@/components/ui/avatar';

const appointments = [
  {
    id: 1,
    time: '8:44',
    patient: 'Esther Howard',
    type: 'Dermatology',
    avatar: '/placeholder.svg'
  },
  {
    id: 2,
    time: '8:54',
    patient: 'Eleanor Pena',
    type: 'Gastroenterology',
    avatar: '/placeholder.svg'
  },
  {
    id: 3,
    time: '7:39',
    patient: 'Brooklyn Simmons',
    type: 'Ophthalmology',
    avatar: '/placeholder.svg'
  },
  {
    id: 4,
    time: '12:23',
    patient: 'Cameron Williamson',
    type: 'Neurology',
    avatar: '/placeholder.svg'
  }
];

const Schedule = () => {
  return (
    <div className="bg-white p-6 rounded-xl border border-gray-100">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg font-semibold">Latest Visits</h2>
        <span className="text-sm text-gray-500">Today</span>
      </div>
      <div className="space-y-4">
        {appointments.map((appointment) => (
          <div
            key={appointment.id}
            className="flex items-center justify-between p-4 hover:bg-gray-50 rounded-lg transition-colors duration-200"
          >
            <div className="flex items-center gap-4">
              <Avatar>
                <img src={appointment.avatar} alt={appointment.patient} />
              </Avatar>
              <div>
                <p className="font-medium">{appointment.patient}</p>
                <p className="text-sm text-gray-500">{appointment.type}</p>
              </div>
            </div>
            <span className="text-sm font-medium">{appointment.time}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Schedule;
