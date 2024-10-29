import { useState } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [isNumberAllowed, setIsNumberAllowed] = useState(false);
  const [isCharacterAllowed, setIsCharacterAllowed] = useState(false);

  const handleLength = (e) => {
    const value = e.target.value;
    setLength(value);
  };

  return (
    <>
      <div className="min-h-screen w-full flex flex-col justify-center items-center bg-black opacity-90  ">
        <div className="rounded-lg bg-gray-800 shadow-md shadow-gray-900 md:p-8 p-4 flex flex-col   ">
          <h1 className="text-2xl text-white  font-semibold mb-3">
            Password Generator
          </h1>
          <div className=" flex  mb-3">
            <input
              type="text"
              className="rounded-s-lg h-10 w-[300px] outline-none focus:outline-none p-3"
              placeholder="Generated Password"
            />
            <button className="px-4 bg-blue-600 hover:bg-blue-800 rounded-e-lg text-lg text-white font-medium">
              Copy
            </button>
          </div>

          <div className="flex space-x-3 mb-3">
            <input
              type="range"
              min="8"
              max="16"
              defaultValue={length}
              onChange={handleLength}
            />
            <label
              htmlFor="range "
              className="text-lg  text-white font-medium "
            >
              Range ({length})
            </label>
          </div>
          <div className="flex space-x-3">
            <input type="checkbox" />
            <label
              htmlFor="characters"
              className="text-lg text-white font-medium"
            >
              Characters
            </label>
            <input type="checkbox" />
            <label htmlFor="numbers" className="text-lg text-white font-medium">
              Numbers
            </label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
