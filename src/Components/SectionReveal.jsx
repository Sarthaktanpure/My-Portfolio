import { motion } from "framer-motion";

const MotionSection = motion.section;

const sectionVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

export function SectionReveal({ children, className = "", id, label, eyebrow, title, description }) {
  return (
    <MotionSection
      id={id}
      className={className}
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      {(title || description || eyebrow || label) && (
        <div className="section-heading">
          {eyebrow ? <p className="section-eyebrow">{eyebrow}</p> : null}
          {label ? <p className="section-eyebrow">{label}</p> : null}
          {title ? <h2>{title}</h2> : null}
          {description ? <p className="section-description">{description}</p> : null}
        </div>
      )}
      {children}
    </MotionSection>
  );
}
