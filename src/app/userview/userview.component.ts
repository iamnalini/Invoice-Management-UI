import { Component, OnInit, Inject } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap'; 
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CrudService } from '../crud.service';


@Component({
  selector: 'app-userview',
  templateUrl: './userview.component.html',
  styleUrls: ['./userview.component.css']
})

export class UserviewComponent implements OnInit {

  loginForm: FormGroup;
  submitted = false;
  user_id: any;
  userdata : any;
  invoiceid : any;
  total:any;
  created=false;
  edited=false;
  create_error=false;
  edit_error=false;
  allfield_error=false;
  fromless_error=false;

  public month: any = String(new Date().getMonth()+1).padStart(2, '0');
  public fullYear: number = new Date().getFullYear();
  public current:any = String(new Date().getDate()).padStart(2, '0');
  public minDate : any = this.fullYear + '-' + this.month + '-' + this.current;

  constructor(private formBuilder: FormBuilder, private crudService: CrudService, private modalService: NgbModal) { 
    this.user_id = localStorage.getItem('id');
    this.crudService.userview({'user_id':this.user_id}).subscribe((res)=> {
      this.userdata = res;
      this.total = "";
      var temp =0;
      for(var i=0;i<this.userdata.length;i++)
      {
        let x = parseFloat(this.userdata[i]['amount']);
        temp = temp + x;
        this.total = temp.toFixed(2);
      }
    })

  }

  ngOnInit() {

    this.loginForm = this.formBuilder.group({
      invoicename: ['', Validators.required],
      amount: ['', [Validators.required]]
    });

  }

  get f() { return this.loginForm.controls; }


  closeResult = ''; 
  
  open(content) { 
    this.created = false;
    this.create_error = false;
    this.modalService.open(content, 
   {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => { 
     this.closeResult = `Closed with: ${result}`; 
    }, (reason) => { 
      this.closeResult =  
         `Dismissed ${this.getDismissReason(reason)}`; 
    }); 
  }

  open_edit(invoice_id,content_edit) { 
    this.edited = false;
    this.edit_error = false;
    this.invoiceid = invoice_id;
    this.modalService.open(content_edit, 
   {ariaLabelledBy: 'modal-basic-title-edit'}).result.then((result) => { 
     this.closeResult = `Closed with: ${result}`; 
    }, (reason) => { 
      this.closeResult =  
         `Dismissed ${this.getDismissReason(reason)}`; 
    }); 
  }
  

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.loginForm.invalid) {
      this.create_error=true;
        return;
    }
    this.loginForm.value['user_id']=this.user_id;
    this.crudService.create(this.loginForm.value).subscribe((res) => {
      this.create_error = false;
      this.created = true;
      this.crudService.userview({'user_id':this.user_id}).subscribe((res)=> {
        this.userdata = res;
        this.total = "";
        var temp =0;
        for(var i=0;i<this.userdata.length;i++)
        {
          let x = parseFloat(this.userdata[i]['amount']);
          temp = temp + x;
          this.total = temp.toFixed(2);
        }
      })
    });

  }

  onEdit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.loginForm.invalid) {
      this.edit_error=true;
        return;
    }
    this.loginForm.value['invoiceid']=this.invoiceid;
    this.loginForm.value['user_id']=this.user_id;
    this.crudService.edit(this.loginForm.value).subscribe((res) => {
      this.edit_error = false;
      this.edited = true;
      this.crudService.userview({'user_id':this.user_id}).subscribe((res)=> {
        this.userdata = res;
        this.total = "";
        var temp =0;
        for(var i=0;i<this.userdata.length;i++)
        {
          let x = parseFloat(this.userdata[i]['amount']);
          temp = temp + x;
          this.total = temp.toFixed(2);
        }
      })
    });
  }

  compare(from,to){
    if(from<=to)
      return true;
    else
      return false;
  }


  filter(form) {
    
    console.log(form.value)
    
    if(form.value.from != "" && form.value.to != "") 
    {
      if(this.compare(form.value.from,form.value.to))
      {
        form.value['user_id']=this.user_id;
        this.crudService.userfilter(form.value).subscribe((res)=> {
          this.userdata = res;
          this.total = "";
          var temp = 0;
          for(var i=0;i<this.userdata.length;i++)
          {
            let x = parseFloat(this.userdata[i]['amount']);
            temp = temp + x;
            this.total = temp.toFixed(2);
          }
        })
      }
      else{
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

  delete(invoiceid){
    let value = {'invoice_id':invoiceid,'user_id':this.user_id}
    this.crudService.delete(value).subscribe((res)=> {
      this.crudService.userview({'user_id':this.user_id}).subscribe((res)=> {
        this.userdata = res;
        this.total = "";
        var temp =0;
        for(var i=0;i<this.userdata.length;i++)
        {
          let x = parseFloat(this.userdata[i]['amount']);
          temp = temp + x;
          this.total = temp.toFixed(2);
        }
      })
    })
    
  }
  
  private getDismissReason(reason: any): string { 
    if (reason === ModalDismissReasons.ESC) { 
      return 'by pressing ESC'; 
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) { 
      return 'by clicking on a backdrop'; 
    } else { 
      return `with: ${reason}`; 
    } 
  } 
 

}

