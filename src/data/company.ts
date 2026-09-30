export const company = {
  legalName: 'Thoshini LLC',
  brand: 'Thoshini',
  email: 'info@thoshini.com',
  domain: 'thoshini.com',
  address: ['1309 Coffeen Avenue, STE 1200', 'Sheridan, WY 82801', 'United States'],
  uei: 'JNZVHJKH8FN6',
  cage: '24BL6',
  samStatus: 'Active',
  samExpires: 'August 19, 2027',
  stateOfIncorporation: 'Wyoming',
  businessTypes: ['Small Business', 'Women-Owned Small Business (SAM representation)', 'For-Profit LLC'],
  payment: ['Government Purchase Card (GPC) accepted', 'EFT / Invoice Processing Platform (IPP)', 'Net 30 terms'],
};

export type Naics = {code: string; title: string};

export const naicsGroups: {group: string; codes: Naics[]}[] = [
  {
    group: 'Building maintenance & facility services',
    codes: [
      {code: '561210', title: 'Facilities Support Services'},
      {code: '561790', title: 'Other Services to Buildings and Dwellings'},
      {code: '561730', title: 'Landscaping Services'},
      {code: '541320', title: 'Landscape Architectural Services'},
      {code: '541350', title: 'Building Inspection Services'},
    ],
  },
  {
    group: 'Construction & specialty trades',
    codes: [
      {code: '236118', title: 'Residential Remodelers'},
      {code: '236220', title: 'Commercial and Institutional Building Construction'},
      {code: '238140', title: 'Masonry Contractors'},
      {code: '238160', title: 'Roofing Contractors'},
      {code: '238210', title: 'Electrical Contractors and Other Wiring Installation Contractors'},
      {code: '238220', title: 'Plumbing, Heating, and Air-Conditioning Contractors'},
      {code: '238290', title: 'Other Building Equipment Contractors'},
      {code: '238350', title: 'Finish Carpentry Contractors'},
      {code: '238390', title: 'Other Building Finishing Contractors'},
      {code: '238910', title: 'Site Preparation Contractors'},
      {code: '238990', title: 'All Other Specialty Trade Contractors'},
    ],
  },
  {
    group: 'Equipment repair & maintenance',
    codes: [
      {code: '811210', title: 'Electronic and Precision Equipment Repair and Maintenance'},
      {code: '811310', title: 'Commercial and Industrial Machinery and Equipment Repair and Maintenance'},
      {code: '811411', title: 'Home and Garden Equipment Repair and Maintenance'},
      {code: '811412', title: 'Appliance Repair and Maintenance'},
      {code: '811490', title: 'Other Personal and Household Goods Repair and Maintenance'},
    ],
  },
  {
    group: 'Building materials & equipment supply',
    codes: [
      {code: '423320', title: 'Brick, Stone, and Related Construction Material Merchant Wholesalers'},
      {code: '423390', title: 'Other Construction Material Merchant Wholesalers'},
      {code: '423620', title: 'Household Appliances, Electric Housewares, and Consumer Electronics Merchant Wholesalers'},
      {code: '423710', title: 'Hardware Merchant Wholesalers'},
      {code: '423720', title: 'Plumbing and Heating Equipment and Supplies (Hydronics) Merchant Wholesalers'},
      {code: '423730', title: 'Warm Air Heating and Air-Conditioning Equipment and Supplies Merchant Wholesalers'},
      {code: '423990', title: 'Other Miscellaneous Durable Goods Merchant Wholesalers'},
    ],
  },
  {
    group: 'Home, hardware & general merchandise',
    codes: [
      {code: '444110', title: 'Home Centers'},
      {code: '444140', title: 'Hardware Retailers'},
      {code: '444180', title: 'Other Building Material Dealers'},
      {code: '444230', title: 'Paint and Wallpaper Retailers'},
      {code: '444240', title: 'Nursery, Garden Center, and Farm Supply Retailers'},
      {code: '449110', title: 'Furniture Retailers'},
      {code: '449129', title: 'All Other Home Furnishings Retailers'},
      {code: '449210', title: 'Electronics and Appliance Retailers'},
      {code: '455219', title: 'All Other General Merchandise Retailers'},
      {code: '459110', title: 'Sporting Goods Retailers'},
      {code: '459999', title: 'All Other Miscellaneous Retailers'},
    ],
  },
];

export const pscCodes: Naics[] = [
  {code: 'S216', title: 'Housekeeping – Facilities Operations Support'},
  {code: 'S208', title: 'Housekeeping – Landscaping/Groundskeeping'},
  {code: 'J041', title: 'Maint/Repair – Refrigeration, Air Conditioning Equipment'},
  {code: 'J045', title: 'Maint/Repair – Plumbing, Heating, Waste Disposal Equipment'},
  {code: '5610', title: 'Mineral Construction Materials, Bulk'},
  {code: '5120', title: 'Hand Tools, Nonedged, Nonpowered'},
  {code: '4110', title: 'Refrigeration Equipment'},
  {code: '7290', title: 'Miscellaneous Household and Commercial Furnishings and Appliances'},
];
