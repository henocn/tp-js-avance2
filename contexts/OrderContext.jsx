import { createContext, useContext, useEffect, useState } from "react";
import axios from "../axios";

const OrderContext = createContext();

export const useOrders = () => useContext(OrderContext);

export const OrderProvider = ({ children }) => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchOrders = async () => {
    try {
      const res = await axios.get("/orders");
      setOrders(res.data);
    } catch (err) {
      console.error("Erreur lors de la récupération des commandes", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  return (
    <OrderContext.Provider value={{ orders, setOrders, fetchOrders, loading }}>
      {children}
    </OrderContext.Provider>
  );
};
