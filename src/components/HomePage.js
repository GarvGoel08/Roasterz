import React, { useEffect, useRef, useState } from "react";
import ItemBox from "./ItemBox";
import CategoryBox from "./CategoryBox";
import ScrollableContainer from "./ScrollableContainer";

const HomePage = () => {
  const [Items, setItems] = useState([]);
  const [Categories, setCategories] = useState([]);
  const [Loading, SetLoading] = useState(true);
  const [DealItems, setDealItems] = useState([]);
  const [marvelItems, setMarvelItems] = useState([]);
  const [inspiratItems, setinspiratItems] = useState([]);
  const [animeItems, setAnimeItems] = useState([]);
  const [sportsItems, setSportsItems] = useState([]);
  const [OriginalItems, setOriginalItems] = useState([]);
  const baseURL = "https://roasterz-backend.vercel.app/";
  console.log(baseURL);
  const itemListRef = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = `${baseURL}api/categories/Get`;
        const response = await fetch(url, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        const jsonData = await response.json();
        console.log(jsonData);
        setCategories(jsonData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      SetLoading(true);
      try {
        const url = `${baseURL}api/items/Get`;
        const response = await fetch(url, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        const jsonData = await response.json();
        console.log(jsonData);
        setItems(jsonData);
        setDealItems(
          jsonData
            .filter((item) => item.discount > 10)
            .sort(() => Math.random() - 0.5)
        );
        setOriginalItems(
          jsonData.filter(
            (item) => item.Seller.ID === "670a407393ae7aeeeaf8979d"
          )
        );
        setMarvelItems(
          jsonData
            .filter((item) => item.type === "Superhero")
            .sort(() => Math.random() - 0.5)
        );

        setAnimeItems(
          jsonData
            .filter((item) => item.type === "Anime")
            .sort(() => Math.random() - 0.5)
        );

        setSportsItems(
          jsonData
            .filter((item) => item.type === "Sports")
            .sort(() => Math.random() - 0.5)
        );
        setinspiratItems(
          jsonData
            .filter((item) => item.type === "Inspirational")
            .sort(() => Math.random() - 0.5)
        );
        SetLoading(false);
      } catch (error) {
        SetLoading(false);
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div className="flex-grow">
        <div
          className={`spinner-border text-danger ${Loading ? "" : "Collapsed"}`}
          style={{ position: "fixed", top: "50%", right: "50%" }}
          role="status"
        >
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
      <div className={`${Loading ? "Collapsed" : ""}`}>
        <div className="FeaturedDiv">
          <div className="d-flex">
            <rect />
            <div className="FeaturedDivText">Hot Deals:</div>
          </div>
          <div className="FeaturedDivSubText">
            <b>Browse Today's Deals</b>
          </div>
          <ScrollableContainer>
            {DealItems.map((item, index) => (
              <ItemBox key={index} JSON={item} />
            ))}
          </ScrollableContainer>
        </div>
        <div className="FeaturedDiv">
          <div className="d-flex">
            <rect />
            <div className="FeaturedDivText">Featured Items:</div>
          </div>
          <div className="FeaturedDivSubText">
            <b>Browse Our Anime Collection</b>
          </div>
          <ScrollableContainer>
            {animeItems.map((item, index) => (
              <ItemBox key={index} JSON={item} />
            ))}
          </ScrollableContainer>
        </div>
        <div className="FeaturedDiv">
          <div className="d-flex">
            <rect />
            <div className="FeaturedDivText">Featured Items:</div>
          </div>
          <div className="FeaturedDivSubText">
            <b>Browse Our Superhero Collection</b>
          </div>
          <ScrollableContainer>
            {marvelItems.map((item, index) => (
              <ItemBox key={index} JSON={item} />
            ))}
          </ScrollableContainer>
        </div>
        <div className="FeaturedDiv">
          <div className="d-flex">
            <rect />
            <div className="FeaturedDivText">Featured Items:</div>
          </div>
          <div className="FeaturedDivSubText">
            <b>Browse Our Inspirational Posters Collection</b>
          </div>
          <ScrollableContainer>
            {inspiratItems.map((item, index) => (
              <ItemBox key={index} JSON={item} />
            ))}
          </ScrollableContainer>
        </div>
        <div className="FeaturedDiv" style={{ paddingBottom: "28px" }}>
          <div className="d-flex">
            <rect />
            <div className="FeaturedDivText">Featured Items:</div>
          </div>
          <div className="FeaturedDivSubText">
            <b>Browse Our Sports Collection</b>
          </div>
          <ScrollableContainer>
            {sportsItems.map((item, index) => (
              <ItemBox key={index} JSON={item} />
            ))}
          </ScrollableContainer>
        </div>
      </div>
    </>
  );
};

export default HomePage;
