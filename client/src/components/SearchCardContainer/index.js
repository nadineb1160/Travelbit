import React, {useState, useEffect} from "react";
import ImageSearch from '../ImageSearch';
import SearchCard from '../SearchCard';

const SearchCardContainer = () => {
    const [images, setImages] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        fetch(`https://pixabay.com/api/?key=16522680-31d5f48c0d4b1e06839be958d&q=${searchTerm}&image_type=photo&pretty=true`)
            .then(res => res.json())
            .then(data => {
                setImages(data.hits);
            })
            .catch(err => console.log(err))
    }, [searchTerm]);

    return (
        <div className="container mx-auto">
            <ImageSearch searchText={(text) => setSearchTerm(text)}/>

            {/* {!isLoading && images.length === 0 && <h1>No Images Found</h1>} */}
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                {images.map(image =>
                    <SearchCard key={image.id} image={image}/>
                )}
                
            </div>
        </div>
    )
}

export default SearchCardContainer
