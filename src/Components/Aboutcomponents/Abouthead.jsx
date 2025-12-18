import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

gsap.registerPlugin(ScrollTrigger);

function Abouthead() {
  const mainRef = useRef(null);
  const canvasRef = useRef(null);
  const lenisRef = useRef(null);
  const tickerCallbackRef = useRef(null);
  const ctxRef = useRef(null);

  const startFrame = 216043;
  const endFrame = 216386;
  const frameCount = endFrame - startFrame + 1;

  useEffect(() => {
    // Prevent multiple initializations
    if (lenisRef.current) return;

    const canvas = canvasRef.current;
    const mainElement = mainRef.current;

    if (!canvas || !mainElement) return;

    // Initialize Lenis
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
      smoothTouch: false,
    });

    lenisRef.current = lenis;
    lenis.on("scroll", ScrollTrigger.update);

    // Create ticker callback
    const tickerCallback = (time) => {
      if (lenisRef.current) {
        lenisRef.current.raf(time * 1000);
      }
    };
    tickerCallbackRef.current = tickerCallback;

    gsap.ticker.add(tickerCallback);
    gsap.ticker.lagSmoothing(0);

    // Create GSAP context
    const ctx = gsap.context(() => {
      const context = canvas.getContext("2d");

      const setCanvasSize = () => {
        const pixelRatio = window.devicePixelRatio || 1;
        canvas.width = window.innerWidth * pixelRatio;
        canvas.height = window.innerHeight * pixelRatio;
        canvas.style.width = window.innerWidth + "px";
        canvas.style.height = window.innerHeight + "px";
        context.setTransform(1, 0, 0, 1, 0, 0);
        context.scale(pixelRatio, pixelRatio);
      };

      setCanvasSize();

      const currentFrame = (index) =>
        `/product/Timeline 1_${(startFrame + index)
          .toString()
          .padStart(8, "0")}.png`;

      const images = [];
      const videoFrames = { frame: 0 };

      const render = () => {
        const pixelRatio = window.devicePixelRatio || 1;
        const canvasWidth = canvas.width / pixelRatio;
        const canvasHeight = canvas.height / pixelRatio;

        context.clearRect(0, 0, canvas.width, canvas.height);
        const img = images[videoFrames.frame];

        if (img?.complete && img.naturalWidth > 0) {
          const imageAspect = img.naturalWidth / img.naturalHeight;
          const canvasAspect = canvasWidth / canvasHeight;

          let drawWidth, drawHeight, drawX, drawY;

          if (imageAspect > canvasAspect) {
            drawHeight = canvasHeight;
            drawWidth = drawHeight * imageAspect;
            drawX = (canvasWidth - drawWidth) / 2;
            drawY = 0;
          } else {
            drawWidth = canvasWidth;
            drawHeight = drawWidth / imageAspect;
            drawX = 0;
            drawY = (canvasHeight - drawHeight) / 2;
          }

          context.drawImage(img, drawX, drawY, drawWidth, drawHeight);
        }
      };

      // Load first frame
      const firstImage = new Image();
      firstImage.src = currentFrame(0);
      firstImage.onload = () => {
        images[0] = firstImage;
        render();
      };

      // Preload remaining frames
      for (let i = 1; i < frameCount; i++) {
        const img = new Image();
        img.src = currentFrame(i);
        img.onload = () => {
          images[i] = img;
        };
      }

      // ScrollTrigger
      ScrollTrigger.create({
        trigger: mainElement,
        start: "top top",
        end: `+=${frameCount * 10}`,
        scrub: 1,
        pin: true,
        anticipatePin: 1,
        pinSpacing: true,
        fastScrollEnd: true,
        onUpdate: (self) => {
          const targetFrame = Math.min(
            frameCount - 1,
            Math.floor(self.progress * (frameCount - 1))
          );
          videoFrames.frame = targetFrame;
          render();
        },
      });

      // Resize handler
      const handleResize = () => {
        setCanvasSize();
        render();
        ScrollTrigger.refresh();
      };

      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }, mainElement);

    ctxRef.current = ctx;

    // Cleanup function
    return () => {
      // Kill all ScrollTriggers created by this component
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.trigger === mainElement) {
          trigger.kill();
        }
      });

      // Revert GSAP context
      if (ctxRef.current) {
        ctxRef.current.revert();
        ctxRef.current = null;
      }

      // Remove ticker callback
      if (tickerCallbackRef.current) {
        gsap.ticker.remove(tickerCallbackRef.current);
        tickerCallbackRef.current = null;
      }

      // Destroy Lenis
      if (lenisRef.current) {
        lenisRef.current.destroy();
        lenisRef.current = null;
      }

      // Clear canvas
      if (canvas && canvasRef.current) {
        const context = canvas.getContext("2d");
        const pixelRatio = window.devicePixelRatio || 1;
        context.clearRect(0, 0, canvas.width, canvas.height);
      }

      // Reset scroll position
      window.scrollTo(0, 0);

      // Final refresh
      ScrollTrigger.refresh();
    };
  }, []);

  return (
    <div ref={mainRef} className="w-full">
      <section className="relative w-screen h-[70vh] sm:h-[80vh] md:h-[90vh] lg:h-[100svh] flex overflow-hidden bg-black">
        <canvas 
          ref={canvasRef} 
          className="z-10 w-screen h-full"
        />
        <div className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none">
          {/* Your content here */}
        </div>
      </section>
    </div>
  );
}

export default Abouthead;
