import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description: "Find answers to common questions about inspection systems, services, support, and purchasing from ASC International. Expert guidance on 3D SPI, AOI, and inspection solutions.",
  keywords: ["inspection FAQ", "SPI questions", "AOI support", "inspection systems help", "PCB inspection questions"],
  openGraph: {
    title: "FAQ - ASC International",
    description: "Answers to frequently asked questions about our inspection systems and services.",
    type: "website",
  },
};

export default function FAQ() {
  // FAQPage Schema for rich snippets
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is 3D Solder Paste Inspection (SPI)?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "3D Solder Paste Inspection (SPI) is an automated inspection process that measures solder paste deposits on PCBs after the stencil printing process but before component placement. Using advanced laser or projection technology, 3D SPI systems measure the volume, height, area, and X-Y position of each solder paste deposit. This inspection catches printing defects early in the assembly process when they are easiest and least expensive to correct. Studies show that 60-70% of solder defects originate at the paste printing stage, making 3D SPI one of the most cost-effective inspection investments."
        }
      },
      {
        "@type": "Question",
        "name": "What's the difference between 2D and 3D AOI?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "2D AOI (Automated Optical Inspection) uses cameras to capture grayscale or color images of assembled boards and analyzes them for component presence, placement, and basic solder quality. 3D AOI adds height measurement capability using technologies like laser triangulation or structured light projection. This third dimension enables more accurate detection of solder joint defects, component standoff issues, coplanarity problems, and other defects that are difficult or impossible to detect in 2D. 3D AOI significantly reduces false calls while improving defect detection rates, especially for fine-pitch components and complex assemblies."
        }
      },
      {
        "@type": "Question",
        "name": "Do you sell new or used equipment?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "ASC International offers both new equipment and certified pre-owned systems. New equipment comes with full manufacturer warranties, the latest software versions, and complete factory support. Our pre-owned systems are thoroughly refurbished by factory-trained technicians, tested to meet original specifications, and backed by warranty. Pre-owned systems typically cost 30-50% less than new equipment while delivering comparable performance, making them an excellent choice for companies with budget constraints or temporary capacity needs."
        }
      },
      {
        "@type": "Question",
        "name": "What industries do you serve?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "ASC International serves a wide range of industries including electronics manufacturing, automotive electronics, medical devices, aerospace & defense, consumer electronics, industrial controls, telecommunications, LED lighting, IoT devices, and contract manufacturing. We have specialized expertise in applications requiring high reliability such as automotive (IATF 16949), medical (FDA/ISO 13485), and aerospace (AS9100). Our systems are designed to meet industry-specific standards including IPC Class 2 and Class 3 workmanship requirements."
        }
      },
      {
        "@type": "Question",
        "name": "How long does installation and training take?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Installation typically takes 1-3 days depending on the system type and your facility readiness. This includes unpacking, positioning, power and network connections, and initial calibration. Operator training is usually completed in 2-4 days and covers system operation, program creation, defect review, routine maintenance, and basic troubleshooting. We also offer advanced training for programmers and engineers. Installation is performed by factory-trained technicians, and training can be customized to your staff's experience level and your specific applications."
        }
      },
      {
        "@type": "Question",
        "name": "Do you offer contract inspection services?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, ASC International provides comprehensive contract inspection services both at your facility and at our service centers. On-site services bring our technicians and portable equipment to your location for immediate results without shipping. Lab services allow you to ship boards to our facility for thorough analysis. Contract inspection is ideal for product launches, production ramps, quality investigations, capacity overflow, or when you need inspection capabilities without capital investment. Services include 3D SPI, AOI, X-ray inspection, conformal coating verification, first article inspection, and failure analysis."
        }
      },
      {
        "@type": "Question",
        "name": "What kind of technical support do you provide?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "ASC International provides expert technical support directly from our engineering team — phone and email assistance, remote diagnostics and troubleshooting, on-site service calls, preventive maintenance programs, software updates, spare parts supply, application support, and training programs. When you call us, you reach the engineers who built your system. Support is available through various service plans ranging from standard warranty coverage to premium support with guaranteed response times. Our team includes factory-trained engineers with deep experience in electronics manufacturing."
        }
      },
      {
        "@type": "Question",
        "name": "Can your systems integrate with our existing production line?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, ASC systems are designed for easy integration into existing production lines. We support standard SMEMA conveyor interfaces, various board handling widths, and can provide custom conveyor configurations. Our systems integrate with most MES, ERP, and quality management systems through standard protocols including OPC-UA, REST APIs, and database connections. We support automated marking systems, barcode/2D code readers for traceability, and closed-loop feedback to upstream equipment like printers and placement machines. Integration planning is included in our installation service."
        }
      },
      {
        "@type": "Question",
        "name": "How accurate are your measurement systems?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Measurement accuracy varies by system and technology. Our 3D SPI systems typically achieve volume measurement accuracy better than ±15% with repeatability below 5% (3 sigma). Height measurements are accurate to ±5-10 microns. 3D AOI systems measure component heights with accuracy of ±20-50 microns depending on the technology. X-ray systems can detect voids down to 50 microns and measure void percentages accurately. All systems undergo rigorous calibration and include Gage R&R studies during installation. Measurement capability is validated against reference standards traceable to national standards."
        }
      },
      {
        "@type": "Question",
        "name": "What is the typical ROI for an inspection system?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "ROI depends on your specific application, production volume, and current quality costs, but most customers see payback in 6-18 months. Benefits include reduced scrap and rework costs (often 50-80% reduction), decreased warranty returns and field failures, improved process capability and yields, reduced inspection labor, faster defect detection and correction, and better customer satisfaction. For example, catching solder paste defects with 3D SPI before component placement saves the cost of components and rework. Automated inspection also provides valuable process data for continuous improvement. We can help you calculate expected ROI based on your specific production metrics."
        }
      },
      {
        "@type": "Question",
        "name": "Do you provide maintenance and calibration services?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, ASC offers comprehensive preventive maintenance and calibration services. Preventive maintenance includes cleaning optical systems, checking mechanical components, updating software, verifying measurement accuracy, and replacing wear items. We recommend annual or semi-annual PM depending on usage. Calibration services ensure your system maintains specification accuracy over time and include measurement system analysis (MSA) documentation for quality certifications. Maintenance can be performed by your staff with our guidance, or we can provide on-site service from our technical team."
        }
      },
      {
        "@type": "Question",
        "name": "How do I get started with ASC International?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Getting started is easy. Contact us through our website, email, or phone to discuss your application. We'll work with you to understand your inspection requirements, production environment, and quality goals. We can arrange product demonstrations, either at our facility or yours, and often provide trial inspections of your actual assemblies. Based on your needs, we'll recommend appropriate solutions and provide detailed quotations. Our applications engineers will help ensure you select the right system configuration for your specific requirements. We support the entire process from initial inquiry through installation, training, and ongoing support."
        }
      },
      {
        "@type": "Question",
        "name": "Why should I choose a specialist inspection vendor over a conglomerate?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Specialist inspection vendors like ASC International focus 100% of their R&D and engineering resources on inspection technology. This means faster innovation, deeper domain expertise, and direct access to engineers who live and breathe inspection. When you call ASC, you reach an engineer, not a call center. Conglomerate vendors spread their attention across dozens of product lines, and inspection may be a small fraction of their business. Specialists also offer open architectures that work with any equipment, while conglomerates often push proprietary ecosystems that create vendor lock-in."
        }
      },
      {
        "@type": "Question",
        "name": "What is vendor lock-in and how do I avoid it with inspection equipment?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Vendor lock-in occurs when proprietary data formats, closed APIs, or ecosystem-dependent features make it expensive or impractical to switch vendors. In inspection, lock-in manifests as proprietary data exports that only work with the vendor's software, closed-loop feedback that only works with the vendor's own printer brand, and annual software license fees for features that should be standard. To avoid lock-in, choose systems that support open data formats (CSV, XML, JSON), IPC-CFX connectivity, documented APIs, and vendor-agnostic closed-loop integration. ASC systems are built on open architecture principles."
        }
      },
      {
        "@type": "Question",
        "name": "What is IPC-CFX and why does it matter for inspection?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "IPC-CFX (Connected Factory Exchange) is an industry standard protocol for machine-to-machine communication in electronics manufacturing. It enables plug-and-play connectivity between equipment from different vendors without custom integration. For inspection, IPC-CFX support means your SPI and AOI systems can communicate with any CFX-compatible printer, placement machine, or MES system. This eliminates vendor lock-in and ensures your inspection data flows freely through your factory. ASC systems support IPC-CFX natively, enabling true Industry 4.0 connectivity."
        }
      },
      {
        "@type": "Question",
        "name": "What is the total cost of ownership for an inspection system?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Total cost of ownership (TCO) goes far beyond the purchase price. Over a typical 7-10 year lifecycle, you should factor in: annual software license fees (some vendors charge $10K-$25K per year), maintenance contracts (typically 8-12% of system cost annually), calibration consumables, training costs, spare parts, and integration expenses. A system that costs $30K less upfront but charges $15K in annual software fees will cost $45K more over 5 years. ASC includes all software features in the base price with no annual licensing fees, resulting in significantly lower TCO."
        }
      },
      {
        "@type": "Question",
        "name": "How important is direct engineering support for inspection equipment?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Critical. When your inspection system has an issue during a production run, the difference between reaching an engineer directly and navigating a tiered call center can cost tens of thousands of dollars in lost production. ASC provides direct access to application engineers who know your system and your process. There are no ticket queues, no escalation tiers, and no generalist support staff reading from scripts. Our engineers have decades of experience in electronics manufacturing inspection and can troubleshoot complex issues quickly."
        }
      },
      {
        "@type": "Question",
        "name": "What does open architecture mean for inspection systems?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Open architecture means the inspection system works with equipment from any vendor and exports data in standard formats without restrictions. Specifically, it means: closed-loop feedback that works with any major printer brand (not just one vendor's printers), data export in standard formats (CSV, XML, JSON) without additional licensing fees, API access for custom integrations, IPC-CFX and SECS/GEM protocol support, and compatibility with any MES, SPC, or analytics platform. Open architecture protects your investment by ensuring you are never locked into a single vendor's ecosystem."
        }
      },
      {
        "@type": "Question",
        "name": "How do inspection system awards and marketing claims compare to real-world performance?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Industry awards and marketing claims should be viewed with healthy skepticism. Awards are often given based on vendor submissions and marketing presentations, not independent performance testing. What matters is real-world performance on your boards: measurement accuracy verified by Gage R&R studies, false call rates in production (not demo) conditions, actual throughput including board handling, and support responsiveness when issues arise. ASC encourages customers to run benchmark tests on their actual production boards and verify performance claims independently before purchasing."
        }
      },
      {
        "@type": "Question",
        "name": "Can I use inspection data from ASC systems with third-party analytics software?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, absolutely. ASC systems export all measurement and inspection data in standard open formats including CSV, XML, and JSON. We provide documented REST APIs for real-time data access and support IPC-CFX for machine-to-machine communication. Your data is yours - there are no restrictions on export, no proprietary formats that require our software to read, and no additional fees for data access features. You can feed ASC data into any third-party SPC package, MES system, data lake, or custom analytics platform."
        }
      },
      {
        "@type": "Question",
        "name": "What should I look for when comparing SPI or AOI vendors?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Focus on six key areas: (1) Measurement accuracy - request Gage R&R data on your actual boards, not demo boards, (2) False call rate - the real production rate, not the spec-sheet claim, (3) Total cost of ownership - including all software licenses, maintenance, and hidden fees over 5 years, (4) Data openness - can you export all data freely in standard formats without extra cost, (5) Support quality - do you reach engineers directly or go through a call center, and (6) Integration flexibility - does the system work with any equipment or only the vendor's ecosystem. See our detailed comparison guides for more."
        }
      },
      {
        "@type": "Question",
        "name": "How does SPI differ from AOI?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "SPI (Solder Paste Inspection) and AOI (Automated Optical Inspection) inspect at different stages of PCB assembly. SPI occurs BEFORE component placement and measures solder paste deposits (volume, height, area, offset). AOI happens AFTER reflow soldering and inspects final solder joints and component placement. SPI is more cost-effective because it catches defects early - fixing a solder paste defect costs $0.50 versus $50+ at AOI or $500+ in field failures. Studies show 60-70% of defects originate at the paste printing stage, making SPI critical for quality control."
        }
      },
      {
        "@type": "Question",
        "name": "Do I need both SPI and AOI?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, for optimal quality control. SPI and AOI complement each other - they inspect different stages and catch different defect types. SPI detects solder paste issues (volume, bridging, offset) before placement, while AOI catches placement errors, component defects, and post-reflow solder joint issues. Manufacturers using both SPI and AOI achieve 85% defect reduction versus 60% with AOI alone. SPI also enables closed-loop feedback to the printer for continuous process improvement, while AOI provides final quality verification before shipping."
        }
      },
      {
        "@type": "Question",
        "name": "What defects can SPI detect?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "3D SPI systems detect six primary solder paste defects: (1) Insufficient solder paste - low volume or height that will cause weak joints, (2) Excessive solder paste - too much paste leading to bridging or solder balls, (3) Solder paste bridging - paste connecting adjacent pads causing shorts, (4) Misalignment - X/Y offset from pad center affecting component placement, (5) Missing deposits - complete absence of paste on pads, and (6) Shape irregularities - smearing, contamination, or incomplete paste transfer from stencil. Modern 3D SPI also detects coplanarity issues on warped boards."
        }
      },
      {
        "@type": "Question",
        "name": "What is the difference between inline and offline SPI?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Inline SPI integrates directly into your SMT production line for 100% automated inspection at speeds of 60-120 boards per hour. It's ideal for high-volume production requiring continuous quality monitoring and closed-loop printer feedback. Offline SPI is a standalone benchtop system for process development, new product introduction, failure analysis, and low-volume production at 15-30 boards per hour. Offline systems cost less and don't require line integration, making them perfect for high-mix/low-volume manufacturers, R&D labs, or facilities needing flexible inspection capabilities without production line modifications."
        }
      },
      {
        "@type": "Question",
        "name": "How accurate does my SPI system need to be?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Required SPI accuracy depends on your component sizes and quality requirements. For standard SMT with 0402 and 0603 components, ±5μm height accuracy is sufficient. For fine-pitch applications with 0201 components or BGAs, you need ±2-3μm accuracy. Ultra-fine pitch assemblies (<0.3mm pitch) require ±1-2μm resolution. Volume measurement accuracy should be ±10-15% for 2D systems or ±2-5% for 3D systems. IPC Class 3 (high reliability aerospace, medical) typically requires 3D measurement with ±2μm or better accuracy to meet stringent quality standards."
        }
      },
      {
        "@type": "Question",
        "name": "How does 3D SPI measure solder paste?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "3D SPI systems use optical measurement technologies to create a complete three-dimensional profile of solder paste deposits. The three main methods are: (1) Laser triangulation - projects a laser line across the board and measures height from the reflected angle, (2) Structured light projection (phase-shift method) - projects multiple light patterns and analyzes distortion to reconstruct 3D topography with ±1μm resolution, and (3) Interferometry - uses light wave interference patterns for sub-micron accuracy. All methods are non-contact and create a 3D point cloud showing exact volume, height, area, and shape of each paste deposit for comparison against specifications."
        }
      },
      {
        "@type": "Question",
        "name": "Can SPI integrate with my existing SMT line?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, modern SPI systems integrate seamlessly with existing SMT production lines. They support standard SMEMA conveyor communication for automatic board handling and handoff between machines. SPI systems connect to MES, ERP, and quality management systems via OPC-UA, REST APIs, IPC-CFX, or SECS/GEM protocols. Most importantly, they provide closed-loop feedback to solder paste printers (DEK, MPM, Ekra, etc.) for automatic offset correction and process optimization. They also integrate with barcode readers for traceability, automated marking systems, and component placement machines for comprehensive production data collection."
        }
      },
      {
        "@type": "Question",
        "name": "What throughput should I expect from SPI?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "SPI throughput varies by system type and board complexity. Inline 3D SPI systems achieve 60-120 boards per hour for typical boards, with high-speed models reaching 180 boards/hour for simple assemblies. Actual throughput depends on board size (larger boards take longer), pad count (more pads = more measurement points), inspection resolution settings, and whether you inspect 100% of pads or use sampling. Offline SPI systems typically process 15-30 boards per hour. For production line matching, calculate required throughput: if your placement machine runs 100 boards/hour, your SPI should match or exceed this speed to avoid creating a bottleneck."
        }
      }
    ]
  };

  const faqs = [
    {
      category: "General Information",
      questions: [
        {
          q: "What is 3D Solder Paste Inspection (SPI)?",
          a: "3D Solder Paste Inspection (SPI) is an automated inspection process that measures solder paste deposits on PCBs after the stencil printing process but before component placement. Using advanced laser or projection technology, 3D SPI systems measure the volume, height, area, and X-Y position of each solder paste deposit. This inspection catches printing defects early in the assembly process when they are easiest and least expensive to correct. Studies show that 60-70% of solder defects originate at the paste printing stage, making 3D SPI one of the most cost-effective inspection investments."
        },
        {
          q: "What's the difference between 2D and 3D AOI?",
          a: "2D AOI (Automated Optical Inspection) uses cameras to capture grayscale or color images of assembled boards and analyzes them for component presence, placement, and basic solder quality. 3D AOI adds height measurement capability using technologies like laser triangulation or structured light projection. This third dimension enables more accurate detection of solder joint defects, component standoff issues, coplanarity problems, and other defects that are difficult or impossible to detect in 2D. 3D AOI significantly reduces false calls while improving defect detection rates, especially for fine-pitch components and complex assemblies."
        },
        {
          q: "What industries do you serve?",
          a: "ASC International serves a wide range of industries including electronics manufacturing, automotive electronics, medical devices, aerospace & defense, consumer electronics, industrial controls, telecommunications, LED lighting, IoT devices, and contract manufacturing. We have specialized expertise in applications requiring high reliability such as automotive (IATF 16949), medical (FDA/ISO 13485), and aerospace (AS9100). Our systems are designed to meet industry-specific standards including IPC Class 2 and Class 3 workmanship requirements."
        }
      ]
    },
    {
      category: "Products & Services",
      questions: [
        {
          q: "Do you sell new or used equipment?",
          a: "ASC International offers both new equipment and certified pre-owned systems. New equipment comes with full manufacturer warranties, the latest software versions, and complete factory support. Our pre-owned systems are thoroughly refurbished by factory-trained technicians, tested to meet original specifications, and backed by warranty. Pre-owned systems typically cost 30-50% less than new equipment while delivering comparable performance, making them an excellent choice for companies with budget constraints or temporary capacity needs."
        },
        {
          q: "Do you offer contract inspection services?",
          a: "Yes, ASC International provides comprehensive contract inspection services both at your facility and at our service centers. On-site services bring our technicians and portable equipment to your location for immediate results without shipping. Lab services allow you to ship boards to our facility for thorough analysis. Contract inspection is ideal for product launches, production ramps, quality investigations, capacity overflow, or when you need inspection capabilities without capital investment. Services include 3D SPI, AOI, X-ray inspection, conformal coating verification, first article inspection, and failure analysis."
        },
        {
          q: "What kind of technical support do you provide?",
          a: "ASC International provides expert technical support directly from our engineering team — phone and email assistance, remote diagnostics and troubleshooting, on-site service calls, preventive maintenance programs, software updates, spare parts supply, application support, and training programs. When you call us, you reach the engineers who built your system. Support is available through various service plans ranging from standard warranty coverage to premium support with guaranteed response times. Our team includes factory-trained engineers with deep experience in electronics manufacturing."
        }
      ]
    },
    {
      category: "Technical Questions",
      questions: [
        {
          q: "How accurate are your measurement systems?",
          a: "Measurement accuracy varies by system and technology. Our 3D SPI systems typically achieve volume measurement accuracy better than ±15% with repeatability below 5% (3 sigma). Height measurements are accurate to ±5-10 microns. 3D AOI systems measure component heights with accuracy of ±20-50 microns depending on the technology. X-ray systems can detect voids down to 50 microns and measure void percentages accurately. All systems undergo rigorous calibration and include Gage R&R studies during installation. Measurement capability is validated against reference standards traceable to national standards."
        },
        {
          q: "Can your systems integrate with our existing production line?",
          a: "Yes, ASC systems are designed for easy integration into existing production lines. We support standard SMEMA conveyor interfaces, various board handling widths, and can provide custom conveyor configurations. Our systems integrate with most MES, ERP, and quality management systems through standard protocols including OPC-UA, REST APIs, and database connections. We support automated marking systems, barcode/2D code readers for traceability, and closed-loop feedback to upstream equipment like printers and placement machines. Integration planning is included in our installation service."
        },
        {
          q: "Do you provide maintenance and calibration services?",
          a: "Yes, ASC offers comprehensive preventive maintenance and calibration services. Preventive maintenance includes cleaning optical systems, checking mechanical components, updating software, verifying measurement accuracy, and replacing wear items. We recommend annual or semi-annual PM depending on usage. Calibration services ensure your system maintains specification accuracy over time and include measurement system analysis (MSA) documentation for quality certifications. Maintenance can be performed by your staff with our guidance, or we can provide on-site service from our technical team."
        }
      ]
    },
    {
      category: "Getting Started",
      questions: [
        {
          q: "How long does installation and training take?",
          a: "Installation typically takes 1-3 days depending on the system type and your facility readiness. This includes unpacking, positioning, power and network connections, and initial calibration. Operator training is usually completed in 2-4 days and covers system operation, program creation, defect review, routine maintenance, and basic troubleshooting. We also offer advanced training for programmers and engineers. Installation is performed by factory-trained technicians, and training can be customized to your staff's experience level and your specific applications."
        },
        {
          q: "What is the typical ROI for an inspection system?",
          a: "ROI depends on your specific application, production volume, and current quality costs, but most customers see payback in 6-18 months. Benefits include reduced scrap and rework costs (often 50-80% reduction), decreased warranty returns and field failures, improved process capability and yields, reduced inspection labor, faster defect detection and correction, and better customer satisfaction. For example, catching solder paste defects with 3D SPI before component placement saves the cost of components and rework. Automated inspection also provides valuable process data for continuous improvement. We can help you calculate expected ROI based on your specific production metrics."
        },
        {
          q: "How do I get started with ASC International?",
          a: "Getting started is easy. Contact us through our website, email, or phone to discuss your application. We'll work with you to understand your inspection requirements, production environment, and quality goals. We can arrange product demonstrations, either at our facility or yours, and often provide trial inspections of your actual assemblies. Based on your needs, we'll recommend appropriate solutions and provide detailed quotations. Our applications engineers will help ensure you select the right system configuration for your specific requirements. We support the entire process from initial inquiry through installation, training, and ongoing support."
        }
      ]
    },
    {
      category: "Choosing the Right System",
      questions: [
        {
          q: "Why should I choose a specialist inspection vendor over a conglomerate?",
          a: "Specialist inspection vendors like ASC International focus 100% of their R&D and engineering resources on inspection technology. This means faster innovation, deeper domain expertise, and direct access to engineers who live and breathe inspection. When you call ASC, you reach an engineer, not a call center. Conglomerate vendors spread their attention across dozens of product lines, and inspection may be a small fraction of their business. Specialists also offer open architectures that work with any equipment, while conglomerates often push proprietary ecosystems that create vendor lock-in."
        },
        {
          q: "What is vendor lock-in and how do I avoid it with inspection equipment?",
          a: "Vendor lock-in occurs when proprietary data formats, closed APIs, or ecosystem-dependent features make it expensive or impractical to switch vendors. In inspection, lock-in manifests as proprietary data exports that only work with the vendor's software, closed-loop feedback that only works with the vendor's own printer brand, and annual software license fees for features that should be standard. To avoid lock-in, choose systems that support open data formats (CSV, XML, JSON), IPC-CFX connectivity, documented APIs, and vendor-agnostic closed-loop integration. ASC systems are built on open architecture principles."
        },
        {
          q: "What is IPC-CFX and why does it matter for inspection?",
          a: "IPC-CFX (Connected Factory Exchange) is an industry standard protocol for machine-to-machine communication in electronics manufacturing. It enables plug-and-play connectivity between equipment from different vendors without custom integration. For inspection, IPC-CFX support means your SPI and AOI systems can communicate with any CFX-compatible printer, placement machine, or MES system. This eliminates vendor lock-in and ensures your inspection data flows freely through your factory. ASC systems support IPC-CFX natively, enabling true Industry 4.0 connectivity."
        },
        {
          q: "What is the total cost of ownership for an inspection system?",
          a: "Total cost of ownership (TCO) goes far beyond the purchase price. Over a typical 7-10 year lifecycle, you should factor in: annual software license fees (some vendors charge $10K-$25K per year), maintenance contracts (typically 8-12% of system cost annually), calibration consumables, training costs, spare parts, and integration expenses. A system that costs $30K less upfront but charges $15K in annual software fees will cost $45K more over 5 years. ASC includes all software features in the base price with no annual licensing fees, resulting in significantly lower TCO."
        },
        {
          q: "How important is direct engineering support for inspection equipment?",
          a: "Critical. When your inspection system has an issue during a production run, the difference between reaching an engineer directly and navigating a tiered call center can cost tens of thousands of dollars in lost production. ASC provides direct access to application engineers who know your system and your process. There are no ticket queues, no escalation tiers, and no generalist support staff reading from scripts. Our engineers have decades of experience in electronics manufacturing inspection and can troubleshoot complex issues quickly."
        },
        {
          q: "What does open architecture mean for inspection systems?",
          a: "Open architecture means the inspection system works with equipment from any vendor and exports data in standard formats without restrictions. Specifically, it means: closed-loop feedback that works with any major printer brand (not just one vendor's printers), data export in standard formats (CSV, XML, JSON) without additional licensing fees, API access for custom integrations, IPC-CFX and SECS/GEM protocol support, and compatibility with any MES, SPC, or analytics platform. Open architecture protects your investment by ensuring you are never locked into a single vendor's ecosystem."
        },
        {
          q: "How do inspection system awards and marketing claims compare to real-world performance?",
          a: "Industry awards and marketing claims should be viewed with healthy skepticism. Awards are often given based on vendor submissions and marketing presentations, not independent performance testing. What matters is real-world performance on your boards: measurement accuracy verified by Gage R&R studies, false call rates in production (not demo) conditions, actual throughput including board handling, and support responsiveness when issues arise. ASC encourages customers to run benchmark tests on their actual production boards and verify performance claims independently before purchasing."
        },
        {
          q: "Can I use inspection data from ASC systems with third-party analytics software?",
          a: "Yes, absolutely. ASC systems export all measurement and inspection data in standard open formats including CSV, XML, and JSON. We provide documented REST APIs for real-time data access and support IPC-CFX for machine-to-machine communication. Your data is yours - there are no restrictions on export, no proprietary formats that require our software to read, and no additional fees for data access features. You can feed ASC data into any third-party SPC package, MES system, data lake, or custom analytics platform."
        },
        {
          q: "What should I look for when comparing SPI or AOI vendors?",
          a: "Focus on six key areas: (1) Measurement accuracy - request Gage R&R data on your actual boards, not demo boards, (2) False call rate - the real production rate, not the spec-sheet claim, (3) Total cost of ownership - including all software licenses, maintenance, and hidden fees over 5 years, (4) Data openness - can you export all data freely in standard formats without extra cost, (5) Support quality - do you reach engineers directly or go through a call center, and (6) Integration flexibility - does the system work with any equipment or only the vendor's ecosystem. See our detailed comparison guides for more."
        }
      ]
    },
    {
      category: "SPI-Specific Questions",
      questions: [
        {
          q: "How does SPI differ from AOI?",
          a: "SPI (Solder Paste Inspection) and AOI (Automated Optical Inspection) inspect at different stages of PCB assembly. SPI occurs BEFORE component placement and measures solder paste deposits (volume, height, area, offset). AOI happens AFTER reflow soldering and inspects final solder joints and component placement. SPI is more cost-effective because it catches defects early - fixing a solder paste defect costs $0.50 versus $50+ at AOI or $500+ in field failures. Studies show 60-70% of defects originate at the paste printing stage, making SPI critical for quality control."
        },
        {
          q: "Do I need both SPI and AOI?",
          a: "Yes, for optimal quality control. SPI and AOI complement each other - they inspect different stages and catch different defect types. SPI detects solder paste issues (volume, bridging, offset) before placement, while AOI catches placement errors, component defects, and post-reflow solder joint issues. Manufacturers using both SPI and AOI achieve 85% defect reduction versus 60% with AOI alone. SPI also enables closed-loop feedback to the printer for continuous process improvement, while AOI provides final quality verification before shipping."
        },
        {
          q: "What defects can SPI detect?",
          a: "3D SPI systems detect six primary solder paste defects: (1) Insufficient solder paste - low volume or height that will cause weak joints, (2) Excessive solder paste - too much paste leading to bridging or solder balls, (3) Solder paste bridging - paste connecting adjacent pads causing shorts, (4) Misalignment - X/Y offset from pad center affecting component placement, (5) Missing deposits - complete absence of paste on pads, and (6) Shape irregularities - smearing, contamination, or incomplete paste transfer from stencil. Modern 3D SPI also detects coplanarity issues on warped boards."
        },
        {
          q: "What is the difference between inline and offline SPI?",
          a: "Inline SPI integrates directly into your SMT production line for 100% automated inspection at speeds of 60-120 boards per hour. It's ideal for high-volume production requiring continuous quality monitoring and closed-loop printer feedback. Offline SPI is a standalone benchtop system for process development, new product introduction, failure analysis, and low-volume production at 15-30 boards per hour. Offline systems cost less and don't require line integration, making them perfect for high-mix/low-volume manufacturers, R&D labs, or facilities needing flexible inspection capabilities without production line modifications."
        },
        {
          q: "How accurate does my SPI system need to be?",
          a: "Required SPI accuracy depends on your component sizes and quality requirements. For standard SMT with 0402 and 0603 components, ±5μm height accuracy is sufficient. For fine-pitch applications with 0201 components or BGAs, you need ±2-3μm accuracy. Ultra-fine pitch assemblies (<0.3mm pitch) require ±1-2μm resolution. Volume measurement accuracy should be ±10-15% for 2D systems or ±2-5% for 3D systems. IPC Class 3 (high reliability aerospace, medical) typically requires 3D measurement with ±2μm or better accuracy to meet stringent quality standards."
        },
        {
          q: "How does 3D SPI measure solder paste?",
          a: "3D SPI systems use optical measurement technologies to create a complete three-dimensional profile of solder paste deposits. The three main methods are: (1) Laser triangulation - projects a laser line across the board and measures height from the reflected angle, (2) Structured light projection (phase-shift method) - projects multiple light patterns and analyzes distortion to reconstruct 3D topography with ±1μm resolution, and (3) Interferometry - uses light wave interference patterns for sub-micron accuracy. All methods are non-contact and create a 3D point cloud showing exact volume, height, area, and shape of each paste deposit for comparison against specifications."
        },
        {
          q: "Can SPI integrate with my existing SMT line?",
          a: "Yes, modern SPI systems integrate seamlessly with existing SMT production lines. They support standard SMEMA conveyor communication for automatic board handling and handoff between machines. SPI systems connect to MES, ERP, and quality management systems via OPC-UA, REST APIs, IPC-CFX, or SECS/GEM protocols. Most importantly, they provide closed-loop feedback to solder paste printers (DEK, MPM, Ekra, etc.) for automatic offset correction and process optimization. They also integrate with barcode readers for traceability, automated marking systems, and component placement machines for comprehensive production data collection."
        },
        {
          q: "What throughput should I expect from SPI?",
          a: "SPI throughput varies by system type and board complexity. Inline 3D SPI systems achieve 60-120 boards per hour for typical boards, with high-speed models reaching 180 boards/hour for simple assemblies. Actual throughput depends on board size (larger boards take longer), pad count (more pads = more measurement points), inspection resolution settings, and whether you inspect 100% of pads or use sampling. Offline SPI systems typically process 15-30 boards per hour. For production line matching, calculate required throughput: if your placement machine runs 100 boards/hour, your SPI should match or exceed this speed to avoid creating a bottleneck."
        }
      ]
    }
  ];

  return (
    <>
      <Header />
      <main>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />

        <Breadcrumb
          items={[
            { name: "Home", href: "/" },
            { name: "FAQ" },
          ]}
        />

        <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Frequently Asked Questions</h1>
              <p className="text-xl text-blue-100 mb-8">
                Find answers to common questions about our inspection systems, services, and support
              </p>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              {faqs.map((category, idx) => (
                <div key={idx} className="mb-12">
                  <h2 className="text-2xl font-bold mb-6 text-blue-600">{category.category}</h2>
                  <div className="space-y-6">
                    {category.questions.map((faq, qIdx) => (
                      <div key={qIdx} className="bg-white rounded-lg shadow-md p-6">
                        <h3 className="text-lg font-semibold mb-3 text-gray-900">{faq.q}</h3>
                        <p className="text-gray-700 leading-relaxed">{faq.a}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Still Have Questions?</h2>
              <p className="text-xl text-gray-600 mb-8">
                Our team of experts is here to help. Contact us for personalized assistance with your inspection needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                  Contact Us
                </Link>
                <a href="tel:+18884782912" className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-50 transition-colors border border-gray-300">
                  Call Us
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
