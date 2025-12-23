import pack from "/src/assets/Gif/Pacman.gif";

function Creative() {
    return (
        <>
            <section
                className="relative w-full min-h-[calc(100vh-18vh)]  flex flex-col items-center overflow-hidden"
                style={{
                    background: 'radial-gradient(ellipse at center, #072a31, #000000)'
                }}
            >
                {/* Main Content Area with Pacman GIFs */}
                <div className="relative w-full flex-1 flex items-strecth justify-center px-4 sm:px-0">

                    {/* Left Pacman GIF with Blur Effect */}
                    <div className="absolute top-1 left-0 lg:-left-50 md:top-1/2 -translate-y-1/2 lg:block rotate-90 md:rotate-0 opacity-85">
                        <div className="relative">
                            <img
                                src={pack}
                                alt="Pacman Left"
                                className="size-120 md:size-70 lg:size-110 xl:size-130 object-contain scale-150 relative z-10"
                            />
                        </div>
                    </div>

                    {/* Center Content Container */}
                    <div className="flex-1 relative flex flex-col items-center justify-center z-10 w-full mx-auto text-center space-y-4 sm:space-y-6 px-4 sm:px-6 backdrop-blur-xs ">

                        {/* Main Heading */}
                        <h1 className="text-white font-normal text-3xl sm:text-3xl md:text-4xl lg:text-[40px] xl:text-5xl leading-tight font-worksans">
                            To Be the <span className="text-[#D89F5B]">Creative</span> Force Behind Brands<br className="hidden sm:block" />
                            That <span className="text-[#D89F5B]">Travel the World</span>
                        </h1>

                        {/* Description */}
                        <p className="text-white font-light text-md sm:text-lg md:text-xl lg:text-xl leading-relaxed tracking-wider max-w-xl  mx-auto font-nunito">
                            We aim to take brands in all eight directions expanding
                            their reach while making them trusted, impactful, and
                            unforgettable.
                        </p>
                    </div>

                    {/* Right Pacman GIF with Blur Effect */}
                    <div className="absolute -bottom-118 md:bottom-0 lg:-bottom-50 xl:-bottom-68 right-0 lg:-right-50 md:top-1/2 -translate-y-1/2 -rotate-90 md:rotate-0 opacity-85">
                        <div className="relative">
                            {/* Blur background layer */}
                            <img
                                src={pack}
                                alt="Pacman Right"
                                className="size-120 md:size-70 lg:size-110 xl:size-130 object-contain md:scale-x-[-1.5] transform scale-150 relative z-10"
                            />
                        </div>
                    </div>

                </div>
            </section>

        </>
    );
}

export default Creative;
