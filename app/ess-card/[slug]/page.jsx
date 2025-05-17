"use client";

import React from "react";
import EssPageComponent from "@/app/components/EssPageComponent";
import { useParams } from "next/navigation";


const page = () => {
  const params = useParams();
  const id = params.slug;

  const renderPageContent = () => {

    switch (id) {
      case "green":
        return (
          <EssPageComponent
            id={id}
            title_page="ESS Green Card"
            image_path="/ess-green-labourer-img.png"
            title_form_one="Green Labourer Card"
            title_form_two="Easy apply for ESS Green Card - Labourers Card."
            card_type="green-labourer"
            validity={"5"}

          />
        );

      case "blue-skilled":
        return (
          <EssPageComponent
            id={id}
            title_page="ESS Blue Skilled Worker Card"
            image_path="/ess-blue-skilled-img.png"
            title_form_one="Blue Skilled Worker Card"
            title_form_two="Easy apply for ESS Blue Card - Skilled Worker Card."
            card_type="blue-skilled"
            validity={"5"}


          />
        );

      case "blue-experienced":
        return (
          <EssPageComponent
            id={id}
            title_page="ESS Blue Experienced Worker Card"
            image_path="/ess-blue-experienced-img.png"
            title_form_one="Blue Experienced Worker Card"
            title_form_two="Easy apply for ESS Blue Card - Experienced Worker Card."
            card_type="blue-experienced"
            validity={"5"}


          />
        );

      case "red-trainee":
        return (
          <EssPageComponent
            id={id}
            title_page="ESS Red Trainee Card"
            image_path="/ess-red-trainee-img.png"
            title_form_one="Red Trainee Card"
            title_form_two="Easy apply for ESS Red Card - Trainee Card."
            card_type="red-trainee"
            validity={"5"}


          />
        );

      case "red-industry":
        return (
          <EssPageComponent
            id={id}
            title_page="ESS Red Industry Experienced Card"
            image_path="/ess-red-industry-img.png"
            title_form_one="Red Industry Experienced Card"
            title_form_two="Easy apply for ESS Red Card - Industry Experienced Card."
            card_type="red-industry"
            validity={"5"}


          />
        );

      case "gold-advanced":
        return (
          <EssPageComponent
            id={id}
            title_page="ESS Gold Advanced Craft Card"
            image_path="/ess-gold-advanced-craft-img.png"
            title_form_one="Gold Advanced Craft Card"
            title_form_two="Easy apply for ESS Gold Advanced Craft Card - Experienced Card."
            card_type="gold-advanced"
            validity={"5"}


          />
        );

      case "gold-supervisor":
        return (
          <EssPageComponent
            id={id}
            title_page="ESS Gold Supervisor Card"
            image_path="/ess-gold-supervisor-img.png"
            title_form_one="Gold Supervisor Card"
            title_form_two="Easy apply for ESS Gold Supervisor Card - Supervisor Card."
            card_type="gold-supervisor"
            validity={"5"}


          />
        );

      case "manager":
        return (
          <EssPageComponent
            id={id}
            title_page="ESS Black Manager"
            image_path="/ess-black-img.png"
            title_form_one="Black Manager Card"
            title_form_two="Easy apply for ESS Black Card - Manager Card."
            card_type="black-manager"
            validity={"5"}


          />
        );

      case "aqp":
        return (
          <EssPageComponent
            id={id}
            title_page="ESS White Academic Qualified Person Card"
            image_path="/ess-white-aqp-img.png"
            title_form_one="White Academic Qualified Person Card"
            title_form_two="Easy apply for ESS White Card - Academic Qualified Person Card."
            card_type="white-aqp"
            validity={"5"}


          />
        );

      case "pqp":
        return (
          <EssPageComponent
            id={id}
            title_page="ESS White Professionally Qualified Person Card"
            image_path="/ess-white-pqp-img.png"
            title_form_one="White Professionally Qualified Person Card"
            title_form_two="Easy apply for ESS White Card - Professionally Qualified Person Card."
            card_type="white-pqp"
            validity={"5"}


          />
        );

      case "acrib":
        return (
          <EssPageComponent
            id={id}
            title_page="ESS White ACRIB Refrigerant Handler"
            image_path="/ess-white-acrib-img.png"
            title_form_one="White ACRIB Refrigerant Handler Card"
            title_form_two="Easy apply for ESS White Card - ACRIB Refrigerant Handler"
            card_type="white-acrib"
            validity={"3"}

          />
        );

      default:
        return <div>Invalid ID or Page Not Found</div>;
    }
  };


  return <div>{renderPageContent()}</div>;
};

export default page;
