// import React from 'react';
import MarqueeText from "react-marquee-text"
import "react-marquee-text/dist/styles.css"

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
    const res = await fetch("https://openapi.programming-hero.com/api/bazardor/products")
    const data = await res.json()
    const headLines = data
    return (
        <div className=" bg-white border border-gray-300 mt-1">
            <MarqueeText direction="right" duration={30}>
                {
                    headLines.map((bullet: MarqueeType) => <span key={bullet.id} className="inline-flex items-center gap-3 mx-1 p-1">
                        <p>
                            {bullet.categoryIcon}
                            {bullet.nameBn}
                            {bullet.today?.toLocaleString("bn-BD")} টাকা/কেজি
                            {bullet.change?.pct.toLocaleString("bn-BD")}
                            {bullet.change?.dir === "up" ? (
                                <span className="text-green-600"> ▼ </span>
                            ) : (
                                <span className="text-red-600"> ▲ </span>
                            )}

                            {bullet.change?.pct?.toLocaleString("bn-BD")}%
                        </p>
                    </span>)
                }
            </MarqueeText>

        </div>
    );
};

export default Marquee;