import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-categorylist',
  templateUrl: './categorylist.component.html',
  styleUrls: ['./categorylist.component.css']
})
export class CategorylistComponent implements OnInit {
  categories:any;
  val=5;
  constructor(private apiservice: ApiService) { }

  ngOnInit() {
    this.apiservice
    .getCategory()
    .subscribe((res) => {
      this.categories = res['category'];
      console.log(res['category']);
      //console.log(res['data']['category'])
  });
}
onClick(event) {
  var target = event.target || event.srcElement || event.currentTarget;
  var idAttr = target.attributes.id;
  var value = idAttr.nodeValue;
  // alert(value);
  this.deleteRow(value)
}
deleteRow(index) {
  // alert(index)
  var src=document.getElementById(index);
  src.remove()
  // this.categories.removeAt(CategorylistComponent);
}


}


