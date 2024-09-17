import React, { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai'; // Import close icon from react-icons

interface Organization {
    name: string;
    logo: string;
}

const organizations: Organization[] = [
    { name: 'NSDC', logo: 'https://res.cloudinary.com/dgtc2fvgu/image/upload/v1726530989/NSDC-Preview-removebg-preview_iz8rat.png' }, // Add correct paths for logos
    // { name: 'NSKFDC', logo: '/logos/nskfdc-logo.png' },
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
        <div className="flex flex-col items-center justify-center h-[90vh] bg-gray-100 p-4">
            <h1 className="text-3xl font-semibold mb-6">Are you certified?</h1>

            {/* Yes/No options */}
            {isCertified === null && (
                <div className="flex space-x-4">
                    <div
                        className="cursor-pointer bg-white p-4 rounded-lg shadow-md hover:bg-blue-100 transition"
                        onClick={() => setIsCertified(true)}
                    >
                        Yes
                    </div>
                    <div
                        className="cursor-pointer bg-white p-4 rounded-lg shadow-md hover:bg-red-100 transition"
                        onClick={() => setIsCertified(false)}
                    >
                        No
                    </div>
                </div>
            )}

            {/* If user selects 'Yes' */}
            {isCertified === true && (
                <div className="w-full max-w-xl mt-6">
                    <h2 className="text-2xl font-semibold mb-4">From which organization are you certified?</h2>
                    <div className="grid grid-cols-3 gap-4">
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
            )}

            {/* If user selects an organization */}
            {selectedOrg && (
                <div className="w-full max-w-xl mt-6">
                    <h2 className="text-xl font-semibold mb-4">Upload your certificate for {selectedOrg}</h2>
                    {!certificatePreview ? (
                        <input
                            type="file"
                            accept="image/*"
                            onChange={handleFileChange}
                            className="w-full p-2 border rounded-lg"
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

            {/* If user selects 'No' */}
            {isCertified === false && (
                <div className="w-full max-w-xl mt-6">
                    <h2 className="text-2xl font-semibold mb-4 text-center">
                        Join Mo Wash Green Jobs Academy
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
                <div className="h-2 bg-black" style={{ width: '56%' }}></div>
            </div>
        </div>
    );
};

export default SignupStep8;
