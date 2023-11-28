import { Component } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-user-profile',
  template: `
    <div *ngIf="auth.user$ | async as user" class="user-profile">
      <div class="d-flex align-items-center">
        <img [src]="user.picture" class="rounded-circle mr-3" style="width: 40px; height: 40px;">
        <div>
          <div class="font-weight-bold">{{ user.name }}</div>
          <div class="text-muted"><small>{{ user.email }}</small></div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .user-profile {
      padding: 10px;
      border: 1px solid #ddd;
      border-radius: 4px;
      background-color: #f8f9fa;
    }
  `]
})
export class UserProfileComponent {
  constructor(public auth: AuthService) {}
}
