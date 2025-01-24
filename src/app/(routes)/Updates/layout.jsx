import ResearchHero from "../Research/_components/ResearchHero/ResearchHero";
import img from "../Research/assests/HeroImg/bg2.png";

export default function NewsLayout({ children }) {
    return (
        <div className="overflow-x-hidden">
            <ResearchHero
                title={"News"}
                subtitle={"Updates"}
                imageUrl={img}
            />
            {children}
        </div>
    )
}
