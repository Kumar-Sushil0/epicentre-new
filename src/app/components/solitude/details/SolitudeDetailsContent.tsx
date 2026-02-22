import SolitudeItinerary from './SolitudeItinerary';

interface KitItem {
  item: string;
  purpose: string;
}

interface ProvisionItem {
  title: string;
  description?: string;
}

interface TimeSlot {
  time: string;
  activity: string;
}

interface ItineraryDay {
  day: number;
  title: string;
  schedule: TimeSlot[];
}

interface SolitudeDetailsContentProps {
  kitItems?: KitItem[];
  includedItems?: ProvisionItem[];
  itinerary?: ItineraryDay[];
}

export default function SolitudeDetailsContent({
  kitItems,
  includedItems,
  itinerary,
}: SolitudeDetailsContentProps) {
  return (
    <div className="flex-1 flex flex-col gap-10">
      {includedItems && includedItems.length > 0 && (
        <div className="flex flex-col gap-6">
          <h4 className="text-xl font-bold text-earth-50 font-display">What's Included</h4>
          <p className="text-sm text-earth-400 font-body">No live coaching. No performance feedback.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {includedItems.map((item, index) => (
              <div key={index} className="flex items-start gap-4 p-4 rounded-lg bg-earth-800 border border-earth-700">
                <span className="material-symbols-outlined text-gold-500 mt-0.5">check_circle</span>
                <div>
                  <p className="text-earth-50 font-medium">{item.title}</p>
                  <p className="text-xs text-earth-400 mt-1">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {kitItems && kitItems.length > 0 && (
        <>
          <div className="h-px w-full bg-earth-700"></div>
          <div className="flex flex-col gap-6">
            <h3 className="text-2xl font-bold text-earth-50 font-display">Physical Carry Kit</h3>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b-2 border-earth-700">
                    <th className="text-left py-3 px-4 text-gold-500 font-bold text-sm">Item</th>
                    <th className="text-left py-3 px-4 text-gold-500 font-bold text-sm">Purpose</th>
                  </tr>
                </thead>
                <tbody>
                  {kitItems.map((item, index) => (
                    <tr
                      key={index}
                      className="border-b border-earth-700/30 last:border-b-0 hover:bg-earth-800/30 transition-colors"
                    >
                      <td className="py-3 px-4 text-earth-100 font-medium text-sm align-top">
                        {item.item}
                      </td>
                      <td className="py-3 px-4 text-earth-300 text-sm align-top">
                        {item.purpose}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </>
      )}

      {itinerary && itinerary.length > 0 && (
        <>
          <div className="h-px w-full bg-earth-700"></div>
          <SolitudeItinerary days={itinerary} />
        </>
      )}
    </div>
  );
}
