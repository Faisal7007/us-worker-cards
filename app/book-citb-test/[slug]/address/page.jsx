"use client";
import React, { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";
import { MdArrowRight, MdArrowLeft } from "react-icons/md";
import { ToastContainer } from "react-toastify";
import { useFirebase } from "@/app/context/Firebase";
import Script from "next/script";

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
    const [showValidation, setShowValidation] = useState(false);

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

    // Hide validation messages when all fields are filled
    useEffect(() => {
        if (showValidation && getMissingFields().length === 0) {
            setShowValidation(false);
        }
    }, [formData, showValidation]);

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
        // Check if all required fields are filled
        const missingFields = getMissingFields();

        if (missingFields.length > 0) {
            setShowValidation(true);
            // Scroll to first missing field
            const firstMissingField = missingFields[0];
            const element = document.getElementById(firstMissingField);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth', block: 'center' });
                element.focus();
            }
            return;
        }

        await saveFormData(2);
        setCurrentStep(3);
        // Scroll to top when moving to review step
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const getMissingFields = () => {
        const missing = [];

        if (!formData.houseNumber) missing.push('houseNumber');
        if (!formData.townCity) missing.push('townCity');
        if (!formData.county) missing.push('county');
        if (!formData.postcode) missing.push('postcode');

        return missing;
    };

    const getFieldLabel = (fieldName) => {
        const labels = {
            houseNumber: 'House Number and Street Name',
            townCity: 'Town/City',
            county: 'Country',
            postcode: 'Postcode'
        };
        return labels[fieldName] || fieldName;
    };

    const isFieldMissing = (fieldName) => {
        return showValidation && getMissingFields().includes(fieldName);
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

                {/* Validation Messages */}
                {showValidation && (
                    <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
                        <div className="flex items-center mb-2">
                            <svg className="w-5 h-5 text-red-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                            </svg>
                            <h3 className="text-lg font-medium text-red-800">Please complete the following fields:</h3>
                        </div>
                        <ul className="list-disc list-inside space-y-1 text-red-700">
                            {getMissingFields().map((field) => (
                                <li key={field} className="text-sm">
                                    {getFieldLabel(field)}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
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
                                <label htmlFor={id} className={`block text-sm font-medium mb-1 ${isFieldMissing(id) ? 'text-red-600' : 'text-gray-700'}`}>
                                    {label} {isFieldMissing(id) && id !== "locality" && <span className="text-red-500">*</span>}
                                </label>
                                <input
                                    type="text"
                                    id={id}
                                    name={id}
                                    placeholder={placeholder}
                                    value={formData[id]}
                                    onChange={handleChange}
                                    required={id !== "locality"}
                                    className={`w-full border py-2 px-3 rounded focus:ring-2 focus:ring-primary-purple focus:border-primary-purple placeholder:text-gray-500 ${isFieldMissing(id) && id !== "locality"
                                        ? 'border-red-500 focus:ring-red-400 focus:border-red-500'
                                        : 'border-gray-400 focus:ring-primary-purple focus:border-primary-purple'
                                        }`}
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
                        className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-sm font-medium transition-all duration-200 w-full sm:w-auto bg-purple_primary text-white hover:bg-purple_primary shadow-md hover:shadow-lg"
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
            <Script
                src="https://www.googletagmanager.com/gtag/js?id=AW-17119060615"
                strategy="afterInteractive"
            />
            <Script id="google-gtag" strategy="afterInteractive">
                {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'AW-17119060615');
        `}
            </Script>
            <ToastContainer />
            {currentStep === 2 && renderStep2()}
            {currentStep === 3 && renderStep3()}
        </>
    );
};

export default CitbAddressStepPage;
