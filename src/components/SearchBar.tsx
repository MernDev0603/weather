import { useState } from "react";

interface SearchBarProps {
  onSearch: (city: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [city, setCity] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // Prevents page refresh
    if (city.trim() !== "") {
      onSearch(city);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="my-6">
      <input
        type="text"
        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Enter a location..."
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
    </form>
  );
};

export default SearchBar;
