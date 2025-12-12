export const pricingData = [
  {
  category: "Video Editing",
  plans: [
    {
      name: "Starter",
      videos: 10,
      pricing: {
        totalActual: 335,      // you will set this
        totalDiscounted: 268   // you will set this
      }
    },
    {
      name: "Pro",
      videos: 27,
      pricing: {
        totalActual: 775,
        totalDiscounted: 665
      }
    },
    {
      name: "Elite",
      videos: 60,
      pricing: {
        totalActual: 1220,
        totalDiscounted: 1110
      }
    }
  ]
},

  {
    category: "Website Development",
    plans: [
      {
        name: "Code Based Website (Static Upto 5 Pages)",
        prices: {
          3: { actual: 389, discounted: 0 }
        }
      },
      {
        name: "Wordpress / Shopify Website",
        prices: {
          3: { actual: 278, discounted: 0 }
        }
      }
    ]
  },

  {
    category: "Social Media Management",
    plans: [
      {
        name: "Gold",
        prices: {
          3: { actual: 1336, discounted: 1002 },
          6: { actual: 2672, discounted: 1893 },
          9: { actual: 4008, discounted: 2784 },
          12: { actual: 5344, discounted: 3340 }
        }
      },
      {
        name: "Diamond",
        prices: {
          3: { actual: 2004, discounted: 1670 },
          6: { actual: 4008, discounted: 3172 },
          9: { actual: 6010, discounted: 4510 },
          12: { actual: 8010, discounted: 5340 }
        }
      },
      {
        name: "Platinum",
        prices: {
          3: { actual: 2672, discounted: 2003 },
          6: { actual: 5344, discounted: 3840 },
          9: { actual: 8010, discounted: 5508 },
          12: { actual: 10682, discounted: 6676 }
        }
      }
    ]
  },

  {
    category: "Branding",
    plans: [
      {
        name: "Professional Package",
        prices: {
          3: { actual: 222, discounted: 111 }
        }
      }
    ]
  }
];


