"use client"
import TeamSection from "@/components/HomeComponents/TeamSection/Section";
import ResearchSection from "@/app/(routes)/Research/_components/ResearchSection/ResearchSection";
import ResearchHero from "./_components/ResearchHero/ResearchHero";
import img from "./assests/HeroImg/bg2.png"

export default function Page() {

  return (
    <div>
      <div className="w-full h-auto mb-20 flex items-center justify-center bg-cover relative">
        <div className=" w-full">

          <ResearchHero
            title={"Research"}
            subtitle={"Research Contents"}
            imageUrl={img} />
          <ResearchSection />
        </div>
      </div>
    </div>
  );
}
