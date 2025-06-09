'use client';

import { useEffect, useState } from "react";
import { IoLogoWhatsapp } from "react-icons/io";

export default function WhatsAppModalOverlay() {
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setShowModal(true), 3000); // show after 3s
        return () => clearTimeout(timer);
    }, []);

    if (!showModal) return null;

    return (
        <div className="fixed inset-0 z-[1000] flex items-center justify-center bg-black bg-opacity-40 backdrop-blur-sm">
            <div className="relative bg-white p-8 rounded-2xl shadow-2xl max-w-sm w-full text-center animate-fade-in-up">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">Talk to Our Experts</h2>
                <p className="text-sm text-gray-600 mb-6">Get a free consultation form one of our experts.</p>
                <a
                    href="https://wa.me/7883317237?text=Hi%20there!%20I%20need%20help%20with%20Construction%20Card%20Services."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-md text-sm font-medium transition"
                >
                    <IoLogoWhatsapp className="text-xl" />
                    Chat on WhatsApp
                </a>
                <button
                    onClick={() => setShowModal(false)}
                    className="absolute top-2 right-3 text-gray-400 hover:text-gray-700 text-xl font-bold"
                >
                    ✕
                </button>
            </div>
        </div>
    );
}
