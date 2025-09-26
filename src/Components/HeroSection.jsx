import React  from 'react';
import heroBackground from '../Images/hu-chen-Rtly0Yrtv8I-unsplash.jpg';
import heroBackground2 from '../Images/vatsal-bhatt-gCbW7cDxSaI-unsplash.jpg';
import heroBackground1 from '../Images/emmalee-couturier-oFx8LJcKO00-unsplash.jpg';
import heroBackgroundGrey from '../Images/angela-duxbury-07HVdZ7fnmQ-unsplash.jpg';
import heroBackgroundVertical from '../Images/charlesdeluvio-nENtqUAiNm8-unsplash.jpg';


export default function HeroSection() {
  return (
    // removed bg-gradient-to-r from-[#9781bc] to-white
    <section className="relative  overflow-hidden">
      {/* subtle overlay pattern */}
      <div
        className="relative min-h-screen h-screen w-full 
        flex items-center justify-center 
        text-white 
        px-4 sm:px-6 lg:px-8"
        style={{ 
          backgroundImage: `url(${heroBackground})`,
          // backgroundSize: '120%', // 120% = zoomed out, 80% = zoomed in
          // backgroundPosition: 'center top',
          backgroundSize: 'cover', // Better for mobile
          backgroundPosition: 'center center',
          backgroundRepeat: 'no-repeat'
        }}
        // backgroundPosition: 'center center'     // Centered (default)
        // backgroundPosition: 'center top'        // Pan up
        // backgroundPosition: 'center bottom'     // Pan down  
        // backgroundPosition: 'left center'       // Pan left
        // backgroundPosition: 'right center'      // Pan right
        // backgroundPosition: 'left top'          // Pan to top-left corner
        // backgroundPosition: 'right bottom'      // Pan to bottom-right corner
        // backgroundPosition: '30% 70%'           // 30% from left, 70% from top
        // backgroundPosition: '50% 20%'           // Centered horizontally, near top
        // backgroundPosition: '-100px 0px'        // Shift 100px left
        // backgroundPosition: '0px -50px'         // Shift 50px up
      >
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Foreground text */}
      <div className="relative z-10 text-center max-w-4xl mx-auto">
        {/* Gradient colour text. give bg colour, clip to text, text transparent. */}
        <h1 className="text-4xl sm:text-6xl lg:text-8xl xl:text-9xl 
          font-[hng] leading-tight tracking-wide 
          bg-gradient-to-r from-[#9781bc]/80 via-[#D2A855]/80 to-[#B83A63]/80 bg-clip-text text-transparent">
            Build the Family You Dream Of
        </h1>
        {/* <h2 className='text-purple-100/50 leading-tight tracking-wide'> */}
        <h2 className="text-lg sm:text-xl lg:text-2xl 
          leading-tight tracking-wide 
          bg-gradient-to-r from-[#9781bc] via-[#D2A855] to-[#B83A63] bg-clip-text text-transparent">
            Care to Cradle, with you always.
        </h2>
          
      </div>
    </div>

     
    </section>
  );
}
