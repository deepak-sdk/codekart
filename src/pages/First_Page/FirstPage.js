import React from "react";
import Categories from "../../Components/Categories/Categories";
import DateTime from "../../Components/Date_Time/DateTime";
import MenuList from "../../Components/Menu_List/MenuList";
import Popular from "../../Components/Popular/Popular";
import SelectDishes from "../../Components/Select_Dishes/SelectDishes";

function FirstPage() {
  return (
    <div>
      <SelectDishes />
      <DateTime />
      <Categories />
      <Popular />
      <MenuList />
    </div>
  );
}

export default FirstPage;
