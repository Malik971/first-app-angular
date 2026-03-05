import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { User } from '../../common/data/user';
import { userListManager } from '../../common/data/userList';
import { UsersService } from '../../common/service/users-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-form',
  imports: [FormsModule, CommonModule],
  templateUrl: './user-form.html',
  styleUrl: './user-form.css',
})
export class UserForm {

    public user : User = new User();
    public message : string = ""; 

    public onSave(){
      this._ulm.addUser(this.user);
      // this.user.id = new Date().getTime().toString() ; 
      this.message = "user =" + JSON.stringify(this.user);
      console.log(JSON.stringify(this._ulm.getAllUsers()));
      this._router.navigateByUrl('/users/all');
      // let link = ['/users', this.user.id];
      // this._router.navigate(link);

    }

    public onFetchFromUsername(){
      //TODO
      this.user = this._ulm.getUserByUsername(this.user.userName) ?? new User();
      if(!this._ulm.userExists(this.user.id)){
        this.message = "Aucun utilisateur trouvé avec ce username.";
      }
    }

    constructor(private _ulm: UsersService, private _router: Router) {}

}