import React, {useState} from 'react'; 
import styled from 'styled-components'

const Img = styled.img`
    width: 100%;
    height:100%;
    object-fit: cover;
`;



export const Unsplashimage = ({url, key, imageDesc}) => {
    const [openInfobox, setInfobox] = useState(false);
    const toggleBox = () => setInfobox(value => !value);

    const imageClick = () => {
        console.log(imageDesc);
        console.log(openInfobox);
        toggleBox();

        
        
    }


    return ([
    <div class = "container"><Img src={url} key={key} alt="" onClick={() => imageClick()} /></div>
    
      
    ]);
}