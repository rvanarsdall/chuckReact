import React, { Fragment, useState } from "react";

export function GetChuckJokes() {
  const [fetchData, setFetchData] = useState("No Name Yet");
  // fetchSubmit();
  // Notes from Intern Jacob: I tried to get this function to be called on page load but it keeps looping. Uncomment out the fetch submit to see this in action.
  function fetchSubmit() {
    let url = "http://api.icndb.com/jokes/random";
    fetch(url)
      .then(res => res.json())
      .then(res => {
        console.log(res.value.joke);
        setFetchData(res.value.joke);
      })
      .catch(err => console.log(err));
  }
  return (
    <Fragment>
      <button onClick={fetchSubmit}>Click Me</button>
      <h1>{fetchData}</h1>
    </Fragment>
  );
}
