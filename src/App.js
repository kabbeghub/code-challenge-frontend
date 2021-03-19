import React, {useState, useEffect} from 'react'; 
import {Heading} from './components/Heading';
import {Loader} from './components/Loader';
import {Unsplashimage} from './components/Unsplashimage';

import axios from 'axios';
import styled from 'styled-components';
import InfiniteScroll from 'react-infinite-scroll-component';

const WrapperImage = styled.section`
  max-width: 100%;
  display: grid;
  grid-gap: 4em;
  grid-template-columns: repeat(auto-fit, minmax(660px, 1fr));
  grid-auto-rows: 700px;
`;

function App() {
  const [images, setImages] = useState([]);
  const [counter, setCounter] = useState(0);

  const [getMore, setGetmore] = useState(true);
  const toggleMore = () => setGetmore(value => !value);

  useEffect(() => {
    
    fetchImages();
  },  [])
    
  const fetchImages = () => {
    const apiRoot = 'https://api.unsplash.com/';
    const accessKey = process.env.REACT_APP_ACCESSKEY;
    
    axios
      .get(`${apiRoot}photos/?client_id=${accessKey}&page=${counter}&limit=10`)
      .then(res => {
        setImages([...images, ...res.data]);
        setCounter((c) => c + 1);
        console.log(res.data)
      })
  
  }

  return (
    <div className="App">
      <Heading/>
      <InfiniteScroll
        dataLength={images.length}
        next={fetchImages}
        hasMore={true}
        loader={<Loader/>}
      >
        <WrapperImage>
          {images.map(image => (
            <Unsplashimage url={image.urls.regular} key={image.id} imageDesc={image.alt_description}/>
          ))}
        </WrapperImage>
      </InfiniteScroll>
    </div>
  );
}

export default App;
