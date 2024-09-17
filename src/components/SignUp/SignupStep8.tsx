import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineCheck, AiOutlineCloseCircle } from 'react-icons/ai';

interface Organization {
    name: string;
    logo: string;
}

const organizations: Organization[] = [
    { name: 'NSDC', logo: 'https://res.cloudinary.com/dgtc2fvgu/image/upload/v1726530989/NSDC-Preview-removebg-preview_iz8rat.png' },
    { name: 'NSFDC', logo: 'https://res.cloudinary.com/dgtc2fvgu/image/upload/v1726530974/nsfdc-logo_oqjacv.png' },
    { name: 'UNICEF', logo: 'https://res.cloudinary.com/dgtc2fvgu/image/upload/v1726530975/UNICEF-logo_lctnsz.webp' },
    { name: 'mOWASH COMPANY + SCCJ', logo: 'https://res.cloudinary.com/dgtc2fvgu/image/upload/v1726530988/mo-wash-logo_eiq199.svg' },
    { name: 'UNDP', logo: 'https://res.cloudinary.com/dgtc2fvgu/image/upload/v1726530972/undp-logo-blue_cjemk6.svg' },
    { name: 'HUDD, Govt. of Odisha', logo: 'https://res.cloudinary.com/dgtc2fvgu/image/upload/v1726530969/huddlogo-odisha_zczi0a.png' },
    { name: 'Dept. of Panchayati Raj, Govt. of Odisha', logo: 'https://res.cloudinary.com/dgtc2fvgu/image/upload/v1726530969/huddlogo-odisha_zczi0a.png' },
    { name: 'SKILL COUNCIL FOR GREEN JOBS', logo: 'https://res.cloudinary.com/dgtc2fvgu/image/upload/v1726530978/scgj_n7hvdt.gif' },
];

const SignupStep8: React.FC = () => {
    const [isCertified, setIsCertified] = useState<boolean | null>(null);
    const [selectedOrg, setSelectedOrg] = useState<string | null>(null);
    const [certificatePreview, setCertificatePreview] = useState<string | null>(null);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { files } = e.target;
        if (files && files.length > 0) {
            const file = files[0];
            const previewUrl = URL.createObjectURL(file);
            setCertificatePreview(previewUrl);
        }
    };

    const handleRemoveFile = () => {
        setCertificatePreview(null);
    };

    return (
        <div className="flex flex-col items-center justify-center h-[75vh] bg-blue-600 p-4">
            <h1 className="text-3xl text-white font-bold mt-3 text-left mb-2">Are You Certified?</h1>

            {/* Yes/No options */}
            {isCertified === null && (
                <div className="flex justify-center items-center space-x-4 w-full">
                    <div
                        className="cursor-pointer bg-white p-4 rounded-lg shadow-md hover:bg-blue-100 transition flex items-center space-x-2"
                        onClick={() => setIsCertified(true)}
                    >
                        <AiOutlineCheck size={24} className="text-green-500" />
                        <span>Yes</span>
                    </div>
                    <div
                        className="cursor-pointer bg-white p-4 rounded-lg shadow-md hover:bg-red-100 transition flex items-center space-x-2"
                        onClick={() => setIsCertified(false)}
                    >
                        <AiOutlineCloseCircle size={24} className="text-red-500" />
                        <span>No</span>
                    </div>
                </div>
            )}

            {/* If user selects 'Yes' */}
            {isCertified === true && (
                <div className="w-full flex justify-between mt-2">
                    {/* Left section: Organization cards */}
                    <div className="w-1/2 pr-4">
                        <h2 className="text-3xl text-white font-bold text-left mb-2">From which organization are you certified?</h2>
                        <div className="grid grid-cols-2 gap-4">
                            {organizations.map((org) => (
                                <div
                                    key={org.name}
                                    className={`cursor-pointer flex flex-col items-center bg-white p-4 rounded-lg shadow-md hover:bg-gray-100 transition ${selectedOrg === org.name ? 'border-2 border-blue-500' : ''
                                        }`}
                                    onClick={() => setSelectedOrg(org.name)}
                                >
                                    <img src={org.logo} alt={`${org.name} logo`} className="w-12 h-12 mb-2" />
                                    <span className='text-center'>{org.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right section: File upload */}
                    {selectedOrg && (
                        <div className="w-1/2 pl-4">
                            <h2 className="text-3xl text-white font-bold text-left mb-6">Upload your certificate for {selectedOrg}</h2>
                            {!certificatePreview ? (
                                <input
                                    type="file"
                                    accept="image/*"
                                    onChange={handleFileChange}
                                    className="w-full p-2 text-white border rounded-lg"
                                />
                            ) : (
                                <div className="relative">
                                    <img src={certificatePreview} alt="Certificate Preview" className="w-full h-full object-cover mt-4" />
                                    <button
                                        type="button"
                                        onClick={handleRemoveFile}
                                        className="absolute top-0 right-0 bg-gray-800 text-white p-1 rounded-full"
                                    >
                                        <AiOutlineClose size={18} />
                                    </button>
                                </div>
                            )}
                        </div>
                    )}
                </div>
            )}

            {/* If user selects 'No' */}
            {isCertified === false && (
                <div className="w-full max-w-xl mt-6 px-6 py-4 bg-white ring-2 ring-blue-600 text-blue-600">
                    <h2 className="text-2xl font-semibold mb-4 text-center">
                        Join Mo Wash <p className='text-green-500'>Green</p> Jobs Academy
                    </h2>
                    <p className="text-center">
                        Become part of the Green Jobs Academy and start your certification journey today.
                    </p>
                    <button className="mt-4 w-full p-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition">
                        Learn More
                    </button>
                </div>
            )}

            {/* Progress Bar */}
            <div className="fixed bottom-0 w-full h-2 bg-gray-200">
                <div className="h-2 bg-blue-600" style={{ width: '56%' }}></div>
            </div>
        </div>
    );
};

export default SignupStep8;
