package com.ts1.dao;


import com.rest1.dto.Product;
import com.ts1.db.HibernateTemplate;



public class ProductDAO {



	public static Product getProduct(int custId, String productName){
		return (Product) HibernateTemplate.getObjectById(custId, productName);
	}



}
