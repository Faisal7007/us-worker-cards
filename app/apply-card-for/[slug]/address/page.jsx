"use client";
import React, { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";
import { MdArrowRight, MdArrowLeft } from "react-icons/md";
import { ToastContainer } from "react-toastify";
import { useFirebase } from "@/app/context/Firebase";

const AddressStepPage = () => {
    const router = useRouter();
    const params = useParams();
    const form_type = params.slug;
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
        addressLine1: "",
        town: "",
        city: "",
        pincode: "",
        citbId: "",
        cardtype: "",
        applicationType: "",
        variant: ""
    });
    const [currentStep, setCurrentStep] = useState(2); // 2: Address, 3: Review
    const [isSubmitting, setIsSubmitting] = useState(false);

    useEffect(() => {
        // Load from localStorage
        const saved = localStorage.getItem(`formData_${form_type}_1`);
        if (saved) {
            setFormData(prev => ({ ...prev, ...JSON.parse(saved) }));
        }
    }, [form_type]);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const saveFormData = async (step) => {
        try {
            const dataToSave = {
                ...formData,
                step: step,
                formType: form_type,
                lastUpdated: new Date().toISOString(),
            };
            localStorage.setItem(`formData_${form_type}_${step}`, JSON.stringify(dataToSave));
        } catch (error) {
            console.error("Error saving form data:", error);
        }
    };

    const handleNext = async () => {
        await saveFormData(2);
        setCurrentStep(3);
    };

    const handlePrevious = () => {
        router.push(`/apply-card-for/${form_type}`);
    };

    const handleSubmit = async (e) => {
        if (e && e.preventDefault) e.preventDefault();
        setIsSubmitting(true);
        try {
            if (form_type === 'cscs') {
                await firebase.addCscsData(formData, "manual");
            }
            if (form_type === 'ess') {
                await firebase.addEssData(formData, "manual");
            }
            // Clear localStorage
            localStorage.removeItem(`formData_${form_type}_1`);
            localStorage.removeItem(`formData_${form_type}_2`);
            setIsSubmitting(false);
            // Optionally redirect or show success
            router.push(`/apply-card-for/${form_type}?submitted=1`);
        } catch (error) {
            setIsSubmitting(false);
            alert("Submission failed. Please try again.");
        }
    };

    // Step 2: Address & Additional Details
    const renderStep2 = () => (
        <div className="max-w-4xl bg-gray-200 mx-auto rounded space-y-5 px-4">
            <div className="pt-4">
                <h2 className="text-lg text-gray-800 py-3 font-semibold mb-4 text-center rounded">
                    Step 2: Address & Additional Details
                </h2>
                <div className="bg-white p-6 rounded-lg shadow-md mb-6">
                    <h3 className="text-lg font-semibold text-gray-800 mb-4">🏠 Address Information</h3>
                    <p className="text-gray-600 mb-4">Please provide your current address where you'd like to receive your card.</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {[
                            { id: "addressLine1", label: "First Line of Address", placeholder: "123 Main Street" },
                            { id: "town", label: "Town", placeholder: "e.g. Hounslow" },
                            { id: "city", label: "City", placeholder: "e.g. London" },
                            { id: "pincode", label: "Pincode", placeholder: "e.g. W1A 1AA" },
                        ].map(({ id, label, placeholder }) => (
                            <div key={id}>
                                <label htmlFor={id} className="block text-sm font-medium mb-1 text-gray-700">{label}</label>
                                <input
                                    type="text"
                                    id={id}
                                    name={id}
                                    placeholder={placeholder}
                                    value={formData[id]}
                                    onChange={handleChange}
                                    required
                                    className="w-full border border-gray-400 py-2 px-3 rounded focus:ring-2 focus:ring-primary-purple focus:border-primary-purple placeholder:text-gray-500"
                                />
                            </div>
                        ))}
                    </div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md mb-6">
                    <h3 className="text-lg font-semibold text-gray-800 mb-4">📋 Additional Information</h3>
                    <p className="text-gray-600 mb-4">Please provide any additional details that may help with your application.</p>
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
                        <div>
                            <label htmlFor="citbId" className="block text-sm font-medium mb-1 text-gray-700">
                                CITB Testing ID (Optional)
                            </label>
                            <input
                                type="text"
                                id="citbId"
                                name="citbId"
                                placeholder="e.g. 1234567890"
                                value={formData.citbId}
                                onChange={handleChange}
                                className="w-full border border-gray-400 py-2 px-3 rounded focus:ring-2 focus:ring-primary-purple focus:border-primary-purple placeholder:text-gray-500"
                            />
                            <p className="text-xs text-gray-500 mt-1">If you have already taken the CITB test</p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col sm:flex-row justify-between gap-4">
                    <button
                        type="button"
                        onClick={handlePrevious}
                        className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-sm font-medium bg-purple_primary text-white hover:bg-purple_primary/90 transition-all duration-200 shadow-md hover:shadow-lg w-full sm:w-auto"
                    >
                        <MdArrowLeft className="size-5" />
                        Back to Personal Details
                    </button>
                    <button
                        type="button"
                        onClick={handleNext}
                        disabled={!formData.addressLine1 || !formData.town || !formData.city || !formData.pincode}
                        className={`inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-sm font-medium transition-all duration-200 w-full sm:w-auto ${!formData.addressLine1 || !formData.town || !formData.city || !formData.pincode ? "bg-gray-400 text-white cursor-not-allowed" : "bg-purple_primary text-white hover:bg-purple_primary shadow-md hover:shadow-lg"}`}
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
        <div className="max-w-4xl bg-gray-200 mx-auto rounded space-y-4 sm:space-y-5 px-3 sm:px-4">
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
                                value: `${formData.addressLine1}, ${formData.town}, ${formData.city} - ${formData.pincode}`,
                                span: 2,
                                icon: "🏠"
                            },
                            { label: "CITB Testing ID", value: formData.citbId || "Not provided", icon: "🎯" },
                            { label: "Card Variant", value: formData.variant || "N/A", icon: "🎨" },
                            { label: "Card Type", value: formData.cardtype, icon: "🪪" },
                            { label: "Application Type", value: formData.applicationType, span: 2, icon: "📝" },
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
                <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md mb-4 sm:mb-6">
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

export default AddressStepPage; 