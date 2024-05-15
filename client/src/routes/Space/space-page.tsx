import './lib/space.css'

import MeteorTextBox from './_components/meteor-textbox';
import SpaceParallax from './_components/space-parallax';
import ShipCards from './_components/ship-cards';
import JoinNow from './_components/join-now';
import Description from './_components/description';

const SpacePage = () => {
    return (  
        <main
            className="space-main w-full relative h-auto flex justify-center items-center p-1 flex-col gap-4"
        >
          {/* <TracingBeam className="px-4 gap-2 flex flex-col"> */}

            <div className="w-full h-[35rem] flex items-center relative">
              <SpaceParallax />
            </div>
            <MeteorTextBox />
            <div className="w-full h-auto flex flex-col gap-10 items-center justify-center relative pt-20">
              <ShipCards />
            </div>
            <div className='h-auto w-full relative pb-20'>
            {/* <div className="absolute w-full h-full left-0 top-[0%]"> */}
              {/* <Spline className=' w-full h-full ' scene="https://prod.spline.design/AB7jN3Bzk6y4l7A8/scene.splinecode" /> */}
            </div>
              <div className="w-full h-[30rem] flex flex-col relative">
                <Description />
              </div>
              <div className="w-full h-[40rem] flex flex-col gap-10 items-center justify-center relative pt-20">
                <JoinNow />
              </div>
            {/* </div> */}
          {/* </TracingBeam> */}
        </main>
    );
}
 
export default SpacePage;