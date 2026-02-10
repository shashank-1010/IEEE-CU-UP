import { useState, useEffect } from 'react';
import { X } from 'lucide-react';

const LandingPopup = () => {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        // Show popup immediately when component mounts
        setIsOpen(true);
    }, []);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
            <div className="relative w-full max-w-md md:max-w-lg lg:max-w-xl bg-white rounded-lg shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-300">

                {/* Close Button */}
                <button
                    onClick={() => setIsOpen(false)}
                    className="absolute top-2 right-2 p-2 bg-white/80 hover:bg-white text-gray-800 rounded-full transition-colors z-10"
                    aria-label="Close popup"
                >
                    <X size={24} />
                </button>

                {/* Content */}
                <div className="w-full h-auto">
                    {/* Using the path relative to the public folder */}
                    <img
                        src="/images/team/inaugurationbanner.jpeg"
                        alt="Inauguration Banner"
                        className="w-full h-auto object-contain max-h-[80vh]"
                    />
                </div>
            </div>
        </div>
    );
};

export default LandingPopup;
