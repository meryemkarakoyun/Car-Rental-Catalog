import type { FC } from "react";
import Searchbar from "./searchbar";
import Year from "./year";

const Filter: FC = () => {
  return (
    <section className="mt-20 padding-x padding-y max-width">
      <div className="home-text-container">
        <h1 className="text-5xl font-bold text-gradient mb-2 leading-normal">
          Araba Kataloğu
        </h1>
        <p className="text-xl text-grey-light">
          Beğenebileceğin araçları keşfet
        </p>
      </div>
      <div className="home-filters items-center">
        <Searchbar />
        <div className="home-filter-container">
          <Year />
        </div>
      </div>
    </section>
  );
};

export default Filter;
