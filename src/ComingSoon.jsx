import MaaKAuveryHeartIcon from "./Components/MaaKauveryHeartIcon";
import logo from "./Images/Maa Kauvery Logo.svg"

export default function ComingSoon() {
    return (
      <div className="min-h-screen bg-purple-100 flex flex-col items-center justify-center ">
        {/* <div className="w-0.5 h-32  text-smrounded-lg flex items-center justify-center mb-8">
            <img src={logo} alt="Maa Kauvery Logo" />
        </div> */}
        {/* <h1 className="text-center  font-[pop]   text-gray-800">Launching Soon</h1> */}
        <MaaKAuveryHeartIcon 
          className="w-16 h-16 
                      sm:w-20 sm:h-20 
                      md:w-24 md:h-24 
                      lg:w-28 lg:h-28 
                      animate-pulse" 
        />

        <div className="text-center  font-[pop]   text-gray-800">Launching soon</div>
      </div>
    );
  }