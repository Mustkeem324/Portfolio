import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { HiArrowUpRight } from "react-icons/hi2";
import "./WorkOpportunityPopup.css";

const EMAIL = "mustkeem324@gmail.com";
const FREELANCEKAR = "https://freelancekar.com";

export default function WorkOpportunityPopup() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const alreadySeen = sessionStorage.getItem("work-opportunity-popup-seen");
    if (alreadySeen) return undefined;

    const timer = window.setTimeout(() => {
      setOpen(true);
      sessionStorage.setItem("work-opportunity-popup-seen", "1");
    }, 9000);

    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  const emailHref = `mailto:${EMAIL}?subject=${encodeURIComponent("Work / project enquiry")}&body=${encodeURIComponent("Hi Mustkeem,\n\nI found your portfolio and would like to discuss a project / work opportunity.\n\nProject or role:\nBudget / timeline (optional):\n\nThanks")}`;

  return (
    <>
      <button className="work-popup-launcher" onClick={() => setOpen(true)} aria-label="Open work enquiry">
        <span /> Available for work
      </button>

      <AnimatePresence>
        {open && (
          <motion.div className="work-popup-backdrop" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onMouseDown={() => setOpen(false)}>
            <motion.aside
              className="work-popup"
              initial={{ opacity: 0, y: 28, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.97 }}
              transition={{ duration: 0.24 }}
              onMouseDown={(event) => event.stopPropagation()}
              role="dialog"
              aria-modal="true"
              aria-labelledby="work-popup-title"
            >
              <button className="work-popup-close" onClick={() => setOpen(false)} aria-label="Close">×</button>
              <div className="work-popup-status"><span /> AVAILABLE FOR PROJECTS</div>
              <p className="work-popup-kicker">Have a project or work opportunity?</p>
              <h2 id="work-popup-title">Need something <em>built?</em></h2>
              <p className="work-popup-copy">
                I’m available for AI development, Generative AI / LLM work, full-stack development, APIs, automation, consulting, freelance projects and product collaborations.
              </p>
              <div className="work-popup-tags">
                <span>AI / LLM</span><span>Full Stack</span><span>APIs</span><span>Automation</span><span>Consulting</span>
              </div>
              <div className="work-popup-note">
                <strong>FreelanceKar-related work?</strong>
                <p>For freelance projects or FreelanceKar opportunities, contact me directly or continue through FreelanceKar.com.</p>
              </div>
              <a className="work-popup-email" href={emailHref}><HiOutlineMail /><span><small>Direct email</small><strong>{EMAIL}</strong></span><FaArrowRight /></a>
              <div className="work-popup-actions">
                <a className="work-popup-primary" href={emailHref}>Let’s work together <FaArrowRight /></a>
                <a className="work-popup-secondary" href={FREELANCEKAR} target="_blank" rel="noreferrer">FreelanceKar <HiArrowUpRight /></a>
              </div>
              <button className="work-popup-view" onClick={() => { setOpen(false); document.querySelector("#flagship")?.scrollIntoView({ behavior: "smooth" }); }}>View my work</button>
            </motion.aside>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
