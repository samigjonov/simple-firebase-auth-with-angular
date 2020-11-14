import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  public defaultImagePath = 'https://media.istockphoto.com/vectors/default-profile-picture-avatar-photo-placeholder-vector-illustration-vector-id1223671392?b=1&k=6&m=1223671392&s=612x612&w=0&h=5VMcL3a_1Ni5rRHX0LkaA25lD_0vkhFsb1iVm1HKVSQ=';
  constructor(public authService: AuthService) {
  }

  ngOnInit(): void {
  }

  public logout() {
    this.authService.logout();
  }

}
