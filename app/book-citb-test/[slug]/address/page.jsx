"use client";
import React, { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";
import { MdArrowRight, MdArrowLeft } from "react-icons/md";
import { ToastContainer } from "react-toastify";
import { useFirebase } from "@/app/context/Firebase";

const CitbAddressStepPage = () => {
    const router = useRouter();
    const params = useParams();
    const test_center = params.slug;
    const firebase = useFirebase();

    const [formData, setFormData] = useState({
        title: "",
        firstName: "",
        middleName: "",
        lastName: "",
        dob: "",
        nationalInsuranceNumber: "",
        phoneNumber: "",
        email: "",
        houseNumber: "",
        locality: "",
        townCity: "",
        county: "",
        postcode: "",
        testType: "normal",
        language: "",
        preferredTestDate: "",
        alternateTestDate: "",
        timeSlot: "",
        testVariant: "",
        testCenter: ""
    });
    const [currentStep, setCurrentStep] = useState(2); // 2: Address, 3: Review
    const [isSubmitting, setIsSubmitting] = useState(false);

    useEffect(() => {
        // Load from localStorage
        const saved = localStorage.getItem(`citbFormData_${test_center}_1`);
        if (saved) {
            setFormData(prev => ({ ...prev, ...JSON.parse(saved) }));
        }
        // Scroll to top when component mounts
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [test_center]);

    // Scroll to top when step changes
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [currentStep]);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const saveFormData = async (step) => {
        try {
            const dataToSave = {
                ...formData,
                step: step,
                testCenter: test_center,
                lastUpdated: new Date().toISOString(),
            };
            localStorage.setItem(`citbFormData_${test_center}_${step}`, JSON.stringify(dataToSave));
        } catch (error) {
            console.error("Error saving form data:", error);
        }
    };

    const handleNext = async () => {
        await saveFormData(2);
        setCurrentStep(3);
        // Scroll to top when moving to review step
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handlePrevious = () => {
        router.push(`/book-citb-test/${test_center}`);
    };

    const handleSubmit = async (e) => {
        if (e && e.preventDefault) e.preventDefault();
        setIsSubmitting(true);

        try {
            // Store complete form data as a new record
            await firebase.applyForCITBTest(
                formData.title,
                formData.firstName,
                formData.middleName,
                formData.lastName,
                formData.dob,
                formData.nationalInsuranceNumber,
                formData.phoneNumber,
                formData.email,
                formData.houseNumber,
                formData.locality,
                formData.townCity,
                formData.county,
                formData.postcode,
                formData.testVariant,
                formData.language,
                formData.preferredTestDate,
                formData.alternateTestDate,
                formData.timeSlot,
                formData.testType,
                formData.testCenter,
                test_center,
                setIsSubmitting,
                false // isFirstStep - false to indicate this is the complete submission
            );

            // Clear localStorage
            localStorage.removeItem(`citbFormData_${test_center}_1`);
            localStorage.removeItem(`citbFormData_${test_center}_2`);

            // iOS-compatible redirect - use setTimeout to ensure the redirect happens
            setTimeout(() => {
                if (formData.testType === "retake") {
                    window.location.replace("https://buy.stripe.com/dR601T3kp6b9ddmeUZ");
                } else {
                    window.location.replace("https://buy.stripe.com/8wMeWN3kp0QP3CMfZ6");
                }
            }, 100);
        } catch (error) {
            setIsSubmitting(false);
            alert("Submission failed. Please try again.");
        }
    };

    // Step 2: Address & Additional Details
    const renderStep2 = () => (
        <div className="max-w-4xl bg-gray-200 mx-auto rounded space-y-5 px-4 mt-20 sm:mt-32">
            <div className="pt-4">
                <h2 className="text-lg text-gray-800 py-3 font-semibold mb-4 text-center rounded">
                    Step 2: Address & Additional Details
                </h2>
                <div className="bg-white p-6 rounded-lg shadow-md mb-6">
                    <h3 className="text-lg font-semibold text-gray-800 mb-4">🏠 Address Information</h3>
                    <p className="text-gray-600 mb-4">Please provide your current address where you'd like to receive your test confirmation.</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {[
                            { id: "houseNumber", label: "House Number and Street Name", placeholder: "123 Main Street" },
                            { id: "locality", label: "Locality (Optional)", placeholder: "e.g. Hounslow" },
                            { id: "townCity", label: "Town/City", placeholder: "e.g. London" },
                            { id: "county", label: "Country", placeholder: "e.g. England" },
                            { id: "postcode", label: "Postcode", placeholder: "e.g. W1A 1AA" },
                        ].map(({ id, label, placeholder }) => (
                            <div key={id} className={id === "houseNumber" ? "md:col-span-2" : ""}>
                                <label htmlFor={id} className="block text-sm font-medium mb-1 text-gray-700">{label}</label>
                                <input
                                    type="text"
                                    id={id}
                                    name={id}
                                    placeholder={placeholder}
                                    value={formData[id]}
                                    onChange={handleChange}
                                    required={id !== "locality"}
                                    className="w-full border border-gray-400 py-2 px-3 rounded focus:ring-2 focus:ring-primary-purple focus:border-primary-purple placeholder:text-gray-500"
                                />
                            </div>
                        ))}
                    </div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md mb-6">
                    <h3 className="text-lg font-semibold text-gray-800 mb-4">📋 Additional Information</h3>
                    <p className="text-gray-600 mb-4">Please provide any additional details that may help with your test booking.</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label htmlFor="nationalInsuranceNumber" className="block text-sm font-medium mb-1 text-gray-700">
                                National Insurance Number (Optional)
                            </label>
                            <input
                                type="text"
                                id="nationalInsuranceNumber"
                                name="nationalInsuranceNumber"
                                placeholder="e.g. QQ 123456 C"
                                value={formData.nationalInsuranceNumber}
                                onChange={handleChange}
                                className="w-full border border-gray-400 py-2 px-3 rounded focus:ring-2 focus:ring-primary-purple focus:border-primary-purple placeholder:text-gray-500"
                            />
                            <p className="text-xs text-gray-500 mt-1">This helps us verify your identity</p>
                        </div>
                    </div>
                </div>
                <div>
                    <label className="block text-sm font-medium mb-2 text-gray-700">Test Package</label>
                    <select
                        name="testType"
                        value={formData.testType}
                        onChange={handleChange}
                        className="w-full border border-gray-400 py-2 px-3 rounded focus:ring-2 focus:ring-primary-purple focus:border-primary-purple placeholder:text-gray-500"
                        required
                    >
                        <option value="normal">Take CITB Test – £40</option>
                        <option value="retake">Take CITB Test + Retake – £60</option>
                    </select>
                </div>
                <br />
                <div className="flex flex-col sm:flex-row justify-between gap-4">
                    <button
                        type="button"
                        onClick={handlePrevious}
                        className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-sm font-medium bg-purple_primary text-white hover:bg-purple_primary/90 transition-all duration-200 shadow-md hover:shadow-lg w-full sm:w-auto"
                    >
                        <MdArrowLeft className="size-5" />
                        Back to Test Details
                    </button>
                    <button
                        type="button"
                        onClick={handleNext}
                        disabled={!formData.houseNumber || !formData.townCity || !formData.county || !formData.postcode}
                        className={`inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-sm font-medium transition-all duration-200 w-full sm:w-auto ${!formData.houseNumber || !formData.townCity || !formData.county || !formData.postcode ? "bg-gray-400 text-white cursor-not-allowed" : "bg-purple_primary text-white hover:bg-purple_primary shadow-md hover:shadow-lg"}`}
                    >
                        Review & Submit
                        <MdArrowRight className="size-5" />
                    </button>
                </div>
            </div>
        </div>
    );

    // Step 3: Review & Submit
    const renderStep3 = () => (
        <div className="max-w-4xl bg-gray-200 mx-auto rounded space-y-4 sm:space-y-5 px-3 sm:px-4 mt-20 sm:mt-32">
            <div className="pt-4">
                <h2 className="text-lg text-gray-800 py-3 font-semibold mb-4 text-center rounded">
                    Step 3: Review & Submit Application
                </h2>
                <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md mb-4 sm:mb-6">
                    <h3 className="text-lg font-semibold text-gray-800 mb-4">✅ Review Your Information</h3>
                    <p className="text-gray-600 mb-6">Please review all your details carefully before submitting. You can go back to make changes if needed.</p>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-4 text-sm text-gray-800">
                        {[
                            { label: "Title", value: formData.title, icon: "👤" },
                            { label: "Date of Birth", value: formData.dob, icon: "📅" },
                            { label: "Full Name", value: `${formData.firstName} ${formData.middleName} ${formData.lastName}`.trim(), span: 2, icon: "👤" },
                            { label: "Phone Number", value: formData.phoneNumber, icon: "📞" },
                            { label: "Email Address", value: formData.email, icon: "📧" },
                            { label: "National Insurance No.", value: formData.nationalInsuranceNumber || "Not provided", span: 2, icon: "🆔" },
                            {
                                label: "Address",
                                value: `${formData.houseNumber}, ${formData.locality ? formData.locality + ', ' : ''}${formData.townCity}, ${formData.county} - ${formData.postcode}`,
                                span: 2,
                                icon: "🏠"
                            },
                            { label: "Test Type", value: formData.testVariant, icon: "🎯" },
                            { label: "Test Package", value: formData.testType === "normal" ? "Take CITB Test – £40" : "Take CITB Test + Retake – £60", icon: "📦" },
                            { label: "Language", value: formData.language || "N/A", icon: "🌐" },
                            { label: "Time Slot", value: formData.timeSlot, icon: "⏰" },
                            { label: "Preferred Date", value: formData.preferredTestDate, icon: "📅" },
                            { label: "Alternate Date", value: formData.alternateTestDate, icon: "📅" },
                            { label: "Test Center", value: formData.testCenter, span: 2, icon: "🏢" },
                        ].map((item, idx) => (
                            <div
                                key={idx}
                                className={`bg-gray-50 rounded-lg px-3 sm:px-4 py-3 ${item.span === 2 ? "col-span-1 lg:col-span-2" : ""} border border-gray-200 hover:bg-gray-100 transition-colors`}
                            >
                                <div className="flex items-center gap-2 mb-1">
                                    <span className="text-sm flex-shrink-0">{item.icon}</span>
                                    <p className="text-xs font-medium text-gray-500 truncate">{item.label}</p>
                                </div>
                                <p className="text-sm font-semibold text-gray-800 break-words leading-relaxed">{item.value || "—"}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="p-4 sm:p-6 rounded-lg mb-4 sm:mb-6">
                    <div className="flex flex-col sm:flex-row justify-between gap-3 sm:gap-4">
                        <button
                            type="button"
                            onClick={() => setCurrentStep(2)}
                            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-sm font-medium bg-purple_primary text-white hover:bg-purple_primary/90 transition-all duration-200 shadow-md hover:shadow-lg w-full sm:w-auto"
                        >
                            <MdArrowLeft className="size-5" />
                            Back to Address Details
                        </button>
                        <button
                            type="button"
                            disabled={isSubmitting}
                            onClick={handleSubmit}
                            className={`inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-sm font-medium transition-all duration-200 w-full sm:w-auto ${isSubmitting ? "bg-gray-400 text-white cursor-not-allowed" : "bg-purple_primary text-white hover:bg-purple_primary/90 shadow-md hover:shadow-lg"}`}
                        >
                            {isSubmitting ? (
                                <>
                                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                                    Processing...
                                </>
                            ) : (
                                <>
                                    Submit Application
                                    <MdArrowRight className="size-5" />
                                </>
                            )}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );

    return (
        <>
            <ToastContainer />
            {currentStep === 2 && renderStep2()}
            {currentStep === 3 && renderStep3()}
        </>
    );
};

export default CitbAddressStepPage;
