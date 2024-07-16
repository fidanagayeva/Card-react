import React from 'react';
import { FaBuilding } from "react-icons/fa";
import { CiSquarePlus } from "react-icons/ci";
import { TbWorld } from "react-icons/tb";
import { LuLamp } from "react-icons/lu";
import { RiMoneyEuroCircleLine } from "react-icons/ri";
import './card.scss';

const customCards = [
  {
    title: "Service Premises",
    description: "Our complex has office space and convenience stores on the ground floor. There's lot of hate out there for a text",
    icon: <FaBuilding />
  },
  {
    title: "Safety and Security",
    description: "Reliable round-the-clock surveillance by a security system using modern technologies. The villagers are out there with",
    icon: <CiSquarePlus />
  },
  {
    title: "Environmental Solutions",
    description: "We care about the environment, which is why we use LED lighting and have a charging station for electric vehicles clients",
    icon: <TbWorld /> 
  },
  {
    title: "Ease of Management",
    description: "You just buy an apartment, and a professional hotel operator will do the rest for you. That amounts to little more than garbled words",
    icon: <LuLamp />
  },
  {
    title: "Guaranteed Income",
    description: "Guaranteed monthly income is prescribed in advance in the contract. True enough, but that's not all that it takes to get things",
    icon: <RiMoneyEuroCircleLine /> 
  },
  {
    title: "Great Location",
    description: "A pledge of a secure rental of your apartment. A client that's unhappy for a reason is a problem, a client that's unhappy",
    icon: <FaBuilding /> 
  }
];

const CustomCard = () => {
  return (
    <div className="custom-cards">
      {customCards.map((card, index) => (
        <div key={index} className="custom-card">
          <div className="card-icon">{card.icon}</div>
          <h3 className="card-title">{card.title}</h3>
          <p className="card-description">{card.description}</p>
        </div>
      ))}
    </div>
  );
};

export default CustomCard;