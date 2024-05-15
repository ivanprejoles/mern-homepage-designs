import '../lib/space.css'
import { useEffect, useRef } from "react";

const SpaceParallax = () => {
  const parallaxRefs = useRef<{ [key: string]: HTMLImageElement }>({});
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const spaceContainer = useRef<any>()

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const xValue = e.clientX - window.innerWidth / 2;
      const yValue = e.clientY - window.innerHeight / 2;
      const rotateDegree = (xValue / (window.innerWidth / 2)) * 20;

      Object.values(parallaxRefs.current).forEach((el: HTMLImageElement) => {
        const speedx: number = Number(el.dataset.speedx);
        const speedy: number = Number(el.dataset.speedy);
        const speedz: number = Number(el.dataset.speedz);
        const rotateSpeed: number = Number(el.dataset.rotation);
        
        const isInLeft = parseFloat(getComputedStyle(el).left) < window.innerWidth / 2 ? 1 : -1;

        const zValue = e.clientX - parseFloat(getComputedStyle(el).left) * isInLeft * 0.1;

        el.style.transform = `
            translateX(calc(-50% + ${-xValue * speedx}px)) 
            translateY(calc(-50% + ${yValue * speedy}px))
            rotateY(${rotateDegree * rotateSpeed}deg)
            perspective(2300px)
            translateZ(${zValue * speedz}px)`;
      });
    };

    spaceContainer.current?.addEventListener("mousemove", handleMouseMove);

    return () => {
      spaceContainer.current?.removeEventListener("mousemove", handleMouseMove);
    };

  }, [parallaxRefs]);

  return (
    <div ref={spaceContainer} className='w-[150%] h-[150%] absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]' >
        <img ref={(el: HTMLImageElement) => (parallaxRefs.current[1] = el)} data-speedx="0.04" data-speedy="0.04" data-speedz="0.0" data-rotation="0.0" alt="background" className="parallax bg-img space stars w-full absolute h-[45rem] top-[50%] left-[50%] " />
        <img src="/page_image/Space/milky_way.png" ref={(el: HTMLImageElement) => (parallaxRefs.current[2] = el)} data-speedx="0.145" data-speedy="0.121" data-speedz="0.0" data-rotation="0.06"  alt="milky way" className="parallax milky-way" />
        <div className="text parallax text-lg bg-gradient-to-r text-transparent bg-clip-text text-neutral-800 drop-shadow-2xl bg-opacity-60  from-pink-500 via-purple-300 to-indigo-400">
          <h1>Space</h1>
          <h2>Beyond Earth</h2>
        </div>
        <img src="/page_image/Space/gold_spiral.png" ref={(el: HTMLImageElement) => (parallaxRefs.current[3] = el)} data-speedx="0.145" data-speedy="0.121" data-speedz="0.0" data-rotation="0.06"  alt="golden spiral" className="parallax gold-spiral" />
        <img src="/page_image/Space/nebula_cloud.png" ref={(el: HTMLImageElement) => (parallaxRefs.current[4] = el)} data-speedx="0.145" data-speedy="0.121" data-speedz="0.0" data-rotation="0.06" alt="nebula cloud" className="parallax nebula-cloud" />
        <img src="/page_image/Space/cloud.png" ref={(el: HTMLImageElement) => (parallaxRefs.current[5] = el)} data-speedx="0.251" data-speedy="0.144" data-speedz="0.53" data-rotation="0.4"  alt="cloud" className="parallax cloud" />
        <img src="/page_image/Space/cloud.png" ref={(el: HTMLImageElement) => (parallaxRefs.current[6] = el)} data-speedx="0.251" data-speedy="0.144" data-speedz="0.53" data-rotation="-0.1"  alt="cloud" className="parallax cloud-2" />
        <img src="/page_image/Space/ship_blue.png" ref={(el: HTMLImageElement) => (parallaxRefs.current[7] = el)} data-speedx="0.25" data-speedy="0.200" data-speedz="0.53" data-rotation="0.4" alt="blue ship" className="parallax ship-blue" />
        <img src="/page_image/Space/ship_cool.png" ref={(el: HTMLImageElement) => (parallaxRefs.current[8] = el)} data-speedx="0.25" data-speedy="0.200" data-speedz="0.7" data-rotation="-.01"  alt="cool ship" className="parallax cool-ship" />
        <div className="text parallax" />
    </div>
  );
};

export default SpaceParallax;
