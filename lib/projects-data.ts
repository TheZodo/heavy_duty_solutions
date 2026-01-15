export type ProjectImage = {
  src: string
  caption?: string
}

export type Project = {
  id: string
  title: string
  shortDescription: string
  fullDescription: string
  details: string[]
  impact: string
  location: string
  capacity: string
  status: string
  images?: ProjectImage[]
}

export const projects: Project[] = [
  {
    id: 'hydro-master',
    title: 'Hydro Master',
    shortDescription:
      'Floating hydro-kinetic turbine with self-propulsion capabilities',
    fullDescription:
      'Hydro Master is our flagship innovation—a floating hydro-kinetic turbine designed to harness energy from flowing water surfaces. With self-propulsion capabilities, it can be positioned optimally in rivers and waterways with a minimum depth of 3 meters and width of 8 meters. This revolutionary technology taps into the vast unused hydro-kinetic potential across Zambia.',
    details: [
      'Self-propelled floating turbine system',
      'Operates in water depths of 3+ meters',
      'Requires minimum 8 meters water width',
      'Harnesses surface flow energy efficiently',
      'Minimal environmental impact',
      'Suitable for remote community power generation',
    ],
    impact:
      "Providing clean, sustainable energy from Zambia's rivers and waterways",
    location: "Zambia's Major Rivers",
    capacity: 'Scalable Output',
    status: 'Active Development',
  },
  {
    id: 'prefabricated-buildings',
    title: 'Prefabricated Buildings',
    shortDescription: 'Custom-designed modular structures for rapid deployment',
    fullDescription:
      'Our prefabricated building solutions offer fast, cost-effective construction without compromising on quality. From offices and warehouses to residential units, we design and manufacture modular structures that can be assembled on-site in a fraction of traditional construction time.',
    details: [
      'Custom design to client specifications',
      'Factory-controlled quality manufacturing',
      'Rapid on-site assembly',
      'Cost-effective compared to traditional construction',
      'Relocatable and expandable options',
      'Full electrical and plumbing integration available',
    ],
    impact:
      'Enabling rapid infrastructure development for businesses and communities',
    location: 'Nationwide Delivery',
    capacity: 'Custom Sizes',
    status: 'Available Now',
    images: [
      {
        src: '/services/prefab_buildings/building_day.jpeg',
        caption: 'Prefab building - daytime view',
      },
      {
        src: '/services/prefab_buildings/building_night.jpeg',
        caption: 'Prefab building - nighttime view',
      },
    ],
  },
  {
    id: 'steel-structures',
    title: 'Steel Structures',
    shortDescription:
      'Heavy-duty steel framework for industrial and commercial use',
    fullDescription:
      'We design and fabricate robust steel structures for a wide range of applications including warehouses, factories, hangars, and commercial buildings. Our engineering team ensures every structure meets international safety standards while optimizing material usage for cost efficiency.',
    details: [
      'Structural engineering and design services',
      'High-strength steel fabrication',
      'Corrosion-resistant treatments',
      'On-site erection and installation',
      'Compliance with building standards',
      'Long-lasting durability guaranteed',
    ],
    impact: "Building the backbone of Zambia's industrial infrastructure",
    location: 'Nationwide Service',
    capacity: 'Any Scale',
    status: 'Ongoing Projects',
  },
  {
    id: 'cnc-laser-cutting',
    title: 'CNC Laser Cutting',
    shortDescription:
      'Precision cutting services for metal and other materials',
    fullDescription:
      'Our state-of-the-art CNC laser cutting equipment delivers precise cuts for metal sheets, plates, and various materials. Whether you need intricate decorative patterns or industrial components, our laser cutting services provide accuracy down to fractions of a millimeter.',
    details: [
      'High-precision laser cutting technology',
      'Capable of cutting various metal thicknesses',
      'Complex patterns and designs',
      'Fast turnaround times',
      'Minimal material waste',
      'Suitable for prototyping and production runs',
    ],
    impact: 'Enabling precise manufacturing for local industries',
    location: 'In-House Facility',
    capacity: 'High Volume',
    status: 'Operational',
    images: [
      {
        src: '/services/cnc_laser_cutting/laser_cutting.jpeg',
        caption: 'CNC laser cutting in action',
      },
    ],
  },
  {
    id: 'booths-kiosks',
    title: 'Booths & Kiosks',
    shortDescription: 'Custom retail and service booths for any environment',
    fullDescription:
      "From shopping mall kiosks to outdoor vendor booths, we manufacture custom units that combine functionality with attractive design. Our booths are built to withstand Zambia's climate while providing secure, practical spaces for retail and service operations.",
    details: [
      'Custom design to brand specifications',
      'Weather-resistant construction',
      'Secure locking systems',
      'Electrical integration included',
      'Easy transport and installation',
      'Suitable for indoor and outdoor use',
    ],
    impact: 'Empowering entrepreneurs and retailers with quality retail spaces',
    location: 'Nationwide Delivery',
    capacity: 'Any Quantity',
    status: 'Ready to Order',
    images: [
      {
        src: '/services/booths/izb_front.jpeg',
        caption: 'IZB booth - front view',
      },
      {
        src: '/services/booths/izb_right.jpeg',
        caption: 'IZB booth - side view',
      },
      {
        src: '/services/booths/zanaco_many.jpeg',
        caption: 'Zanaco booth installation',
      },
    ],
  },
  {
    id: 'outdoor-furniture',
    title: 'Outdoor Furniture',
    shortDescription:
      'Durable metal furniture for parks, gardens, and public spaces',
    fullDescription:
      'We manufacture high-quality outdoor furniture including benches, tables, planters, and decorative elements. Our products are designed for durability in outdoor environments, with corrosion-resistant finishes that maintain their appearance for years.',
    details: [
      'Heavy-duty steel and metal construction',
      'Powder-coated weather-resistant finishes',
      'Custom designs available',
      'Suitable for public and private spaces',
      'Low maintenance requirements',
      'Bulk orders for municipal projects',
    ],
    impact: 'Enhancing public spaces with durable, attractive furniture',
    location: 'Nationwide Supply',
    capacity: 'Bulk Available',
    status: 'In Stock',
  },
  {
    id: 'metal-works',
    title: 'Metal Fabrication',
    shortDescription: 'Custom metal fabrication for any project requirement',
    fullDescription:
      'Our general metal works division handles custom fabrication projects of all sizes. From gates and railings to specialized industrial components, our skilled team can manufacture to your specifications using various metals and finishing techniques.',
    details: [
      'Custom fabrication to drawings or specifications',
      'Welding, cutting, and forming services',
      'Various metal types: steel, aluminum, stainless',
      'Finishing options: painting, galvanizing, powder coating',
      'Repair and modification services',
      'Prototype development',
    ],
    impact: 'Providing versatile metal solutions for diverse industries',
    location: 'Workshop Based',
    capacity: 'Flexible',
    status: 'Always Available',
    images: [{ src: '/services/metal_fabrication/metal_fabrication.jpeg' }],
  },
  {
    id: 'food-trailers',
    title: 'Food Trailers',
    shortDescription: 'Custom mobile food trailers for catering and vending',
    fullDescription:
      'Our food trailers are designed for entrepreneurs looking to start or expand their mobile food business. From compact standard units to impressive double-decker designs, we build trailers that are fully equipped, easy to tow, and built to meet health and safety standards.',
    details: [
      'Multiple sizes: standard, medium, and double-decker',
      'Fully equipped kitchen layouts',
      'Stainless steel food-safe surfaces',
      'Electrical and plumbing integration',
      'Custom branding and signage options',
      'Compliant with health regulations',
    ],
    impact: 'Empowering food entrepreneurs with mobile business solutions',
    location: 'Nationwide Delivery',
    capacity: 'Custom Orders',
    status: 'Available Now',
    images: [
      {
        src: '/services/food_trailers/standard.jpeg',
        caption: 'Standard food trailer',
      },
      {
        src: '/services/food_trailers/medium.jpeg',
        caption: 'Medium food trailer',
      },
      {
        src: '/services/food_trailers/double_decker.jpeg',
        caption: 'Double-decker food trailer',
      },
    ],
  },
  {
    id: 'foot-operated-stations',
    title: 'Foot-Operated Washing Stations',
    shortDescription: 'Hygienic handwashing stations with touchless operation',
    fullDescription:
      'Our foot-operated washing stations provide a hygienic handwashing solution for public spaces, offices, schools, and events. The touchless design minimizes contact and helps prevent the spread of germs, making them ideal for high-traffic areas.',
    details: [
      'Touchless foot-pedal operation',
      'Multiple configurations available',
      'Stainless steel construction for durability',
      '6-in-1 multi-user stations available',
      'Portable and permanent installation options',
      'Low maintenance design',
    ],
    impact: 'Promoting hygiene and health in public spaces',
    location: 'Nationwide Delivery',
    capacity: 'Bulk Orders Available',
    status: 'In Stock',
    images: [
      {
        src: '/services/foot_operated_stations/6_in_1_foot_operated_washing_station.jpeg',
        caption: '6-in-1 foot-operated washing station',
      },
      {
        src: '/services/foot_operated_stations/foot_operated_station_at_sadc.jpeg',
        caption: 'Installation at SADC',
      },
      {
        src: '/services/foot_operated_stations/nemchem.jpeg',
        caption: 'Nemchem installation',
      },
      {
        src: '/services/foot_operated_stations/stainless_steel.jpeg',
        caption: 'Stainless steel model',
      },
    ],
  },
  {
    id: 'smokers-brai-stands',
    title: 'Smokers & Brai Stands',
    shortDescription: 'Quality smokers and braai stands for outdoor cooking',
    fullDescription:
      'Our smokers and braai stands are crafted for serious outdoor cooking enthusiasts. Built from heavy-duty steel with precision welding, these units deliver excellent heat retention and durability for years of use. Available in various sizes for home use or commercial operations.',
    details: [
      'Heavy-duty steel construction',
      'Precision-welded for durability',
      'Multiple sizes available',
      'Excellent heat retention',
      'Portable and stationary options',
      'Custom designs on request',
    ],
    impact:
      'Bringing quality outdoor cooking equipment to homes and businesses',
    location: 'Nationwide Delivery',
    capacity: 'Any Quantity',
    status: 'Ready to Order',
    images: [
      {
        src: '/services/smokers_and_brai_stands/smoker1.jpeg',
        caption: 'Smoker unit',
      },
      {
        src: '/services/smokers_and_brai_stands/tall1.jpeg',
        caption: 'Tall smoker design',
      },
      {
        src: '/services/smokers_and_brai_stands/brai_stand.jpeg',
        caption: 'Braai stand',
      },
    ],
  },
]
