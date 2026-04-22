import {
  BadgeCheck,
  Building2,
  FileCheck,
  MonitorSmartphone,
  HeartPulse,
  Users,
  PawPrint,
  TrendingUp,
  Plane,
  Network,
} from "lucide-react";

export default function Services() {
  const categories = [
    {
      icon: <Building2 className="w-6 h-6" />,
      title: "Healthcare Infrastructure & Setup",
      subtitle: "End-to-end hospital & lab development solutions",
      items: [
        "Hospital Construction Management (“You Dream It, We Build It”)",
        "Pharmacy Setup",
        "Diagnostic Lab Setup",
        "Operation Theatre (OT) Setup",
        "Fire Safety, Electrical & Wiring Works",
        "Medical Equipment Planning",
        "Interior, Lift & Fabrication Works",
        "Hospital Planning & Feasibility Studies",
      ],
    },
    {
      icon: <FileCheck className="w-6 h-6" />,
      title: "Compliance, Audit & Accreditation",
      subtitle: "Ensuring legal, quality, and revenue optimization standards",
      items: [
        "Audit Management Services (Pharmacy, Lab, Hospital Operations)",
        "Revenue Optimization & Marketing Flow Audits",
        "NABH, NABL, ISO Certification Support",
        "Fire Safety Approvals & Compliance",
        "Government Licenses & Regulatory Clearances",
        "Documentation & Establishment Setup",
      ],
    },
    {
      icon: <MonitorSmartphone className="w-6 h-6" />,
      title: "Diagnostic & Digital Health Solutions",
      subtitle: "Technology-driven diagnostics and health tracking ecosystem",
      items: [
        "Advanced Diagnostics & Specialized Testing (LC-MS/MS, Biomarkers)",
        "Diagnostic Kart (Lifestyle + Health Record Tracking Platform)",
        "Online Test Booking Integration (Future-ready ecosystem)",
        "Sample Collection Services (Home / Corporate)",
      ],
    },
    {
      icon: <HeartPulse className="w-6 h-6" />,
      title: "Preventive Healthcare & Wellness",
      subtitle: "Proactive health management for individuals & organizations",
      items: [
        "Preventive Health Checkup Packages",
        "Chronic Disease Monitoring Programs",
        "High-Risk Patient Screening Programs",
        "Personalized Health Packages",
      ],
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Corporate & Community Health Services",
      subtitle: "Large-scale health programs & employee wellness solutions",
      items: [
        "Vaccination Camps (Corporate, Schools, Institutions)",
        "Corporate Health Checkups",
        "Occupational Health Programs",
        "Workplace Compliance Screenings",
        "Employee Wellness Programs",
        "Community Health Initiatives",
      ],
    },
    {
      icon: <PawPrint className="w-6 h-6" />,
      title: "Veterinary Diagnostics",
      subtitle: "Expanding healthcare beyond humans",
      items: [
        "Livestock Health Diagnostics",
        "Pet & Companion Animal Testing",
        "Disease Prevention Programs for Animals",
      ],
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Healthcare Business Consulting & Growth",
      subtitle: "Turn ideas into profitable healthcare businesses",
      items: [
        "Detailed Project Reports (DPR with SWOT Analysis)",
        "Market Research & Feasibility Studies",
        "Hospital & Lab Business Strategy",
        "Loan & Funding Support (Bank / Investor Ready Reports)",
        "Operations Planning & Workflow Setup",
        "Healthcare Software Solutions",
      ],
    },
    {
      icon: <Plane className="w-6 h-6" />,
      title: "Medical Tourism",
      subtitle: "End-to-end patient travel & treatment solutions",
      items: [
        "Domestic & International Patient Handling",
        "Hospital Tie-ups & Treatment Coordination",
        "Travel, Stay & End-to-End Assistance",
        "Post-Treatment Follow-up Support",
      ],
    },
    {
      icon: <Network className="w-6 h-6" />,
      title: "Integrated Healthcare Ecosystem (USP Layer)",
      subtitle: "Your unique positioning — combine everything together",
      items: [
        "End-to-End Healthcare Solutions (Setup → Compliance → Operations → Revenue)",
        "Integrated Digital + Diagnostic + Consulting Model",
        "Scalable Healthcare Business Ecosystem",
        "“Build → Manage → Grow” Approach",
      ],
    },
  ];

  return (
    <main className="min-h-screen bg-slate-50 pt-16 md:pt-20 pb-16 md:pb-20">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-14">
          <h1 className="text-3xl md:text-5xl font-bold text-slate-900 tracking-tight mb-4">
            Complete Healthcare Solutions
          </h1>
          <div className="w-16 h-1 bg-emerald-500 mx-auto rounded-full mb-6"></div>
          <p className="text-lg md:text-xl text-slate-600 max-w-6xl mx-auto font-light leading-relaxed">
            At Infinite Medi Health, we offer end-to-end healthcare,
            infrastructure, and compliance solutions—covering everything from
            idea stage to execution and ongoing operations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {categories.map((category, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm hover:shadow-lg hover:-translate-y-1 hover:border-emerald-100 transition-all duration-300"
            >
              <div className="w-12 h-12 bg-emerald-50/80 text-emerald-600 rounded-full flex items-center justify-center font-bold text-lg mb-5">
                {category.icon}
              </div>
              <h2 className="text-xl font-bold text-slate-900 mb-2 leading-tight">
                {category.title}
              </h2>
              <p className="text-xs font-semibold text-emerald-600 mb-5 pb-4 border-b border-slate-100 uppercase tracking-widest leading-relaxed">
                {category.subtitle}
              </p>
              <ul className="space-y-3">
                {category.items.map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-3 text-slate-500 text-sm font-normal"
                  >
                    <BadgeCheck
                      className="w-5 h-5 text-emerald-500 mt-0.5 shrink-0"
                      strokeWidth={2.5}
                    />
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 text-center">
          <a
            href="/#contact"
            className="inline-block px-8 py-4 bg-slate-900 text-white rounded-full font-semibold text-sm uppercase tracking-widest hover:bg-emerald-500 transition-all shadow-[0_0_15px_rgba(0,0,0,0.1)] hover:-translate-y-0.5"
          >
            Request Service Consultation
          </a>
        </div>
      </div>
    </main>
  );
}
