// components/Earnings.tsx
import React, { useState, ChangeEvent } from "react";
import EarningsChart from "../../components/Dash/EarningsChart";
import Layout from "@/components/Dash/Layout";
import {
  FaRegUser,
  FaMoneyBillAlt,
  FaCreditCard,
  FaChartLine,
  FaCheckCircle,
  FaTimesCircle,
  FaEdit, // Import the edit icon
} from "react-icons/fa";
import EarningsLineChart from "../../components/Dash/EarningsLineChart";
import { Dialog, Transition } from "@headlessui/react"; // For modal
import { Fragment } from "react";
import axios from "axios"; // For HTTP requests

const CLOUDINARY_UPLOAD_PRESET = "mowash_service";
const CLOUDINARY_CLOUD_NAME = "dgtc2fvgu";
const CLOUDINARY_API_URL = `https://api.cloudinary.com/v1_1/₹{CLOUDINARY_CLOUD_NAME}/image/upload`;

const Earnings: React.FC = () => {
  // Sample data for the charts
  const monthlyData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    datasets: [
      {
        label: "Monthly Earnings",
        data: [3000, 500, 1700, 2400, 1600, 1800, 2900],
        borderColor: "rgba(75, 192, 192, 1)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderWidth: 2,
        fill: true,
      },
    ],
  };

  const yearlyData = {
    labels: ["2021", "2022", "2023"],
    datasets: [
      {
        label: "Yearly Earnings",
        data: [2500, 3000, 4000],
        borderColor: "rgba(153, 102, 255, 1)",
        backgroundColor: "rgba(153, 102, 255, 0.2)",
        borderWidth: 2,
        fill: true,
      },
    ],
  };

  // State for bank details
  const [bankDetails, setBankDetails] = useState({
    bankName: "State Bank of India",
    accountHolderName: "Gautam Samanta",
    accountNumber: "3500624153309",
    ifscCode: "SBIN0001234",
    branchName: "Cuttack Main Branch", // Updated to Cuttack
    passbookImage:
      "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1738618703/passbook_tmq0pi.jpg", // Ensure this path is correct
  });

  // State for modal
  const [isOpen, setIsOpen] = useState(false);

  // Temporary state for editing
  const [tempBankDetails, setTempBankDetails] = useState(bankDetails);

  // State for selected file and preview
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewImage, setPreviewImage] = useState<string | null>(null);

  const openModal = () => {
    setTempBankDetails(bankDetails); // Reset temp details
    setPreviewImage(bankDetails.passbookImage); // Set current image as preview
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setSelectedFile(null);
    setPreviewImage(null);
  };

  const handleSave = async () => {
    let imageUrl = bankDetails.passbookImage;

    if (selectedFile) {
      try {
        const formData = new FormData();
        formData.append("file", selectedFile);
        formData.append("upload_preset", CLOUDINARY_UPLOAD_PRESET);

        const response = await axios.post(CLOUDINARY_API_URL, formData);

        imageUrl = response.data.secure_url;
      } catch (error) {
        console.error("Error uploading image:", error);
        alert("Failed to upload image. Please try again.");
        return;
      }
    }

    setBankDetails({
      ...tempBankDetails,
      passbookImage: imageUrl,
    });
    setIsOpen(false);
    setSelectedFile(null);
    setPreviewImage(null);
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setSelectedFile(file);

      // Preview the selected image
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <Layout>
      <div className="p-8 bg-transparent min-h-screen">
        {/* Summary Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            {
              label: "Target",
              amount: "₹52,000",
              icon: <FaRegUser className="h-6 w-6 text-blue-500" />,
            },
            {
              label: "Total Revenue",
              amount: "₹38,000",
              icon: <FaMoneyBillAlt className="h-6 w-6 text-green-500" />,
            },
            {
              label: "Total Withdrawn",
              amount: "₹32,000",
              icon: <FaCreditCard className="h-6 w-6 text-red-500" />,
            },
            {
              label: "Balance",
              amount: "₹6,000",
              icon: <FaChartLine className="h-6 w-6 text-yellow-500" />,
            },
          ].map((item) => (
            <div
              key={item.label}
              className="p-4 ring-2 ring-white bg-transparent rounded-lg shadow-md flex items-center space-x-4"
            >
              {item.icon}
              <div>
                <h3 className="text-white text-sm">{item.label}</h3>
                <p className="text-2xl text-white font-semibold">
                  {item.amount}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Earnings Chart and Bank Details Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {/* Earnings Chart */}
          <div className="md:col-span-2 bg-transparent ring-2 ring-white p-6 rounded-lg shadow-md">
            <h4 className="text-xl text-white font-semibold mb-4">
              Total Earnings
            </h4>
            <p className="text-3xl text-white font-semibold mb-2">₹38,000</p>
            {/* Chart */}
            <EarningsChart />
          </div>

          {/* Bank Details Section */}
          <div className="bg-transparent ring-2 ring-white rounded-md p-6 shadow-md flex flex-col">
            <div className="flex justify-between items-center mb-4">
              <h4 className="text-xl text-white font-semibold">Bank Details</h4>
              <FaEdit
                className="h-5 w-5 text-white cursor-pointer"
                onClick={openModal}
                title="Edit Bank Details"
              />
            </div>
            <div className="space-y-2">
              <p className="text-white">
                <span className="font-semibold">Bank Name:</span>{" "}
                {bankDetails.bankName}
              </p>
              <p className="text-white">
                <span className="font-semibold">Account Holder Name:</span>{" "}
                {bankDetails.accountHolderName}
              </p>
              <p className="text-white">
                <span className="font-semibold">Account Number:</span>{" "}
                {bankDetails.accountNumber}
              </p>
              <p className="text-white">
                <span className="font-semibold">IFSC Code:</span>{" "}
                {bankDetails.ifscCode}
              </p>
              <p className="text-white">
                <span className="font-semibold">Branch Name:</span>{" "}
                {bankDetails.branchName}
              </p>
              <div className="mt-4">
                <img
                  src={bankDetails.passbookImage}
                  alt="Passbook Front Page"
                  className="w-full h-auto rounded-md"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Earnings Goals with Transactions */}
        <div className="flex flex-col lg:flex-row justify-between gap-y-8 lg:gap-x-8 mt-12">
          {/* Recent Transactions */}
          <div className="bg-transparent ring-2 ring-white lg:w-1/5 w-full p-3 rounded-lg shadow-md h-85">
            <h4 className="text-xl text-white font-semibold mb-4">
              Recent Transactions
            </h4>
            <ul className="space-y-4 max-h-80 overflow-y-auto">
              {[
                {
                  name: "Amit Nayak",
                  method: "G-Pay",
                  amount: "₹293.01",
                  status: "Success",
                },
                {
                  name: "Sourav Mohanty",
                  method: "Paytm",
                  amount: "₹739.65",
                  status: "Cancelled",
                },
                {
                  name: "Prakash Das",
                  method: "Cash",
                  amount: "₹576.28",
                  status: "Success",
                },
                {
                  name: "Rashmi Behera",
                  method: "PhonePe",
                  amount: "₹128.01",
                  status: "Success",
                },
                {
                  name: "Amit Nayak",
                  method: "Cash",
                  amount: "₹293.01",
                  status: "Success",
                },
                {
                  name: "Sourav Mohanty",
                  method: "PhonePe",
                  amount: "₹739.65",
                  status: "Cancelled",
                },
                {
                  name: "Prakash Das",
                  method: "G-Pay",
                  amount: "₹576.28",
                  status: "Success",
                },
                {
                  name: "Rashmi Behera",
                  method: "Paytm",
                  amount: "₹128.01",
                  status: "Success",
                },
              ].map((transaction, index) => (
                <li
                  key={index}
                  className="bg-transparent ring-2 ring-white p-2 mx-2 my-3 rounded-lg shadow-md flex justify-between items-center"
                >
                  <div>
                    <p className="text-lg text-white font-semibold">
                      {transaction.name}
                    </p>
                    <p className="text-sm text-white">{transaction.method}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-lg text-white font-semibold">
                      {transaction.amount}
                    </p>
                    <p
                      className={`text-sm ${
                        transaction.status === "Success"
                          ? "text-green-500"
                          : "text-red-500"
                      }`}
                    >
                      {transaction.status === "Success" ? (
                        <FaCheckCircle className="h-4 w-4 text-green-400 inline-block mr-1" />
                      ) : (
                        <FaTimesCircle className="h-4 w-4 text-red-600 inline-block mr-1" />
                      )}
                      {transaction.status}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Monthly and Yearly Summary with Charts */}
          <div className="flex lg:w-4/5 h-full w-full gap-y-8 lg:gap-x-8 flex-col lg:flex-row">
            {/* Monthly Summary */}
            <div className="bg-transparent lg:w-1/2 w-full ring-2 ring-white p-6 rounded-lg shadow-md">
              <h4 className="text-xl text-white font-semibold mb-4">Monthly</h4>
              <p className="text-2xl text-white font-semibold">₹4750</p>
              <p className="text-sm text-green-500">+29.16% from last month</p>
              {/* Monthly Line Chart */}
              <EarningsLineChart data={monthlyData} />
            </div>
            {/* Yearly Summary */}
            <div className="bg-transparent lg:w-1/2 w-full ring-2 ring-white p-6 rounded-lg shadow-md">
              <h4 className="text-xl text-white font-semibold mb-4">Yearly</h4>
              <p className="text-2xl text-white font-semibold">₹38,000</p>
              {/* <p className="text-sm text-red-500">-14.76% from last year</p> */}
              {/* Yearly Line Chart */}
              <EarningsLineChart data={yearlyData} />
            </div>
          </div>
        </div>
      </div>

      {/* Edit Bank Details Modal */}
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-lg bg-gray-800 p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-white mb-4"
                  >
                    Edit Bank Details
                  </Dialog.Title>
                  <div className="mt-2">
                    <form>
                      <div className="mb-4">
                        <label className="block text-white text-sm font-semibold mb-2">
                          Bank Name
                        </label>
                        <input
                          type="text"
                          value={tempBankDetails.bankName}
                          onChange={(e) =>
                            setTempBankDetails({
                              ...tempBankDetails,
                              bankName: e.target.value,
                            })
                          }
                          className="w-full px-3 py-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring focus:ring-blue-500"
                        />
                      </div>
                      <div className="mb-4">
                        <label className="block text-white text-sm font-semibold mb-2">
                          Account Holder Name
                        </label>
                        <input
                          type="text"
                          value={tempBankDetails.accountHolderName}
                          onChange={(e) =>
                            setTempBankDetails({
                              ...tempBankDetails,
                              accountHolderName: e.target.value,
                            })
                          }
                          className="w-full px-3 py-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring focus:ring-blue-500"
                        />
                      </div>
                      <div className="mb-4">
                        <label className="block text-white text-sm font-semibold mb-2">
                          Account Number
                        </label>
                        <input
                          type="text"
                          value={tempBankDetails.accountNumber}
                          onChange={(e) =>
                            setTempBankDetails({
                              ...tempBankDetails,
                              accountNumber: e.target.value,
                            })
                          }
                          className="w-full px-3 py-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring focus:ring-blue-500"
                        />
                      </div>
                      <div className="mb-4">
                        <label className="block text-white text-sm font-semibold mb-2">
                          IFSC Code
                        </label>
                        <input
                          type="text"
                          value={tempBankDetails.ifscCode}
                          onChange={(e) =>
                            setTempBankDetails({
                              ...tempBankDetails,
                              ifscCode: e.target.value,
                            })
                          }
                          className="w-full px-3 py-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring focus:ring-blue-500"
                        />
                      </div>
                      <div className="mb-4">
                        <label className="block text-white text-sm font-semibold mb-2">
                          Branch Name
                        </label>
                        <input
                          type="text"
                          value={tempBankDetails.branchName}
                          onChange={(e) =>
                            setTempBankDetails({
                              ...tempBankDetails,
                              branchName: e.target.value,
                            })
                          }
                          className="w-full px-3 py-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring focus:ring-blue-500"
                        />
                      </div>
                      {/* Passbook Image Upload */}
                      <div className="mb-4">
                        <label className="block text-white text-sm font-semibold mb-2">
                          Passbook Front Page Image
                        </label>
                        <input
                          type="file"
                          accept="image/*"
                          onChange={handleFileChange}
                          className="w-full px-3 py-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring focus:ring-blue-500"
                        />
                        {/* Preview the selected image */}
                        {previewImage && (
                          <img
                            src={previewImage}
                            alt="Passbook Front Page Preview"
                            className="w-full h-auto mt-2 rounded-md"
                          />
                        )}
                      </div>
                    </form>
                  </div>

                  <div className="mt-4 flex justify-end space-x-4">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-gray-600 px-4 py-2 text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      Cancel
                    </button>
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={handleSave}
                      disabled={!selectedFile && !previewImage} // Disable if upload is in progress
                    >
                      Save
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </Layout>
  );
};

export default Earnings;
