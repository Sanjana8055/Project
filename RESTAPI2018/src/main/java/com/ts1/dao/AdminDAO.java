package com.ts1.dao;

import java.util.List;

import org.hibernate.Query;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.cfg.Configuration;

import com.rest1.dto.Customer;
import com.rest1.dto.Orders;
import com.rest1.dto.Product;
import com.ts1.db.HibernateTemplate;

public class AdminDAO {
	private SessionFactory factory = null;
	
	public int addProductByAdmin(Product product) {
		return HibernateTemplate.addObject(product);
	}

    public Product getProductAddedByAdmin(int productId) {
    	return (Product) HibernateTemplate.getObjectById(productId);
    }
  	
    public int deleteProductAddedByAdmin(int productId) {
    	return HibernateTemplate.deleteObject(Product.class, productId);
    }
    public List<Product> viewAllProduct() {
    	List<Product> list = HibernateTemplate.getProductListByQuery();
    	System.out.println(list);
    	return list;
    	   
    }
    
    
    public List<Customer> viewAllCustomers() {
    	return HibernateTemplate.getCustomerListByQuery();
    }
    
    
    public List<Orders> viewAllOrders() {
    	return HibernateTemplate.getOrderListByQuery();
    }
    
    public void deliverOrder(int orderId) {
    	Orders order = new Orders();
    	order = (Orders) HibernateTemplate.getOrderById(orderId);
    	
    }
}
	

