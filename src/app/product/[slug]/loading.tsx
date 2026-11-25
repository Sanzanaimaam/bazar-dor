
const RelatedCardSkeleton = () => (
    <div className="overflow-hidden rounded-2xl border border-gray-100 bg-white p-3 shadow-sm">
        <div className="mb-3 h-28 rounded-xl bg-gray-200" />
        <div className="mb-2 h-4 w-3/4 rounded bg-gray-200" />
        <div className="h-5 w-1/2 rounded bg-[#0F6A36]/15" />
    </div>
);

const Loading = () => {
    return (
        <section
            className="mx-auto max-w-6xl animate-pulse px-4 py-8 md:py-10"
            aria-busy="true"
            aria-label="পেজ লোড হচ্ছে"
        >
            {/* ব্রেডক্রাম্ব */}
            <div className="mb-6 flex gap-3">
                <div className="h-4 w-12 rounded bg-gray-200" />
                <div className="h-4 w-20 rounded bg-gray-200" />
                <div className="h-4 w-28 rounded bg-gray-200" />
            </div>

            {/* প্রোডাক্ট বিস্তারিত কার্ড */}
            <div className="overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-sm">
                <div className="h-1.5 w-full bg-[#F6E81E]/60" />

                <div className="grid gap-8 p-5 sm:p-8 md:grid-cols-2">
                    {/* ছবির অংশ */}
                    <div className="space-y-4">
                        <div className="aspect-square w-full rounded-2xl bg-gray-200" />

                        <div className="flex gap-3">
                            {[1, 2, 3, 4].map((item) => (
                                <div
                                    key={item}
                                    className="h-16 w-16 rounded-xl bg-gray-200 sm:h-20 sm:w-20"
                                />
                            ))}
                        </div>
                    </div>

                    {/* তথ্যের অংশ */}
                    <div className="flex flex-col">
                        {/* ক্যাটাগরি ট্যাগ */}
                        <div className="mb-4 h-6 w-24 rounded-full bg-[#0F6A36]/15" />

                        {/* নাম */}
                        <div className="mb-3 h-8 w-4/5 rounded bg-gray-300" />
                        <div className="mb-6 h-8 w-2/5 rounded bg-gray-300" />

                        {/* দাম */}
                        <div className="mb-6 flex items-center gap-4">
                            <div className="h-9 w-32 rounded bg-[#0F6A36]/20" />
                            <div className="h-5 w-20 rounded bg-gray-200" />
                            <div className="h-6 w-16 rounded-full bg-[#F6E81E]/60" />
                        </div>

                        {/* বিবরণ */}
                        <div className="mb-8 space-y-3">
                            <div className="h-3 w-full rounded bg-gray-200" />
                            <div className="h-3 w-full rounded bg-gray-200" />
                            <div className="h-3 w-11/12 rounded bg-gray-200" />
                            <div className="h-3 w-2/3 rounded bg-gray-200" />
                        </div>

                        {/* পরিমাণ */}
                        <div className="mb-6 flex items-center gap-4">
                            <div className="h-4 w-16 rounded bg-gray-200" />
                            <div className="h-11 w-32 rounded-full bg-gray-200" />
                        </div>

                        {/* বাটন */}
                        <div className="mt-auto flex flex-col gap-3 sm:flex-row">
                            <div className="h-12 flex-1 rounded-full bg-[#0F6A36]/25" />
                            <div className="h-12 w-full rounded-full bg-gray-200 sm:w-14" />
                        </div>
                    </div>
                </div>
            </div>

            {/* সম্পর্কিত প্রোডাক্ট */}
            <div className="mb-5 mt-12 space-y-2">
                <div className="h-6 w-44 rounded bg-gray-300" />
                <div className="h-1 w-12 rounded-full bg-[#F6E81E]/70" />
            </div>

            <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
                {[1, 2, 3, 4].map((item) => (
                    <RelatedCardSkeleton key={item} />
                ))}
            </div>
        </section>
    );
};

export default Loading;