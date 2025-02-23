
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Search, Filter, Plus, Phone, Video } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";
import Sidebar from "@/components/dashboard/Sidebar";

const patients = [
  { 
    id: 1, 
    name: "Haylie Saris", 
    condition: "Heart failure", 
    status: "Chronic form", 
    statusColor: "bg-yellow-100 text-yellow-800",
    image: "/placeholder.svg"
  },
  { 
    id: 2, 
    name: "Nolan Korsgaard", 
    condition: "Heart failure", 
    status: "Acute form", 
    statusColor: "bg-blue-100 text-blue-800",
    image: "/placeholder.svg"
  },
  { 
    id: 3, 
    name: "Kianna Philips", 
    condition: "Heart failure", 
    status: "Remission", 
    statusColor: "bg-green-100 text-green-800",
    image: "/placeholder.svg"
  }
];

const Patients = () => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      <div className="flex-1 overflow-auto">
        <div className="p-8">
          <div className="flex justify-between items-center mb-8">
            <div>
              <p className="text-gray-500">Hi Renata Modiook,</p>
              <h1 className="text-2xl font-semibold mt-1">Patients</h1>
            </div>
            <Link
              to="/patients/new"
              className="flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-full hover:opacity-90"
            >
              <Plus className="h-5 w-5" />
              Add New Patient
            </Link>
          </div>

          <div className="flex gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Input
                type="search"
                placeholder="Search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 w-full bg-white"
              />
            </div>
            <button className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg border">
              <Filter className="h-5 w-5" />
              Filter
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg border">
              Sort by
            </button>
          </div>

          <div className="grid gap-4">
            {patients.map((patient) => (
              <Card key={patient.id} className="p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <Avatar className="h-12 w-12">
                      <AvatarImage src={patient.image} />
                      <AvatarFallback>{patient.name[0]}</AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="font-medium">{patient.name}</h3>
                      <p className="text-sm text-gray-500">{patient.condition}</p>
                    </div>
                    <span className={`text-xs px-3 py-1 rounded-full ${patient.statusColor}`}>
                      {patient.status}
                    </span>
                  </div>
                  <div className="flex gap-2">
                    <button className="p-2 hover:bg-gray-100 rounded-full">
                      <Phone className="h-5 w-5 text-gray-600" />
                    </button>
                    <button className="p-2 hover:bg-gray-100 rounded-full">
                      <Video className="h-5 w-5 text-gray-600" />
                    </button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Patients;
