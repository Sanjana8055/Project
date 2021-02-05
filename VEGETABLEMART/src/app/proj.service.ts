import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Subject } from 'rxjs';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjService {
  
 
  custId = 0;
  loginId: any;
 
  constructor(private httpClient: HttpClient) {
   

  }
  getAllLoginIds(){
    return this.httpClient.get('RESTAPI2018/webapi/myresource1/getAllLoginIds');

  }


  regCustomer(customer: any) {
    customer.custId = this.custId++;
    return this.httpClient.post('RESTAPI2018/webapi/myresource1/regCustomer/', customer);
  }

  customerLogin(loginId: any, password: any) {
    console.log(loginId, password)
    return this.httpClient.get('RESTAPI2018/webapi/myresource1/customerLogin/' + loginId + "/" + password);
  }

  getAllCustomers() {
    return this.httpClient.get('RESTAPI2018/webapi/myresource1/viewAllCustomers');
  }
  getAllProduct() {
    return this.httpClient.get('RESTAPI2018/webapi/myresource1/viewAllProducts');
  }
  addToCart(custId: any, productId: any, quantity: any) {
    return this.httpClient.get('RESTAPI2018/webapi/myresource1/addItemToCart/' + custId + "/" + productId + "/" + quantity);
  }
  viewMyCart(custId: any) {
    return this.httpClient.get('RESTAPI2018/webapi/myresource1/viewMyCart/' + custId);
  }
  placeOrder(custId: any) {
    return this.httpClient.post('RESTAPI2018/webapi/myresource1/placeOrder/', custId);
  }
  viewMyProductAdded(custId: any) {
    console.log(custId);
    return this.httpClient.get('RESTAPI2018/webapi/myresource1/viewMyproduct/' + custId);
  }
  postFile(sellForm: any, fileToUpload: File) {
    const endpoint = 'RESTAPI2018/webapi/myresource1/uploadImage';
    const formData: FormData = new FormData();
    formData.append('Image', fileToUpload, fileToUpload.name);
    formData.append('productName', sellForm.productName);
    formData.append('description', sellForm.description);
    formData.append('price', sellForm.price);
    formData.append('productStatus', sellForm.productStatus);
    formData.append('category', sellForm.category);
    formData.append('quantityAdded', sellForm.quantityAdded);
    // formData.append('publishedDate', sellForm.publishedDate);
    formData.append('custId', sellForm.custId);

    return this.httpClient.post(endpoint, formData);
  }
 

  updateCust(customer: any) {
    return this.httpClient.put('RESTAPI2018/webapi/myresource1/updateCustomer/', customer);
  }
  deleteMyProduct(productId : any) {
    return this.httpClient.delete('RESTAPI2018/webapi/myresource1/deleteMyProductAdded/' + productId);
  }
  deleteProductAddedByAdmin(productId : any) {
    return this.httpClient.delete('RESTAPI2018/webapi/myresource1/deleteProductAddedByAdmin/' + productId);
  }

  getProductById(productId: any) {
    return this.httpClient.get('RESTAPI2018/webapi/myresource1/getProductById/' + productId);
  }
  searchProduct(productName: any) {
    return this.httpClient.get('RESTAPI2018/webapi/myresource1/searchProduct/'+ productName);
  }
  deliverOrder(orderId: any) {
    return this.httpClient.post('RESTAPI2018/webapi/myresource1/deliverOrder/', orderId);
  }
  viewAllOrders() {
    return this.httpClient.get('RESTAPI2018/webapi/myresource1/viewAllOrders');
  }

  

  getNewProduct() {
    return this.httpClient.get('RESTAPI2018/webapi/myresource1/getNewProduct');
  }

  removeFromCart(cartId: any) {
    return this.httpClient.delete('RESTAPI2018/webapi/myresource1/removeFromCart/' + cartId);
  }
  deliverOrders() {
    return this.httpClient.get('RESTAPI2018/webapi/myresource1/deliverOrders');
  }
  viewMyOrders(custId:any) {
    return this.httpClient.get('RESTAPI2018/webapi/myresource1/viewMyOrders/'+custId);
  }
  viewCountOfOrders(custId:any) {
    return this.httpClient.get('RESTAPI2018/webapi/myresource1/viewCountOfOrders/'+custId);
  }
  updateProduct( quantity : any ,productId: any) {

    return this.httpClient.get('RESTAPI2018/webapi/myresource1/updateProduct/'+quantity+'/'+productId);
  }
  addReview(review:any){
    return this.httpClient.post('RESTAPI2018/webapi/myresource1/addReview/', review);
  }

  getReviewsByProductId(productId:any){
    return this.httpClient.get('RESTAPI2018/webapi/myresource1/getReviewsByProductId/'+productId);

  }

  giveRating(reviews :any) {
    return this.httpClient.post('RESTAPI2018/webapi/myresource1/addRating/' , reviews);
  }

  getAvgRating(productId: any) {
    return this.httpClient.get('RESTAPI2018/webapi/myresource1/getAvgRating/' + productId);
  }
 
}
