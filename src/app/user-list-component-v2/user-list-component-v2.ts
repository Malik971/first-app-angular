import { Component } from '@angular/core';
import { User } from '../common/data/user';
import { UserRestService } from '../common/service/user-rest-service';
import { ChangeDetectorRef } from '@angular/core';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-user-list-component-v2',
  imports: [],
  templateUrl: './user-list-component-v2.html',
  styleUrl: './user-list-component-v2.css',
})
export class UserListComponentV2 implements OnInit {

  users : User[] = [];

  constructor(private _userRestService : UserRestService, private _cdr : ChangeDetectorRef) {

    

  }

  ngOnInit(): void {
      this._userRestService.getAllUsers().subscribe({
        next: (reponse) => {
          this.users = reponse.users;
        },
        error: () => {
          this.users = []
        },
        complete: () => {
          this._cdr.detectChanges();
        }
      })
  }

}
