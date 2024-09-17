import Link from 'next/link';
import React from 'react';

// Service interface to define the shape of the data
interface Service {
  title: string;
  icon: string; // You can replace this with an actual icon component or SVG path
  isNew?: boolean;
}


const services = [
  { title: 'Toilet Mason, Electrician & Plumber', icon: 'https://www.mowash.in/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdd1dbnkhw%2Fimage%2Fupload%2Fv1721842795%2Fuploads%2F1721842795394-1.png.jpg&w=256&q=75' },
  { title: 'Cess Pool Vehicle Services Providers', icon: 'https://www.mowash.in/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdd1dbnkhw%2Fimage%2Fupload%2Fv1721842833%2Fuploads%2F1721842833295-2.png.jpg&w=256&q=75', isNew: true },
  { title: 'Wasste Collection, Segregation & Processing', icon: 'https://www.mowash.in/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdd1dbnkhw%2Fimage%2Fupload%2Fv1721842864%2Fuploads%2F1721842864505-3.png.jpg&w=256&q=75' },
  { title: 'Nal Jal Mitra for Dringking Water', icon: 'https://www.mowash.in/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdd1dbnkhw%2Fimage%2Fupload%2Fv1721842899%2Fuploads%2F1721842899350-4.png.jpg&w=256&q=75' },
  { title: 'Solid & Liquid Waste Treatment', icon: 'https://www.mowash.in/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdd1dbnkhw%2Fimage%2Fupload%2Fv1721842927%2Fuploads%2F1721842927589-5.png.jpg&w=256&q=75', isNew: true },
  { title: 'Solar Plant & Water Pump EPC, O&M', icon: 'https://www.mowash.in/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdd1dbnkhw%2Fimage%2Fupload%2Fv1721842959%2Fuploads%2F1721842959325-6.png.jpg&w=256&q=75' },
  { title: 'Wash & Climate Change Complaint Institution', icon: 'https://www.mowash.in/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdd1dbnkhw%2Fimage%2Fupload%2Fv1721842985%2Fuploads%2F1721842985878-7.png.jpg&w=256&q=75' },
  { title: 'Pond Restoration & Rejuvination', icon: 'https://www.mowash.in/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdd1dbnkhw%2Fimage%2Fupload%2Fv1721843023%2Fuploads%2F1721843023351-8.png.jpg&w=256&q=75', isNew: true },
  { title: 'Essential Wash Services Bill Payment', icon: 'https://www.mowash.in/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdd1dbnkhw%2Fimage%2Fupload%2Fv1721843101%2Fuploads%2F1721843101241-10.png.jpg&w=256&q=75' },
  { title: 'Institutional Facility Management', icon: 'https://www.mowash.in/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdd1dbnkhw%2Fimage%2Fupload%2Fv1723195716%2Fuploads%2F1723195716444-10841340%2520%25281%2529.png.jpg&w=256&q=75' },
];

const ServiceSection = () => {
  return (
    <div className='bg-blue-600'>
      <section className="py-8 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center flex flex-col justify-center items-center mx-auto">
          <h1 className="text-4xl text-white font-bold mb-2">MoWash Engineers Services Available In Odisha</h1>
          <p className="text-white my-8">
            Experience top-tier services with Mowash, your trusted partner for waste management, water solutions,
            and wash-related services. From plumbing and waste collection to solar energy and facility management,
            Mowash ensures clean, efficient, and eco-friendly solutions for all your needs.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Link key={index} href="#">
              <div
                className="hover:bg-blue-500 h-[250px] hover:text-white hover:ring-white bg-white ring-2 ring-blue-500 text-blue-500 rounded-lg shadow p-6 flex flex-col justify-center items-center space-y-4 relative"
              >
                {/* Display 'New' tag if applicable */}
                {service.isNew && (
                  <span className="absolute top-2 right-2 text-xs text-red-600 font-semibold">New</span>
                )}

                {/* Icon - Replace with actual icon component */}
                <div className="h-28 w-28 bg-gray-200 flex justify-center items-center rounded-full">
                  <img src={service.icon} alt={service.title} className="h-28 w-28" />
                </div>

                {/* Service Title */}
                <h3 className="text-md text-center font-semibold">{service.title}</h3>
              </div>
            </Link>

          ))}
        </div>
      </section>
    </div>
  );
};

export default ServiceSection;
