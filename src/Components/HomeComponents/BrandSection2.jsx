import soc from "/src/assets/home/social.png"
import rin from "/src/assets/home/ring.png"
import mar from "/src/assets/home/market.png"
function BrandSection2() {
  return <>
    <div className="self-stretch h-[800px] relative bg-black overflow-hidden">
      <div className="left-[80px] top-[252px] absolute justify-start text-orange-400 text-6xl font-medium font-['Nunito'] leading-[96px]">
        Brand Personality
      </div>
      <div className="w-[553px] h-40 left-[66px] top-[360px] absolute overflow-hidden">
        <div className="w-[522px] left-[14px] top-0 absolute justify-start text-white text-3xl font-normal font-['Nunito'] leading-10">
          We aim to take brands in all eight directions — expanding their
          reach while making them trusted, impactful, and unforgettable.
        </div>
      </div>
      <img
        className="w-96 h-[528px] left-[547px] top-[231.49px] absolute origin-top-left rotate-[-32.96deg] rounded-[20px]"
        src={soc}
      />
      <img
        className="w-96 h-[528px] left-[758px] top-[197.86px] absolute origin-top-left rotate-[-18.44deg] rounded-[20px]"
        src={rin}
      />
      <img
        className="w-96 h-[512px] left-[952px] top-[224px] absolute rounded-[20px]"
        src={mar}
      />
    </div>
  </>
}
export default BrandSection2;