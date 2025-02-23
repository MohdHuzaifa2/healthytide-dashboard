
import React from "react";
import { Link } from "react-router-dom";
import { Users, UserPlus, Search } from "lucide-react";
import { Input } from "@/components/ui/input";

// Mock data for patients
const patients = [
  { id: 1, name: "John Doe", age: 45, condition: "Hypertension", lastVisit: "2024-02-20" },
  { id: 2, name: "Jane Smith", age: 32, condition: "Diabetes", lastVisit: "2024-02-18" },
  { id: 3, name: "Mike Johnson", age: 28, condition: "Asthma", lastVisit: "2024-02-15" },
];

const Patients = () => {
  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-2">
          <Users className="h-6 w-6" />
          <h1 className="text-2xl font-semibold">Patients</h1>
        </div>
        <Link
          to="/patients/new"
          className="flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-lg hover:opacity-90"
        >
          <UserPlus className="h-4 w-4" />
          Add Patient
        </Link>
      </div>

      <div className="relative mb-6">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
        <Input
          type="search"
          placeholder="Search patients..."
          className="pl-10 w-full md:max-w-sm"
        />
      </div>

      <div className="bg-white rounded-lg shadow">
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50">
              <tr>
                <th className="px-6 py-3">Name</th>
                <th className="px-6 py-3">Age</th>
                <th className="px-6 py-3">Condition</th>
                <th className="px-6 py-3">Last Visit</th>
                <th className="px-6 py-3">Actions</th>
              </tr>
            </thead>
            <tbody>
              {patients.map((patient) => (
                <tr
                  key={patient.id}
                  className="border-b hover:bg-gray-50"
                >
                  <td className="px-6 py-4 font-medium">{patient.name}</td>
                  <td className="px-6 py-4">{patient.age}</td>
                  <td className="px-6 py-4">{patient.condition}</td>
                  <td className="px-6 py-4">{patient.lastVisit}</td>
                  <td className="px-6 py-4">
                    <Link
                      to={`/patients/${patient.id}`}
                      className="text-primary hover:underline"
                    >
                      View Details
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Patients;
