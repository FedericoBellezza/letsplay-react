import Hero from "@/components/Hero";
import SuggestedEvents from "@/components/SuggestedEvents";
import { motion } from "framer-motion";

export default function Homepage() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ease: "easeInOut", duration: 0.5 }}
        className="flex flex-col gap-10 px-5"
      >
        <Hero />
        <SuggestedEvents />
      </motion.div>
    </>
  );
}
