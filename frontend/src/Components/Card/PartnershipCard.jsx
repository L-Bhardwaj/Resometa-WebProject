import React from "react";

const PartnershipCard = ({ logo }) => {
  return (
    <div className="col partnership-container">
        <div className="partnership-item">
            <a href="#">
                <img src={logo} alt="Partner Logo" loading="lazy" className="img-fluid" />
            </a>
        </div>
    </div>
  );
};

export default PartnershipCard;
