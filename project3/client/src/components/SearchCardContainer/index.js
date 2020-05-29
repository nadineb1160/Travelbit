import React, {useState, useEffect} from "react";
import ImageSearch from '../ImageSearch';
import Card from '../Card';

const SearchCardContainer = () => {
    const [images, setImages] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    // useEffect(() => {
    //     fetch(`https://pixabay.com/api/?key=${process.env.PIXABAY_API_KEY}&q=${searchTerm}&image_type=photo&pretty=true`)
    //         .then(res => res.json())
    //         .then(data => {
    //             setImages(data.hits);
    //         })
    //         .catch(err => console.log(err))
    // }, [searchTerm]);

    return (
        <div className="container mx-auto">
            <ImageSearch searchText={(text) => setSearchTerm(text)}/>

            {/* {!isLoading && images.length === 0 && <h1>No Images Found</h1>} */}
            
            <div className="grid grid-cols-4 gap-4">
                {/* {images.map(image =>
                    <Card key={image.id} image={image}/>
                )} */}
                <SearchCard />
                <SearchCard />
                <SearchCard />
                <SearchCard />
               
            </div>
        </div>
    )
}

export default SearchCardContainer
