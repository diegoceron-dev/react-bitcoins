import React from "react";
import Table from "./../components/Table"
import axios from "axios";
import { useEffect, useState } from "react";

const Home = () => {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");

  const getData = async () => {
    try {
      const res = await axios.get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
      );
      setCoins(res.data);
      console.log(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
        <div className="row">
          <input
            type="text"
            placeholder="Search a Coin"
            className="form-control bg-dark text-light border-0 mt-4 text-center"
            autoFocus
            onChange={(e) => setSearch(e.target.value)}
          />

          <Table coins={coins} search={search} />
        </div>
  );
};

export default Home;