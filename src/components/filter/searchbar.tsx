import { useMemo, useState, type FC, type FormEvent } from "react";
import ReactSelect from "react-select";
import { makes, selectStyles } from "../../constants";
import { useSearchParams } from "react-router-dom";

const Searchbar: FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [make, setMake] = useState<string | null>(
    searchParams.get("make") || null
  );
  const [model, setModel] = useState<string | null>(
    searchParams.get("model") || null
  );

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (make) {
      searchParams.set("make", make);
    } else {
      searchParams.delete("make");
    }

    if (model) {
      searchParams.set("model", model);
    } else {
      searchParams.delete("model");
    }

    setSearchParams(searchParams);
  };

  const options = useMemo(
    () => makes.map((make) => ({ value: make, label: make })),
    []
  );
  return (
    <form
      onSubmit={handleSubmit}
      className="searchbar flex gap-4 items-start justify-center"
    >
      <div className="searchbar-item items-end">
        <div className="w-full flex flex-col z-49">
          <label htmlFor="make" className="font-semibold mb-2 text-sm">
            Marka
          </label>
          <ReactSelect
            inputId="make"
            options={options}
            styles={selectStyles}
            className="text-black"
            value={make ? { value: make, label: make } : null}
            onChange={(option) => setMake(option!.value)}
          />
        </div>

        <button type="submit" className="mb-1 search-btn sm:hidden">
          <img src="/search.svg" alt="ara" className="size-6" />
        </button>
      </div>

      <div className="searchbar-item items-start flex flex-col">
        <label htmlFor="model" className="font-semibold mb-2 text-sm">
          Model
        </label>

        <div className="w-full flex items-center">
          <div className="relative flex-1">
            <img
              src="/model-icon.png"
              alt="araç silüeti"
              className="size-6 absolute left-4 top-1/2 -translate-y-1/2 z-1"
            />
            <input
              id="model"
              type="text"
              placeholder="Model Yazınız..."
              className="searchbar-input"
              value={model || ""}
              onChange={(e) => setModel(e.target.value)}
            />
          </div>
          <button type="submit" className="mb-1 search-btn">
            <img src="/search.svg" className="size-6" alt="ara" />
          </button>
        </div>
      </div>
    </form>
  );
};

export default Searchbar;
