import { SearchIcon } from "../../assets/Icons/Icons";

const SearchBar = ({
  className,
  placeholder,
  inputClassName,
}: {
  className?: string;
  placeholder: string;
  inputClassName?: string;
}) => {
  return (
    <div className={"flex items-center  bg-[#F2F2F2] rounded  " + className}>
      <div className="p-2 cursor-pointer">
        <SearchIcon />
      </div>
      <input
        type="text"
        placeholder={placeholder}
        className={`flex-1 bg-[#F2F2F2] placeholder:text-sm   border-none outline-none ${inputClassName}`}
      />
    </div>
  );
};

export default SearchBar;
