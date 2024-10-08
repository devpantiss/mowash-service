import React, { useState } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button } from '@mui/material';
import { BiInfoCircle } from 'react-icons/bi';

// Define the type for the card data
interface CardData {
  title: string;
  details: string;
  icon: JSX.Element;
}

// Sample data for the cards with icons
const cardData: CardData[] = [
  { title: 'Ultra Poor', details: 'Details about Ultra Poor status.', icon: <BiInfoCircle className="w-6 h-6" /> },
  { title: 'BPL', details: 'Details about Below Poverty Line status.', icon: <BiInfoCircle className="w-6 h-6" /> },
  { title: 'APL', details: 'Details about Above Poverty Line status.', icon: <BiInfoCircle className="w-6 h-6" /> },
  { title: 'SC', details: 'Details about Scheduled Caste status.', icon: <BiInfoCircle className="w-6 h-6" /> },
  { title: 'ST', details: 'Details about Scheduled Tribe status.', icon: <BiInfoCircle className="w-6 h-6" /> },
  { title: 'OBC', details: 'Details about Other Backward Classes status.', icon: <BiInfoCircle className="w-6 h-6" /> },
];

// Define the component
const SocialEconomicStatus: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState<CardData | null>(null);

  const handleClickOpen = (card: CardData) => {
    setSelectedCard(card);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedCard(null);
  };

  return (
    <div className="flex flex-wrap justify-between mx-4">
      {cardData.map((card, index) => (
        <div
          key={index}
          className="flex-1 m-2 p-4 w-[250px] bg-transparent text-white ring-2 ring-white rounded-lg shadow-lg cursor-pointer transition-transform transform hover:scale-105"
          onClick={() => handleClickOpen(card)}
        >
          <div className="flex items-center justify-center mb-2">
            {card.icon}
            <h3 className="text-lg font-semibold text-center ml-2">{card.title}</h3>
          </div>
        </div>
      ))}

      <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
        <DialogTitle>{selectedCard?.title}</DialogTitle>
        <DialogContent>
          <p>{selectedCard?.details}</p>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default SocialEconomicStatus;
