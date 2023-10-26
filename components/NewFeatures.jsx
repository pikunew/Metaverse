import styles from "../styles";
import Image from "next/image";

const NewFeatures = ({ imgUrl, title, subtitle }) => (
  <div className="flex-1 flex flex-col sm:max-w-[500px] min-w-[210px]">
    <div
      className={`${styles.flexCenter} w-[70px] h-[70px] rounded-[24px] bg-[#c93179]`}
    >
      <Image src={imgUrl} alt="icon" className="w-1/2 h-1/2 object-contain" />
    </div>
    <h1 className="mt-[26px] font-bold text-[36px] leading-[50.24px] text-[#6D6875]">
       {title}
    </h1>
    <p className="flex-1 mt-[16px] font-normal text-[18px] text-[#292929] leading-[32.4px]">
      {subtitle}
    </p>
  </div>
);

export default NewFeatures;
