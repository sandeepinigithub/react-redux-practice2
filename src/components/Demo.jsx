import React, { useState } from "react";

export default function Demo() {
  const [countryId, setCountryId] = useState(0);
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
  return (
    <div>
      <h1>Interview Demo</h1>

      <select
        name="country"
        id="country"
        value={countryId}
        onChange={(e) => setCountryId(parseInt(e.target.value))}
      >
        <option value="0">Select</option>
        {country.map((c) => (
          <option value={c.id}>{c.name}</option>
        ))}
      </select>

      <ul>
        {countryId !== 0 ? (country
          .find((item) => item.id == countryId)
          .states.map((ele) => (
            <li>{ele.name}</li>
          ))): ''}
      </ul>
    </div>
  );
}
