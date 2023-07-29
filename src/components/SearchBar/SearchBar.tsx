import "./searchbar.scss";

import { usePageContext } from "~/store/PageContext";
import { getByName } from "~/services/marvelAPI";

const SearchBar = () => {

  const { changeHeroList } = usePageContext();

  const handleSearch = (event) => {
    getByName(event.target.value).then((val) => {
      changeHeroList(val.data.results);
    });
  };

  return (<div className={"searchbar d-flex align-items-center px-4"}>
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="15"
          height="15"
          viewBox="0 0 15 15"
          fill="none"
        >
          <path
            d="M13.125 13.125L10.4062 10.4062M11.875 6.875C11.875 9.63642 9.63642 11.875 6.875 11.875C4.11358 11.875 1.875 9.63642 1.875 6.875C1.875 4.11358 4.11358 1.875 6.875 1.875C9.63642 1.875 11.875 4.11358 11.875 6.875Z"
            stroke="#747D94"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <input type="text" placeholder={"Busque um agente"} onChange={handleSearch}></input>
    </div>
  );
};
export default SearchBar;
