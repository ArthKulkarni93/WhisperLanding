// Navbar.tsx

import { Roboto } from 'next/font/google';

const roboto = Roboto({
    subsets: ['latin'],
    weight: ['400', '700'],
    display: 'swap',
});

export default function Navbar() {
    return (
        <div className={`${roboto.className}`}>
            <div className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center border px-4 md:px-8 py-3 border-[#e0e2e3] rounded-none md:rounded-xl bg-[#f4f4f4] w-full max-w-full md:max-w-6xl mx-auto mt-0 md:mt-4">
                <div className="text-[#292929] text-xl md:text-2xl font-semibold cursor-pointer">
                    Whisper.io
                </div>

                <div className="hidden lg:flex gap-6 md:gap-8 text-neutral-700 text-base md:text-lg cursor-pointer">
                    <div>Product</div>
                    <div>Solutions</div>
                    <div>Developers</div>
                    <div>Resources</div>
                    <div>Pricing</div>
                    <div>Community</div>
                </div>

                <div className="flex gap-2 md:gap-4 items-center text-sm md:text-md">
                    <button className="font-semibold hover:text-neutral-700 p-2 rounded-md cursor-pointer">
                        Sign in
                    </button>
                    <button className="flex items-center font-medium bg-black text-white rounded-xl px-3 md:px-4 py-2 hover:text-neutral-300 hover:bg-neutral-800 cursor-pointer">
                        Get started
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="greater than icon">
                            <polyline
                                points="6,4 10,8 6,12"
                                stroke="currentColor"
                                strokeWidth="2"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </button>
                </div>
            </div>

            <div className="h-16 md:h-20"></div>
        </div>
    );
}
