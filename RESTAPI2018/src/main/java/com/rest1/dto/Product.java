package com.rest1.dto;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;

@Entity
public class Product {
	@Id@GeneratedValue
	private int productId;
	private String productName;
	private double price;
	private Date broughtDate;
	private String category;
	private int quantityAdded;
	private String productStatus;
	private String description;
	private String imageName;
	
	@ManyToOne
	@JoinColumn(name="custId")
	private Customer customer;
	
	@OneToMany
	private List<Cart> cart = new ArrayList<Cart>();

	public int getProductId() {
		return productId;
	}

	public void setProductId(int productId) {
		this.productId = productId;
	}

	public String getProductName() {
		return productName;
	}

	public void setProductName(String productName) {
		this.productName = productName;
	}

	public double getPrice() {
		return price;
	}

	public void setPrice(double price) {
		this.price = price;
	}

	public Date getbroughtDate() {
		return broughtDate;
	}

	public void setbroughtDate(Date broughtDate) {
		this.broughtDate = broughtDate;
	}

	public String getCategory() {
		return category;
	}

	public void setCategory(String category) {
		this.category = category;
	}

	public int getQuantityAdded() {
		return quantityAdded;
	}

	public void setQuantityAdded(int quantityAdded) {
		this.quantityAdded = quantityAdded;
	}

	public String getProductStatus() {
		return productStatus;
	}

	public void setProductStatus(String productStatus) {
		this.productStatus = productStatus;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getImageName() {
		return imageName;
	}

	public void setImageName(String imageName) {
		this.imageName = imageName;
	}

	public Customer getCustomer() {
		return customer;
	}

	public void setCustomer(Customer customer) {
		this.customer = customer;
	}

	public List<Cart> getCart() {
		return cart;
	}

	public void setCart(List<Cart> cart) {
		this.cart = cart;
	}

	public Product(int productId, String productName, double price, Date broughtDate, String category,
			int quantityAdded, String productStatus, String description, String imageName, Customer customer,
			List<Cart> cart) {
		super();
		this.productId = productId;
		this.productName = productName;
		this.price = price;
		this.broughtDate = broughtDate;
		this.category = category;
		this.quantityAdded = quantityAdded;
		this.productStatus = productStatus;
		this.description = description;
		this.imageName = imageName;
		this.customer = customer;
		this.cart = cart;
	}

	public Product() {
		
	}

	
	public String toString() {
		return "Product [productId=" + productId + ", productName=" + productName + ", price=" + price
				+ ", broughtDate=" + broughtDate + ", category=" + category + ", quantityAdded=" + quantityAdded
				+ ", productStatus=" + productStatus + ", description=" + description + ", imageName=" + imageName
				+ ", customer=" + customer + ", cart=" + cart + "]";
	}
	

}
