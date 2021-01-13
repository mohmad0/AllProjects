import React , { useState , useEffect } from 'react';
import { PortfolioSection , PortfolioTitle , Span , PortfolioList , PortfolioItem , ImageWrapper , Image , Overlay , OverlaySpan } from './style.js';
import axios from 'axios';
// axios.get('js/data.json').then(res => {useimages(res.data.portfolio)})
// Images == state && useImages == setState({}) In Class based component

const Portfolio = () => {

		const [images , setImages] = useState([]);
		const [store , setStore] = useState([]);

		// useEffect( () => {
		// 	async function fetchData() {
		// 		// const apiFile = await fetch("js/data.json");
		// 		// const data = await apiFile.json();
		// 		// JSON.parse(data)
		// 			const apiFile = await fetch("./data.json");
		// 			const data = await apiFile.json();
		// 	  try{
		// 			console.log( "From Portfolio res data", data)
		// 	  }

		// 	  catch(e) {
		// 	    console.log( e)
		// 	  }

		// 	}

		// 	fetchData()

		// },[] )

		// useEffect( () => {
		// 	  fetch(`./data.json`, {
		// 	      headers : { 
		// 	        'Content-Type': 'application/json',
		// 	        'Accept': 'application/json'
		// 	       }

		// 	    })
		// 	    .then((response) => response.json())
		// 	    .then((messages) => {console.log("messages");});

		// },[] )



		useEffect( () => {
			return(
				axios.get("data.json").then((res) => {

					setStore(res.data)


				})
				setImages(JSON.parse(store))
			)
		},[] )

		// JSON.parse(res)

		// useEffect( () => {
			// axios.get('js/data.json').then(res => {
			// 	JSON.parse(res.data)
			// 	console.log( 'From Portfolio New' , typeof res.data )
			// })

		// 	axios({
		// 	  method:'get',
		// 	  url:'js/data.json',
		// 	 headers: {
		// 	         'Content-Type': 'application/json',
		// 	        Accept: 'application/json'
		// 	    },
		// 	  responseType:'json'

		// 	})
		// 	// .then(res => { setimages(res.data.portfolio) })
		// 	.then((res) => {
		// 	  try{
		// 	  	// JSON.parse(res.data)
		// 	  	console.log( "From Portfolio res data", res)
		// 	    // setimages(JSON.parse(res.data))
		// 	  }
		// 	  catch(e) {
		// 	    console.log(res.data, e)
		// 	  }
		// 	})
		// },[] )

		console.log('from Portfolio dddddddd',eval(store))

		// setImages(JSON.parse(store))

		const PortfolioImages = images.map((imageItem) => {
			return(
                <ImageWrapper key={imageItem.id}>
                    <Image src={imageItem.image} alt="" />
                    <Overlay>
                        <OverlaySpan>
                            Show Image
                        </OverlaySpan>
                    </Overlay>
                </ImageWrapper>
			)
		})

		return (
        <PortfolioSection>
            <PortfolioTitle><Span>My</Span> Portfolio</PortfolioTitle>
            <PortfolioList>
                <PortfolioItem active>All</PortfolioItem>
                <PortfolioItem>HTML</PortfolioItem>
                <PortfolioItem>Photoshop</PortfolioItem>
                <PortfolioItem>Wordpress</PortfolioItem>
                <PortfolioItem>Mobile</PortfolioItem>
            </PortfolioList>
            
            <div className="box"> { PortfolioImages } </div>
            
        </PortfolioSection>
		);
	}

export default Portfolio;
