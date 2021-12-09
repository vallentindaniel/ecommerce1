
export interface User{
  first_name: string,
  last_name: string,
  email: string,
  password: string,
  password_repeat: string
}




export interface ProductCart{
  product: Product,
  quantity: number
}

export interface Product{
  productID: string,
  category_id: string,
  title: string,
  description: string,
  path: string,
  price: number,
  quantity: number
}

export interface Category{
categoryID: string,
title: string
}
