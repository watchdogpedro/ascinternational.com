import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Electronics Inspection Glossary - Technical Terms & Definitions",
  description: "Comprehensive glossary of electronics manufacturing, inspection, and quality control terms. Definitions for SPI, AOI, SMT, PCB assembly, and industry standards.",
  keywords: ["SPI glossary", "AOI terms", "electronics manufacturing definitions", "PCB inspection terminology", "SMT glossary", "IPC standards", "quality control terms"],
  alternates: {
    canonical: 'https://solderpasteinspection.com/glossary',
  },
  openGraph: {
    title: 'Electronics Inspection Glossary | ASC International',
    description: 'Comprehensive glossary of electronics manufacturing and inspection terms.',
    url: 'https://solderpasteinspection.com/glossary',
  },
};

interface Term {
  id: string;
  term: string;
  definition: string;
  relatedTerms?: string[];
  category: string;
}

const glossaryTerms: Term[] = [
  // Inspection Systems
  {
    id: "3d-spi",
    term: "3D SPI (3D Solder Paste Inspection)",
    definition: "An automated inspection system that uses three-dimensional imaging technology to measure solder paste deposits on PCBs. Unlike 2D systems, 3D SPI measures height, volume, and area of paste deposits, providing more accurate quality control data for the assembly process.",
    relatedTerms: ["2D SPI", "Solder Paste", "PCB", "AOI"],
    category: "Inspection Systems"
  },
  {
    id: "2d-spi",
    term: "2D SPI (2D Solder Paste Inspection)",
    definition: "An inspection system that uses two-dimensional grayscale imaging to inspect solder paste deposits. It measures area and grayscale values but cannot directly measure paste volume or height, making it less accurate than 3D SPI for detecting defects.",
    relatedTerms: ["3D SPI", "Solder Paste", "Grayscale Analysis"],
    category: "Inspection Systems"
  },
  {
    id: "aoi",
    term: "AOI (Automated Optical Inspection)",
    definition: "An automated visual inspection system that uses cameras and image processing algorithms to detect manufacturing defects on PCBs. AOI systems can inspect component placement, solder joints, polarity, and other features after component placement or reflow soldering.",
    relatedTerms: ["2D AOI", "3D AOI", "Machine Vision", "Defect Detection"],
    category: "Inspection Systems"
  },
  {
    id: "2d-aoi",
    term: "2D AOI",
    definition: "Automated Optical Inspection using two-dimensional imaging to inspect PCBs from a single viewing angle. While less expensive than 3D systems, 2D AOI has limitations in detecting height-related defects and shadowed areas.",
    relatedTerms: ["AOI", "3D AOI", "Image Processing"],
    category: "Inspection Systems"
  },
  {
    id: "3d-aoi",
    term: "3D AOI",
    definition: "Advanced AOI system that captures three-dimensional images of PCBs using structured light, laser triangulation, or stereo vision. 3D AOI can measure component height, coplanarity, and solder joint profiles, providing more comprehensive defect detection than 2D systems.",
    relatedTerms: ["AOI", "2D AOI", "Structured Light"],
    category: "Inspection Systems"
  },
  {
    id: "axi",
    term: "AXI (Automated X-ray Inspection)",
    definition: "An inspection system that uses X-ray imaging to inspect hidden solder joints, such as BGA (Ball Grid Array) and other area array packages. AXI can detect voids, insufficient solder, bridging, and other defects not visible with optical inspection.",
    relatedTerms: ["BGA", "Hidden Joints", "X-ray Inspection"],
    category: "Inspection Systems"
  },
  {
    id: "conformal-coating-inspection",
    term: "Conformal Coating Inspection",
    definition: "Specialized inspection systems that verify the application of conformal coating on PCBs. These systems typically use UV fluorescence to measure coating thickness, coverage, and detect defects like voids, bubbles, or insufficient coverage.",
    relatedTerms: ["Conformal Coating", "UV Inspection", "Coating Thickness"],
    category: "Inspection Systems"
  },

  // Manufacturing Processes
  {
    id: "smt",
    term: "SMT (Surface Mount Technology)",
    definition: "A method of manufacturing electronics where components are mounted directly onto the surface of PCBs. SMT has largely replaced through-hole technology due to smaller component sizes, higher component density, and automated assembly capabilities.",
    relatedTerms: ["PCB", "Surface Mount Device", "Reflow Soldering", "Pick and Place"],
    category: "Manufacturing"
  },
  {
    id: "smd",
    term: "SMD (Surface Mount Device)",
    definition: "An electronic component designed to be mounted directly onto the surface of a PCB without leads going through holes. SMDs are smaller and lighter than through-hole components and enable higher circuit density.",
    relatedTerms: ["SMT", "PCB", "Component Placement"],
    category: "Manufacturing"
  },
  {
    id: "pcb",
    term: "PCB (Printed Circuit Board)",
    definition: "A flat board made of insulating material with conductive pathways etched or printed onto its surface. PCBs mechanically support and electrically connect electronic components using conductive tracks, pads, and other features.",
    relatedTerms: ["SMT", "Assembly", "Copper Traces", "Substrate"],
    category: "Manufacturing"
  },
  {
    id: "solder-paste",
    term: "Solder Paste",
    definition: "A mixture of tiny solder particles suspended in flux, used in SMT assembly. Solder paste is applied to PCB pads through a stencil, holds components in place before reflow, and forms solder joints when heated in a reflow oven.",
    relatedTerms: ["Stencil Printing", "Reflow Soldering", "Flux", "3D SPI"],
    category: "Manufacturing"
  },
  {
    id: "reflow-soldering",
    term: "Reflow Soldering",
    definition: "A process where solder paste applied to PCB pads is heated in a controlled temperature profile, causing the solder to melt and form electrical connections between component leads and PCB pads. The PCB then cools, solidifying the solder joints.",
    relatedTerms: ["Solder Paste", "Temperature Profile", "SMT", "Solder Joint"],
    category: "Manufacturing"
  },
  {
    id: "stencil-printing",
    term: "Stencil Printing",
    definition: "The process of applying solder paste to PCB pads using a metal stencil with apertures that match the pad pattern. A squeegee pushes paste through the apertures, depositing precise amounts of solder paste onto designated locations.",
    relatedTerms: ["Solder Paste", "3D SPI", "Squeegee", "Aperture"],
    category: "Manufacturing"
  },
  {
    id: "pick-and-place",
    term: "Pick and Place Machine",
    definition: "An automated machine that picks electronic components from feeders and precisely places them onto solder paste deposits on PCBs. Modern pick and place machines can place thousands of components per hour with high accuracy.",
    relatedTerms: ["SMT", "Component Placement", "Feeder", "Placement Accuracy"],
    category: "Manufacturing"
  },
  {
    id: "conformal-coating",
    term: "Conformal Coating",
    definition: "A thin protective polymer film applied to PCBs to protect against moisture, dust, chemicals, and temperature extremes. Common coating types include acrylic, silicone, urethane, and parylene, each offering different protection levels and application methods.",
    relatedTerms: ["Conformal Coating Inspection", "Environmental Protection", "UV Curable"],
    category: "Manufacturing"
  },

  // Defects
  {
    id: "bridging",
    term: "Bridging",
    definition: "An unwanted electrical connection between two conductors caused by excess solder forming a bridge between adjacent pads or leads. Bridging is a critical defect that can cause short circuits and device failure.",
    relatedTerms: ["Short Circuit", "Excess Solder", "Solder Defect"],
    category: "Defects"
  },
  {
    id: "insufficient-solder",
    term: "Insufficient Solder",
    definition: "A defect where inadequate solder is present at a joint, potentially resulting in weak mechanical connections or poor electrical conductivity. Can be caused by insufficient paste deposit, component placement issues, or reflow profile problems.",
    relatedTerms: ["Solder Joint", "Cold Joint", "Open Circuit"],
    category: "Defects"
  },
  {
    id: "tombstoning",
    term: "Tombstoning",
    definition: "A defect where a component stands up on one end during reflow soldering, resembling a tombstone. Caused by uneven heating or unequal solder paste volumes on the component's pads, creating unbalanced surface tension forces.",
    relatedTerms: ["Manhattan Effect", "Component Placement", "Reflow Defect"],
    category: "Defects"
  },
  {
    id: "solder-balls",
    term: "Solder Balls",
    definition: "Small spheres of solder that separate from the main solder deposit during reflow and remain on the PCB surface. Solder balls can cause short circuits if they move and create bridges between conductors.",
    relatedTerms: ["Solder Defect", "Spatter", "Flux Splatter"],
    category: "Defects"
  },
  {
    id: "cold-joint",
    term: "Cold Solder Joint",
    definition: "A solder joint that appears dull and grainy rather than smooth and shiny, indicating insufficient heat during soldering. Cold joints have poor mechanical strength and electrical conductivity, often leading to intermittent connections or failures.",
    relatedTerms: ["Insufficient Solder", "Reflow Profile", "Solder Joint"],
    category: "Defects"
  },
  {
    id: "voiding",
    term: "Voiding",
    definition: "The presence of air pockets or voids within a solder joint, commonly found in BGA and thermal pad connections. Excessive voiding (typically over 25-30%) can reduce thermal and electrical performance and weaken mechanical strength.",
    relatedTerms: ["BGA", "Solder Joint", "AXI", "Thermal Performance"],
    category: "Defects"
  },
  {
    id: "component-shift",
    term: "Component Shift",
    definition: "A defect where a component has moved from its intended position on the PCB, either during placement or reflow. Shift can be measured in X and Y directions and rotation (theta). Excessive shift may cause open circuits or poor solder joints.",
    relatedTerms: ["Component Placement", "Placement Accuracy", "Rotation Error"],
    category: "Defects"
  },
  {
    id: "missing-component",
    term: "Missing Component",
    definition: "A critical defect where a component is completely absent from its designated location on the PCB. Can be caused by pick and place errors, component availability issues, or components falling off before reflow.",
    relatedTerms: ["Component Placement", "Assembly Defect"],
    category: "Defects"
  },

  // Measurements & Specifications
  {
    id: "coplanarity",
    term: "Coplanarity",
    definition: "The measurement of how flat component leads are relative to a reference plane. Poor coplanarity can result in some leads not making contact with solder paste, leading to open circuits. Typically specified in mils or micrometers.",
    relatedTerms: ["Component Inspection", "Lead Flatness", "3D AOI"],
    category: "Measurements"
  },
  {
    id: "paste-volume",
    term: "Paste Volume",
    definition: "The three-dimensional measurement of solder paste deposited on a PCB pad, typically measured in cubic mils or cubic millimeters. Accurate paste volume is critical for reliable solder joints and is best measured with 3D SPI systems.",
    relatedTerms: ["3D SPI", "Solder Paste", "Stencil Printing"],
    category: "Measurements"
  },
  {
    id: "paste-height",
    term: "Paste Height",
    definition: "The vertical measurement of solder paste deposit from the PCB pad surface to the top of the paste. Paste height affects solder joint formation and is a key parameter measured by 3D SPI systems.",
    relatedTerms: ["3D SPI", "Paste Volume", "Stencil Thickness"],
    category: "Measurements"
  },
  {
    id: "fiducial",
    term: "Fiducial Mark",
    definition: "A reference point on a PCB used by automated equipment for precise alignment and positioning. Fiducials are typically circular or cross-shaped marks made of bare copper, used by pick and place machines and inspection systems.",
    relatedTerms: ["PCB", "Alignment", "Machine Vision"],
    category: "Measurements"
  },
  {
    id: "cpk",
    term: "Cpk (Process Capability Index)",
    definition: "A statistical measure of process capability that indicates how well a process can meet specification limits. In electronics manufacturing, Cpk values above 1.33 are generally considered acceptable, while values above 1.67 indicate excellent process control.",
    relatedTerms: ["Process Control", "Statistical Analysis", "Quality Metrics"],
    category: "Measurements"
  },

  // Standards & Quality
  {
    id: "ipc-a-610",
    term: "IPC-A-610",
    definition: "The most widely used electronics assembly standard, titled 'Acceptability of Electronic Assemblies.' It defines visual quality acceptance criteria for PCBs and establishes three quality classes: Class 1 (General), Class 2 (Dedicated Service), and Class 3 (High Performance).",
    relatedTerms: ["Quality Standards", "Class 2", "Class 3", "Visual Inspection"],
    category: "Standards"
  },
  {
    id: "ipc-class-2",
    term: "IPC Class 2",
    definition: "Dedicated Service electronic products where continued performance and extended life are required, and uninterrupted service is desired but not critical. Class 2 allows for minor cosmetic imperfections that don't affect functionality.",
    relatedTerms: ["IPC-A-610", "Class 3", "Quality Standard"],
    category: "Standards"
  },
  {
    id: "ipc-class-3",
    term: "IPC Class 3",
    definition: "High Performance electronic products where continued high performance and on-demand availability are critical. Class 3 is required for aerospace, military, and medical devices, with strict acceptance criteria and no cosmetic imperfections allowed.",
    relatedTerms: ["IPC-A-610", "Class 2", "Quality Standard", "High Reliability"],
    category: "Standards"
  },
  {
    id: "j-std-001",
    term: "J-STD-001",
    definition: "An industry standard developed by IPC covering requirements for soldered electrical and electronic assemblies. It addresses materials, methods, and verification criteria for producing high-quality soldered interconnections.",
    relatedTerms: ["IPC", "Soldering Standard", "Quality Standard"],
    category: "Standards"
  },
  {
    id: "spc",
    term: "SPC (Statistical Process Control)",
    definition: "A method of quality control using statistical methods to monitor and control manufacturing processes. In electronics assembly, SPC uses data from inspection systems to detect process variations before they result in defects.",
    relatedTerms: ["Process Control", "Quality Control", "Cpk", "Control Charts"],
    category: "Standards"
  },
  {
    id: "first-pass-yield",
    term: "First Pass Yield (FPY)",
    definition: "The percentage of products that pass through the manufacturing process without requiring rework or repair. Higher FPY indicates better process control and lower manufacturing costs. World-class manufacturers target FPY above 95%.",
    relatedTerms: ["Quality Metrics", "Yield", "Process Control"],
    category: "Standards"
  },
  {
    id: "dppm",
    term: "DPPM (Defects Per Million)",
    definition: "A quality metric that measures the number of defective units per one million units produced. DPPM is commonly used to track and compare manufacturing process quality. Six Sigma processes target 3.4 DPPM or lower.",
    relatedTerms: ["Quality Metrics", "Six Sigma", "Defect Rate"],
    category: "Standards"
  },

  // Technology & Techniques
  {
    id: "machine-vision",
    term: "Machine Vision",
    definition: "The use of cameras, lighting, and image processing software to automatically inspect, identify, or measure objects. In electronics manufacturing, machine vision is the core technology behind AOI and SPI systems.",
    relatedTerms: ["AOI", "Image Processing", "Pattern Recognition"],
    category: "Technology"
  },
  {
    id: "structured-light",
    term: "Structured Light",
    definition: "A 3D imaging technique that projects a known pattern of light (often stripes or grids) onto an object and analyzes the deformation to calculate three-dimensional shape. Used in 3D SPI and 3D AOI systems for height and volume measurements.",
    relatedTerms: ["3D Imaging", "3D SPI", "3D AOI"],
    category: "Technology"
  },
  {
    id: "laser-triangulation",
    term: "Laser Triangulation",
    definition: "A 3D measurement technique that projects a laser line onto an object and uses the displacement of the reflected line to calculate height. Common in 3D inspection systems for measuring component height and coplanarity.",
    relatedTerms: ["3D Measurement", "3D AOI", "Height Measurement"],
    category: "Technology"
  },
  {
    id: "false-call",
    term: "False Call (False Positive)",
    definition: "An inspection system error where a good product is incorrectly identified as defective. High false call rates reduce manufacturing efficiency by requiring manual review of boards that are actually acceptable.",
    relatedTerms: ["AOI", "Inspection Error", "Escape", "Nuisance Alarm"],
    category: "Technology"
  },
  {
    id: "escape",
    term: "Escape (False Negative)",
    definition: "An inspection system error where a defective product is incorrectly identified as acceptable. Escapes are more serious than false calls as defective products continue through the manufacturing process or reach customers.",
    relatedTerms: ["AOI", "Inspection Error", "False Call", "Defect Detection"],
    category: "Technology"
  },
  {
    id: "gerber-file",
    term: "Gerber File",
    definition: "A standard file format used to describe PCB design data including copper layers, solder mask, silkscreen, and drill files. Inspection systems use Gerber files or derived CAD data to create inspection programs and compare actual boards to design intent.",
    relatedTerms: ["PCB", "CAD Data", "Design File"],
    category: "Technology"
  },
  {
    id: "golden-board",
    term: "Golden Board",
    definition: "A known-good PCB assembly used as a reference to program and calibrate inspection systems. The golden board represents the ideal product and helps establish acceptable tolerance ranges for inspection parameters.",
    relatedTerms: ["AOI Programming", "Inspection Setup", "Reference Board"],
    category: "Technology"
  },

  // Components
  {
    id: "bga",
    term: "BGA (Ball Grid Array)",
    definition: "A type of surface mount package where connections are made via an array of solder balls on the bottom of the component. BGAs offer high pin density but require AXI for inspection since solder joints are hidden beneath the component.",
    relatedTerms: ["AXI", "Area Array", "Hidden Joint", "Voiding"],
    category: "Components"
  },
  {
    id: "qfp",
    term: "QFP (Quad Flat Pack)",
    definition: "A surface mount integrated circuit package with leads extending from all four sides. QFPs are available in various sizes and lead counts, with lead pitch typically ranging from 0.4mm to 1.0mm.",
    relatedTerms: ["SMD", "Component Package", "Gull-Wing Leads"],
    category: "Components"
  },
  {
    id: "sop",
    term: "SOP (Small Outline Package)",
    definition: "A surface mount package with leads extending from two sides. SOPs are smaller than their through-hole equivalents and come in various widths and lead pitches. Common variants include SOIC, TSOP, and SSOP.",
    relatedTerms: ["SMD", "Component Package", "SOIC"],
    category: "Components"
  },
  {
    id: "chip-component",
    term: "Chip Component",
    definition: "Small passive components (resistors, capacitors, inductors) designed for surface mount assembly. Chip components are specified by size codes like 0402, 0603, or 0805, referring to their dimensions in hundredths of an inch.",
    relatedTerms: ["SMD", "Passive Component", "0402", "0603"],
    category: "Components"
  },

  // Competitive & Industry Terms
  {
    id: "mrs",
    term: "MRS (Multi-Reflection Suppression)",
    definition: "A sensor technology used in some 3D SPI systems to reduce measurement errors caused by specular reflections from shiny solder paste surfaces. MRS uses multiple illumination angles and algorithms to suppress reflections that can distort height and volume measurements. While effective, MRS is one of several approaches to handling reflective surfaces — multi-angle structured light projection achieves similar accuracy without proprietary sensor technology.",
    relatedTerms: ["3D SPI", "Structured Light", "Solder Paste"],
    category: "Technology"
  },
  {
    id: "autonomous-inspection",
    term: "Autonomous Inspection",
    definition: "An inspection approach where the system automatically adjusts its own parameters, learns from production data, and optimizes defect detection without manual intervention. Also called self-optimizing or AI-driven inspection. While marketing terms like 'autonomous' and 'AI-powered' are common, the practical value depends on how well the system reduces false calls and detects real defects in production — not on the branding.",
    relatedTerms: ["AOI", "Machine Vision", "False Call"],
    category: "Technology"
  },
  {
    id: "vendor-lock-in",
    term: "Vendor Lock-In",
    definition: "A situation where a customer becomes dependent on a single vendor's products or services and cannot easily switch to a competitor without substantial costs or technical barriers. In inspection, lock-in occurs through proprietary data formats, closed APIs, ecosystem-dependent features (like closed-loop that only works with the same vendor's printer), and annual software licensing models. Open architecture systems that support IPC-CFX, standard data exports, and vendor-agnostic integration avoid lock-in.",
    relatedTerms: ["IPC-CFX", "Open Architecture", "TCO"],
    category: "Process"
  },
  {
    id: "ipc-cfx",
    term: "IPC-CFX (Connected Factory Exchange)",
    definition: "An IPC standard (IPC-2591) that defines a standardized communication protocol for electronics manufacturing equipment. CFX enables plug-and-play connectivity between machines from different vendors, eliminating the need for custom integration. For inspection systems, IPC-CFX support means SPI and AOI data can flow to any CFX-compatible MES, printer, placement machine, or analytics platform without proprietary middleware. CFX is a key enabler of Industry 4.0 smart factory initiatives.",
    relatedTerms: ["SECS/GEM", "Industry 4.0", "Open Architecture"],
    category: "Standards"
  },
  {
    id: "tco",
    term: "TCO (Total Cost of Ownership)",
    definition: "A comprehensive assessment of all costs associated with owning and operating equipment over its full lifecycle, typically 7-10 years. For inspection systems, TCO includes: purchase price, annual software license fees, maintenance contracts, calibration consumables, training costs, spare parts, integration costs, and downtime costs. A system with a lower purchase price but $15K in annual software fees will cost $75-150K more in total than a system with all software included. Always evaluate TCO, not just sticker price.",
    relatedTerms: ["Vendor Lock-In", "ROI"],
    category: "Process"
  },
  {
    id: "open-architecture",
    term: "Open Architecture",
    definition: "A system design philosophy where equipment works with products from any vendor and exports data in standard, non-proprietary formats. In inspection, open architecture means: closed-loop feedback compatible with any printer brand, data export in CSV/XML/JSON without extra fees, documented APIs for custom integration, IPC-CFX and SECS/GEM support, and no per-feature software licensing. Open architecture protects the customer's investment and ensures flexibility as production needs evolve.",
    relatedTerms: ["Vendor Lock-In", "IPC-CFX", "SECS/GEM"],
    category: "Technology"
  },
  {
    id: "secs-gem",
    term: "SECS/GEM",
    definition: "A semiconductor industry communication standard (SEMI E30/E37) for equipment-to-host data communication. SECS (SEMI Equipment Communications Standard) defines the message format, while GEM (Generic Equipment Model) defines the behavior. Widely used in semiconductor fabs and increasingly adopted in SMT manufacturing for equipment connectivity and factory automation.",
    relatedTerms: ["IPC-CFX", "Industry 4.0", "Factory Automation"],
    category: "Standards"
  },
  {
    id: "industry-4-0",
    term: "Industry 4.0",
    definition: "The fourth industrial revolution, characterized by the integration of digital technologies, IoT, artificial intelligence, and data analytics into manufacturing. In electronics assembly, Industry 4.0 encompasses connected equipment (via IPC-CFX or SECS/GEM), real-time process monitoring, predictive maintenance, digital twins, and data-driven optimization. Inspection systems are key data sources for Industry 4.0 initiatives, making open data formats and standard connectivity protocols essential.",
    relatedTerms: ["IPC-CFX", "SECS/GEM", "Smart Factory"],
    category: "Technology"
  },
  {
    id: "gage-r-and-r",
    term: "Gage R&R (Repeatability and Reproducibility)",
    definition: "A measurement system analysis technique that quantifies the variation contributed by the measurement system itself. Repeatability measures variation when the same operator measures the same part multiple times. Reproducibility measures variation between different operators. For inspection systems, Gage R&R results below 10% are excellent, 10-30% may be acceptable, and above 30% indicates the measurement system needs improvement. Always request Gage R&R data on your actual boards, not vendor demo boards.",
    relatedTerms: ["SPC", "Cpk", "Measurements"],
    category: "Measurements"
  },
  {
    id: "false-call-rate",
    term: "False Call Rate",
    definition: "The percentage of inspected items incorrectly flagged as defective by an automated inspection system. False calls waste operator time reviewing good boards, reduce trust in the inspection system, and decrease effective throughput. Industry-leading false call rates are below 1% for well-optimized systems. When evaluating vendors, ask for false call rate data from actual production environments, not controlled demonstrations.",
    relatedTerms: ["False Call", "Escape", "AOI"],
    category: "Measurements"
  },
  {
    id: "roi",
    term: "ROI (Return on Investment)",
    definition: "A financial metric measuring the profitability of an investment relative to its cost, expressed as a percentage or payback period. For inspection systems, ROI is calculated from savings in reduced scrap, lower rework costs, fewer warranty claims, decreased manual inspection labor, and improved yield. Most inspection system investments achieve 6-18 month payback periods. TCO should be used in ROI calculations, not just the purchase price.",
    relatedTerms: ["TCO", "First Pass Yield"],
    category: "Measurements"
  },
  {
    id: "smart-factory",
    term: "Smart Factory",
    definition: "A highly digitized and connected manufacturing facility that uses IoT sensors, real-time data analytics, AI, and automated systems to continuously optimize production. In electronics manufacturing, a smart factory connects all equipment (printers, placement machines, ovens, inspection systems) through standard protocols like IPC-CFX, enabling real-time process optimization, predictive maintenance, and automated quality control. Inspection systems with open data architectures are critical components of smart factory implementations.",
    relatedTerms: ["Industry 4.0", "IPC-CFX", "Closed Loop Process Control"],
    category: "Technology"
  },
  {
    id: "closed-loop-feedback",
    term: "Closed-Loop Printer Feedback",
    definition: "An automated system where SPI measurement data is sent directly to the solder paste printer to correct alignment offsets, adjust squeegee parameters, or trigger stencil cleaning cycles. Effective closed-loop feedback prevents defects from accumulating and reduces the need for manual printer adjustments. The most flexible systems support vendor-agnostic closed-loop that works with any major printer brand (DEK, MPM, Ekra, YAMAHA, etc.), rather than requiring the same vendor's printer.",
    relatedTerms: ["Closed Loop Process Control", "3D SPI", "Stencil Printing"],
    category: "Process"
  },
  {
    id: "iatf-16949",
    term: "IATF 16949",
    definition: "An international quality management standard specifically for the automotive industry, developed by the International Automotive Task Force. IATF 16949 builds on ISO 9001 and adds automotive-specific requirements for process control, measurement system analysis, and continuous improvement. Automotive electronics manufacturers must be certified to IATF 16949, and 3D inspection systems are often required to meet the standard's measurement capability requirements.",
    relatedTerms: ["ISO 9001", "Automotive", "Quality Standards"],
    category: "Standards"
  },
  {
    id: "as9100",
    term: "AS9100",
    definition: "A widely adopted quality management system standard for the aerospace and defense industry, based on ISO 9001 with additional aerospace-specific requirements. AS9100 mandates rigorous process control, product traceability, and risk management. Inspection systems used in AS9100 environments must demonstrate measurement capability through formal MSA studies and maintain calibration traceability to national standards.",
    relatedTerms: ["IPC Class 3", "Quality Standards", "Aerospace"],
    category: "Standards"
  },
  {
    id: "iso-13485",
    term: "ISO 13485",
    definition: "An international standard for quality management systems specific to the medical device industry. ISO 13485 requires design controls, risk management, traceability, and process validation for medical device manufacturing. Inspection systems in ISO 13485 environments must be validated, calibrated, and capable of demonstrating measurement traceability. Zero-defect targets are common for Class III medical devices.",
    relatedTerms: ["Quality Standards", "Medical Devices", "Traceability"],
    category: "Standards"
  },

  // Process Optimization
  {
    id: "closed-loop",
    term: "Closed Loop Process Control",
    definition: "An automated system where inspection data is fed back to earlier process steps to automatically correct issues. For example, 3D SPI data can be sent to the printer to adjust paste volume, or AOI data can adjust pick and place offsets.",
    relatedTerms: ["SPC", "Process Control", "Feedback Loop", "Automation"],
    category: "Process"
  },
  {
    id: "inline-inspection",
    term: "Inline Inspection",
    definition: "Inspection performed within the production line flow, where boards move directly from one process step to inspection without manual handling. Inline systems offer 100% inspection coverage and enable real-time process control.",
    relatedTerms: ["AOI", "SPI", "Automated Inspection", "Production Line"],
    category: "Process"
  },
  {
    id: "offline-inspection",
    term: "Offline Inspection",
    definition: "Inspection performed outside the normal production flow, typically for sample inspection, engineering analysis, or when inline inspection is not feasible. Offline systems offer more flexibility but don't provide 100% coverage.",
    relatedTerms: ["Sample Inspection", "Manual Inspection"],
    category: "Process"
  },
  {
    id: "traceability",
    term: "Traceability",
    definition: "The ability to track and identify individual PCBs throughout the manufacturing process. Traceability systems use barcodes or serial numbers to link each board with its inspection results, process parameters, and material information.",
    relatedTerms: ["Serial Number", "Barcode", "Data Collection", "Quality Control"],
    category: "Process"
  },
];

