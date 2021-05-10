import axios from "axios";
import { useState } from "react";
import { FC, SyntheticEvent } from "react";

const Home: FC = () => {
  let [url, setUrl] = useState("");
  let handleClick = (e: SyntheticEvent) => {
    e.preventDefault();
    axios
      .post("http://localhost:8080/api/addByUrl", {
        link: url,
      })
      .then((response) => {
        console.log(response.data.tag);
      });
  };
  return (
    <div>
      <br></br>
      <h1>Shorten URL</h1>
      <div>
        <input
          type="text"
          placeholder="Enter URL"
          id="url"
          onChange={(event) => setUrl(event.target.value)}
        />
        <input onClick={handleClick} type="submit" value="Shorten" />
      </div>
    </div>
  );
};

export default Home;
