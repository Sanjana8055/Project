package com.ts1.dao;

import java.util.ArrayList;
import java.util.Calendar;
import java.util.Date;
import java.util.Iterator;
import java.util.List;

import org.hibernate.Query;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.cfg.Configuration;

import com.rest1.dto.Cart;

import com.rest1.dto.Customer;
import com.rest1.dto.OrderHistory;
import com.rest1.dto.Orders;
import com.rest1.dto.Product;
import com.ts1.db.HibernateTemplate;



public class CustomerDAO {
	private int orderId;
	private SessionFactory factory = null;
	private static SessionFactory sessionFactory;
	public int register(Customer customer) {
		return HibernateTemplate.addObject(customer);
	}
	public int updateCustomer(Customer customer) {
		return HibernateTemplate.updateObject(customer);
	}
	public Customer viewCustomerProfile(int custId) {
		return (Customer) HibernateTemplate.getCustomerById(custId);	
	}
	
	
	public List<Product> viewMyProducts(int custId) {
		return HibernateTemplate.viewMyProduct(custId);
	}
	
	public int deactivateMyAccount(int custId) {
		return HibernateTemplate.deleteObject(Customer.class, custId);
	}
	
	public int deleteMyProduct(int productId) {
		HibernateTemplate.deleteObject(Cart.class, productId);
		return HibernateTemplate.deleteObject(Product.class, productId);
	}
	public int addItemToCart(int custId, int productId, int quantity) {
		Customer c = new Customer();
	    Product b = new Product();
		c = (Customer) HibernateTemplate.getCustomerById(custId);	
		b = (Product) HibernateTemplate.getObjectById(productId);
		double price = (b.getPrice()*quantity); 
		Cart cart = new Cart();
		cart.setProduct(b);
		cart.setCustomer(c);
		cart.setCartQuantity(quantity);
		cart.setPrice(price);
		cart.setCustomer(c);
		return HibernateTemplate.addObject(cart);
	}
	
	
	public Customer customerLogin(String loginId, String password) {
		return (Customer) HibernateTemplate.customerLogin(loginId, password);
	}
	
	public void placeOrder(int custId) {
		Customer c = new Customer();
		c = (Customer) HibernateTemplate.getCustomerById(custId);
		int totalPrice = (int) HibernateTemplate.placeOrder(custId);
		   Orders orders = new Orders();
		   orders.setTotalPrice(totalPrice);
		   orders.setOrderStatus("Pending..");
		
		   orders.setDateOfOrder(new Date());
		   orders.setCustomer(c);
		   HibernateTemplate.addObject(orders);
			List<Cart> cartList = HibernateTemplate.viewMyCart(custId);
			
			OrderHistory orderHistory = new OrderHistory();
			for(int i = 0;i < cartList.size();i++){
				Cart cart = cartList.get(i);
				orderHistory.setProduct(cart.getProduct());
				orderHistory.setQuantity(cart.getCartQuantity());
				orderHistory.setOrders(orders);
				HibernateTemplate.addObject(orderHistory);
			}
		   HibernateTemplate.deletefromCart(custId);
	}
	
	public Product getProductById(int productId) {
		return HibernateTemplate.getProductById(productId);
	}
		
}




