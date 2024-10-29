import { useCallback, useEffect, useRef, useState } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [isNumberAllowed, setIsNumberAllowed] = useState(false);
  const [isCharacterAllowed, setIsCharacterAllowed] = useState(false);
  const [copied, setCopied] = useState(false);
  const [password, setPassword] = useState("");

  const passwordRef = useRef(null);

  const copyPassword = useCallback(() => {
    navigator.clipboard.writeText(password).then(() => {
      setCopied(true);
      passwordRef.current?.select();
      passwordRef.current?.setSelectionRange(0, 24);
      setTimeout(() => setCopied(false), 1000);
    });
  }, [password]);

  const passwordGenerator = useCallback(() => {
    let str = "ABCDFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    let pass = "";
    if (isNumberAllowed) str += "123456789";
    if (isCharacterAllowed) str += "!@#$%^&*(){}[]";
    for (let i = 1; i <= length; i++) {
      const char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [isNumberAllowed, isCharacterAllowed, length, setPassword]);

  useEffect(() => {
    passwordGenerator();
  }, [length, isNumberAllowed, isCharacterAllowed, passwordGenerator]);

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
              placeholder="Generated password"
              value={password}
              readOnly
              ref={passwordRef}
            />
            <button
              className="px-4 bg-blue-600 hover:bg-blue-800 rounded-e-lg text-lg text-white font-medium"
              onClick={copyPassword}
            >
              {copied ? "Copied" : "Copy"}
            </button>
          </div>

          <div className="flex space-x-3 mb-3">
            <input
              type="range"
              min="1"
              max="24"
              defaultValue={length}
              onChange={(e) => {
                setLength(e.target.value);
              }}
              className="cursor-pointer"
            />
            <label
              htmlFor="range "
              className="text-lg  text-white font-medium "
            >
              Range ({length})
            </label>
          </div>
          <div className="flex space-x-3">
            <input
              type="checkbox"
              onChange={() => {
                setIsCharacterAllowed((prev) => !prev);
              }}
            />
            <label
              htmlFor="characters"
              className="text-lg text-white font-medium"
            >
              Characters
            </label>
            <input
              type="checkbox"
              onChange={() => {
                setIsNumberAllowed((prev) => !prev);
              }}
            />
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
