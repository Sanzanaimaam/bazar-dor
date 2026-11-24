
import Image from 'next/image';

const Banner = () => {
    const date = new Date().toLocaleDateString("bn-BD", {
        dateStyle: "full"
    });

    return (
        <section className="max-w-6xl mx-auto px-4 py-10">

            <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 bg-green-50 rounded-3xl p-5 md:p-8">

                {/* Right Side Content */}
                <div className="flex flex-col items-start gap-5">

                    <span className="bg-green-100 text-green-800 text-sm font-semibold px-4 py-2 rounded-full">
                        আপনার প্রতিদিনের বাজারের আপডেট
                    </span>

                    <p className="text-sm text-gray-500">
                        {date}
                    </p>

                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                        আজকের বাজারের দাম এক নজরে
                    </h1>

                    <p className="text-gray-600 text-base leading-relaxed">
                        নিত্যপ্রয়োজনীয় পণ্যের সর্বশেষ বাজারদর
                        জানুন সহজেই। সঠিক দাম জেনে করুন
                        প্রতিদিনের বাজার।
                    </p>

                    <a
                        href="#সব-পণ্য"
                        className="btn bg-green-800 hover:bg-green-900 text-white border-none rounded-xl px-6"
                    >
                        সব পণ্য দেখুন
                        <span>→</span>
                    </a>

                </div>
                
                {/* Left Side Image */}
                <div className="relative w-full aspect-[16/9]">
                    <Image
                        src="/banner.jpg"
                        alt="Fresh vegetables and grocery products"
                        fill
                        priority
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-contain rounded-2xl"
                    />
                </div>

            </div>

        </section>
    );
};

export default Banner;
