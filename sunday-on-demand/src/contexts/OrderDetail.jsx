import { createContext, useContext, useState } from "react";
import { PricePerItem } from "../constants";

const OrderDetails = createContext();

export function useOrderDetails() {
  const contextValue = useContext(OrderDetails);

  if (!contextValue) {
    throw new Error(
      "useOrderDetails must be called from within an OrderDetailsProvider"
    );
  }

  return contextValue;
}

export function OrderDetailsProvider(props) {
  const [optionCounts, setOptionCounts] = useState({
    scoops: {}, // example: { Chocolate: 1, Vanilla: 2 }
    toppings: {}, // example: { "Gummi Bears" : 1 }
  });

  function updateItemCount(itemName, newItemCount, optionType) {
    const newOptionCount = { ...optionCounts };

    newOptionCount[optionType][itemName] = newItemCount;

    setOptionCounts(newOptionCount);
  }

  function resetOrder() {
    setOptionCounts({
      scoops: {},
      toppings: {},
    });
  }

  function calculateTotal(optionType) {
    const countsArray = Object.values([optionType]);

    const totalCount = countsArray.reduce((total, value) => total + value, 0);

    return totalCount * PricePerItem[optionType];
  }

  const totals = {
    scoops: calculateTotal["scoops"],
    toppings: calculateTotal["toppings"],
  };
  const value = { optionCounts, updateItemCount, resetOrder, totals };
  return <OrderDetails.Provider value={value} {...props} />;
}
