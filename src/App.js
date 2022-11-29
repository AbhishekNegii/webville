import "./App.css";
import { useState } from "react";
const data = [
  {
    tm_number: "9724084103",
    tm_name: "PRADIP BHAI",
    zsm_number: "9974252013",
    zsm_name: "Jay Ambe1 Communicati",
    zbm_number: "1234567890",
    zbm_name: "ARIF MALEK",
    ceo_sales_head: "9898049452",
    zone_name: "Surat",
    circle_name: "Gujarat",
    category: "Challenger",
  },
  {
    tm_number: "9724084103",
    tm_name: "PRADIP duplicate",
    zsm_number: "9974252013",
    zsm_name: "Jay Ambe1 Communicati",
    zbm_number: "1234567890",
    zbm_name: "ARIF MALEK",
    ceo_sales_head: "9898049452",
    zone_name: "Surat",
    circle_name: "Gujarat",
    category: "Challenger",
  },
  {
    tm_number: "9724084105",
    tm_name: "PRADIP BHAI",
    zsm_number: "9974252013",
    zsm_name: "Jay Ambe Communicati",
    zbm_number: "1234567890",
    zbm_name: "ARIF MALEK",
    ceo_sales_head: "9898049452",
    zone_name: "Surat",
    circle_name: "Gujarat",
    category: "Challenger",
  },
  {
    tm_number: "972484103",
    tm_name: "SK BHAI",
    zsm_number: "9974252013",
    zsm_name: "Jay Ambe 2 Communicati",
    zbm_number: "1234567890",
    zbm_name: "ARIF MALEK",
    ceo_sales_head: "9898049452",
    zone_name: "Surat",
    circle_name: "Gujarat",
    category: "Challenger",
  },
  {
    tm_number: "972484103",
    tm_name: "SK BHAI",
    zsm_number: "9974252013",
    zsm_name: "Jay Ambe 3 Communicati",
    zbm_number: "1234567890",
    zbm_name: "ARIF MALEK",
    ceo_sales_head: "9898049452",
    zone_name: "Surat",
    circle_name: "Gujarat",
    category: "Challenger",
  },
];

function App() {
  console.log(data);
  const [id, setId] = useState("");
  return (
    <div className="App">
      <input
        type="text"
        onChange={(e) => setId(e.target.value)}
        placeholder="Search by tm number"
      />
      <br />
      <br />
      {data
        .filter((item) => {
          if (id === "") {
            return item;
          } else {
            return item.tm_number.includes(id);
          }
        })
        .map((item) => {
          return (
            <li>
              tm_number:{item.tm_number}
              <br />
              tm_name:{item.tm_name}
              <br />
              zsm_number:{item.zsm_number}
              <br />
              zsm_name:{item.zsm_name}
              <br />
              zbm_number:{item.zbm_number}
              <br />
              zbm_name: {item.zbm_name}
              <br/>
              ceo/sales_head/marketing_head_number:
              {item.ceo_sales_head}
              <br />
              zone_name:{item.zone_name}
              <br />
              circle_name:{item.circle_name}
              <br />
              category: {item.category}
              <br />
              <br />
            </li>
          );
        })}
    </div>
  );
}

export default App;
