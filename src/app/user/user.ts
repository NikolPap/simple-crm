import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogAddUser } from '../dialog-add-user/dialog-add-user';
import { Users } from '../../models/user.class';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-user',
  standalone: false,
  templateUrl: './user.html',
  styleUrl: './user.scss',
})
export class User implements OnInit {

  user= new Users();
allUsers: any[] = [];


  constructor(public dialog: MatDialog, private firestore : AngularFirestore) {

  }
  
  ngOnInit(): void {
    this.firestore
    .collection('users')
    .valueChanges()
    .subscribe((changes: any) => {
      console.log('Received changes from DB', changes);
      this.allUsers = changes;
    })
  }

  openDialog() {
    this.dialog.open(DialogAddUser);
  }
}
