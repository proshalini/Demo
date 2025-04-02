import { useState, useEffect } from "react";

const Carousel = () => {
    const slides = [
        "https://feeds.abplive.com/onecms/images/uploaded-images/2023/03/07/62b39ecb38dcf42dc6e6be36ea36bee21678184593935594_original.jpg",
        "https://feeds.abplive.com/onecms/images/uploaded-images/2023/03/07/62b39ecb38dcf42dc6e6be36ea36bee21678184593935594_original.jpg",
        "https://feeds.abplive.com/onecms/images/uploaded-images/2023/03/07/62b39ecb38dcf42dc6e6be36ea36bee21678184593935594_original.jpg",
        "https://feeds.abplive.com/onecms/images/uploaded-images/2023/03/07/62b39ecb38dcf42dc6e6be36ea36bee21678184593935594_original.jpg",
    ];
    const [index, setIndex] = useState(0);
    const totalSlides = slides.length;

    const nextSlide = () => {
        setIndex((prevIndex) => (prevIndex + 1) % totalSlides);
    };

    const prevSlide = () => {
        setIndex((prevIndex) => (prevIndex - 1 + totalSlides) % totalSlides);
    };

    useEffect(() => {
        const interval = setInterval(nextSlide, 2000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative w-full h-full overflow-hidden">
            <div
                className="flex w-full h-full transition-transform duration-700 ease-in-out"
                style={{ transform: `translateX(-${index * 100}%)` }}
            >
                {slides.map((slide, i) => (
                    <div key={i} className="w-full flex-shrink-0 relative">
                        <img src={slide} className="w-full h-full object-cover" alt={`Slide ${i + 1}`} />
                    </div>
                ))}
            </div>

            {/* Floating Buttons (Desktop & Tablet) */}
            <div className="hidden md:flex absolute bottom-0 left-1/2 transform -translate-x-1/2 -translate-y-8 w-90% justify-center gap-12 p-4">
                {[
                    { title: "About Us", subtitle: "A History of", highlight: "EXCELLENCE" },
                    { title: "Learning", subtitle: "Our", highlight: "CURRICULUM" },
                    { title: "Enrol Online", subtitle: "Join Our", highlight: "FAMILY" },
                    { title: "News & Events", subtitle: "Read Our Latest", highlight: "NEWS" },
                ].map((btn, i) => (
                    <button key={i} className="w-64 md:w-48 h-32 bg-[#681C2F] text-white font-bold text-lg rounded-lg p-4 shadow-lg">
                        <span className="block text-sm uppercase">{btn.title}</span>
                        {btn.subtitle} <br /><span className="text-xl">{btn.highlight}</span>
                    </button>
                ))}
            </div>

            {/* Floating Buttons (Mobile) */}
            <div className="flex md:hidden flex-col items-center gap-4 p-4">
                {[
                    { title: "About Us", subtitle: "A History of", highlight: "EXCELLENCE" },
                    { title: "Learning", subtitle: "Our", highlight: "CURRICULUM" },
                    { title: "Enrol Online", subtitle: "Join Our", highlight: "FAMILY" },
                    { title: "News & Events", subtitle: "Read Our Latest", highlight: "NEWS" },
                ].map((btn, i) => (
                    <button key={i} className="w-64 h-24 bg-[#681C2F] text-white font-bold text-lg rounded-lg p-4 shadow-lg">
                        <span className="block text-sm uppercase">{btn.title}</span>
                        {btn.subtitle} <br /><span className="text-xl">{btn.highlight}</span>
                    </button>
                ))}
            </div>

            {/* Navigation Buttons */}
            <button onClick={prevSlide} className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full">❮</button>
            <button onClick={nextSlide} className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full">❯</button>
        </div>
    );
};

export default Carousel;
