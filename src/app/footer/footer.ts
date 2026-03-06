import { Component } from '@angular/core';
import { PreferencesService } from '../common/service/preferences-service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-footer',
  imports: [CommonModule, FormsModule],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {
    
    constructor(public preferencesService: PreferencesService) {

    }

}
