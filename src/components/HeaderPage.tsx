import Image from 'next/image';
import NavLinks from './NavLinks';

const HeaderPage = () => {
    const date = new Date().toLocaleDateString("bn-BD", {
        dateStyle: "full"
    });

    return (
        <header className="w-full bg-white">
            <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">

                {/* Logo and Date */}
                <div className="flex items-center gap-3">
                    <Image
                        height={55}
                        width={55}
                        src="/Stack.png"
                        alt="বাজার দর logo"
                    />

                    <div>
                        <h2 className="text-xl font-bold text-gray-800">
                            বাজার দর
                        </h2>
                        <p className="text-sm text-gray-500 mt-1">
                            {date}
                        </p>
                    </div>
                </div>

                {/* Authentication Buttons */}
                <div className="flex items-center gap-3">
                    <button className="btn btn-outline border-green-700 text-green-700 hover:bg-green-700 hover:text-white">
                        সাইন ইন
                    </button>

                    <button className="btn bg-green-800 text-white border-none hover:bg-green-900">
                        সাইন আপ
                    </button>
                </div>

            </div>
            <hr className="my-2 border-gray-300" />
            <NavLinks/>
        </header>
    );
};

export default HeaderPage;