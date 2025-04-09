import Hero from "@/components/Hero";
import SuggestedEvents from "@/components/SuggestedEvents";

export default function Homepage() {
  return (
    <>
      <div className="flex flex-col gap-10">
        <Hero />
        <SuggestedEvents />
      </div>
    </>
  );
}
