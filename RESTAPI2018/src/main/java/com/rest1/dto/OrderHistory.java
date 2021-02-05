package com.rest1.dto;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;

@Entity
public class OrderHistory {
	@Id @GeneratedValue
	private int serialNo;
	private int quantity;
	
	public int getQuantity() {
		return quantity;
	}
	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}
	@OneToOne
	@JoinColumn(name="productId")
	private Product product;
	
	
	@ManyToOne
	@JoinColumn(name="orderId")
	private Orders orders;
	
	
	
	public OrderHistory(int serialNo, int quantity, Product product, Orders orders) {
		super();
		this.serialNo = serialNo;
		this.quantity = quantity;
		this.product = product;
		this.orders = orders;
	}
	public int getSerialNo() {
		return serialNo;
	}
	public void setSerialNo(int serialNo) {
		this.serialNo = serialNo;
	}
	
	public Orders getOrders() {
		return orders;
	}
	public Product getProduct() {
		return product;
	}
	public void setProduct(Product product) {
		this.product = product;
	}
	public void setOrders(Orders orders) {
		this.orders = orders;
	}
	
	
	
	
	public OrderHistory() {
		
	}
}
