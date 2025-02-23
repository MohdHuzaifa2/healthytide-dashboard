import React from "react";
import { useParams, Link } from "react-router-dom";
import { 
  ArrowLeft, 
  User, 
  Calendar, 
  HeartPulse, 
  Clipboard,
  FileText
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

// Mock data - in a real app, this would come from an API
const patientData = {
  1: {
    id: 1,
    name: "John Doe",
    age: 45,
    gender: "Male",
    phone: "(555) 123-4567",
    email: "john.doe@email.com",
    address: "123 Main St, Anytown, ST 12345",
    condition: "Hypertension",
    bloodType: "A+",
    allergies: ["Penicillin", "Peanuts"],
    medications: ["Lisinopril", "Amlodipine"],
    lastVisit: "2024-02-20",
    nextAppointment: "2024-03-15",
    history: [
      { date: "2024-02-20", type: "Check-up", notes: "Blood pressure: 130/85" },
      { date: "2024-01-15", type: "Follow-up", notes: "Medication adjusted" },
    ],
  },
  // ... other patient data
};

const PatientDetails = () => {
  const { id } = useParams();
  const patient = patientData[Number(id)];

  if (!patient) {
    return <div className="p-6">Patient not found</div>;
  }

  return (
    <div className="p-6">
      <Link
        to="/patients"
        className="flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-6"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to Patients
      </Link>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="md:col-span-2">
          <CardContent className="p-6">
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h2 className="text-2xl font-semibold">{patient.name}</h2>
                  <p className="text-gray-500">Patient ID: #{patient.id}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-sm text-gray-500">Last Visit</p>
                <p className="font-medium">{patient.lastVisit}</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6 mt-6">
              <div>
                <p className="text-sm text-gray-500">Age</p>
                <p className="font-medium">{patient.age}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Gender</p>
                <p className="font-medium">{patient.gender}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Phone</p>
                <p className="font-medium">{patient.phone}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Email</p>
                <p className="font-medium">{patient.email}</p>
              </div>
              <div className="col-span-2">
                <p className="text-sm text-gray-500">Address</p>
                <p className="font-medium">{patient.address}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-2 mb-4">
              <HeartPulse className="h-5 w-5 text-primary" />
              <h3 className="font-semibold">Medical Info</h3>
            </div>
            <div className="space-y-4">
              <div>
                <p className="text-sm text-gray-500">Blood Type</p>
                <p className="font-medium">{patient.bloodType}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Condition</p>
                <p className="font-medium">{patient.condition}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Allergies</p>
                <div className="flex flex-wrap gap-2 mt-1">
                  {patient.allergies.map((allergy) => (
                    <span
                      key={allergy}
                      className="bg-red-100 text-red-800 text-xs px-2 py-1 rounded"
                    >
                      {allergy}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="md:col-span-2">
          <CardContent className="p-6">
            <div className="flex items-center gap-2 mb-4">
              <Calendar className="h-5 w-5 text-primary" />
              <h3 className="font-semibold">Appointments</h3>
            </div>
            <div className="space-y-4">
              <div>
                <p className="text-sm text-gray-500">Next Appointment</p>
                <p className="font-medium">{patient.nextAppointment}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-2 mb-4">
              <FileText className="h-5 w-5 text-primary" />
              <h3 className="font-semibold">Medications</h3>
            </div>
            <div className="space-y-2">
              {patient.medications.map((medication) => (
                <div
                  key={medication}
                  className="flex items-center gap-2 text-sm"
                >
                  <span className="w-2 h-2 bg-primary rounded-full" />
                  {medication}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="md:col-span-3">
          <CardContent className="p-6">
            <div className="flex items-center gap-2 mb-4">
              <Clipboard className="h-5 w-5 text-primary" />
              <h3 className="font-semibold">Medical History</h3>
            </div>
            <div className="space-y-4">
              {patient.history.map((entry, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg"
                >
                  <div className="flex-1">
                    <p className="font-medium">{entry.type}</p>
                    <p className="text-sm text-gray-500">{entry.date}</p>
                    <p className="text-sm mt-2">{entry.notes}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default PatientDetails;
