import React from "react";

const GenericCardDetailsView = ({getCardType}) => {
    console.log(getCardType)
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-3xl mx-auto bg-white shadow-md rounded-2xl p-8">
        {/* Title */}
        <h1 className="text-2xl font-semibold text-gray-800 mb-2">
         {getCardType}
        </h1>
        <p className="text-green-600 font-medium mb-6">FREE DELIVERY – 7 days after approval</p>

        {/* Card Info */}
        <div className="space-y-4">
          {/* CITB ID */}
          <div>
            <label className="block text-sm font-medium text-gray-700">CITB Testing ID (If available)</label>
            <input
              type="text"
              placeholder="e.g. CITB000792164"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-green-500 focus:border-green-500"
            />
          </div>

          {/* Address */}
          <div>
            <label className="block text-sm font-medium text-gray-700">House Number and Street Name</label>
            <input
              type="text"
              placeholder="123 Example Street"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            />
          </div>

          {/* Locality */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Locality (Optional)</label>
            <input
              type="text"
              placeholder="Neighborhood / Area"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            />
          </div>

          {/* Town/City */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Town / City</label>
            <input
              type="text"
              placeholder="London"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              required
            />
          </div>

          {/* County */}
          <div>
            <label className="block text-sm font-medium text-gray-700">County</label>
            <input
              type="text"
              placeholder="Greater London"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            />
          </div>

          {/* Postcode */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Postcode</label>
            <input
              type="text"
              placeholder="E1 6AN"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              required
            />
          </div>
        </div>

        {/* Submit Button */}
        <div className="mt-6">
          <button className="w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition">
            Submit Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default GenericCardDetailsView;
