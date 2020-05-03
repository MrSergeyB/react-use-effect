import React, {useEffect, useState} from "react";
import "./App.css";
import axios from "axios";
import List from "./components/list";
import Details from "./components/details";

function App() {
  const [usersList, setUsersList] = useState([]);
  const [loaderOne, setLoaderOne] = useState(true);
  const [dataLoaded, setDataLoaded] = useState(false);
  const [userInfo, setUserInfo] = useState({});
  const [id, setId] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(
        `https://cors-anywhere.herokuapp.com/https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/users.json`
      );

      setUsersList(res);
      setLoaderOne(false);
    };

    fetchData();

    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    setDataLoaded(false);
    const displayUserInfo = async (id) => {
      await axios
        .get(
          `https://cors-anywhere.herokuapp.com/https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/${id}.json`
        )
        .then((res) => {
          setUserInfo(res);
          setDataLoaded(true);
        });
    };

    displayUserInfo(id);

    // eslint-disable-next-line
  }, [id]);

  return (
    <div className="App">
      <List loaderOne={loaderOne} usersList={usersList} setId={setId} />
      <Details userInfo={userInfo} dataLoaded={dataLoaded} />
    </div>
  );
}

export default App;
