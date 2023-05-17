import React, {useState, useEffect, useMemo} from 'react';
import data from './Data';
import Foods from './Foods';

function FoodCategory() {
const [foodMenu, setfoodMenu] = useState([]);
const [selectedCategory, setSelectedCategory] = useState();

useEffect(() =>{
    setfoodMenu(data)
}, []);

function getFilteredList(){
    if(!selectedCategory){
        return foodMenu;
    }
    return foodMenu.filter((item) => item.category === selectedCategory);
}
  // Avoid duplicate function calls with useMemo
var filteredList = useMemo(getFilteredList, [selectedCategory, foodMenu]);

function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }
  return (
    <main>
        <section className='menu section'>
        <div className='title'>
          <h2>Our Menu</h2>
          <div className='underline'></div>
        </div>
       <select
            name="category-list"
            id="category-list"
            onChange={handleCategoryChange}
          >
            <option value="">All</option>
            <option value="breakfast">Breakfast</option>
            <option value="lunch">Lunch</option>
            <option value="shakes">Shakes</option>
          </select><hr />
          <br />
          
        <div className="sport-list">
        {filteredList.map((element, index) => (
          <Foods {...element} key={index} />
        ))}
      </div>
      </section>
    </main>
  )
}

export default FoodCategory
