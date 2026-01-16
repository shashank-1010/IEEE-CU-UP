import { motion } from "framer-motion";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
}

export function SectionHeader({ title, subtitle, centered = false }: SectionHeaderProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`mb-12 ${centered ? "text-center" : "text-left"}`}
    >
      <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3 font-heading tracking-tight">
        {title}
      </h2>
      {subtitle && (
        <div className="h-1 w-20 bg-primary mx-auto md:mx-0 rounded-full mb-4" />
      )}
      {subtitle && (
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