// Group terms by category
const categories = [
  "Inspection Systems",
  "Manufacturing",
  "Defects",
  "Measurements",
  "Standards",
  "Technology",
  "Components",
  "Process"
];

export default function GlossaryPage() {
  // DefinedTerm schema — one per term, with url anchor for AI linking
  const definedTermSchemas = glossaryTerms.map((term) => ({
    "@type": "DefinedTerm",
    "@id": `https://solderpasteinspection.com/glossary#${term.id}`,
    "name": term.term,
    "description": term.definition,
    "url": `https://solderpasteinspection.com/glossary#${term.id}`,
    "inDefinedTermSet": {
      "@id": `https://solderpasteinspection.com/glossary#${term.category.toLowerCase().replace(/\s+/g, '-')}`
    },
  }));

  // DefinedTermSet per category — now includes hasDefinedTerm listing all members
  const termSetSchemas = categories.map((category) => {
    const categoryTermIds = glossaryTerms
      .filter((t) => t.category === category)
      .map((t) => ({ "@id": `https://solderpasteinspection.com/glossary#${t.id}` }));
    return {
      "@type": "DefinedTermSet",
      "@id": `https://solderpasteinspection.com/glossary#${category.toLowerCase().replace(/\s+/g, '-')}`,
      "name": `${category} Terms`,
      "description": `Glossary of ${category.toLowerCase()} terms in electronics manufacturing and inspection`,
      "url": `https://solderpasteinspection.com/glossary#${category.toLowerCase().replace(/\s+/g, '-')}`,
      "hasDefinedTerm": categoryTermIds,
    };
  });

  // FAQPage schema — "What is X?" for every term; this is the primary AEO signal
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": glossaryTerms.map((term) => ({
      "@type": "Question",
      "name": `What is ${term.term}?`,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": term.definition,
        "url": `https://solderpasteinspection.com/glossary#${term.id}`,
      },
    })),
  };

  // Main @graph schema — WebPage + TermSets + Terms
  const glossarySchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://solderpasteinspection.com/glossary",
        "name": "Electronics Inspection Glossary - Technical Terms & Definitions",
        "url": "https://solderpasteinspection.com/glossary",
        "description": "Comprehensive glossary of electronics manufacturing, inspection, and quality control terms. Definitions for SPI, AOI, SMT, PCB assembly, and industry standards.",
        "inLanguage": "en-US",
        "breadcrumb": {
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://solderpasteinspection.com" },
            { "@type": "ListItem", "position": 2, "name": "Glossary", "item": "https://solderpasteinspection.com/glossary" },
          ],
        },
        "speakable": {
          "@type": "SpeakableSpecification",
          "cssSelector": ["h1", "h3.term-heading", "p.term-definition"],
        },
        "about": {
          "@type": "Thing",
          "name": "Electronics Manufacturing Inspection Terminology",
        },
        "publisher": {
          "@type": "Organization",
          "@id": "https://solderpasteinspection.com/#organization",
          "name": "ASC International",
        },
      },
      ...termSetSchemas,
      ...definedTermSchemas,
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(glossarySchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Header />
      <Breadcrumb
        items={[
          { name: "Home", href: "/" },
          { name: "Glossary" },
        ]}
      />
      <main className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Electronics Inspection Glossary
              </h1>
              <p className="text-xl text-blue-100">
                Comprehensive definitions of technical terms used in electronics manufacturing,
                quality inspection, and process control
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-2">
                {categories.map((category) => (
                  <a
                    key={category}
                    href={`#${category.toLowerCase().replace(/\s+/g, '-')}`}
                    className="bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                  >
                    {category}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Glossary Content */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
              {/* Introduction */}
              <div className="bg-white rounded-lg shadow-md p-8 mb-12">
                <h2 className="text-2xl font-bold mb-4 text-gray-900">
                  Understanding Electronics Manufacturing Terminology
                </h2>
                <p className="text-gray-700 mb-4">
                  This comprehensive glossary defines key terms used in electronics manufacturing,
                  quality inspection, and process control. Whether you're new to the industry or an
                  experienced professional, this resource will help you understand the technical language
                  used in modern electronics assembly and inspection.
                </p>
                <p className="text-gray-700">
                  Terms are organized by category and include related terms to help you explore
                  connected concepts. Click on any category above to jump directly to that section.
                </p>
              </div>

              {/* Terms by Category */}
              {categories.map((category) => {
                const categoryTerms = glossaryTerms.filter(t => t.category === category);
                const categoryId = category.toLowerCase().replace(/\s+/g, '-');

                return (
                  <div key={category} id={categoryId} className="mb-12 scroll-mt-20">
                    <div className="bg-blue-600 text-white px-6 py-4 rounded-t-lg">
                      <h2 className="text-2xl font-bold">{category}</h2>
                      <p className="text-blue-100 text-sm mt-1">
                        {categoryTerms.length} {categoryTerms.length === 1 ? 'term' : 'terms'}
                      </p>
                    </div>
                    <div className="bg-white rounded-b-lg shadow-md">
                      {categoryTerms.map((term, index) => (
                        <div
                          key={term.id}
                          id={term.id}
                          className={`p-6 scroll-mt-20 ${
                            index !== categoryTerms.length - 1 ? 'border-b border-gray-200' : ''
                          }`}
                        >
                          <h3 className="term-heading text-xl font-bold text-blue-600 mb-3">
                            {term.term}
                          </h3>
                          <p className="term-definition text-gray-700 leading-relaxed mb-4">
                            {term.definition}
                          </p>
                          {term.relatedTerms && term.relatedTerms.length > 0 && (
                            <div className="flex flex-wrap items-center gap-2">
                              <span className="text-sm font-semibold text-gray-500">
                                Related terms:
                              </span>
                              {term.relatedTerms.map((relatedTerm) => {
                                const related = glossaryTerms.find(
                                  t => t.term === relatedTerm
                                );
                                return (
                                  <a
                                    key={relatedTerm}
                                    href={related ? `#${related.id}` : '#'}
                                    className="text-sm bg-blue-50 text-blue-700 px-3 py-1 rounded-full hover:bg-blue-100 transition-colors"
                                  >
                                    {relatedTerm}
                                  </a>
                                );
                              })}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}

              {/* Footer Info */}
              <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg mt-12">
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  Need More Information?
                </h3>
                <p className="text-gray-700 mb-4">
                  Have questions about any of these terms or need expert guidance on choosing
                  the right inspection equipment for your facility? Our team of specialists is
                  here to help.
                </p>
                <a
                  href="/contact"
                  className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors"
                >
                  Contact Our Experts
                  <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
                {categories.map((category) => {
                  const count = glossaryTerms.filter(t => t.category === category).length;
                  return (
                    <div key={category} className="bg-white rounded-lg shadow-md p-4 text-center">
                      <div className="text-3xl font-bold text-blue-600 mb-1">
                        {count}
                      </div>
                      <div className="text-sm text-gray-600">
                        {category}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
