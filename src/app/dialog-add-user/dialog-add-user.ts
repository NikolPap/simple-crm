import { Component, OnInit, NgModule } from '@angular/core';
import { Users } from '../../models/user.class';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-add-user',
  standalone: false,
  templateUrl: './dialog-add-user.html',
  styleUrl: './dialog-add-user.scss',
})
export class DialogAddUser {
  user = new Users();
  birthDate?: Date;

   constructor(public dialogRef: MatDialogRef<DialogAddUser>, private firestore: AngularFirestore) {

  }
  ngOnInit(): void {

  }

  saveUser() {
     if (this.birthDate) {
      this.user.birthDate = this.birthDate.getTime();
      console.log('Current user is', this.user);
      this.firestore
      .collection('users')
      .add(this.user.toJSON())
      .then((result: any) => {
        console.log('Adding user finished', result);
        this.dialogRef.close();
      })
    }
}
}