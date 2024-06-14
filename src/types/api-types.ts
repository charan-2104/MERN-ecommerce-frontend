import { Bar, CartItem, Line, Order, Pie, Product, ShippingInfo, Stats, User } from "./types"

export type CustomError = {
    status: number,
    data: {
        message: string,
        success: boolean,
    }
}

export type MessageResponse = {
    success: boolean,
    message: string,
}

export type AllUsersResponse = {
    success: boolean,
    users: User[],
}

export type UserResponse = {
    success: boolean,
    user: User
}

export type AllProductResponse = {
    success: boolean,
    products: Product[];
}

export type CategoriesResponse = {
    success: boolean,
    categories: string[];
}

export type searchProductsResponse = AllProductResponse &{
    totalPage: number;
}

export type searchProductsRequest = {
  price: number;
  page: number;
  category: string;
  search: string;
  sort: string;
}

export type ProductResponse = {
    success: boolean,
    product: Product;
}

export type NewProductResponse = {
    id: string,
    formData: FormData,
}

export type AllOrdersResponse = {
    success: boolean,
    allOrders: Order[];
}

export type MyOrdersResponse = {
    success: boolean,
    orders: Order[];
}

export type OrderDetailsResponse = {
    success: boolean,
    order: Order;
}

export type StatsResponse = {
    success: boolean,
    stats: Stats ;
}

export type PieResponse = {
    success: boolean,
    charts: Pie ;
}

export type BarResponse = {
    success: boolean,
    charts: Bar ;
}

export type LineResponse = {
    success: boolean,
    charts: Line ;
}

export type UpdateProductRequest = {
    userId: string,
    productId: string,
    formData: FormData,
}

export type DeleteProductRequest = {
    userId: string,
    productId: string,
}

export type NewOrderRequest = {
    shippingInfo : ShippingInfo,
    orderItems: CartItem[],
    subtotal: number,
    tax: number,
    discount: number,
    shippingCharges: number,
    total: number,
    user: string
}

export type UpdateOrderRequest = {
    userId: string,
    orderId: string
}

export type DeleteUserRequest = {
    userId: string,
    adminUserId: string
}






