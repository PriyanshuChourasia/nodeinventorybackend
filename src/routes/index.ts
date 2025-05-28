import {Express} from "express";
import dashboardRoute from "./dashboardRoutes";
import productRoutes from "./productRoutes";
import expenseRoutes from "./expenseRoutes";
import userRoutes from "./userRoutes";

export function appRoutes(app:Express){
    app.use("/api/dashboard",dashboardRoute);
    app.use("/api/products",productRoutes);
    app.use("/api/expenses",expenseRoutes);
    app.use("/api/users",userRoutes);
}