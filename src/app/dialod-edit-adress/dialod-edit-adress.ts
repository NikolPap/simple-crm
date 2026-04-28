import { Component, OnInit } from '@angular/core';
import { Users } from '../../models/user.class';
import { MatDialogRef } from '@angular/material/dialog';
import { AngularFirestore } from '@angular/fire/compat/firestore';


@Component({
  selector: 'app-dialod-edit-adress',
  standalone: false,
  templateUrl: './dialod-edit-adress.html',
  styleUrl: './dialod-edit-adress.scss',
})
export class DialodEditAdress implements OnInit {
  user = new Users();
  loading = false;
  userId: string = '';

  constructor (public dialogRef: MatDialogRef<DialodEditAdress>, private firestore: AngularFirestore) {

  }

  ngOnInit(): void {
  
  }

  saveUser() {
    this.loading = true;
     this.firestore
     .collection('users')
     .doc(this.userId)
     .update(this.user.toJSON())
      .then(() => {
      this.loading = false;
      this.dialogRef.close();
     });
  }
}
