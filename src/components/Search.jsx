import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { useState, useEffect } from "react";
import { useNavigate, createSearchParams } from "react-router-dom";

import { callAPI } from "../utils/CallApi";

const Search = () => {
  const [suggestions, setSuggestions] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("All");
  const navigate = useNavigate();

  const onHandleSubmit = (e) => {
    e.preventDefault();

    navigate({
      pathname: "search",
      search: `${createSearchParams({
        category: `${category}`,
        searchTerm: `${searchTerm}`,
      })}`,
    });

    setSearchTerm("");
    setCategory("All");
  };

  const getSuggestions = () => {
    callAPI(`data/suggestions.json`).then((suggestionResults) => {
      setSuggestions(suggestionResults);
    });
  };

  useEffect(() => {
    getSuggestions();
  }, []);

  return (
    <div className="w-[100%]">
      <div className="flex items-center h-10 bg-amazonclone-yellow rounded">
        <select onChange={(e) => setCategory(e.target.value)} className="p-2 h-[100%] bg-gray-200 max-w-14 text-gray-500 focus:text-gray-900 text-sm font-semibold focus:outline-amazonclone-yellow border-r border-gray-300 rounded-l">
          <option className="bg-white">All categories</option>
          <option className="bg-white">Alexa Skills</option>
          <option className="bg-white">Amazon Devices</option>
          <option className="bg-white">Amazon Fashion</option>
          <option className="bg-white">Amazon Fresh</option>
          <option className="bg-white">Amazon Fresh Meat</option>
          <option className="bg-white">Amazon Pharmacy</option>
          <option className="bg-white">Appliances</option>
          <option className="bg-white">Apps & Games</option>
          <option className="bg-white">Audible Audiobooks</option>
          <option className="bg-white">Baby</option>
          <option className="bg-white">Beauty</option>
          <option className="bg-white">Books</option>
          <option className="bg-white">Car & Motorbike</option>
          <option className="bg-white">Clothing & Accessories</option>
          <option className="bg-white">Collectibes</option>
          <option className="bg-white">Computer & Accessories</option>
          <option className="bg-white">Deals</option>
          <option className="bg-white">Electronics</option>
          <option className="bg-white">Furniture</option>
          <option className="bg-white">Garden & Outdoors</option>
          <option className="bg-white">Giftcards</option>
          <option className="bg-white">Grocery & Gourment Foods</option>
          <option className="bg-white">Health & Personal Care</option>
          <option className="bg-white">Home & Kitchen</option>
          <option className="bg-white">Industrial & Scientific</option>
          <option className="bg-white">Jewellery</option>
          <option className="bg-white">Kindle Story</option>
          <option className="bg-white">Luggage & Bags</option>
          <option className="bg-white">Luxury Beauty</option>
          <option className="bg-white">Movies & TV Shows</option>
          <option className="bg-white">Music</option>
          <option className="bg-white">Musical Instruments</option>
          <option className="bg-white">Office Products</option>
          <option className="bg-white">Pet Supplies</option>
          <option className="bg-white">Prime Video</option>
          <option className="bg-white">Shoes & Handbags</option>
          <option className="bg-white">Software</option>
          <option className="bg-white">Sports & Outdoors</option>
          <option className="bg-white">Subscribe & Save</option>
          <option className="bg-white">Tools & Home Improvements</option>
          <option className="bg-white">Toys & Games</option>
          <option className="bg-white">Under &#8377;500</option>
          <option className="bg-white">Video Games</option>
          <option className="bg-white">Watches</option>
        </select>
        <input
          className="flex grow items-center pl-2 h-[100%] col-auto text-black focus:outline-amazonclone-yellow placeholder-slate-500"
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search Amazon.in"
        />
        <button onClick={onHandleSubmit} className="w-[45px]">
          <MagnifyingGlassIcon className="h-[27px] m-auto stroke-slate-900" />
        </button>
      </div>
      {suggestions && (
        <div className="bg-white text-black w-full z-40 absolute">
          {suggestions
            .filter((suggestion) => {
              const currentSearchTerm = searchTerm.toLowerCase();
              const title = suggestion.title.toLowerCase();
              return (
                currentSearchTerm &&
                title.startsWith(currentSearchTerm) &&
                title !== currentSearchTerm
              );
            })
            .slice(0, 10)
            .map((suggestion) => (
              <div
                key={suggestion.id}
                onClick={() => setSearchTerm(suggestion.title)}
              >
                {suggestion.title}
              </div>
            ))}
        </div>
      )}
    </div>
  );
};

export default Search;
