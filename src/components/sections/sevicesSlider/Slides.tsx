import SliderCard from "./SliderCard";
import { SliderItem } from "../../../assets/constants/data";

const Slides = ({ data }: { data: SliderItem[] }) => {
  return (
    <div className=" flex w-full gap-6">
      {data.map((data) => {
        return <SliderCard key={data.img} data={data} />;
      })}
    </div>
  );
};

export default Slides;
