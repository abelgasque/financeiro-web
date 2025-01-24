import { Component, OnInit } from '@angular/core';
import { ToastService } from './toast.service';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.css']
})
export class ToastComponent implements OnInit {

  constructor(
    private toastService: ToastService
  ) { }

  ngOnInit() {
  }

  showConfirm(){
    this.toastService.showConfirm();
  }

  onConfirm(){
    
  }

  onReject(){

  }

}
