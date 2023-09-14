import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

const Search = () => {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
      }}
      className="border-black border-[1px] rounded-3xl flex justify-center items-center text-black p-2 w-80"
    >
      <MagnifyingGlassIcon className="w-6" />
      <input className="outline-none border-none text-black text-left w-full ml-4" />
      <button className="hidden" type="submit">
        submit
      </button>
    </form>
  );
};

export default Search;
