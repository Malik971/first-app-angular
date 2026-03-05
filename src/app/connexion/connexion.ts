import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { User } from '../common/data/user';
import { UserList } from '../common/data/userList';

@Component({
  selector: 'app-connexion',
  imports: [FormsModule, CommonModule],
  templateUrl: './connexion.html',
  styleUrl: './connexion.css',
})
export class Connexion {

  public user : User = new User();
  public saveUser : UserList = new UserList();
  public message : string = "";

  public onSave(){
      this.user.id = new Date().getTime().toString() ; 
      this.message = "user =" + JSON.stringify(this.user);
    }

    // créer la méthode onFetchFromUsername() qui charge les données d'un utilisateur existant dans le formlaire userForm
    onFetchFromUsername() {
      const existingUser = this.saveUser.getAllUsers().find(u => u.userName === this.user.userName);
      if (existingUser) {
        this.user = { ...existingUser };
        this.message = "Utilisateur trouvé : " + JSON.stringify(this.user);
      } else {
        this.message = "Aucun utilisateur trouvé avec ce username.";
      }
      
    }

}
