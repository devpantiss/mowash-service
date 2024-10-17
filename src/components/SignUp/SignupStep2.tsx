import React, { useState } from "react";
import { RiLayoutMasonryFill } from "react-icons/ri";
import { MdOutlineElectricalServices } from "react-icons/md";
import {
  FaToolbox,
  FaTruck,
  FaRecycle,
  FaWater,
  FaLeaf,
  FaSolarPanel,
  FaSeedling,
  FaMoneyBillWave,
  FaBuilding,
  FaIndustry,
  FaDumpster,
  FaTools,
} from "react-icons/fa";

interface CardProps {
  title: string;
  description: string;
  icon: JSX.Element;
  iconColor: string; // Prop to hold icon color
  isSelected: boolean;
  onSelect: () => void;
}

const Card: React.FC<CardProps> = ({ title, description, icon, iconColor, isSelected, onSelect }) => {
  return (
    <div
      className={`cursor-pointer bg-transparent rounded-lg shadow-md p-3 hover:shadow-lg transition duration-300 
      ${isSelected ? `border-4` : "border-2"}`}
      style={{ borderColor: isSelected ? iconColor : "white" }} // Apply dynamic border color
      onClick={onSelect}
    >
      <div className="flex justify-center lg:justify-between items-center mb-4">
        <div className="flex lg:flex-row flex-col items-center justify-center lg:space-x-32">
          {icon}
          <h3 className="text-lg text-white font-semibold">{title}</h3>
        </div>
      </div>
      <p className="text-sm text-center lg:text-left text-white mb-4">{description}</p>
    </div>
  );
};

const ServiceCards: React.FC = () => {
  const [selectedCards, setSelectedCards] = useState<string[]>([]); // State to store selected cards

  // Toggle selection for a card
  const handleSelect = (label: string) => {
    setSelectedCards(
      (prevSelected) =>
        prevSelected.includes(label)
          ? prevSelected.filter((item) => item !== label) // Deselect if already selected
          : [...prevSelected, label] // Add to selection if not selected
    );
  };

  // First section options
  const options = [
    {
      label: "Toilet Mason",
      icon: (
        <RiLayoutMasonryFill
          className="text-8xl"
          style={{ color: "#ff5733" }}
        />
      ),
      iconColor: "#ff5733",
      target: 1200,
      description: "Handles masonry for toilets",
    },
    {
      label: "Electrician",
      icon: (
        <MdOutlineElectricalServices
          className="text-8xl"
          style={{ color: "#33c2ff" }}
        />
      ),
      iconColor: "#33c2ff",
      target: 800,
      description: "Fixes electrical systems",
    },
    {
      label: "Toilet Plumber",
      icon: <FaToolbox className="text-8xl" style={{ color: "#f1c40f" }} />,
      iconColor: "#f1c40f",
      target: 900,
      description: "Manages plumbing for toilets",
    },
    {
      label: "Cess Pool Operator",
      icon: <FaTruck className="text-8xl" style={{ color: "#27ae60" }} />,
      iconColor: "#27ae60",
      target: 500,
      description: "Operates cesspool trucks",
    },
    {
      label: "Sanitation Crew",
      icon: <FaRecycle className="text-8xl" style={{ color: "#9b59b6" }} />,
      iconColor: "#9b59b6",
      target: 1000,
      description: "Ensures sanitation services",
    },
    {
      label: "Nal Jal Mitra",
      icon: <FaWater className="text-8xl" style={{ color: "#3498db" }} />,
      iconColor: "#3498db",
      target: 1100,
      description: "Works with water supply",
    },
    {
      label: "STP Operator",
      icon: <FaLeaf className="text-8xl" style={{ color: "#2ecc71" }} />,
      iconColor: "#2ecc71",
      target: 750,
      description: "Operates sewage treatment plants",
    },
    {
      label: "Solar Pump Operator",
      icon: <FaSolarPanel className="text-8xl" style={{ color: "#f39c12" }} />,
      iconColor: "#f39c12",
      target: 600,
      description: "Handles solar pump operations",
    },
    {
      label: "Pond Excavator",
      icon: <FaSeedling className="text-8xl" style={{ color: "#16a085" }} />,
      iconColor: "#16a085",
      target: 950,
      description: "Excavates and maintains ponds",
    },
    {
      label: "Water Bill Collector",
      icon: (
        <FaMoneyBillWave className="text-8xl" style={{ color: "#e74c3c" }} />
      ),
      iconColor: "#e74c3c",
      target: 1200,
      description: "Collects water bills",
    },
  ];

  // Sub-section options
  const options2 = [
    {
      label: "Residential Facilities",
      icon: <FaBuilding className="text-8xl" style={{ color: "#ff6347" }} />, // Custom color
      iconColor: "#ff6347",
      target: 1500,
      description: "Service for residential buildings",
    },
    {
      label: "Industrial Facilities",
      icon: <FaIndustry className="text-8xl" style={{ color: "#4682b4" }} />, // Custom color
      iconColor: "#4682b4",
      target: 1200,
      description: "Service for industrial plants",
    },
    {
      label: "Container and Dumpster",
      icon: <FaDumpster className="text-8xl" style={{ color: "#32cd32" }} />, // Custom color
      iconColor: "#32cd32",
      target: 800,
      description: "Handling containers and dumpsters",
    },
    {
      label: "Healthcare Facilities",
      icon: <FaBuilding className="text-8xl" style={{ color: "#ffa500" }} />, // Custom color
      iconColor: "#ffa500",
      target: 1000,
      description: "Service for healthcare centers",
    },
    {
      label: "Shopping Mall",
      icon: <FaBuilding className="text-8xl" style={{ color: "#db7093" }} />, // Custom color
      iconColor: "#db7093",
      target: 900,
      description: "Service for shopping malls",
    },
    {
      label: "Urban Local Body",
      icon: <FaTools className="text-8xl" style={{ color: "#20b2aa" }} />, // Custom color
      iconColor: "#20b2aa",
      target: 1100,
      description: "Services for municipal bodies",
    },
    {
      label: "Waste Segregation Center",
      icon: <FaTruck className="text-8xl" style={{ color: "#9932cc" }} />, // Custom color
      iconColor: "#9932cc",
      target: 950,
      description: "Waste segregation services",
    },
  ];

  return (
    <div className="container mx-auto  lg:h-[90vh] px-4 py-8">
      <h2 className="text-5xl font-bold text-left text-white mb-8">
        Welcome to MoWash Partners Platform!
      </h2>
      <p className="text-left text-white text-xl mb-12">
        Ready to scale your business? Select the option that works best for you.
      </p>

      {/* Service Selection Section */}
      <div>
        <h3 className="text-xl text-white font-semibold mb-4">
          Choose a Service
        </h3>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {options.map((option, index) => (
            <Card
              key={index}
              title={option.label}
              description={option.description}
              icon={option.icon}
              iconColor={option.iconColor}
              isSelected={selectedCards.includes(option.label)}
              onSelect={() => handleSelect(option.label)}
            />
          ))}
        </div>
      </div>

      {/* Display selected services for reference */}
      {/* <div className="mt-8 text-white">
        <h4 className="text-xl font-semibold mb-2">Selected Services:</h4>
        <ul>
          {selectedCards.map((selected, index) => (
            <li key={index}>{selected}</li>
          ))}
        </ul>
      </div> */}
    </div>
  );
};

export default ServiceCards;
