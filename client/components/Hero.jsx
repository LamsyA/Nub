
const background = "https://www.avanse.com/viewPagesAssets/img/study-in-india-banner.webp"
const Hero = () => {
  return( 
    <div className="flex">
      <div className="py-20 bg-contain bg-no-repeat flex bg-right"
  style={{
    backgroundImage: `url(${background})`,
    position: 'relative',
    top: 0,
    left: -10,
    width: '100%',
    height: '100%',
    zIndex: -2
  }}
  >
    <div className="flex justify-start items-center position "
    
    >
      <div className="flex p-40 font-bold text-2xl text-black ">
        Hero
      </div>
      
    </div>  
    </div>
    </div>
  
    )
};

export default Hero;
