import React, { useState } from "react";
import QRCodeGenerator from "qrcode-generator";

interface OrderDetailsProps {
  customerName: string;
  address: string;
  contactNumber: string;
  jobDescription: string;
  earnings: number;
  status: string;
  onStatusChange: (newStatus: string) => void;
}

const OrderDetailsTable: React.FC<OrderDetailsProps> = ({
  customerName,
  address,
  contactNumber,
  jobDescription,
  earnings,
  status,
  onStatusChange,
}) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "Pending":
        return "bg-yellow-400 text-black";
      case "Completed":
        return "bg-green-400 text-black";
      case "Missed":
        return "bg-red-400 text-white";
      default:
        return "bg-gray-400 text-black";
    }
  };

  return (
    <tr className="text-center border-b border-gray-200">
      <td className="py-4 px-4">{customerName}</td>
      <td className="py-4 px-4">{address}</td>
      <td className="py-4 px-4">{contactNumber}</td>
      <td className="py-4 px-4">{jobDescription}</td>
      <td className="py-4 px-4">₹{earnings.toFixed(2)}</td>
      <td className={`py-4 px-4 ${getStatusColor(status)}`}>
        <select
          value={status}
          onChange={(e) => onStatusChange(e.target.value)}
          className={`rounded p-1 ${getStatusColor(status)}`}
        >
          <option value="Pending">Pending</option>
          <option value="Completed">Completed</option>
          <option value="Missed">Missed</option>
        </select>
      </td>
    </tr>
  );
};

const PaymentModal: React.FC<{
  isOpen: boolean;
  onClose: () => void;
  earnings: number;
  customerName: string;
}> = ({ isOpen, onClose, earnings, customerName }) => {
  const [paymentMode, setPaymentMode] = useState<string | null>(null);
  const [qrCodeDataUrl, setQrCodeDataUrl] = useState<string | null>(null);

  const handlePaymentModeChange = (mode: string) => {
    setPaymentMode(mode);
    if (mode === "online") {
      // Generate the QR code for online payment
      const qr = QRCodeGenerator(0, "L");
      qr.addData(`upi://pay?pa=example@upi&pn=${customerName}&am=${earnings}&cu=INR`);
      qr.make();
      setQrCodeDataUrl(qr.createDataURL());
    } else {
      setQrCodeDataUrl(null); // Clear QR code for cash payment
    }
  };

  const handleCashPayment = () => {
    alert("Please take ₹" + earnings + " from the client.");
    onClose(); // Close modal
  };

  return isOpen ? (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-black ring-2 ring-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-lg font-bold mb-4">
          Complete Payment for {customerName}
        </h2>
        <p className="mb-4">Amount to collect: ₹{earnings.toFixed(2)}</p>

        {!paymentMode ? (
          <div>
            <h3 className="font-semibold">Select Payment Mode</h3>
            <div className="flex justify-between mt-4">
              <button
                onClick={() => handlePaymentModeChange("cash")}
                className="p-2 bg-blue-500 text-white rounded-md"
              >
                Cash
              </button>
              <button
                onClick={() => handlePaymentModeChange("online")}
                className="p-2 bg-green-500 text-white rounded-md"
              >
                Online
              </button>
            </div>
          </div>
        ) : paymentMode === "cash" ? (
          <div>
            <p className="mt-4">Please take ₹{earnings} in cash from the client.</p>
            <button
              onClick={handleCashPayment}
              className="mt-4 p-2 bg-red-500 text-white rounded-md"
            >
              Done
            </button>
          </div>
        ) : (
          <div className="mt-4 flex flex-col items-center">
            <p className="mb-2">Scan the QR code for online payment:</p>
            {qrCodeDataUrl && (
              <img src={qrCodeDataUrl} alt="QR Code" className="mb-2 h-[300px]" />
            )}
            <p className="text-sm mt-2">Amount: ₹{earnings}</p>
          </div>
        )}
        <button onClick={onClose} className="mt-6 p-2 bg-gray-500 text-white rounded-md">
          Close
        </button>
      </div>
    </div>
  ) : null;
};

const Table: React.FC = () => {
  const [data, setData] = useState([
    {
      customerName: "Rahul Kumar",
      address: "Cuttack",
      contactNumber: "(937) 625-7806",
      jobDescription: "Pipe Cleaning",
      earnings: 1550.0,
      status: "Pending",
    },
    {
      customerName: "Anjali Mishra",
      address: "Cuttack",
      contactNumber: "(987) 654-3210",
      jobDescription: "Pipeline Fitting",
      earnings: 1775.0,
      status: "Pending",
    },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentEarnings, setCurrentEarnings] = useState(0);
  const [currentCustomer, setCurrentCustomer] = useState("");

  const handleStatusChange = (index: number, newStatus: string) => {
    const updatedData = data.map((order, i) =>
      i === index ? { ...order, status: newStatus } : order
    );

    setData(updatedData);

    // If the status is changed to "Completed", trigger the modal
    if (newStatus === "Completed") {
      setCurrentEarnings(data[index].earnings);
      setCurrentCustomer(data[index].customerName);
      setIsModalOpen(true);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="bg-transparent lg:p-6 p-2 rounded-lg shadow-lg">
      <div className="flex justify-between mb-4">
        <h3 className="text-lg text-white font-bold">Today&apos;s Orders</h3>
        <span className="text-gray-200">Date: {new Date().toLocaleDateString()}</span>
      </div>
      <div className="overflow-x-auto">
        <div className="max-h-96 overflow-y-auto">
          <table className="min-w-full table-auto text-sm">
            <thead className="bg-gray-100 text-sm text-gray-600 sticky top-0">
              <tr>
                <th className="py-2 px-4">Customer Name</th>
                <th className="py-2 px-4">Address</th>
                <th className="py-2 px-4">Contact Number</th>
                <th className="py-2 px-4">Job Description</th>
                <th className="py-2 px-4">Earnings</th>
                <th className="py-2 px-4">Status</th>
              </tr>
            </thead>
            <tbody className="text-center text-white">
              {data.length > 0 ? (
                data.map((order, index) => (
                  <OrderDetailsTable
                    key={index}
                    customerName={order.customerName}
                    address={order.address}
                    contactNumber={order.contactNumber}
                    jobDescription={order.jobDescription}
                    earnings={order.earnings}
                    status={order.status}
                    onStatusChange={(newStatus) =>
                      handleStatusChange(index, newStatus)
                    }
                  />
                ))
              ) : (
                <tr>
                  <td colSpan={6} className="py-6 text-center">
                    <div className="flex flex-col items-center">
                      <span className="text-lg font-semibold">
                        No orders found for today.
                      </span>
                      <img
                        src="https://path-to-your-image.png"
                        alt="No Data"
                        className="mt-4 h-20"
                      />
                    </div>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Payment Modal */}
      <PaymentModal
        isOpen={isModalOpen}
        onClose={closeModal}
        earnings={currentEarnings}
        customerName={currentCustomer}
      />
    </div>
  );
};

export default Table;
