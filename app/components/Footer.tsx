// Footer.tsx

export default function Footer() {
    return (

        <footer className="w-full border-t border-gray-200 mt-20">
            <div className="flex max-w-7xl mx-auto flex-col md:flex-row justify-between items-center text-[#898989] px-4 py-6 gap-4">
                <div className="flex justify-center md:justify-start">
                    Powered by Whisper on Together.ai
                </div>
                <div className="flex gap-4 items-center justify-center">
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                      <img className="h-5 w-5" src="/github-mark.svg" alt="GitHub" />
                    </a>
                    <a href="https://x.com" target="_blank" rel="noopener noreferrer">
                      <img className="h-5 w-5" src="https://ik.imagekit.io/senja/tr:w-24,f-png/Logos/x-logo_Q29Cxf5Qo.png?updatedAt=1726153505611" alt="twitter" />
                    </a>
                </div>
            </div>
        </footer>
    );
}



