import { useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const sections = [
  {
    id: "acceptance",
    title: "1. Acceptance of Terms",
  },
  {
    id: "services",
    title: "2. Description of Services",
  },
  {
    id: "accounts",
    title: "3. User Accounts & Responsibilities",
  },
  {
    id: "payments",
    title: "4. Payments & Billing",
  },
  {
    id: "intellectual",
    title: "5. Intellectual Property",
  },
  {
    id: "limitations",
    title: "6. Limitation of Liability",
  },
  {
    id: "termination",
    title: "7. Termination",
  },
  {
    id: "changes",
    title: "8. Changes to Terms",
  },
  {
    id: "governing",
    title: "9. Governing Law",
  },
  {
    id: "contact",
    title: "10. Contact Information",
  },
];

const TermsConditions = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      <Navbar />

      {/* Background Glow (Same Vibe) */}
      <div className="fixed inset-0 pointer-events-none select-none -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-primary/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-accent/10 blur-[120px] rounded-full" />
      </div>

      <main className="container-custom pt-40 lg:pt-48 pb-24 px-4 relative z-10">
        <div className="max-w-7xl mx-auto grid grid-cols-12 gap-8">
          {/* LEFT SIDE CATEGORY */}
          <aside className="col-span-3 hidden lg:block">
            <div className="sticky top-32 bg-card/40 backdrop-blur-xl border border-white/10 rounded-3xl p-6">
              <h4 className="text-xs font-bold uppercase text-muted-foreground mb-4">
                Legal Overview
              </h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Platform Usage</li>
                <li>Billing Terms</li>
                <li>User Conduct</li>
                <li>Liability</li>
                <li>Compliance</li>
              </ul>
            </div>
          </aside>

          {/* MAIN CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="col-span-12 lg:col-span-6"
          >
            <div className="bg-card/40 backdrop-blur-xl border border-white/10 rounded-3xl px-12 py-14 shadow-xl max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
                Terms & Conditions
              </h1>
              <p className="text-sm text-muted-foreground mb-10">
                Effective Date: June 2026
              </p>

              {sections.map((section) => (
                <div key={section.id} className="mb-12">
                  <h2
                    id={section.id}
                    className="text-2xl font-semibold tracking-tight mt-14 mb-6 scroll-mt-40"
                  >
                    {section.title}
                  </h2>
                  <p className="text-[15px] md:text-base leading-7 md:leading-8 text-muted-foreground/90">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident.
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT SIDE INDEX */}
          <aside className="col-span-3 hidden lg:block">
            <div className="sticky top-32 bg-card/40 backdrop-blur-xl border border-white/10 rounded-3xl p-6">
              <h4 className="text-xs font-bold uppercase text-muted-foreground mb-4">
                On This Page
              </h4>

              <div className="space-y-3">
                {sections.map((section) => (
                  <a
                    key={section.id}
                    href={`#${section.id}`}
                    className="block text-sm text-muted-foreground hover:text-primary transition"
                  >
                    {section.title}
                  </a>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default TermsConditions;
