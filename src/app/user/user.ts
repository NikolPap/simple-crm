import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogAddUser } from '../dialog-add-user/dialog-add-user';

@Component({
  selector: 'app-user',
  standalone: false,
  templateUrl: './user.html',
  styleUrl: './user.scss',
})
export class User implements OnInit {
  constructor(public dialog: MatDialog) {

  }
  
  ngOnInit(): void {
    
  }

  openDialog() {
    this.dialog.open(DialogAddUser);
  }
}
