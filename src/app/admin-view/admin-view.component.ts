import { Component, OnInit } from '@angular/core';
import { CrudService } from '../crud.service';

@Component({
  selector: 'app-admin-view',
  templateUrl: './admin-view.component.html',
  styleUrls: ['./admin-view.component.css']
})
export class AdminViewComponent implements OnInit {

  userdata : any;
  total:any;
  allfield_error=false;
  fromless_error=false;
  public month: any = String(new Date().getMonth()+1).padStart(2, '0');
  public fullYear: number = new Date().getFullYear();
  public current:any = String(new Date().getDate()).padStart(2, '0');
  public minDate : any = this.fullYear + '-' + this.month + '-' + this.current;

  constructor(private crudService: CrudService) {
    this.crudService.adminview().subscribe((res)=> {
      this.userdata = res;
      this.total = "";
        var temp =0;
        for(var i=0;i<this.userdata.length;i++)
        {
          let x = parseFloat(this.userdata[i]['amount']);
          temp = temp + x;
          this.total = temp.toFixed(2);
        }
      console.log(this.minDate)
    })

  }

  ngOnInit(): void {    
  }

  compare(from,to){
    if(from<=to)
      return true;
    else
      return false;
  }

  filter(form) {
    
    if(form.value.from != "" && form.value.to != "") 
    {
      if(this.compare(form.value.from,form.value.to))
      {
        this.crudService.adminfilter(form.value).subscribe((res)=> {
          this.userdata = res;
          this.total=0;
          for(var i=0;i<this.userdata.length;i++)
          {
            let x = parseFloat(this.userdata[i]['amount']);
            this.total = this.total + x;
            this.total.toFixed(2);
          }
        })
      }
      else
      {
        this.allfield_error = false;
        this.fromless_error = true;
      }
      
    }
    else
    {
      this.allfield_error = true;
        this.fromless_error = false;
    }

  }

}
