import { useState } from "react";
import Layout from "@/components/Dash/Layout";
import { jsPDF } from "jspdf"; // For PDF generation

interface TrainingCenter {
  id: string;
  name: string;
  address: string;
}

const trainingCenters: TrainingCenter[] = [
  { id: "center1", name: "MoWASH Academy - Cuttack", address: "Tangi, Cuttack, Odisha" },
  { id: "center2", name: "MoWASH Academy - Kalahandi", address: "Town Road, Bhawanipatna, Kalahandi, Odisha" },
  { id: "center3", name: "MoWASH Academy - Mayurbhanj", address: "Satya Sai Circle, Mayurbhanj" },
];

const MowashEngineer = () => {
  const [selectedCenter, setSelectedCenter] = useState<TrainingCenter | null>(null);
  const [selectedSlot, setSelectedSlot] = useState<string>("");
  const [address, setAddress] = useState<{ street: string; city: string; state: string; zip: string }>({
    street: "",
    city: "",
    state: "",
    zip: "",
  });
  const [isAdmitCardGenerated, setIsAdmitCardGenerated] = useState(false);

  const timeSlots = ["9:00 AM - 12:00 PM", "1:00 PM - 4:00 PM", "5:00 PM - 8:00 PM"];

  const handleCenterSelect = (center: TrainingCenter) => {
    setSelectedCenter(center);
    setSelectedSlot("");
    setIsAdmitCardGenerated(false);
  };

  const handleAdmitCardDownload = () => {
    const doc = new jsPDF();
    
    // Title
    doc.setFontSize(20);
    doc.text("MoWASH Academy", 20, 20);
    doc.setFontSize(16);
    doc.text("Application for Acceptance into Mowash Engineer Training Program", 20, 30);
    
    // User details
    const userName = "John Doe"; // Replace with actual user name input if available
    const mowashId = "MW123456"; // Replace with actual Mowash ID input if available
    const registrationDate = new Date().toLocaleDateString();
    const reportingDate = new Date(); // Set the reporting date as needed
    const formattedReportingDate = reportingDate.toLocaleDateString();
    
    doc.setFontSize(12);
    doc.text(`Name: ${userName}`, 20, 50);
    doc.text(`Mowash ID: ${mowashId}`, 20, 55);
    doc.text(`Date of Registration: ${registrationDate}`, 20, 60);
    doc.text(`Date of Reporting: ${formattedReportingDate}`, 20, 65);
    doc.text(`Time Slot: ${selectedSlot}`, 20, 70);
    
    // Address details
    doc.text(`Residential Address: ${address.street}, ${address.city}, ${address.state}, ${address.zip}`, 20, 80);
    doc.text(`Training Center: ${selectedCenter?.name}`, 20, 85);
    doc.text(`Training Center Address: ${selectedCenter?.address}`, 20, 90);
    
    // Reporting time
    doc.text(`Reporting Time: ${selectedSlot.split(" - ")[0]}`, 20, 95);
    
    // Professional paragraph
    doc.setFontSize(12);
    doc.text("We are pleased to accept you into the Mowash Engineer Training Program. "
      + "Please ensure you arrive at the training center on time and bring all necessary materials. "
      + "We look forward to seeing you and wish you the best in your training journey.", 20, 110);
    
    // Save the PDF
    doc.save("admit_card.pdf");
    setIsAdmitCardGenerated(true);
  };

  return (
    <Layout>
      <div className="min-h-screen p-6 bg-transparent my-10">
        <h1 className="text-4xl font-bold text-blue-500 text-center mb-6">Welcome to the Mowash Engineer Training Program</h1>
        <p className="text-lg text-white text-center max-w-3xl mx-auto mb-10">
          Join our Mowash Engineer program to learn both practical and theoretical skills. Follow the instructions to select your training center, time slot, and fill in your details for kit delivery.
        </p>

        {/* Instructions Section */}
        <div className="bg-transparent ring-2 ring-white p-6 rounded-lg shadow-lg my-10">
          <h2 className="text-2xl font-semibold text-blue-500 mb-4">Instructions</h2>
          <ol className="list-decimal list-inside text-white">
            <li>Select the training center nearest to you.</li>
            <li>Select your preferred timing slot.</li>
            <li>Fill out the form with your residential address for kit delivery.</li>
            <li>Download the admit card with details about your training.</li>
            <li>Report at the center on the specified date and time for training.</li>
            <li>After 30 days, appear for the assessment and earn your certification.</li>
          </ol>
        </div>

        {/* Training Centers Selection */}
        {!selectedCenter && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {trainingCenters.map((center) => (
              <div
                key={center.id}
                onClick={() => handleCenterSelect(center)}
                className="cursor-pointer text-white hover:text-black p-6 bg-transparent ring-2 ring-white rounded-lg shadow-lg hover:bg-blue-200 transition duration-300"
              >
                <h2 className="text-2xl font-semibold text-blue-500 text-center mb-4">{center.name}</h2>
                <p className="text-center">{center.address}</p>
              </div>
            ))}
          </div>
        )}

        {/* Time Slot Selection & Residential Address Form */}
        {selectedCenter && !selectedSlot && (
          <div className="mb-6">
            <h3 className="text-2xl font-semibold text-blue-500 mb-4">Select Time Slot for {selectedCenter.name}</h3>
            <div className="flex flex-col md:flex-row gap-y-5 md:space-x-6">
              {timeSlots.map((slot) => (
                <button
                  key={slot}
                  onClick={() => setSelectedSlot(slot)}
                  className="px-4 py-2 bg-white text-gray-700 rounded shadow-md hover:bg-green-100 transition duration-300"
                >
                  {slot}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Residential Address Input Form */}
        {selectedSlot && !isAdmitCardGenerated && (
          <div className="mb-6">
            <h3 className="text-2xl font-semibold text-blue-500 mb-4">Enter Residential Address for Kit Delivery</h3>
            <input
              type="text"
              className="w-full p-2 border text-white border-white bg-transparent placeholder:text-white rounded-lg mb-4"
              placeholder="Street Address"
              value={address.street}
              onChange={(e) => setAddress({ ...address, street: e.target.value })}
            />
            <input
              type="text"
              className="w-full p-2 border text-white border-white bg-transparent placeholder:text-white rounded-lg mb-4"
              placeholder="City"
              value={address.city}
              onChange={(e) => setAddress({ ...address, city: e.target.value })}
            />
            <input
              type="text"
              className="w-full p-2 border text-white border-white bg-transparent placeholder:text-white rounded-lg mb-4"
              placeholder="State"
              value={address.state}
              onChange={(e) => setAddress({ ...address, state: e.target.value })}
            />
            <input
              type="text"
              className="w-full p-2 border text-white border-white bg-transparent placeholder:text-white rounded-lg mb-4"
              placeholder="Zip Code"
              value={address.zip}
              onChange={(e) => setAddress({ ...address, zip: e.target.value })}
            />
            <button
              onClick={handleAdmitCardDownload}
              className="mt-4 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition duration-300"
            >
              Generate and Download Admit Card
            </button>
          </div>
        )}

        {/* Admit Card Generated Message */}
        {isAdmitCardGenerated && (
          <div className="mt-6 p-4 bg-blue-100 text-blue-500 rounded">
            <p>Admit Card has been generated! Please check your downloads folder.</p>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default MowashEngineer;
