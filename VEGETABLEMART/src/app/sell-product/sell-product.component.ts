import { Component, OnInit } from '@angular/core';
import { ProjService } from '../proj.service';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { LocalStorageService } from '../local-storage.service';


@Component({
  selector: 'app-sell-product',
  templateUrl: './sell-product.component.html',
  styleUrls: ['./sell-product.component.css']
})
export class SellProductComponent implements OnInit {
  imageUrl: String;
  fileToUpload: File = null;
  reader: FileReader;
  product: any;
  customer: any;
  custId: any;
  constructor(private service: ProjService, private local: LocalStorageService) {

    this.imageUrl = '/assets/images/defaultpic.jpg';
    this.product = {productId: '', productName: '', description: '', productStatus: '', category: '', broughtDate: '', quantityAdded: '', price: '', imageName: '', custId: '' };

  }

  ngOnInit(): void {
    this.customer = JSON.parse(this.local.getLocal());
  }

  handleFileInput(file: FileList) {
    this.fileToUpload = file.item(0);
    this.reader = new FileReader();
    this.reader.readAsDataURL(this.fileToUpload);
    this.reader.onload = (event: any) => {
      this.imageUrl = event.target.result;
    };
  }
  OnSubmit(sellForm: any) {
    
      this.product.productStatus = "new";
      sellForm.productStatus = this.product.productStatus;
      sellForm.custId = 0;
    
   
    this.service.postFile(sellForm, this.fileToUpload).subscribe(data => {
      console.log('done');
      this.imageUrl = '/assets/images/defaultpic.jpg';
    });
  }

}
