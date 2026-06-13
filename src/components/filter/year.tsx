import { useState, type FC, type FormEvent } from "react";
import { useSearchParams } from "react-router-dom";

const Year: FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [year, setYear] = useState<string | null>(
    searchParams.get("year") || null
  );

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (year) {
      searchParams.set("year", year);
    }
    setSearchParams(searchParams);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col">
      <label htmlFor="year" className="text-white font-semibold mb-2 text-sm">
        Yıl
      </label>
      <div className="flex items-center">
        <input
          id="year"
          type="number"
          value={year || ""}
          onChange={(e) => setYear(e.target.value)}
          className="w-32 rounded-l-2xl input-bg"
          min={1900}
        />
        <button className="input-bg rounded-r-2xl cursor-pointer">
          <img src="/search.svg" className="size-5" alt="ara" />
        </button>
      </div>
    </form>
  );
};

export default Year;
