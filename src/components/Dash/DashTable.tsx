import React from "react";

interface DashTableProps {
  courierName: string;
  pickupUnscheduled: number;
  pickupScheduled: number;
  inTransit: number;
  delivered: number;
  rto: number;
  lostDamaged: number;
  totalShipment: number;
}

const DashTable: React.FC<DashTableProps> = ({
  courierName,
  pickupUnscheduled,
  pickupScheduled,
  inTransit,
  delivered,
  rto,
  lostDamaged,
  totalShipment,
}) => {
  return (
    <tr className="text-center border-b border-gray-200">
      <td className="py-4 px-4">{courierName}</td>
      <td className="px-4">{pickupUnscheduled}</td>
      <td className="px-4">{pickupScheduled}</td>
      <td className="px-4">{inTransit}</td>
      <td className="px-4">{delivered}</td>
      <td className="px-4">{rto}</td>
      <td className="px-4">{lostDamaged}</td>
      <td className="px-4">{totalShipment}</td>
    </tr>
  );
};

const Table: React.FC = () => {
  const data = [
    {
      courierName: "Courier 1",
      pickupUnscheduled: 5,
      pickupScheduled: 3,
      inTransit: 12,
      delivered: 20,
      rto: 1,
      lostDamaged: 0,
      totalShipment: 41,
    },
    {
      courierName: "Courier 2",
      pickupUnscheduled: 4,
      pickupScheduled: 2,
      inTransit: 15,
      delivered: 18,
      rto: 2,
      lostDamaged: 1,
      totalShipment: 42,
    },
    {
      courierName: "Courier 2",
      pickupUnscheduled: 4,
      pickupScheduled: 2,
      inTransit: 15,
      delivered: 18,
      rto: 2,
      lostDamaged: 1,
      totalShipment: 42,
    },
    {
      courierName: "Courier 2",
      pickupUnscheduled: 4,
      pickupScheduled: 2,
      inTransit: 15,
      delivered: 18,
      rto: 2,
      lostDamaged: 1,
      totalShipment: 42,
    },
    {
      courierName: "Courier 2",
      pickupUnscheduled: 4,
      pickupScheduled: 2,
      inTransit: 15,
      delivered: 18,
      rto: 2,
      lostDamaged: 1,
      totalShipment: 42,
    },
    {
      courierName: "Courier 2",
      pickupUnscheduled: 4,
      pickupScheduled: 2,
      inTransit: 15,
      delivered: 18,
      rto: 2,
      lostDamaged: 1,
      totalShipment: 42,
    },
    {
      courierName: "Courier 2",
      pickupUnscheduled: 4,
      pickupScheduled: 2,
      inTransit: 15,
      delivered: 18,
      rto: 2,
      lostDamaged: 1,
      totalShipment: 42,
    },
    {
      courierName: "Courier 2",
      pickupUnscheduled: 4,
      pickupScheduled: 2,
      inTransit: 15,
      delivered: 18,
      rto: 2,
      lostDamaged: 1,
      totalShipment: 42,
    },
    {
      courierName: "Courier 2",
      pickupUnscheduled: 4,
      pickupScheduled: 2,
      inTransit: 15,
      delivered: 18,
      rto: 2,
      lostDamaged: 1,
      totalShipment: 42,
    },
    {
      courierName: "Courier 2",
      pickupUnscheduled: 4,
      pickupScheduled: 2,
      inTransit: 15,
      delivered: 18,
      rto: 2,
      lostDamaged: 1,
      totalShipment: 42,
    },
    {
      courierName: "Courier 2",
      pickupUnscheduled: 4,
      pickupScheduled: 2,
      inTransit: 15,
      delivered: 18,
      rto: 2,
      lostDamaged: 1,
      totalShipment: 42,
    },
    {
      courierName: "Courier 2",
      pickupUnscheduled: 4,
      pickupScheduled: 2,
      inTransit: 15,
      delivered: 18,
      rto: 2,
      lostDamaged: 1,
      totalShipment: 42,
    },
    {
      courierName: "Courier 2",
      pickupUnscheduled: 4,
      pickupScheduled: 2,
      inTransit: 15,
      delivered: 18,
      rto: 2,
      lostDamaged: 1,
      totalShipment: 42,
    },
    // ... more data
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <div className="flex justify-between mb-4">
        <h3 className="text-lg font-bold">Shipment Overview by Courier</h3>
        <span className="text-gray-500">Last 30 Days</span>
      </div>
      <div className="overflow-x-auto">
        <div className="max-h-96 overflow-y-auto">
          <table className="min-w-full table-auto text-sm">
            <thead className="sticky top-0 bg-gray-100 text-sm text-gray-600 shadow">
              <tr>
                <th className="py-2 px-4">Courier Name</th>
                <th className="py-2 px-4">Pickup Unscheduled</th>
                <th className="py-2 px-4">Pickup Scheduled</th>
                <th className="py-2 px-4">In-Transit</th>
                <th className="py-2 px-4">Delivered</th>
                <th className="py-2 px-4">RTO</th>
                <th className="py-2 px-4">Lost/Damaged</th>
                <th className="py-2 px-4">Total Shipment</th>
              </tr>
            </thead>
            <tbody className="text-center">
              {data.length > 0 ? (
                data.map((row, index) => (
                  <DashTable
                    key={index}
                    courierName={row.courierName}
                    pickupUnscheduled={row.pickupUnscheduled}
                    pickupScheduled={row.pickupScheduled}
                    inTransit={row.inTransit}
                    delivered={row.delivered}
                    rto={row.rto}
                    lostDamaged={row.lostDamaged}
                    totalShipment={row.totalShipment}
                  />
                ))
              ) : (
                <tr>
                  <td colSpan={8} className="py-6 text-center">
                    <div className="flex flex-col items-center">
                      <span className="text-lg font-semibold">
                        Couriers&apos; data not found for this filter.
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
    </div>
  );
};

export default Table;
