export interface Service {
  id: string;
  title: string;
  category: string;
  description: string;
  longDescription: string;
  icon: string;
  image: string;
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  category: string;
  location: string;
  year: string;
  size: string;
  client: string;
  description: string;
  overview: string;
  image: string;
  gallery: string[];
  beforeImage?: string;
  afterImage?: string;
  highlights: string[];
  mepHighlights?: string[];
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  date: string;
  readTime: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  image: string;
  tags: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  rating: number;
  comment: string;
  projectType: string;
  avatar: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
  social: {
    linkedin?: string;
    instagram?: string;
  };
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export const servicesData: Service[] = [
  {
    id: 'architecture',
    title: 'Architectural Design',
    category: 'Core Service',
    description: 'Comprehensive architectural solutions from master planning, concept generation to full-scale building structural design.',
    longDescription: 'Our architectural practice is rooted in innovation, technical precision, and modern aesthetics. We craft structural systems for ultra-luxury residential mansions, state-of-the-art office towers, and spacious institutional campuses. Every blueprint undergoes thorough environmental, solar path, and structural stress modeling to ensure longevity, carbon efficiency, and breathtaking visual form.',
    icon: 'Compass',
    image: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'interior-design',
    title: 'Luxury Interior Design',
    category: 'Core Service',
    description: 'Bespoke high-end spatial curation focusing on material harmonization, custom acoustics, and lighting layout.',
    longDescription: 'We craft interiors that speak the language of understated luxury. We focus on natural Italian stones, custom hand-brushed brass details, textured plaster walls, and custom acoustic integration. Our interior team orchestrates scale, circulation, color theory, and material properties to reflect your unique personal identity or corporate culture.',
    icon: 'Layers',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'residential-design',
    title: 'Luxury Home & Villa Design',
    category: 'Residential',
    description: 'Bespoke layouts for mansions, farmhouses, and modern penthouses matching international design standards.',
    longDescription: 'From high-end penthouses in Chandigarh to sprawling suburban villas, we curate intimate, functional, and visually magnificent sanctuaries. Our designs incorporate smart-home automation pathways, custom modular Italian kitchens, premium double-height glass facades, and temperature-controlled outdoor swimming decks.',
    icon: 'Home',
    image: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'commercial-interiors',
    title: 'Commercial & Office Interiors',
    category: 'Commercial',
    description: 'Optimized workspace environments engineered to drive productivity, high collaboration, and powerful corporate branding.',
    longDescription: 'We design corporate offices, banking lounges, flagship luxury retail stores, and commercial zones that drive user connection. Our workspaces utilize premium biophilic design principles, modern acoustic damping, customizable open-layout desks, and grand client-facing lounges.',
    icon: 'Briefcase',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'mep-services',
    title: 'MEP Services & Engineering',
    category: 'Engineering',
    description: 'Advanced Mechanical, Electrical, Plumbing and HVAC coordination utilizing state-of-the-art integrated engineering tools.',
    longDescription: 'As a full-service firm, we coordinate the complete invisible backbone of your building. Our MEP service covers VRV/VRF central cooling design, high-capacity electrical distribution systems, smart greywater reclamation plumbing, fire safety/suppression engineering, and complete low-voltage surveillance system layouts.',
    icon: 'Cpu',
    image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'product-designing',
    title: 'Product & Custom Furniture',
    category: 'Curation',
    description: 'Bespoke furniture prototyping, industrial lighting curation, and custom luxury item styling.',
    longDescription: 'When standard retail items fall short of our architectural standards, we custom-design them. We operate an exclusive prototyping workshop fabricating custom boucle sofas, brushed metal light pendants, and seamless marble dining tables tailored to fit NWI properties.',
    icon: 'PenTool',
    image: 'https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=800&q=80',
  },
];

export const projectsData: Project[] = [
  {
    id: 'proj-1',
    slug: 'the-monolith-villa',
    title: 'The Monolith Luxury Villa',
    category: 'Residential',
    location: 'Sector 8, Chandigarh',
    year: '2025',
    size: '12,500 Sq. Ft.',
    client: 'Malhotra Estates',
    description: 'A striking structural masterpiece using hand-cast concrete, solid Italian travertine, and expansive thermal double-glazed facades.',
    overview: 'Located in Chandigarh\'s premium residential sector, this villa stands as a masterclass in modern brutalist architecture. The building uses large cantilevered slabs to offer sun shading while presenting massive open layouts. NWI led the complete planning, interior curation, MEP integration, and custom landscaping.',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1556912173-3bb406ef7e77?auto=format&fit=crop&w=800&q=80',
    ],
    beforeImage: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=800&q=80',
    afterImage: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80',
    highlights: [
      'Double-height travertine statement fireplace lobby',
      'Floating wooden staircase hanging on tensioned stainless-steel rods',
      'Hidden automated modular kitchen with Dekton worktops',
      'Geothermal climate regulation loop integrated in foundations',
    ],
    mepHighlights: [
      'Integrated VRV air-conditioning with concealed linear slot diffusers',
      'Centralized water purification and softening system',
      'Lutron smart lighting control system with customized occupancy profiles',
    ],
  },
  {
    id: 'proj-2',
    slug: 'vertex-corporate-hq',
    title: 'Vertex Corporate HQ',
    category: 'Commercial',
    location: 'IT Park, Chandigarh',
    year: '2024',
    size: '35,000 Sq. Ft.',
    client: 'Vertex Tech Corp',
    description: 'An advanced workspace combining smart biophilic architecture with high-capacity engineering systems.',
    overview: 'Vertex HQ is NWI\'s flagship commercial workspace. Built to optimize employee cognitive wellness, the office centers around a massive 4-story biophilic plant wall coupled with specialized acoustic baffles that minimize office distraction.',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=800&q=80',
    ],
    beforeImage: 'https://images.unsplash.com/photo-1590069261209-f8e9b8642343?auto=format&fit=crop&w=800&q=80',
    afterImage: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80',
    highlights: [
      'Acoustic felt-clad pods for focused individual tasks',
      'Dynamic circuited smart glass that tint-adjusts depending on solar heat levels',
      'State-of-the-art interactive executive boardroom with triple motorized displays',
    ],
    mepHighlights: [
      'Fully automated building management system (BMS) with energy analysis dashboard',
      'Redundant HVAC chiller configuration supporting 24/7 server environments',
    ],
  },
  {
    id: 'proj-3',
    slug: 'amber-boutique-restaurant',
    title: 'Amber Bistro & Lounge',
    category: 'Restaurants',
    location: 'Sector 26, Chandigarh',
    year: '2025',
    size: '4,800 Sq. Ft.',
    client: 'Culinary Craft India',
    description: 'A moody, amber-lit fine-dining experience with customized solid-oak cabinetry and fluted glass partitions.',
    overview: 'Amber Bistro balances intimacy and theatrical dining. The centerpiece is a magnificent circular bar crafted from backlit golden onyx stone, surrounded by bespoke velvet booths designed and manufactured at NWI\'s product workshop.',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80',
    ],
    highlights: [
      'Backlit golden onyx structural bar countertop',
      'Fluted hand-blown amber glass structural partitions',
      'Custom spatial scent diffusion and integrated sound system',
    ],
  },
  {
    id: 'proj-4',
    slug: 'luminary-academic-wing',
    title: 'The Luminary Design School',
    category: 'Schools',
    location: 'Sector 34, Chandigarh',
    year: '2024',
    size: '18,200 Sq. Ft.',
    client: 'EduBuild Foundation',
    description: 'A contemporary learning facility with wide-span open concrete roofs, dynamic day-lighting, and ergonomic student clusters.',
    overview: 'Commissioned to design an inspiring facility for higher education, NWI integrated natural concrete finishes with vibrant wood paneling. Wide light corridors allow students to collaborate in comfortable, naturally ventilated social pockets.',
    image: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=800&q=80',
    ],
    highlights: [
      'Spatially acoustic ceilings utilizing recycled pet fiber panels',
      'Wide-opening glass doors that merge indoor classrooms with courtyard greenery',
      'Fully interactive multi-directional auditorium design',
    ],
  },
];

