// Mock API data for development
export const mockProducts = {
  "A123XY": {
    herbName: "Ashwagandha",
    batchCode: "A123XY",
    batchStatus: "Certified",
    recallStatus: "Safe",
    events: [
      {
        id: 1,
        role: "Farmer",
        locationName: "Satara, Maharashtra",
        lat: 17.68,
        lng: 74.01,
        date: "2025-09-05",
        description: "Organic Ashwagandha roots harvested from certified organic farm",
        details: "Harvested during optimal season with proper soil conditions. Roots are 3-4 years old for maximum potency."
      },
      {
        id: 2,
        role: "Processor",
        locationName: "Mumbai, Maharashtra",
        lat: 19.07,
        lng: 72.87,
        date: "2025-09-07",
        description: "Roots cleaned, dried, and processed using traditional methods",
        details: "Traditional sun-drying process followed by mechanical cleaning. No chemical processing used."
      },
      {
        id: 3,
        role: "Lab",
        locationName: "Pune, Maharashtra",
        lat: 18.52,
        lng: 73.88,
        date: "2025-09-08",
        description: "Quality testing and certification completed",
        details: "Comprehensive testing for purity, potency, and safety. All parameters within acceptable limits."
      },
      {
        id: 4,
        role: "Distributor",
        locationName: "Delhi",
        lat: 28.61,
        lng: 77.21,
        date: "2025-09-10",
        description: "Product packaged and distributed to retail outlets",
        details: "Packaged in eco-friendly materials with QR code for traceability. Distributed to certified retailers."
      }
    ],
    certificates: [
      { type: "Moisture", status: "PASS", value: "8.2%", limit: "<10%" },
      { type: "Pesticide", status: "PASS", value: "ND", limit: "<0.01ppm" },
      { type: "DNA", status: "PASS", value: "Authentic", limit: "100% match" },
      { type: "Heavy Metals", status: "PASS", value: "0.05ppm", limit: "<0.1ppm" },
      { type: "Microbial", status: "PASS", value: "Absent", limit: "Absent" }
    ],
    blockchainHash: "0x1a2b3c4d5e6f7890abcdef1234567890abcdef12",
    sustainabilityScore: 95,
    organicCertification: "USDA Organic Certified"
  },
  "B456YZ": {
    herbName: "Turmeric",
    batchCode: "B456YZ",
    batchStatus: "Certified",
    recallStatus: "Safe",
    events: [
      {
        id: 1,
        role: "Farmer",
        locationName: "Erode, Tamil Nadu",
        lat: 11.34,
        lng: 77.73,
        date: "2025-09-03",
        description: "Premium turmeric rhizomes harvested",
        details: "Harvested from 2-year-old plants with high curcumin content."
      },
      {
        id: 2,
        role: "Processor",
        locationName: "Coimbatore, Tamil Nadu",
        lat: 11.01,
        lng: 76.96,
        date: "2025-09-05",
        description: "Rhizomes processed and ground to powder",
        details: "Traditional processing method maintaining curcumin content."
      },
      {
        id: 3,
        role: "Lab",
        locationName: "Chennai, Tamil Nadu",
        lat: 13.08,
        lng: 80.27,
        date: "2025-09-07",
        description: "Quality and purity testing completed",
        details: "Curcumin content: 4.2%, within premium range."
      },
      {
        id: 4,
        role: "Distributor",
        locationName: "Bangalore, Karnataka",
        lat: 12.97,
        lng: 77.59,
        date: "2025-09-09",
        description: "Packaged and ready for distribution",
        details: "Vacuum-sealed packaging to maintain freshness and potency."
      }
    ],
    certificates: [
      { type: "Curcumin", status: "PASS", value: "4.2%", limit: ">3%" },
      { type: "Pesticide", status: "PASS", value: "ND", limit: "<0.01ppm" },
      { type: "DNA", status: "PASS", value: "Authentic", limit: "100% match" },
      { type: "Heavy Metals", status: "PASS", value: "0.02ppm", limit: "<0.1ppm" }
    ],
    blockchainHash: "0x2b3c4d5e6f7890abcdef1234567890abcdef1234",
    sustainabilityScore: 92,
    organicCertification: "India Organic Certified"
  },
  "C789AB": {
    herbName: "Brahmi",
    batchCode: "C789AB",
    batchStatus: "Pending",
    recallStatus: "Safe",
    events: [
      {
        id: 1,
        role: "Farmer",
        locationName: "Kerala, India",
        lat: 10.85,
        lng: 76.27,
        date: "2025-09-08",
        description: "Fresh Brahmi leaves harvested",
        details: "Harvested from wetland cultivation with traditional methods."
      },
      {
        id: 2,
        role: "Processor",
        locationName: "Kochi, Kerala",
        lat: 9.93,
        lng: 76.26,
        date: "2025-09-10",
        description: "Leaves processed and dried",
        details: "Gentle drying process to preserve active compounds."
      }
    ],
    certificates: [
      { type: "Pesticide", status: "PASS", value: "ND", limit: "<0.01ppm" },
      { type: "DNA", status: "PENDING", value: "Testing", limit: "100% match" }
    ],
    blockchainHash: "0x3c4d5e6f7890abcdef1234567890abcdef123456",
    sustainabilityScore: 88,
    organicCertification: "Kerala Organic Certified"
  }
};

export const mockRecalls = {
  "D999XX": {
    batchCode: "D999XX",
    herbName: "Ginseng",
    recallStatus: "Recalled",
    recallReason: "Contamination detected during routine testing",
    recallDate: "2025-09-11",
    affectedProducts: ["Ginseng Root Powder 100g", "Ginseng Capsules 60ct"],
    instructions: "Please return product to place of purchase for full refund. Do not consume.",
    contactInfo: "Call 1-800-HERB-SAFE for more information"
  }
};

// Mock API functions
export const mockApi = {
  getProduct: async (code) => {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const product = mockProducts[code];
    if (!product) {
      throw new Error(`Product with code ${code} not found`);
    }
    return product;
  },

  getRecall: async (batchCode) => {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 800));
    
    const recall = mockRecalls[batchCode];
    if (!recall) {
      return {
        batchCode,
        recallStatus: "Safe",
        message: "No recalls found for this batch code"
      };
    }
    return recall;
  },

  getEventDetails: async (eventId) => {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 500));
    
    // Find event in all products
    for (const product of Object.values(mockProducts)) {
      const event = product.events.find(e => e.id === eventId);
      if (event) {
        return event;
      }
    }
    throw new Error(`Event with ID ${eventId} not found`);
  }
};
