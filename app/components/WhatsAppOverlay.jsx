'use client';

import { useEffect, useState } from "react";
import { IoLogoWhatsapp } from "react-icons/io";

export default function WhatsAppOverlay() {
    const [visible, setVisible] = useState(true);

    // useEffect(() => {
    //     const timer = setTimeout(() => setVisible(false), 15000); // Auto-hide after 15s
    //     return () => clearTimeout(timer);
    // }, []);

    if (!visible) return null;

    return (
        <div className="fixed bottom-6 right-6 z-[1000] bg-white shadow-xl border border-gray-200 p-4 rounded-2xl max-w-[300px]">
            <div className="flex flex-col items-start">
                <p className="text-sm font-semibold text-gray-800 mb-2">Get Consultation</p>
                <a
                    href="https://wa.me/447883317237?text=Hi%20there!%20I%20need%20help%20with%20Construction%20Card%20Services."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 text-sm rounded-md flex items-center gap-2 transition"
                >
                    <IoLogoWhatsapp className="text-xl" />
                    Send Hi
                </a>
                {/* <button
                    className="absolute top-2 right-2 text-gray-400 hover:text-gray-700 text-xs"
                    onClick={() => setVisible(false)}
                >
                    ✕
                </button> */}
            </div>
        </div>
    );
}
