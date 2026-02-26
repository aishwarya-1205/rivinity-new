import { useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const sections = [
  {
    id: "introduction",
    title: "1. Introduction",
  },
  {
    id: "information",
    title: "2. Information We Collect",
    children: [
      { id: "personal-data", title: "2.1 Personal Data" },
      { id: "non-personal-data", title: "2.2 Non-Personal Data" },
    ],
  },
  {
    id: "usage",
    title: "3. How We Use Information",
    children: [
      { id: "use-personal", title: "3.1 Personal Data Usage" },
      { id: "use-non-personal", title: "3.2 Non-Personal Data Usage" },
    ],
  },
  {
    id: "sharing",
    title: "4. Sharing & Disclosure",
  },
  {
    id: "changes",
    title: "5. Changes to Policy",
  },
  {
    id: "contact",
    title: "6. Contact Us",
  },
];

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      <Navbar />

      {/* Background Decorations (Same as PostAd) */}
      <div className="fixed inset-0 pointer-events-none select-none -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-primary/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-accent/10 blur-[120px] rounded-full" />
      </div>

      <main className="container-custom pt-40 lg:pt-48 pb-24 px-4 relative z-10">
        <div className="max-w-7xl mx-auto grid grid-cols-12 gap-8">
          {/* LEFT SIDEBAR */}
          <aside className="col-span-3 hidden lg:block">
            <div className="sticky top-32 bg-card/40 backdrop-blur-xl border border-white/10 rounded-3xl p-6 space-y-6">
              <div>
                <h4 className="text-xs font-bold uppercase text-muted-foreground mb-3">
                  Categories
                </h4>
                <ul className="space-y-2 text-sm">
                  <li>Introduction</li>
                  <li>Data Collection</li>
                  <li>Usage</li>
                  <li>Security</li>
                  <li>Compliance</li>
                </ul>
              </div>
            </div>
          </aside>

          {/* MAIN CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="col-span-12 lg:col-span-6"
          >
            <div className="bg-card/40 backdrop-blur-xl border border-white/10 rounded-3xl p-10 shadow-xl">
              <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
              <p className="text-sm text-muted-foreground mb-10">
                Last Updated: June 2026
              </p>

              {sections.map((section) => (
                <div key={section.id} className="mb-12">
                  <h2
                    id={section.id}
                    className="text-2xl font-bold mb-4 scroll-mt-40"
                  >
                    {section.title}
                  </h2>

                  <p className="text-muted-foreground leading-relaxed mb-6">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam.
                  </p>

                  {section.children &&
                    section.children.map((child) => (
                      <div key={child.id} className="mb-8">
                        <h3
                          id={child.id}
                          className="text-xl font-semibold mb-3 scroll-mt-40"
                        >
                          {child.title}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua.
                        </p>
                      </div>
                    ))}
                </div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT SIDEBAR (Index) */}
          <aside className="col-span-3 hidden lg:block">
            <div className="sticky top-32 bg-card/40 backdrop-blur-xl border border-white/10 rounded-3xl p-6 space-y-4">
              <h4 className="text-xs font-bold uppercase text-muted-foreground mb-3">
                On This Page
              </h4>

              {sections.map((section) => (
                <div key={section.id} className="mb-4">
                  <a
                    href={`#${section.id}`}
                    className="block text-sm font-medium text-muted-foreground hover:text-primary transition mb-1"
                  >
                    {section.title}
                  </a>

                  {section.children && (
                    <div className="space-y-1.5 ml-4">
                      {section.children.map((child) => (
                        <a
                          key={child.id}
                          href={`#${child.id}`}
                          className="block text-xs text-muted-foreground/80 hover:text-primary transition"
                        >
                          {child.title}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </aside>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
