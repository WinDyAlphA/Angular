import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { User } from '../User.model';
import { FormGroup } from '@angular/forms';
import { UserService } from 'src/app/shared.service';

@Component({
  selector: 'app-usermodif',
  templateUrl: './usermodif.component.html',
  styleUrls: ['./usermodif.component.css']
})
export class UsermodifComponent implements OnInit {
  id!: number;
  utilisateur!: User;
  utilisateurForm!: FormGroup;

  constructor(private route: ActivatedRoute, private formBuilder: FormBuilder, private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    // Utilisez paramMap pour obtenir l'ID de la route
    this.route.paramMap.subscribe(params => {
      this.id = Number(params.get('id'));
  
      // Initialisez le formulaire en dehors de la fonction subscribe
      this.utilisateurForm = this.formBuilder.group({
        name: ['', Validators.required],
        email: ['', Validators.required],
        phone: ['', Validators.required],
        website: ['', Validators.required],
      });
  
      this.userService.selectUser(this.id).subscribe(
        (utilisateur) => {
          this.utilisateur = utilisateur;
  
          // Utilisez patchValue pour mettre à jour les valeurs du formulaire
          this.utilisateurForm.patchValue({
            name: this.utilisateur.name,
            email: this.utilisateur.email,
            phone: this.utilisateur.phone,
            website: this.utilisateur.website,
          });
        }
      );
    });
  }

  
  

  onSubmit(): void {
    // Mettre à jour les propriétés de l'utilisateur avec les valeurs du formulaire
    this.utilisateur.name = this.utilisateurForm.value.name;
    this.utilisateur.email = this.utilisateurForm.value.email;
    this.utilisateur.phone = this.utilisateurForm.value.phone;
    this.utilisateur.website = this.utilisateurForm.value.website;

    // Mettre à jour l'utilisateur dans la base de données
    this.userService.modifierUser(this.id, this.utilisateur);

    // Rediriger vers la page du profil de l'utilisateur (ou toute autre page nécessaire)
    this.router.navigate(['/userdetails', this.utilisateur.id]);
  }
}
