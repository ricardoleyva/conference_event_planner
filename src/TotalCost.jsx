import React, { useState, useEffect } from 'react';
import "./TotalCost.css";

const TotalCost = ({ totalCosts, ItemsDisplay }) => {
  const total_amount = totalCosts.venue + totalCosts.av + totalCosts.meals;

  return (
    <div className="pricing-app">
      <div className="display_box">
        <div className="header">
        <h3><p className="preheading">Total cost for the event</p></h3>
        </div>
        <div>
          <h2 id="pre_fee_cost_display" className="price">
            ${total_amount}
          </h2>
         
          <div className="render_items"><ItemsDisplay /></div>

        </div>
      </div>
    </div>
  );
};

export default TotalCost;
