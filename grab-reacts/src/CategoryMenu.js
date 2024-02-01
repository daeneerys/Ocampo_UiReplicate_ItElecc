import React from 'react'
import Category from './Category';

const CategoryMenu = () => {
  return (
    <div className="row">
          {categoryData.map(category => (
              <Category
                  categoryObj={category} />
          ))}
      </div>
  );
}

export default CategoryMenu;

const categoryData = [
    {
        name: "Japanese",
        photoName: "assets/Japanese.jpg"
    },
    {
        name: "Beef",
        photoName: "assets/Beef.jpg"
    },
    {
        name: "Burgers",
        photoName: "assets/Burgers.jpg"
    },
    {
        name: "Filipino",
        photoName: "assets/Filipino.jpg"
    },
    {
        name: "Italian",
        photoName: "assets/Italian.jpg"
    },
    {
        name: "Pizza",
        photoName: "assets/Pizza.jpg"
    },
    {
        name: "Quick Bites",
        photoName: "assets/Quick Bites.jpg"
    },
    {
        name: "Chinese",
        photoName: "assets/Chinese.jpg"
    },
    {
        name: "Breakfast & Brunch",
        photoName: "assets/Breakfast.jpg"
    },
    {
        name: "Snack",
        photoName: "assets/Snack.jpg"
    },
    {
        name: "American",
        photoName: "assets/American.jpg"
    },
    {
        name: "Casual Dining",
        photoName: "assets/Casual.jpg"
    },
    {
        name: "Kiosk",
        photoName: "assets/Kiosk.jpg"
    },
    {
        name: "Fast Food",
        photoName: "assets/Fast.jpg"
    },
    {
        name: "Milk Tea",
        photoName: "assets/MilkTea.jpg"
    },
    {
        name: "Asian",
        photoName: "assets/Asian.jpg"
    },
    {
        name: "Bakery",
        photoName: "assets/Bakery.jpg"
    },
    {
        name: "Pork",
        photoName: "assets/Pork.jpg"
    },
    {
        name: "Beverages",
        photoName: "assets/Beverages.jpg"
    },
    {
        name: "Chicken",
        photoName: "assets/Chicken.jpg"
    },
]