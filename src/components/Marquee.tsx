import MarqueeText from "react-marquee-text";
import "react-marquee-text/dist/styles.css";

const GREEN = "#0F6A36";
const YELLOW = "#F6E81E";

interface MarqueeType {
    id: string;
    nameBn: string;
    categoryIcon: React.ReactNode;
    today: number;
    change: {
        dir: string;
        pct: number;
    };
}

const Marquee = async () => {
    const res = await fetch("https://openapi.programming-hero.com/api/bazardor/products");
    const headLines: MarqueeType[] = await res.json();

    return (
        // Stays pinned to the top of the screen while scrolling
        <div className="sticky top-0 z-40 flex items-stretch border-b border-gray-200 bg-white shadow-sm">

            {/* Fixed label on the left */}
            <div
                className="relative z-10 flex shrink-0 items-center py-2 pl-4 pr-7 text-sm font-bold [clip-path:polygon(0_0,100%_0,calc(100%-12px)_100%,0_100%)]"
                style={{ backgroundColor: GREEN, color: YELLOW }}
            >
                আজকের দাম
            </div>

            {/* Scrolling prices */}
            <div className="min-w-0 flex-1 overflow-hidden">
                <MarqueeText direction="right" duration={30}>
                    {headLines.map((item) => {
                        const isUp = item.change?.dir === "up";
                        const isDown = item.change?.dir === "down";

                        // up = red, down = green, anything else = neutral
                        const chipColor = isUp
                            ? "bg-red-50 text-red-600"
                            : isDown
                            ? "bg-green-50 text-green-700"
                            : "bg-gray-100 text-gray-500";

                        return (
                            <span
                                key={item.id}
                                className="inline-flex items-center gap-2 border-r border-gray-200 px-4 py-2 text-sm"
                            >
                                <span>{item.categoryIcon}</span>

                                <span className="font-semibold text-gray-800">
                                    {item.nameBn}
                                </span>

                                <span className="text-gray-600">
                                    {item.today?.toLocaleString("bn-BD")} টাকা/কেজি
                                </span>

                                <span
                                    className={`inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-xs font-semibold ${chipColor}`}
                                >
                                    {isUp ? "▲" : isDown ? "▼" : "–"}
                                    {item.change?.pct?.toLocaleString("bn-BD")}%
                                </span>
                            </span>
                        );
                    })}
                </MarqueeText>
            </div>
        </div>
    );
};

export default Marquee;