export const testimonialsData: Testimonial[] = [
  {
    id: 'review-1',
    name: 'Rajinder Singh Brar',
    role: 'Real Estate Developer',
    rating: 5,
    comment: 'The team at North Western Innovators exceeded our wildest expectations. Their approach to brutalist architectural planning combined with precise MEP documentation saved us weeks of construction rework. The Monolith Villa is a landmark in Sector 8.',
    projectType: 'Luxury Residential',
    avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=200&q=80',
  },
  {
    id: 'review-2',
    name: 'Ananya Sharma',
    role: 'CEO, Vertex Tech',
    rating: 5,
    comment: 'Designing a 35,000 Sq. Ft. office is usually an administrative nightmare. NWI simplified everything. They handled spatial acoustics, structural glass, biophilic integration, and complicated server-room HVAC. Our employees are thrilled with the new HQ.',
    projectType: 'Corporate Commercial',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80',
  },
  {
    id: 'review-3',
    name: 'Vikramjit Sahni',
    role: 'Restaurateur',
    rating: 5,
    comment: 'The product design capabilities of NWI are incredible. They did not just design the layout for Amber Bistro, they fabricated the custom lighting pendants and the fluted brass bar stools. Exceptional design attention.',
    projectType: 'Hospitality Design',
    avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=200&q=80',
  },
];

