import Layout from "@/components/Dash/Layout";
import { useState, useEffect } from "react";

interface Document {
  name: string;
  uploaded: boolean;
  file?: File;
  previewUrl?: string;
}

const Documents = () => {
  const [documents, setDocuments] = useState<Document[]>([
    { name: "Aadhaar Card", uploaded: false },
    { name: "PAN Card", uploaded: false },
    { name: "Training Certificate", uploaded: false },
    { name: "Fitness Report", uploaded: false },
  ]);

  const [selectedImage, setSelectedImage] = useState<string | null>(null); // Modal state

  // Handle file upload and generate preview URL
  const handleFileChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const file = e.target.files ? e.target.files[0] : null;
    if (file) {
      const updatedDocuments = [...documents];
      updatedDocuments[index] = {
        ...updatedDocuments[index],
        uploaded: true,
        file,
        previewUrl: URL.createObjectURL(file),
      };
      setDocuments(updatedDocuments);
    }
  };

  // Handle toggle between uploaded and not uploaded
  const handleToggle = (index: number) => {
    const updatedDocuments = [...documents];
    if (updatedDocuments[index].uploaded) {
      // If currently uploaded, toggle to not uploaded
      updatedDocuments[index] = {
        ...updatedDocuments[index],
        uploaded: false,
        file: undefined,
        previewUrl: undefined,
      };
    }
    setDocuments(updatedDocuments);
  };

  // Open image in modal
  const openModal = (imageUrl: string) => {
    setSelectedImage(imageUrl);
  };

  // Close modal
  const closeModal = () => {
    setSelectedImage(null);
  };

  // Cleanup object URLs to prevent memory leaks
  useEffect(() => {
    return () => {
      documents.forEach((doc) => {
        if (doc.previewUrl) {
          URL.revokeObjectURL(doc.previewUrl);
        }
      });
    };
  }, [documents]);

  return (
    <Layout>
      <div className="min-h-screen bg-transparent text-white p-6">
        <h1 className="text-2xl font-bold mb-6">Documents</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {documents.map((doc, index) => (
            <div
              key={index}
              className="bg-transparent ring-2 ring-white p-6 rounded-lg shadow-md"
            >
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl text-white font-semibold">{doc.name}</h2>
                <label className="flex items-center cursor-pointer">
                  {/* Toggle Switch */}
                  <div className="relative">
                    <input
                      type="checkbox"
                      className="sr-only"
                      checked={doc.uploaded}
                      onChange={() => handleToggle(index)}
                    />
                    <div className="block bg-gray-600 w-14 h-8 rounded-full"></div>
                    <div
                      className={`dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition ${
                        doc.uploaded
                          ? "transform translate-x-full bg-blue-500"
                          : ""
                      }`}
                    ></div>
                  </div>
                  <div className="ml-3 text-gray-700 font-medium">
                    {doc.uploaded ? "Uploaded" : "Not Uploaded"}
                  </div>
                </label>
              </div>

              {doc.uploaded ? (
                <div>
                  {/* Document Preview */}
                  {doc.previewUrl ? (
                    <img
                      src={doc.previewUrl}
                      alt={`${doc.name} Preview`}
                      className="w-full h-64 object-cover rounded-md mb-4 cursor-pointer"
                      onClick={() => {
                        if (doc.previewUrl) {
                          openModal(doc.previewUrl); // Ensure previewUrl is defined
                        }
                      }}
                    />
                  ) : (
                    <p className="text-yellow-500">No preview available.</p>
                  )}

                  <button className="text-blue-600 underline">
                    Edit Document
                  </button>
                </div>
              ) : (
                <div>
                  <p className="text-red-600 mb-4">
                    Document not uploaded. Please upload the document.
                  </p>
                  <label
                    htmlFor={`upload-${index}`}
                    className="labelFile flex rounded-md flex-col justify-center w-full h-[190px] items-center p-5 border-dotted border-2 text-white border-gray-400 bg-gray-800 cursor-pointer"
                  >
                    <span>
                      <svg
                        viewBox="0 0 184.69 184.69"
                        width="60px"
                        height="60px"
                      >
                        <g>
                          <g>
                            <g>
                              <path
                                d="M149.968,50.186c-8.017-14.308-23.796-22.515-40.717-19.813
                                  C102.609,16.43,88.713,7.576,73.087,7.576c-22.117,0-40.112,17.994-40.112,40.115c0,0.913,0.036,1.854,0.118,2.834
                                  C14.004,54.875,0,72.11,0,91.959c0,23.456,19.082,42.535,42.538,42.535h33.623v-7.025H42.538
                                  c-19.583,0-35.509-15.929-35.509-35.509c0-17.526,13.084-32.621,30.442-35.105c0.931-0.132,1.768-0.633,2.326-1.392
                                  c0.555-0.755,0.795-1.704,0.644-2.63c-0.297-1.904-0.447-3.582-0.447-5.139c0-18.249,14.852-33.094,33.094-33.094
                                  c13.703,0,25.789,8.26,30.803,21.04c0.63,1.621,2.351,2.534,4.058,2.14c15.425-3.568,29.919,3.883,36.604,17.168
                                  c0.508,1.027,1.503,1.736,2.641,1.897c17.368,2.473,30.481,17.569,30.481,35.112c0,19.58-15.937,35.509-35.52,35.509H97.391
                                  v-7.025h44.761c23.459,0,42.538-19.079,42.538-42.535C184.69,71.545,169.884,53.901,149.968,50.186z"
                                style={{ fill: "white" }}
                              ></path>
                            </g>
                            <g>
                              <path
                                d="M108.586,90.201c1.406-1.403,1.406-3.672,0-5.075L88.541,65.078
                                  c-0.701-0.698-1.614-1.045-2.534-1.045l-0.064,0.011c-0.018,0-0.036-0.011-0.054-0.011c-0.931,0-1.85,0.361-2.534,1.045
                                  L63.31,85.127c-1.403,1.403-1.403,3.672,0,5.075c1.403,1.406,3.672,1.406,5.075,0L82.296,76.29v97.227
                                  c0,1.99,1.603,3.597,3.593,3.597c1.979,0,3.59-1.607,3.59-3.597V76.165l14.033,14.036
                                  C104.91,91.608,107.183,91.608,108.586,90.201z"
                                style={{ fill: "white" }}
                              ></path>
                            </g>
                          </g>
                        </g>
                      </svg>
                    </span>
                    <p className="text-center">
                      Drag and drop your file here or click to select a file!
                    </p>
                    <input
                      className="hidden"
                      type="file"
                      id={`upload-${index}`}
                      onChange={(e) => handleFileChange(e, index)}
                      accept="image/*"
                    />
                  </label>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Modal for Image Preview */}
        {selectedImage && (
          <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50">
            <div className="relative">
              <button
                className="absolute -top-20 right-0 text-white p-2"
                onClick={closeModal}
              >
                Close
              </button>
              <img
                src={selectedImage}
                alt="Document Preview"
                className="max-w-full max-h-full cursor-pointer"
                onClick={closeModal} // Close modal on image click
              />
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Documents;
