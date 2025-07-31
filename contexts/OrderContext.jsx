import { createContext, useContext, useEffect, useState } from "react";
import axios from "../axios";

const OrderContext = createContext();

export const useOrders = () => useContext(OrderContext);

export const OrderProvider = ({ children }) => {
  const [orders, setOrders] = useState([]);

  const fetchOrders = async () => {
    try {
      const res = await axios.get("/orders");
      setOrders(res.data);
    } catch (error) {
      console.error("Erreur de chargement des commandes :", error);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  return (
    <OrderContext.Provider value={{ orders, setOrders, fetchOrders }}>
      {children}
    </OrderContext.Provider>
  );
};
