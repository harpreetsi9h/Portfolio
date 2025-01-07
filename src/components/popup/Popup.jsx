import React, { use } from 'react'
import './popup.css'
import { FaCircleCheck } from "react-icons/fa6";
import { IoMdCloseCircle } from "react-icons/io";

const Popup = ({isOpen, onClose}) => {
  if (!isOpen) return null;

  return (
    <div className="dialog-overlay" onClick={onClose}> 
      <div className="dialog" onClick={(e) => e.stopPropagation()}> 
        <button className="dialog-close" onClick={onClose}><IoMdCloseCircle /></button> 
        <div className="dialog-title">
          <h3>Message Sent</h3>
          <FaCircleCheck />
        </div>
        <br />
        <p>Thank you for your message! I will get back to you as soon as possible.</p>
      </div>
    </div>
  );
};

export default Popup