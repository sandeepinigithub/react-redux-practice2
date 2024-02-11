import React, { useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { updateByPayload } from "../reduxStore/countrySlice";

export default function Demo(props) {
  const dispatch = useDispatch();
  let cId = useSelector((state) => state.country.id);
  console.log(cId);

  //   const [countryId, setCountryId] = useState(0);
  let country = [
    {
      id: 1,
      name: "India",
      states: [
        {
          id: 101,
          name: "India A",
        },
        {
          id: 102,
          name: "India B",
        },
      ],
    },
    {
      id: 2,
      name: "China",
      states: [
        {
          id: 201,
          name: "China A",
        },
        {
          id: 202,
          name: "China B",
        },
      ],
    },
  ];

  const handleChange = (e) => {
    // setCountryId(parseInt(e.target.value));
    dispatch(updateByPayload(parseInt(e.target.value)));
  };
  return (
    <div>
      <h1>Interview Demo</h1>

      <select
        name="country"
        id="country"
        value={cId}
        onChange={(e) => handleChange(e)}
      >
        <option value="0">Select</option>
        {country.map((c, index) => (
          <option key={index} value={c.id}>
            {c.name}
          </option>
        ))}
      </select>

      <ul>
        {cId !== 0
          ? country
              .find((item) => item.id == cId)
              .states.map((ele, index) => <li key={index}>{ele.name}</li>)
          : ""}
      </ul>
    </div>
  );
}
