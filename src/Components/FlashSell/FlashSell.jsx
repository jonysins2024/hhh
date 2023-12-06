import img0 from "../../assets/Items/Flash0.jpg";
import img1 from "../../assets/Items/Flash1.webp";
import img2 from "../../assets/Items/Flash2.webp";
import img3 from "../../assets/Items/Flash3.webp";
import img4 from "../../assets/Items/Flash4.webp";
import img5 from "../../assets/Items/Flash5.webp";
import img6 from "../../assets/Items/Flash6.webp";
import img7 from "../../assets/Items/Flash7.webp";

const flashSellProducts = [
  {
    pName: "Mini Tripod Stand For Mobile and Camera with mobile phone holder",
    pImg: "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/25806470/2023/11/10/51382768-01a9-40d5-bcc8-82aa41b0a1161699597816175TokyoTalkiesWomenBiegeSolidSuedeLapelCollarCroppedBlazer1.jpg",
    originalPrice: 200,
    discount: 20,
  },
  {
    pName: "Mini Tripod Stand For Mobile and Camera with mobile phone holder",
    pImg: "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/25293180/2023/10/2/a6246e54-9f7b-48dc-9914-90faee6482201696267809671Printedjerseytop1.jpg",
    originalPrice: 200,
    discount: 20,
  },
  {
    pName: "Mini Tripod Stand For Mobile and Camera with mobile phone holder",
    pImg: "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/25777080/2023/11/6/20e6c22b-34f3-4364-8ce9-f2c6261370661699257455790VMartInfantPrintedFleeceW-Pyjama1.jpg",
    originalPrice: 200,
    discount: 20,
  },
  {
    pName: "Mini Tripod Stand For Mobile and Camera with mobile phone holder",
    pImg: "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/21555906/2023/1/16/531f2ce1-b734-4c3d-94b1-cd44c06544fb1673842953069FaceSerumandGel1.jpg",
    originalPrice: 200,
    discount: 20,
  },
  {
    pName: "Mini Tripod Stand For Mobile and Camera with mobile phone holder",
    pImg: "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/16257914/2022/7/27/88c5108c-da79-467e-87c3-7cde9c7b19551658916925653-ESSENTIA-EXTRACTS-Vitamin-C-Face-Serum-15ML-6461658916925253-1.jpg",
    originalPrice: 100,
    discount: 20,
  },
  {
    pName: "Mini Tripod Stand For Mobile and Camera with mobile phone holder",
    pImg: "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/19117714/2023/8/23/83975ff6-24b0-40a5-80ba-740f02f080441692769672034-FACES-CANADA-Lasting-Shine-Hydrating-Beyond-Shine-Lip-Gloss--1.jpg",
    originalPrice: 200,
    discount: 20,
  },
  {
    pName: "Mini Tripod Stand For Mobile and Camera with mobile phone holder",
    pImg: "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/25864188/2023/11/11/5a9ae3ec-e0d7-4e3f-a41c-dc23cbf0957a1699694004789LackMeUp1.jpg",
    originalPrice: 200,
    discount: 20,
  },
  {
    pName: "Mini Tripod Stand For Mobile and Camera with mobile phone holder",
    pImg: "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/6628423/2022/4/23/fd9af2f5-eb1b-4425-9d4d-e0182a145c7b1650727146719-Himalaya-Purifying-Neem-Face-Wash-200ml-7211650727146376-1.jpg",
    originalPrice: 200,
    discount: 20,
  },
  {
    pName: "Mini Tripod Stand For Mobile and Camera with mobile phone holder",
    pImg: img4,
    originalPrice: 200,
    discount: 20,
  },
  {
    pName: "Mini Tripod Stand For Mobile and Camera with mobile phone holder",
    pImg: img5,
    originalPrice: 200,
    discount: 20,
  },
  {
    pName: "Mini Tripod Stand For Mobile and Camera with mobile phone holder",
    pImg: img6,
    originalPrice: 200,
    discount: 20,
  },
  {
    pName: "Mini Tripod Stand For Mobile and Camera with mobile phone holder",
    pImg: img7,
    originalPrice: 200,
    discount: 20,
  },
  {
    pName: "Mini Tripod Stand For Mobile and Camera with mobile phone holder",
    pImg: img1,
    originalPrice: 100,
    discount: 20,
  },
  {
    pName: "Mini Tripod Stand For Mobile and Camera with mobile phone holder",
    pImg: img0,
    originalPrice: 200,
    discount: 20,
  },
  {
    pName: "Mini Tripod Stand For Mobile and Camera with mobile phone holder",
    pImg: img2,
    originalPrice: 200,
    discount: 20,
  },
  {
    pName: "Mini Tripod Stand For Mobile and Camera with mobile phone holder",
    pImg: img3,
    originalPrice: 200,
    discount: 20,
  }
];

const FlashSell = () => {
  return (
    <div className="w-full bg-white myContainer  my-4 md:py-4 py-2  px-1  rounded-md ">
      <h1 className="text-center text-3xl font-bold  text-primaryColor1 capitalize my-4">
        Flash sell
      </h1>
      <div className="grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {flashSellProducts.map(({ pName, pImg, originalPrice, discount }) => {
          return (
            <div
              key={pName}
              className="cursor-pointer rounded-md p-3 shadow-md hover:-translate-y-2 transition-transform  duration-300"
            >
              <img
                src={pImg}
                alt="flash sell"
                className="w-[8rem] mx-auto  mb-2 rounded-[2px]"
              />

              <div className="space-y-2">
                <h3 className="text-[12.2px] md:text-normal">{pName}</h3>

                <h2 className="text-primaryColor1 text-[18px]  md:text-xl font-semibold">
                  ট30
                </h2>
                <p className="text-lg">
                  <span className="line-through text-slate-400">
                    ট{originalPrice}
                  </span>
                  <span className=""> - {discount}%</span>
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FlashSell;
