import { useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [age, setAge] = useState();
  const [phone, setPhone] = useState();
  const [gender, setGender] = useState("");

  const payload = {
    name : {name},
    age : {age},
    phone : {phone},
    gender : {gender}
  }

  return (
    <>
      <div className="w-full h-screen mx-auto items-center flex justify-center">
        <form className="items-center w-full py-25 px-30 bg-orange-400 rounded-lg flex flex-col">
          <input
            className="bg-gray-200 px-5 py-2 text-xl rounded-md my-5 text-center"
            type="text"
            value={name}
            placeholder="Name"
            onChange={(e) => {
              setName(e.target.value);
              console.log(name);
            }}
          />
          <input
            className="bg-gray-200 px-5 py-2 text-xl rounded-md my-5 text-center"
            type="number"
            placeholder="Age"
            value={age}
            onChange={(e) => {
              setAge(e.target.value);
              console.log(age);
            }}
          />
          <input
            className="bg-gray-200 px-5 py-2 text-xl rounded-md my-5 text-center"
            type="number"
            value={phone}
            placeholder="Phone"
            onChange={(e) => {
              setPhone(e.target.value);
              console.log(phone);
            }}
          />
          <select className="bg-gray-200 px-5 py-2 text-xl rounded-md my-5 text-center"
          onChange={(e) => {
            setGender(e.target.value);
            console.log(gender);
          }}>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
          <input
            className="bg-gray-500 text-white px-40 py-2 text-xl rounded-md my-5 text-center cursor-pointer"
            type="submit"
            placeholder="Submit"
            onClick={(e) => {
              alert(JSON.stringify(payload));
            }}
          />
        </form>
      </div>
    </>
  );
}

export default App;
