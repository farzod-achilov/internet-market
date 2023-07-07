import React from "react";

export default function Cart() {
  function getAllLocalStorageItems() {
    let items = [];

    for (let i = 0; i < localStorage.length; i++) {
      let key = localStorage.key(i);
      let value = localStorage.getItem(key);

      let item = { key, value };
      items.push(item);
    }

    return items;
  }

  let allItems = getAllLocalStorageItems();
  allItems.map((value) => {
    console.log(value.value);
  });
  return <div>C</div>;
}
