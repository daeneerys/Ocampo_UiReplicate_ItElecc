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
        photoName: "assets/Japanese.jpg",
        secondPhoto: "assets/Hjapanese.jpg"
    },
    {
        name: "Beef",
        photoName: "assets/Beef.jpg",
        secondPhoto: "assets/Hbeef.jpg"
    },
    {
        name: "Burgers",
        photoName: "assets/Burgers.jpg",
        secondPhoto: "assets/Hburger.jpg"
    },
    {
        name: "Filipino",
        photoName: "assets/Filipino.jpg",
        secondPhoto: "assets/Hfilipino.jpg"
    },
    {
        name: "Italian",
        photoName: "assets/Italian.jpg",
        secondPhoto: "assets/Hitalian.jpeg"
    },
    {
        name: "Pizza",
        photoName: "assets/Pizza.jpg",
        secondPhoto: "assets/Hpizza.jpg"
    },
    {
        name: "Quick Bites",
        photoName: "assets/Quick Bites.jpg",
        secondPhoto: "assets/Hquickbites.jpg"
    },
    {
        name: "Chinese",
        photoName: "assets/Chinese.jpg",
        secondPhoto: "assets/Hchinese.jpg"
    },
    {
        name: "Breakfast & Brunch",
        photoName: "assets/Breakfast.jpg",
        secondPhoto: "assets/Hbreakfast.jpg"
    },
    {
        name: "Snack",
        photoName: "assets/Snack.jpg",
        secondPhoto: "assets/Hsnack.jpg"
    },
    {
        name: "American",
        photoName: "assets/American.jpg",
        secondPhoto: "assets/Hamerican.jpg"
    },
    {
        name: "Casual Dining",
        photoName: "assets/Casual.jpg",
        secondPhoto: "assets/Hcasual.jpg"
    },
    {
        name: "Kiosk",
        photoName: "assets/Kiosk.jpg",
        secondPhoto: "assets/Hkiosk.jpeg"
    },
    {
        name: "Fast Food",
        photoName: "assets/Fast.jpg",
        secondPhoto: "assets/Hfast.jpg"
    },
    {
        name: "Milk Tea",
        photoName: "assets/MilkTea.jpg",
        secondPhoto: "assets/Hmilktea.png"
    },
    {
        name: "Asian",
        photoName: "assets/Asian.jpg",
        secondPhoto: "assets/Hasian.jpg"
    },
    {
        name: "Bakery",
        photoName: "assets/Bakery.jpg",
        secondPhoto: "assets/Hbakery.jpg"
    },
    {
        name: "Pork",
        photoName: "assets/Pork.jpg",
        secondPhoto: "assets/Hpork.jpg"
    },
    {
        name: "Beverages",
        photoName: "assets/Beverages.jpg",
        secondPhoto: "assets/Hbeverages.jpg"
    },
    {
        name: "Chicken",
        photoName: "assets/Chicken.jpg",
        secondPhoto: "assets/Hchicken.jpg"
    },
]