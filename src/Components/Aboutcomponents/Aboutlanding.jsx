import { useEffect, useRef, useState } from "react";
import pockone from "/src/assets/about/pocky one.png";
import pocktwo from "/src/assets/about/pocktwo.png";
import pockthree from "/src/assets/about/pokythree.png";
import pockfour from "/src/assets/about/poky four.png";

// second set (DO NOT TOUCH)
import pokone from "/src/assets/about/pokone.png";
import poktwo from "/src/assets/about/poktwo.png";
import pokthree from "/src/assets/about/pokthree.png";
import pokfour from "/src/assets/about/pokfour.png";

function Aboutlanding() {
    const firstSetRef = useRef(null);

    const [secondSetStart, setSecondSetStart] = useState(false);
    const [showText, setShowText] = useState(false);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [isScrollingDown, setIsScrollingDown] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            const firstSet = firstSetRef.current;
            if (!firstSet) return;

            const rect = firstSet.getBoundingClientRect();
            const windowHeight = window.innerHeight;
            const currentScrollY = window.scrollY;

            // determine scroll direction
            setIsScrollingDown(currentScrollY > lastScrollY);
            setLastScrollY(currentScrollY);

            // trigger zone
            if (rect.top < windowHeight * 0.8 && rect.bottom > 0) {
                let progress = Math.min(
                    1,
                    Math.max(0, 1 - rect.top / (windowHeight * 0.8))
                );

                if (!isScrollingDown) progress = 1 - progress;

                const imgs = firstSet.querySelectorAll("img");

                const moveX = window.innerWidth * progress;
                const moveY = window.innerHeight * progress;

                if (imgs.length >= 4) {
                    imgs[0].style.transform = `translate(-${moveX}px, -${moveY}px)`;
                    imgs[1].style.transform = `translate(${moveX}px, -${moveY}px)`;
                    imgs[2].style.transform = `translate(-${moveX}px, ${moveY}px)`;
                    imgs[3].style.transform = `translate(${moveX}px, ${moveY}px)`;
                }

                // show second set
                if (isScrollingDown && progress > 0.98) {
                    setSecondSetStart(true);

                    // delay 300ms then show text
                    setTimeout(() => setShowText(true), 300);
                } 
                
                // hide when scrolling up
                else if (!isScrollingDown && progress < 0.5) {
                    setSecondSetStart(false);
                    setShowText(false);
                }

            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollY, isScrollingDown]);

    return (
        <div className="min-h-screen w-full bg-black flex flex-col items-center justify-start pt-20 text-white">

            {/* FIRST SET */}
            <div ref={firstSetRef} className="w-full flex flex-col gap-4 items-center">
                <div className="flex gap-4">
                    <img src={pockone} className="w-40 transition-all duration-700 ease-out" />
                    <img src={pocktwo} className="w-40 transition-all duration-700 ease-out" />
                </div>
                <div className="flex gap-4">
                    <img src={pockthree} className="w-40 transition-all duration-700 ease-out" />
                    <img src={pockfour} className="w-40 transition-all duration-700 ease-out" />
                </div>
            </div>

            {/* SECOND SET */}
            <div className="relative w-80 h-80 mt-32">
                {/* LEFT */}
                <img
                    src={pokone}
                    className={`absolute w-32 top-1/2 -translate-y-1/2 transition-all duration-700 ease-out
                        ${secondSetStart ? "left-0 opacity-100" : "-left-96 opacity-0"}`}
                />

                {/* TOP */}
                <img
                    src={poktwo}
                    className={`absolute w-32 left-1/2 -translate-x-1/2 transition-all duration-700 ease-out
                        ${secondSetStart ? "top-0 opacity-100" : "-top-96 opacity-0"}`}
                />

                {/* RIGHT */}
                <img
                    src={pokthree}
                    className={`absolute w-32 top-1/2 -translate-y-1/2 transition-all duration-700 ease-out
                        ${secondSetStart ? "right-0 opacity-100" : "-right-96 opacity-0"}`}
                />

                {/* BOTTOM */}
                <img
                    src={pokfour}
                    className={`absolute w-32 left-1/2 -translate-x-1/2 transition-all duration-700 ease-out
                        ${secondSetStart ? "bottom-0 opacity-100" : "-bottom-96 opacity-0"}`}
                />
            </div>

            {/* FADE + SCALE IN TEXT (AFTER SECOND SET) */}
            <div
                className={`w-3/4 max-w-2xl text-center mt-20 transition-all duration-700 ease-out
                    ${showText ? "opacity-100 scale-100" : "opacity-0 scale-75"}`}
            >
                <h1 className="text-4xl font-bold mb-4">About Us</h1>
                <p className="text-lg leading-relaxed text-gray-300">
                    EtThicks is not just another digital agency — we're a storytelling powerhouse
                    rooted in truth, trust, and transformation. Born from the Tamil word “Ettuthikkum”,
                    meaning to reach in all eight directions, we specialize in content that carries
                    your brand farther — emotionally, culturally, and commercially.
                </p>
            </div>

            <div className="h-screen"></div>
        </div>
    );
}

export default Aboutlanding;