export const teamData: TeamMember[] = [
  {
    id: 'team-1',
    name: 'Ar. Raman Kumar',
    role: 'Founder & Principal Architect',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=500&q=80',
    social: {
      linkedin: 'https://linkedin.com',
      instagram: 'https://instagram.com',
    },
  },
  {
    id: 'team-2',
    name: 'Id. Meera Singhania',
    role: 'Design Director - Luxury Interiors',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=500&q=80',
    social: {
      linkedin: 'https://linkedin.com',
      instagram: 'https://instagram.com',
    },
  },
  {
    id: 'team-3',
    name: 'Er. Sandeep Dhillon',
    role: 'Head of MEP & Construction Engineering',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=500&q=80',
    social: {
      linkedin: 'https://linkedin.com',
    },
  },
];

export const blogData: BlogPost[] = [
  {
    id: 'blog-1',
    slug: 'the-art-of-sustainable-luxury',
    title: 'The Art of Sustainable Luxury in Modern Villas',
    excerpt: 'How we marry carbon-efficient structural materials with high-end travertine and custom oak detailing without losing premium aesthetic value.',
    content: `<p>For decades, "luxury" and "sustainability" were seen as opposing concepts. Luxury demanded rare imported stones, massive air-conditioning systems, and complex energy footprint. Sustainability implied compromise, raw rough finishes, and simple structures. At <strong>North Western Innovators</strong>, we believe the highest form of craftsmanship lies in resolving this exact tension.</p>

<h3>1. Passive Architectural Shading</h3>
<p>Modern luxury villas use vast expanses of glass. To prevent the "greenhouse effect," which overworks cooling systems, we incorporate deep structural cantilevers and motorized louvers. These block the high overhead summer sun while welcoming warm low-angle winter sunlight.</p>

<h3>2. Locally Engineered travertines</h3>
<p>Instead of relying entirely on heavy carbon-intensive logistics for European marbles, we mix local Indian quartzites and sandstone textures. Hand-brushed and acid-treated by seasoned regional masons, these local stones present an even richer tactile feel than standardized global imports.</p>

<h3>3. Integrated Air Management</h3>
<p>Utilizing high-capacity VRV/VRF cooling systems integrated with thermal energy recovery units (ERUs) allows our luxury projects to recycle energy from outgoing stale air to pre-cool fresh incoming ventilation. This cuts HVAC energy load by up to 35% without a single degree of cooling loss.</p>
`,
    category: 'Architecture',
    date: 'June 12, 2026',
    readTime: '5 Min Read',
    author: {
      name: 'Ar. Raman Kumar',
      role: 'Principal Architect',
      avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=100&q=80',
    },
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80',
    tags: ['Luxury', 'Sustainability', 'Architecture', 'Travertine'],
  },
  {
    id: 'blog-2',
    slug: 'mep-the-invisible-backbone',
    title: 'MEP Services: The Invisible Backbone of Great Design',
    excerpt: 'Why hidden electrical, HVAC, and greywater plumbing loops are just as critical to luxury comfort as Italian marble and custom lighting.',
    content: `<p>A beautifully styled penthouse is immediately ruined if the central air conditioning hums at 45 decibels, or if water pressure drops in the double-headed rain shower. Great design is multi-sensory, and the physical engineering behind the walls is the true driver of luxury comfort.</p>

<h3>1. High-Performance Acoustic Isolation</h3>
<p>At NWI, our HVAC engineers map out the air supply paths using specialized computer modeling. We ensure air speeds stay below 2.5 meters per second, utilizing acoustically insulated flexible ducts. This keeps the ambient noise level in master suites below an imperceptible 25 decibels.</p>

<h3>2. Fully Integrated greywater Loops</h3>
<p>Our plumbing blueprints integrate state-of-the-art dual-pipe networks. All water from master bath basins and showers passes through a compact greywater filtration unit on-site. It is then recycled to sustain the lush biophilic balcony planters and manicured lawn spaces.</p>

<h3>3. Centralized Control (Low-Voltage Curation)</h3>
<p>By coordinating our Electrical planning with Interior elevations early on, we conceal all unsightly wall panels. Control interfaces are centralized into sleek, gold-accented metal keypads by Lutron or Crestron, perfectly color-matched to the adjacent paint or timber veneer.</p>
`,
    category: 'Engineering',
    date: 'July 2, 2026',
    readTime: '6 Min Read',
    author: {
      name: 'Er. Sandeep Dhillon',
      role: 'Head of MEP',
      avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=100&q=80',
    },
    image: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=1200&q=80',
    tags: ['MEP Engineering', 'Acoustics', 'HVAC', 'Smart Homes'],
  },
  {
    id: 'blog-3',
    slug: 'chandigarh-interior-trends-2026',
    title: 'Top Interior Curation Trends in Chandigarh for 2026',
    excerpt: 'Explore the rise of textured micro-cement walls, fluted amber glass, biophilic light pockets, and custom boucle lounge seating.',
    content: `<p>As we advance into 2026, the interior design landscape in Chandigarh is seeing a pivot away from flat, glossy minimalist surfaces toward rich, highly tactile textures and warm organic palettes.</p>

<h3>1. Micro-Cement and Lime Plasters</h3>
<p>White painted drywall is being replaced by hand-layered micro-cement and authentic Italian lime plaster. These finishes catch natural sunlight dynamically throughout the day, creating subtle shifts in shadow and depth that make spaces feel solid, grounded, and deeply therapeutic.</p>

<h3>2. Fluted Amber and Smoked Glass</h3>
<p>Instead of stark open-concept layouts, we are using fluted glass panels to define specific structural zones. The fluting refracts light, allowing privacy for home offices or pantries while maintaining spatial transparency. Warm amber and smoked bronze tints add a cozy, sophisticated glow.</p>

<h3>3. Custom Rounded Curation</h3>
<p>Soffits, doorways, and furniture lines are losing their sharp ninety-degree angles. Gentle curved arches and organic boucle-upholstered sofas soften the visual pacing of high-ceiling rooms, making the architectural frame feel vastly more comfortable and protective.</p>
`,
    category: 'Interiors',
    date: 'July 15, 2026',
    readTime: '4 Min Read',
    author: {
      name: 'Id. Meera Singhania',
      role: 'Design Director',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=100&q=80',
    },
    image: 'https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=800&q=80',
    tags: ['Interior Design', 'Trends 2026', 'Textures', 'Boucle'],
  },
];

