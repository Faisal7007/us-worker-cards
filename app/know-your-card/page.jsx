
"use client";
import React from "react";
import KnowCardComp from "../components/KnowCardComp";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Page = () => {
  const router = useRouter();

  const handleApplyClick = () => {
    router.push("/apply-card-for/cscs");
  };

  const redirectToWhatsApp = () => {
    window.open(
      "https://wa.me/447883317237?text=Hi%20there!%20I%20need%20help%20with%20Construction%20Card%20Services.",
      "_blank"
    );
  };

  return (
    <div className="max-w-[1440px] mx-auto px-4 py-8 mt-[102px] text-justify text-gray-800">
      <h1 className="text-3xl font-bold mb-4">About CSCS Card</h1>
      <hr className="border-slate-300 mb-4" />

      <p className="mb-4">
        CSCS cards serve as proof that applicants working on construction sites
        have the necessary training and qualifications for their roles. By
        ensuring the workforce is properly qualified, these cards contribute to
        enhancing standards and safety on construction sites.
      </p>
      <p className="mb-4">
        Every CSCS card has a specific ranking, distinguishing qualified
        workers, supervisors, and managers on a construction site.
      </p>
      <p className="mb-4">
        The most commonly used card is the Green Labourer Card, which allows
        individuals to secure basic jobs. Non-construction workers can also
        apply for this card. A higher-level CSCS card, reflecting better skills
        and qualifications, can positively impact wages.
      </p>
      <p className="mb-4">
        The card structure is designed to help new construction workers
        gradually increase their wages as they gain experience and obtain
        higher-level cards. Once applicants become confident in their trade,
        they can progress further in their careers.
      </p>

      {/* Buttons */}
      <div className="flex flex-col md:flex-row items-center justify-start gap-4 mt-6">
        <button
          onClick={handleApplyClick}
          className="w-full md:w-auto bg-purple_primary text-white font-semibold py-3 px-6 rounded-lg hover:bg-[#84286a] transition"
        >
          Apply Online
        </button>
        <button
          onClick={redirectToWhatsApp}
          className="w-full md:w-auto bg-purple_primary text-white font-semibold py-3 px-6 rounded-lg hover:bg-[#84286a] transition"
        >
          Apply by Phone
        </button>
      </div>

      <div className="text-center text-sm font-medium mt-2">
        9am to 7pm (Monday to Saturday)
      </div>

      {/* Know Your Card */}
      <div className="mt-10">
        <KnowCardComp />
      </div>

      {/* Why Required */}
      <div className="mt-10">
        <h2 className="text-2xl font-bold mb-3">Why CSCS card is required?</h2>
        <p className="mb-4">
          Employers now make it mandatory for every worker to have a CSCS card
          to work on construction sites. The CSCS card helps you stay updated
          with evolving industry trends, benefiting both your career growth and
          overall development.
        </p>
        <p className="mb-4">
          If you have the wrong CSCS card for your job role, you should always
          apply for the correct one based on your requirements. Having the right
          card will support your career growth in the construction industry.
        </p>
        <Link
          href="/cscs-card-types"
          className="text-purple_primary font-bold hover:underline"
        >
          Click here to know more about CSCS cards
        </Link>
      </div>
    </div>
  );
};

export default Page;


