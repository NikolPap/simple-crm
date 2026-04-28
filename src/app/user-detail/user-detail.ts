import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ActivatedRoute } from '@angular/router';
import { Users } from '../../models/user.class';
import { MatDialog } from '@angular/material/dialog';
import { DialodEditAdress } from '../dialod-edit-adress/dialod-edit-adress';
import { DialogEditUser } from '../dialog-edit-user/dialog-edit-user';

@Component({
  selector: 'app-user-detail',
  standalone: false,
  templateUrl: './user-detail.html',
  styleUrl: './user-detail.scss',
})
export class UserDetail implements OnInit {
  userId: string = '';
  user: Users = new Users();

  constructor(
    private route: ActivatedRoute, 
    private firestore: AngularFirestore,
    private cdr: ChangeDetectorRef ,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(paramMap => {
      this.userId = paramMap.get('id') ?? ''; 
      if (this.userId) {
        this.getUser();
      }
    });
  }

  getUser() {
    this.firestore
      .collection('users')
      .doc(this.userId)
      .valueChanges()
      .subscribe((userData: any) => {
        
        if (userData) {
          this.user = new Users(userData);
          this.cdr.detectChanges(); 
        }
      });
  }

  editUserDetail() {
   let dialog = this.dialog.open(DialogEditUser);
    dialog.componentInstance.user = new Users(this.user.toJSON());
       dialog.componentInstance.userId = this.userId;

  }

  editMenu() {
     let dialog = this.dialog.open(DialodEditAdress);
         dialog.componentInstance.user =  new Users(this.user.toJSON());
           dialog.componentInstance.userId = this.userId;
  }
}