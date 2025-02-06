import React from "react";

import TourDetailSection2Left from "./TourDetailSection2Left";
import TourDetailSectionRight from "./TourDetailSectionRight";
import { Calendar } from 'react-calendar';

const TourDetailSection2 = () => {
  return (
    <section>
      <div className="container mx-auto md:flex md:justify-between">
        <div className=" md:w-[65%]">
          <TourDetailSection2Left />
        </div>
        <div className=" md:w-[25%]">
          <TourDetailSectionRight />
        </div>
      </div>
    </section>
  );
};

export default TourDetailSection2;
