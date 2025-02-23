import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Search, Filter, Plus, Phone, Video, Edit2, MoreVertical } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface Patient {
  id: number;
  name: string;
  condition: string;
  status: string;
  statusColor: string;
  image: string;
  email: string;
  phone: string;
  nextAppointment?: string;
}

const initialPatients: Patient[] = [
  { 
    id: 1, 
    name: "Haylie Saris", 
    condition: "Heart failure", 
    status: "Chronic form", 
    statusColor: "bg-yellow-100 text-yellow-800",
    image: "/placeholder.svg",
    email: "haylie.s@example.com",
    phone: "(555) 123-4567",
    nextAppointment: "2024-03-15"
  },
  { 
    id: 2, 
    name: "Nolan Korsgaard", 
    condition: "Heart failure", 
    status: "Acute form", 
    statusColor: "bg-blue-100 text-blue-800",
    image: "/placeholder.svg",
    email: "nolan.k@example.com",
    phone: "(555) 234-5678",
    nextAppointment: "2024-03-20"
  },
  { 
    id: 3, 
    name: "Kianna Philips", 
    condition: "Heart failure", 
    status: "Remission", 
    statusColor: "bg-green-100 text-green-800",
    image: "/placeholder.svg",
    email: "kianna.p@example.com",
    phone: "(555) 345-6789"
  }
];

const Patients = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState<"name" | "status">("name");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");
  const [filterStatus, setFilterStatus] = useState<string | null>(null);
  const [patients, setPatients] = useState<Patient[]>(initialPatients);
  const [editingId, setEditingId] = useState<number | null>(null);

  const handleSort = (criteria: "name" | "status") => {
    if (sortBy === criteria) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortBy(criteria);
      setSortOrder("asc");
    }
  };

  const filteredAndSortedPatients = patients
    .filter((patient) => {
      const matchesSearch = patient.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          patient.condition.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesFilter = !filterStatus || patient.status === filterStatus;
      return matchesSearch && matchesFilter;
    })
    .sort((a, b) => {
      const multiplier = sortOrder === "asc" ? 1 : -1;
      return multiplier * a[sortBy].localeCompare(b[sortBy]);
    });

  const handleEditSave = (id: number, updatedData: Partial<Patient>) => {
    setPatients(patients.map(p => p.id === id ? { ...p, ...updatedData } : p));
    setEditingId(null);
  };

  return (
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
              placeholder="Search patients..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 w-full bg-white"
            />
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg border">
              <Filter className="h-5 w-5" />
              Filter
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem onClick={() => setFilterStatus(null)}>
                All
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setFilterStatus("Chronic form")}>
                Chronic form
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setFilterStatus("Acute form")}>
                Acute form
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setFilterStatus("Remission")}>
                Remission
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg border">
              Sort by
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem onClick={() => handleSort("name")}>
                Name {sortBy === "name" && (sortOrder === "asc" ? "↑" : "↓")}
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => handleSort("status")}>
                Status {sortBy === "status" && (sortOrder === "asc" ? "↑" : "↓")}
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <div className="grid gap-4">
          {filteredAndSortedPatients.map((patient) => (
            <Card key={patient.id} className="p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <Avatar className="h-12 w-12">
                    <AvatarImage src={patient.image} />
                    <AvatarFallback>{patient.name[0]}</AvatarFallback>
                  </Avatar>
                  <div>
                    <Link to={`/patients/${patient.id}`} className="font-medium hover:text-primary">
                      {editingId === patient.id ? (
                        <Input
                          value={patient.name}
                          onChange={(e) => handleEditSave(patient.id, { name: e.target.value })}
                          className="max-w-[200px]"
                        />
                      ) : (
                        patient.name
                      )}
                    </Link>
                    <p className="text-sm text-gray-500">{patient.condition}</p>
                    <div className="flex items-center gap-4 mt-2">
                      <p className="text-sm text-gray-500">{patient.email}</p>
                      <p className="text-sm text-gray-500">{patient.phone}</p>
                    </div>
                    {patient.nextAppointment && (
                      <p className="text-sm text-gray-500 mt-1">
                        Next appointment: {patient.nextAppointment}
                      </p>
                    )}
                  </div>
                  <span className={`text-xs px-3 py-1 rounded-full ${patient.statusColor}`}>
                    {patient.status}
                  </span>
                </div>
                <div className="flex items-center gap-4">
                  <button className="p-2 hover:bg-gray-100 rounded-full">
                    <Phone className="h-5 w-5 text-gray-600" />
                  </button>
                  <button className="p-2 hover:bg-gray-100 rounded-full">
                    <Video className="h-5 w-5 text-gray-600" />
                  </button>
                  <DropdownMenu>
                    <DropdownMenuTrigger className="p-2 hover:bg-gray-100 rounded-full">
                      <MoreVertical className="h-5 w-5 text-gray-600" />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      <DropdownMenuItem onClick={() => setEditingId(patient.id)}>
                        <Edit2 className="h-4 w-4 mr-2" />
                        Edit
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Patients;
