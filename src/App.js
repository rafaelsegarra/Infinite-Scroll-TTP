import { Heading } from "./components/Heading";
import { UnsplashImage } from "./components/UnsplashImage";
import styled from "styled-components";
import { stockData } from "./data";
import React, { useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import "./App.css";

function App() {
  const [images, setImage] = useState([]);

  useEffect(() => {
    fetchImages();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchImages = () => {
    var items = [];
    for (var i = 0; i < 20; i++) {
      let number = getRandomArbitrary(0, 47);

      function getRandomArbitrary(min, max) {
        return Math.round(Math.random() * (max - min) + min);
      }
      items.push(stockData[number]);
    }
    setImage([...images, ...items]);
  };

  return (
    <div className="App">
      <Heading />
      <div className="mainboard">
        <div className="mainboard__container">
          <Wrapper>
            <Container>
              <InfiniteScroll
                dataLength={images.length}
                next={fetchImages}
                hasMore={true}
                
              >
                <Container>
                  {images.map((image, index) => (
                    <UnsplashImage url={image.images.orig.url} key={index} />
                  ))}
                </Container>
              </InfiniteScroll>
            </Container>
          </Wrapper>
        </div>
      </div>
    </div>
  );
}

export default App;

const Wrapper = styled.div`
  background-color: white;
  display: flex;
  width: 100%;
  height: 100%;
  margin-top: 15px;
  justify-content: center;
`;

const Container = styled.div`
  margin: 0 auto;
  height: 100%;
  background-color: white;
`;
