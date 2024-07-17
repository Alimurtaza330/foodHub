import React, { useEffect, useState } from 'react';
import Footer from '../components/Footer';
import Navbarr from '../components/Navbarr';
import Body from '../components/Body';
import Carousel from '../components/Carousel';

const Home = () => {
    const [foodItems, setFoodItems] = useState([]);
    const [foodCategory, setFoodCategory] = useState([]);
    const [searchResults, setSearchResults] = useState([]);

    const getData = async () => {
        try {
            const response = await fetch('http://localhost:8001/api/foodData', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({})
            });

            if (!response.ok) {
                throw new Error('Failed to fetch data');
            }

            const data = await response.json();
            setFoodItems(data.data.foodItems);
            setFoodCategory(data.data.foodCategory);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        getData();
    }, []);



    const handleSearch = async (query) => {
        try {
            const response = await fetch(`http://localhost:8001/api/search`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ query })
            });

            if (!response.ok) {
                throw new Error('Failed to fetch search results');
            }

            const data = await response.json();
            setSearchResults(data.results);
        } catch (error) {
            console.error('Error fetching search results:', error);
        }
    };

    return (
        <>

            <Navbarr onSearch={handleSearch} />
            <Carousel />

            <div className="container">
                {searchResults.length > 0 ? (
                    <div className='row mb-3 mt-4'>
                        <h2>Search Results</h2>
                        <div className='row'>
                            {searchResults.map((item, idx) => (
                                <div key={idx} className='col-12 col-md-6 col-lg-4 mb-3'>
                                    <Body key={item._id} item={item} options={item.options[0]} />
                                </div>
                            ))}
                        </div>
                    </div>
                ) : (
                    foodCategory.map((category, index) => (
                        <div className='row mb-3 mt-4' key={index}>
                            <h2>{category.CategoryName}</h2>
                            <div className='row'>
                                {foodItems.filter(item => item.CategoryName === category.CategoryName).map((filteredItem, idx) => (
                                    <div key={idx} className={`col-12 col-md-6 col-lg-4 mb-3 ${foodItems.filter(item => item.CategoryName === category.CategoryName).length === 1 ? 'mx-auto' : ''}`}>
                                        <Body key={filteredItem._id} item={filteredItem} options={filteredItem.options[0]} />
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))
                )}
            </div>

            <Footer />
        </>
    );
};

export default Home;
