import React, {useEffect, useState} from "react";
import "./App.css";
import axios from "axios";
import List from "./components/list";
import Details from "./components/details";

function App() {
  const [usersList, setUsersList] = useState("");
  const [loading, setLoading] = useState(true);
  const [loadingDetails, setLoadingDetails] = useState(false);
  const [userInfo, setUserInfo] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get(
          `https://cors-anywhere.herokuapp.com/https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/users.json`
        )
        .then((res) => {
          setUsersList(res);
          setLoading(false);
        });
    };

    fetchData();
  }, []);

  const displayUserInfo = async (id) => {
    await axios
      .get(
        `https://cors-anywhere.herokuapp.com/https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/${id}.json`
      )
      .then((res) => {
        setUserInfo(res);
        setLoadingDetails(true);
      });
  };

  return (
    <div className="App">
      {loading ? (
        <p>Loading...</p>
      ) : (
        <List usersList={usersList} displayUserInfo={displayUserInfo} />
      )}
      <Details loading={loadingDetails} userInfo={userInfo} />
    </div>
  );
}

export default App;
