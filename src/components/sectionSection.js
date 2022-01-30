import React from "react";
import Chart1 from "../assets/images/chart1.png";

function SectionSection() {
  return (
    <div className="py-6">
      <div className="flex flex-row space-x-10">
        <SectionCard title="Daily Income" amount="$ 345" image={Chart1} style={true}/>
        <SectionCard title="Daily Expense" amount="$ 380" image={Chart1} />
        <SectionCard title="Weekly Income" amount="$ 5380" image={Chart1} />
        <SectionCard title="Daily Income" amount="$ 4320" image={Chart1} />
      </div>
    </div>
  );
}

export default SectionSection;

const SectionCard = ({ style, title, amount, image }) => {
  return (
     <div className="basis-1/4">
 <div className={style ? "flex  bg-blue-600 p-3 rounded-md" : "flex bg-white p-3 rounded-md"}>
      <div className="mr-5"> 
        <p
          className={
            style ? "text-white text-sm mb-5" : "text-black text-xs mb-5"
          }
        >
          {title}
        </p>
        <p className={style ? "text-white text-2xl" : "text-black text-2xl"}>
          {amount}
        </p>
      </div>

      <img src={image} className="w-20 mx-auto"/>
    </div>
     </div> 
   
  );
};