export const faqData: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'What is the standard timeline for a luxury residential interior or architectural project?',
    answer: 'Timeline varies based on scale. A typical luxury 500-yard villa architectural blueprinting, MEP design, and 3D visualization phase takes 8 to 12 weeks. The structural execution and high-end interior finishing phase usually spans 12 to 18 months of highly coordinated on-site craftsmanship.',
    category: 'Timeline',
  },
  {
    id: 'faq-2',
    question: 'Do you offer separate architectural, interior, or MEP services, or is it strictly bundled?',
    answer: 'While we specialize in unified turnkey "Design & Build" projects for cohesive quality, we also offer individual standalone services. You can hire us strictly for Architectural planning, Interior curation, or advanced MEP/HVAC engineering depending on your project requirements.',
    category: 'Services',
  },
  {
    id: 'faq-3',
    question: 'How do you handle budget transparency and material selection?',
    answer: 'We provide an extremely detailed bill of quantities (BOQ) with itemized raw material grades, brand specifications, and manufacturing details before any contract signing. Clients are invited to join us in material selection visits to stone yards, veneer galleries, and furniture ateliers to ensure complete peace of mind.',
    category: 'Pricing',
  },
  {
    id: 'faq-4',
    question: 'What separates North Western Innovators (NWI) from regular builders or designers?',
    answer: 'We are a fully licensed and integrated engineering and architecture studio. We do not just choose paint or draft walls; we structurally engineer the columns, coordinate the VRV/VRF central cooling ductpaths, design the greywater plumbing reclamation systems, and craft our own bespoke custom furniture line. This multi-disciplinary synchronization ensures perfect final delivery.',
    category: 'Consultation',
  },
];
