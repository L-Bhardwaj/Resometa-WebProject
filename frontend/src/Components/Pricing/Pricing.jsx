import React, { useState, useEffect } from "react";
import AnimateOnScroll from "../Hooks/AnimateOnScroll";
import { pricingData } from "../../Data/pricingData";

function PricingPlanSection() {
  const categories = pricingData.map(item => item.category);
  const [activeCategory, setActiveCategory] = useState(categories[0]);

  const billingOptions = [
    { label: "3 Months", months: 3 },
    { label: "6 Months", months: 6 },
    { label: "9 Months", months: 9 },
    { label: "Annually", months: 12 }
  ];
  const [billing, setBilling] = useState(billingOptions[0]);

  useEffect(() => {
    if (activeCategory === "Website Development" || activeCategory === "Branding") {
      setBilling({ label: "3 Months", months: 3 });
    }
  }, [activeCategory]);

  const activePricing = pricingData.find(item => item.category === activeCategory);
  const plans = activePricing?.plans || [];

  const featureData = {
    "Video Editing": [
      { label: "Total Edited Videos (upto 1 min content)", custom: "videos" },
      { label: "Professional Editing", vals: [true, true, true] },
      { label: "Transitions & Effects", vals: [true, true, true] },
      { label: "Color Correction", vals: [true, true, true] },
      { label: "Sound Enhancement", vals: [true, true, true] },
      { label: "Social Media Formats (9:16, 1:1, 16:9)", vals: [true, true, true] },
      { label: "Branding Elements", vals: [true, true, true] },
      { label: "Revision Rounds", vals: [1, 1, 2] },
      { label: "Turn Around Time", vals: ["Standard", "Faster", "Priority"] },
      { label: "Monthly Reporting ", vals: [true, true, true] },
    ],

    "Website Development": [
      { label: "Pages Included", vals: { 3: ["Upto 5 Pages", "Upto 5 Pages / Section"] } },
      { label: "UI/UX Design", vals: { 3: ["Custom Design", "Theme Customization"] } },
      { label: "Technology Stack", vals: { 3: ["HTML / CSS / JS", "Wordpress / Shopify"] } },
      { label: "Speed Optimization", vals: { 3: [true, true] } },
      { label: "Mobile Responsive", vals: { 3: [true, true] } },
      { label: "Basic SEO Setup", vals: { 3: [true, true] } },
      { label: "Security Setup", vals: { 3: [true, true] } },
      { label: "Admin Panel", vals: { 3: [false, "CMS Access"] } },
      { label: "E-Commerce Ready", vals: { 3: [false, true] } },
      { label: "Contact Form", vals: { 3: [true, true] } },
      { label: "Hosting Guidance", vals: { 3: [true, true] } },
      { label: "Payment Gateway", vals: { 3: [false, true] } },
      { label: "Maintenance (Annually)", vals: { 3: ["$111", "$56"] } },
      { label: "First Year Maintenance", vals: { 3: ["Free", "Free"] } },
    ],

    "Social Media Management": [
      { label: "Reels (Total)", vals: { 3: [36, 60, 90], 6: [72, 120, 180], 9: [108, 180, 270], 12: [144, 240, 360] } },
      { label: "Static Creatives (Total)", vals: { 3: [21, 36, 45], 6: [42, 72, 90], 9: [63, 108, 135], 12: [84, 144, 180] } },
      { label: "Ad Campaigns (Total)", vals: { 3: [6, 9, 15], 6: [12, 18, 30], 9: [18, 27, 45], 12: [24, 36, 60] } },
      { label: "Ad Video Scripts", vals: { 3: [true, true, true], 6: [true, true, true], 9: [true, true, true], 12: [true, true, true] } },
      { label: "Branding + Scriptwriting", vals: { 3: [false, true, true], 6: [false, true, true], 9: [false, true, true], 12: [true, true, true] } },
      { label: "Instagram Management", vals: { 3: [true, true, true], 6: [true, true, true], 9: [true, true, true], 12: [true, true, true] } },
      { label: "Facebook Management", vals: { 3: [true, true, true], 6: [true, true, true], 9: [true, true, true], 12: [true, true, true] } },
      { label: "Bio Updation", vals: { 3: [true, true, true], 6: [true, true, true], 9: [true, true, true], 12: [true, true, true] } },
      { label: "Story Highlight Setup", vals: { 3: [true, true, true], 6: [true, true, true], 9: [true, true, true], 12: [true, true, true] } },
      { label: "Monthly Calendar", vals: { 3: [true, true, true], 6: [true, true, true], 9: [true, true, true], 12: [true, true, true] } },
      { label: "Monthly Reporting", vals: { 3: [true, true, true], 6: [true, true, true], 9: [true, true, true], 12: [true, true, true] } },
      { label: "Auto Replies (Keyword Based)", vals: { 3: [true, true, true], 6: [true, true, true], 9: [true, true, true], 12: [true, true, true] } },
      { label: "Auto Comments", vals: { 3: [false, false, true], 6: [false, false, true], 9: [false, false, true], 12: [false, false, true] } },
      { label: "Meta Pixel Integration", vals: { 3: [false, true, true], 6: [false, true, true], 9: [false, true, true], 12: [false, true, true] } },
      { label: "Retargeting Setup", vals: { 3: [false, true, true], 6: [false, true, true], 9: [false, true, true], 12: [false, true, true] } },
      { label: "Competition Analysis", vals: { 3: [false, false, true], 6: [false, false, true], 9: [false, false, true], 12: [false, false, true] } },
    ],

    "Branding": [
      { label: "Brand Board (Colors, Typography, Brand Guidelines)", vals: [true] },
      { label: "Logo Design (Primary + Secondary + Icon Logo)", vals: [true] },
      { label: "Social Media Cover Pages (Facebook, Instagram, LinkedIn, YouTube) ", vals: [true] },
      { label: "Story Highlight Icons ", vals: [true] },
      { label: "T-Shirt Design + Print Layout ", vals: [true] },
      { label: "Letterhead Design ", vals: [true] },
      { label: "Business Templates (Proposals, Headers, Footers, etc.)", vals: [true] },
      { label: "Email Templates", vals: [true] },
      { label: "Brochure Design ", vals: [true] },
      { label: "Visiting Card Design", vals: [true] },
      { label: "Digital Business Card ", vals: [true] },
      { label: "Brand Strategy & Consistency Guide ", vals: [true] },
      { label: "All Editable Source Files Included ", vals: [true] },
    ]
  };

  const features = featureData[activeCategory] || [];

  return (
    <div className="section">
      <div className="hero-container">

        <AnimateOnScroll animation="fadeInUp" speed="normal">
          <div className="text-center gspace-2">
            <div className="sub-heading">
              <i className="fa-regular fa-circle-dot"></i>
              <span>Pricing Plans</span>
            </div>
            <h2 className="title-heading heading-container heading-container-short">
              Find the Perfect Plan for Your Business
            </h2>
          </div>
        </AnimateOnScroll>

        {/* CATEGORY BUTTONS */}
        <div className="pricing-category-row">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`pricing-category-btn ${activeCategory === cat ? "active" : ""}`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* HIDE BILLING OPTIONS FOR VIDEO EDITING */}
        {activeCategory !== "Video Editing" &&
          activeCategory !== "Website Development" &&
          activeCategory !== "Branding" && (
            <>
              <p className="text-center">Billing Cycle</p>
              <div className="billing-row">
                {billingOptions.map(b => (
                  <button
                    key={b.label}
                    onClick={() => setBilling(b)}
                    className={`billing-btn ${billing.label === b.label ? "active" : ""}`}
                  >
                    {b.label}
                  </button>
                ))}
              </div>
            </>
          )}

        {/* PRICING TABLE */}
        <div className="pricing-table-wrapper-full">
          <table className="pricing-table">
            <thead>
              <tr>
                <th></th>

                {plans.map((plan, i) => {
                  
                  // VIDEO EDITING CUSTOM PRICING
                  if (activeCategory === "Video Editing") {
                    const { videos, pricing } = plan;
                    const { totalActual, totalDiscounted } = pricing;

                    const perActual = (totalActual / videos).toFixed(0);
                    const perDiscount = (totalDiscounted / videos).toFixed(0);
                    const discountPercent = Math.round(((perActual - perDiscount) / perActual) * 100);

                    return (
                      <th key={i}>
                        <div className="plan-header">
                          <h4>{plan.name}</h4>

                          <p className="old-price">
                            <span style={{ textDecoration: "line-through" }}>
                              ${perActual}/video
                            </span>
                            <span style={{ marginLeft: 6, color: "var(--accent-color)", fontWeight: 600 }}>
                              ({discountPercent}% OFF)
                            </span>
                          </p>

                          <h2 className="plan-price">${perDiscount}/video</h2>
                          <p className="plan-sub">{videos} Total Videos</p>
                        </div>
                      </th>
                    );
                  }

                  // OTHER CATEGORY DEFAULT BEHAVIOR
                  const priceObj = plan.prices[billing.months] || plan.prices[3];
                  const actualTotal = priceObj.actual;
                  const discountedTotal = priceObj.discounted;

                  const isOneTime =
                    activeCategory === "Website Development" ||
                    activeCategory === "Branding";

                  return (
                    <th key={i}>
                      <div className="plan-header">
                        <h4>{plan.name}</h4>

                        {isOneTime ? (
                          <>
                            {discountedTotal > 0 && (
                              <p className="old-price">
                                <span style={{ textDecoration: "line-through" }}>
                                  ${actualTotal}
                                </span>
                                <span style={{ marginLeft: 6, color: "var(--accent-color)", fontWeight: 600 }}>
                                  ({Math.round(((actualTotal - discountedTotal) / actualTotal) * 100)}% OFF)
                                </span>
                              </p>
                            )}

                            <h2 className="plan-price">
                              ${discountedTotal > 0 ? discountedTotal : actualTotal}
                            </h2>
                            <p className="plan-sub">+ Tax</p>
                            <p className="plan-sub">One Time Price</p>
                          </>
                        ) : (
                          (() => {
                            const actualPerMonth = Math.round(actualTotal / billing.months);
                            const discountedPerMonth =
                              discountedTotal > 0
                                ? Math.round(discountedTotal / billing.months)
                                : 0;

                            const finalPerMonth =
                              discountedPerMonth > 0 ? discountedPerMonth : actualPerMonth;

                            const discountPercent =
                              discountedPerMonth > 0
                                ? Math.round(
                                    ((actualPerMonth - discountedPerMonth) / actualPerMonth) * 100
                                  )
                                : 0;

                            return (
                              <>
                                {discountedPerMonth > 0 && (
                                  <p className="old-price">
                                    <span style={{ textDecoration: "line-through" }}>
                                      ${actualPerMonth}/mo
                                    </span>
                                    <span style={{ marginLeft: 6, color: "var(--accent-color)", fontWeight: 600 }}>
                                      ({discountPercent}% OFF)
                                    </span>
                                  </p>
                                )}

                                <h2 className="plan-price">${finalPerMonth}/mo</h2>
                                <p className="plan-sub">+ Tax</p>
                                <p className="plan-sub">{billing.months} Month Billing</p>
                              </>
                            );
                          })()
                        )}
                      </div>
                    </th>
                  );
                })}
              </tr>
            </thead>

            {/* FEATURE ROWS */}
            <tbody>
              {features.map((f, idx) => (
                <tr key={idx}>
                  <td className="feature-label">{f.label}</td>

                  {activeCategory === "Video Editing"
                    ? plans.map((plan, col) => {
                        if (f.custom === "videos") {
                          return <td key={col} className="feature-check">{plan.videos}</td>;
                        }
                        const val = f.vals[col];
                        return (
                          <td key={col} className="feature-check">
                            {typeof val === "boolean"
                              ? val
                                ? <i className="fa-solid fa-check tick-yes"></i>
                                : <i className="fa-solid fa-xmark tick-no"></i>
                              : val}
                          </td>
                        );
                      })
                    : plans.map((plan, col) => {
                        const value = Array.isArray(f.vals)
                          ? f.vals[col]
                          : f.vals[billing.months]?.[col] ?? f.vals[3]?.[col];

                        return (
                          <td key={col} className="feature-check">
                            {typeof value === "boolean"
                              ? value
                                ? <i className="fa-solid fa-check tick-yes"></i>
                                : <i className="fa-solid fa-xmark tick-no"></i>
                              : value}
                          </td>
                        );
                      })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>
    </div>
  );
}

export default PricingPlanSection;
