import React, { Fragment, useState } from "react";

export function GetChuckJokes() {
  const [fetchData, setFetchData] = useState("No Name Yet");
  // fetchSubmit();
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
