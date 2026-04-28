import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Users } from '../../models/user.class';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-dialog-edit-user',
  standalone: false,
  templateUrl: './dialog-edit-user.html',
  styleUrl: './dialog-edit-user.scss',
})
export class DialogEditUser {
  user = new Users();
    loading = false;
     birthDate?: Date;
      userId: string = '';
  
    constructor (public dialogRef: MatDialogRef<DialogEditUser>, private firestore: AngularFirestore){
  
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
     })
          
    }
}
