'use client';

import { useState } from "react";
import { IoLogoWhatsapp } from "react-icons/io";

export default function WhatsAppOverlay() {
    const [visible, setVisible] = useState(true);

    if (!visible) return null;

    return (
        <div className="fixed bottom-4 right-4 z-[1000] bg-white shadow-md border border-gray-200 p-2 rounded-lg max-w-[320px] text-xs">
            <div className="flex flex-col items-center gap-2 relative">
                <div className="flex flex-row items-start gap-2">
                    <p className="font-semibold text-gray-800">Expert Consultation
                    </p>

                    <button
                        className=" top-0 right-0 text-black hover:text-gray-700 text-xs"
                        onClick={() => setVisible(false)}
                    >
                        ✕
                    </button>

                </div>

                <a
                    href="https://wa.me/447883317237?text=Hi%20there!%20I%20need%20help%20with%20Construction%20Card%20Services."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded flex items-center gap-1 transition"
                >
                    <IoLogoWhatsapp className="text-base" />
                    Send Hi
                </a>
            </div>
        </div>
    );
}


