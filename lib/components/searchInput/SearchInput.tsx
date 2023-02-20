const SearchInput = () => {
  return (
    <>
      <div className="w-full max-w-2xl relative">
        <div className="absolute top-[10px] left-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5 text-white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
        </div>
        <input
          type="search"
          name="mainSearch"
          id="mainSearch"
          aria-label="Quick search"
          placeholder="Quick search"
          tabIndex={1}
          autoComplete="off"
          className="appearance-none w-full p-3 py-2 pl-12 pr-12 rounded-lg border border-white border-opacity-20 text-sm text-white leading-relaxed bg-white bg-opacity-10 placeholder:text-gray-400 focus:outline-none focus:border-accent caret-accent search-cancel-button"
        />
        <div className="ml-auto pl-3 flex-none text-sm font-medium text-gray-400 absolute right-4 top-[10px]">
          ⌘K
        </div>
      </div>
    </>
  );
};

export default SearchInput;
