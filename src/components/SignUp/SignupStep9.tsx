import React, { useState } from 'react';

interface FormData {
    safetyKitPhoto: File | null;
    selectedComponents: string[];
}

const safetyGearComponents = [
    'Helmet',
    'Gloves',
    'Reflective Vest',
    'Boots',
    'Goggles',
    'Ear Protection',
    'Face Shield',
];

const SignupStep9: React.FC = () => {
    const [formData, setFormData] = useState<FormData>({
        safetyKitPhoto: null,
        selectedComponents: [],
    });

    const [photoPreview, setPhotoPreview] = useState<string | null>(null);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { files } = e.target;
        if (files && files.length > 0) {
            const file = files[0];
            const previewUrl = URL.createObjectURL(file);
            setPhotoPreview(previewUrl);
            setFormData({
                ...formData,
                safetyKitPhoto: file,
            });
        }
    };

    const handleComponentSelect = (component: string) => {
        setFormData((prevData) => ({
            ...prevData,
            selectedComponents: prevData.selectedComponents.includes(component)
                ? prevData.selectedComponents.filter((item) => item !== component)
                : [...prevData.selectedComponents, component],
        }));
    };

    const handleSkip = () => {
        // Navigate to the next step (implement as needed)
        console.log('Skipped to next step');
    };

    const handleHelpMeDress = () => {
        // Show a message that the team will get in touch
        alert('Our team will get in touch with you shortly.');
    };

    return (
        <div className="flex flex-col items-center justify-center bg-transparent">
            <h2 className="text-3xl text-white font-bold text-left mb-6">Upload Your Photo in Safety Kit</h2>

            <div className="flex gap-8 w-full max-w-4xl">
                {/* Photo Upload */}
                <div className="flex-1">
                    <label className="block text-white text-sm font-medium mb-2">Safety Kit Photo</label>
                    {photoPreview ? (
                        <div className="relative">
                            <img
                                src={photoPreview}
                                alt="Safety Kit Preview"
                                className="w-64 h-64 object-cover rounded-lg"
                            />
                            <button
                                className="absolute top-0 right-0 bg-red-500 text-white rounded-full p-1"
                                onClick={() => {
                                    setPhotoPreview(null);
                                    setFormData({ ...formData, safetyKitPhoto: null });
                                }}
                            >
                                ✕
                            </button>
                        </div>
                    ) : (
                        <input
                            type="file"
                            accept="image/*"
                            onChange={handleFileChange}
                            className="block w-full p-2 text-white border rounded-lg"
                        />
                    )}
                </div>

                {/* Video Tutorial - replaced with iframe */}
                <div className="flex-1">
                    <label className="block text-white text-sm font-medium mb-2">How to Wear Safety Gear</label>
                    <iframe
                        width="100%"
                        height="315"
                        src="https://www.youtube.com/embed/YJpgU4oJf-s?si=Y6H6CGiYskWZLAKr"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                        className="w-full h-64 rounded-lg border"
                    />
                </div>
            </div>

            {/* Safety Gear Components Selection */}
            <div className="mt-8 w-full max-w-4xl">
                <h3 className="text-xl text-white font-semibold mb-4">Which Safety Gear Components Do You Have?</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {safetyGearComponents.map((component) => (
                        <div
                            key={component}
                            onClick={() => handleComponentSelect(component)}
                            className={`cursor-pointer p-4 border rounded-lg text-center ${
                                formData.selectedComponents.includes(component)
                                    ? 'bg-blue-500 text-white'
                                    : 'bg-white'
                            }`}
                        >
                            {component}
                        </div>
                    ))}
                </div>
            </div>

            {/* Navigation Buttons */}
            <div className="mt-8 w-full max-w-4xl flex justify-between">
                <button
                    onClick={handleSkip}
                    className="px-6 py-2 bg-white text-blue-600 ring ring-blue-600 rounded-lg hover:bg-gray-100 transition"
                >
                    Skip
                </button>
                <button
                    onClick={handleHelpMeDress}
                    className="px-6 py-2 bg-white text-blue-600 rounded-lg ring ring-blue-600 hover:bg-gray-100 transition"
                >
                    Help Me Dress
                </button>
            </div>

            {/* Progress Bar */}
            <div className="fixed bottom-0 w-full h-2 bg-gray-200">
                <div className="h-2 bg-blue-600" style={{ width: '64%' }}></div>
            </div>
        </div>
    );
};

export default SignupStep9;
