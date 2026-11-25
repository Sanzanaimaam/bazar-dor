import Image from "next/image";

// Palette taken from the business card
const GREEN = "#0F6A36";      // main green
const GREEN_DARK = "#0B5429"; // darker green (panel)
const YELLOW = "#F6E81E";     // bright yellow accent

// Sawtooth edges (like the card), drawn as repeating SVG backgrounds
const zigzagVertical = {
    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='40' viewBox='0 0 20 40'%3E%3Cpath d='M20 0L0 20L20 40Z' fill='%230B5429'/%3E%3C/svg%3E")`,
    backgroundRepeat: "repeat-y",
    backgroundSize: "20px 40px",
};

const zigzagHorizontal = {
    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='20' viewBox='0 0 40 20'%3E%3Cpath d='M0 20L20 0L40 20Z' fill='%230B5429'/%3E%3C/svg%3E")`,
    backgroundRepeat: "repeat-x",
    backgroundSize: "40px 20px",
};

const Banner = () => {
    const date = new Date().toLocaleDateString("bn-BD", {
        dateStyle: "full",
    });

    return (
        <section className="max-w-6xl mx-auto px-4 py-10">

            <div
                className="relative overflow-hidden rounded-3xl shadow-xl"
                style={{ backgroundColor: GREEN }}
            >

                {/* Soft glow behind the text */}
                <div className="pointer-events-none absolute -left-20 top-8 h-72 w-72 rounded-full bg-white/10 blur-3xl"></div>

                {/* Dark panel: bottom strip on mobile, right side on desktop */}
                <div
                    className="absolute inset-x-0 bottom-0 h-1/3 md:inset-y-0 md:left-auto md:right-0 md:h-auto md:w-[28%]"
                    style={{ backgroundColor: GREEN_DARK }}
                >
                    {/* Sawtooth edge: top on mobile */}
                    <div
                        className="absolute inset-x-0 -top-5 h-5 md:hidden"
                        style={zigzagHorizontal}
                    ></div>

                    {/* Sawtooth edge: left on desktop */}
                    <div
                        className="absolute inset-y-0 -left-5 hidden w-5 md:block"
                        style={zigzagVertical}
                    ></div>

                    <div className="hidden h-full items-center justify-center md:flex">
                        <span
                            className="rotate-180 text-[7rem] lg:text-[9rem] font-extrabold leading-none select-none [writing-mode:vertical-rl]"
                            style={{ color: `${YELLOW}30` }}
                        >
                            বাজারদর
                        </span>
                    </div>
                </div>

                {/* Content */}
                <div className="relative flex flex-col px-6 pt-10 md:min-h-[560px] md:justify-center md:px-12 md:py-16">

                    {/* Text side */}
                    <div className="relative z-10 flex flex-col items-start gap-5 md:w-1/2">

                        <p className="text-sm text-green-100/70">{date}</p>

                        <div>
                            <p
                                className="text-2xl md:text-4xl font-extrabold leading-[1.3]"
                                style={{ color: YELLOW }}
                            >
                                আজকের বাজারের
                            </p>
                            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.25] tracking-tight text-white">
                                দাম <br />
                                এক নজরে
                            </h1>
                        </div>

                        <p className="max-w-md text-base leading-relaxed text-green-50/80">
                            নিত্যপ্রয়োজনীয় পণ্যের সর্বশেষ বাজারদর জানুন সহজেই।
                            সঠিক দাম জেনে করুন প্রতিদিনের বাজার।
                        </p>

                        <a
                            href="#সব-পণ্য"
                            className="btn h-12 rounded-full border-none px-8 font-bold shadow-lg shadow-black/20 hover:brightness-95"
                            style={{ backgroundColor: YELLOW, color: GREEN_DARK }}
                        >
                            সব পণ্য দেখুন
                            <span>→</span>
                        </a>
                    </div>

                    {/* Image: stands on the bottom edge of the banner */}
                    <div className="relative mt-6 h-[22rem] w-full md:absolute md:bottom-0 md:right-4 lg:right-10 md:mt-0 md:h-[96%] md:w-[52%]">
                        <Image
                            src="/uberboy.png"
                            alt="Grocery delivery boy"
                            fill
                            priority
                            sizes="(max-width: 768px) 100vw, 52vw"
                            className="object-contain object-bottom drop-shadow-2xl"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;