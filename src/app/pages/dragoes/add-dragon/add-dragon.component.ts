import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-add-dragon',
  templateUrl: './add-dragon.component.html',
  styleUrls: ['./add-dragon.component.scss'],
})
export class AddDragonComponent implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private apiService: ApiService
  ) {}

  addForm: FormGroup;

  ngOnInit() {
    let dragaoId = window.localStorage.getItem('addDragonId');
    this.addForm = this.formBuilder.group({
      id: [parseInt(dragaoId) + 1],
      createdAt: [new Date().toLocaleDateString(), Validators.required],
      name: ['', Validators.required],
      type: ['', Validators.required],
      histories: ['', Validators.required],
    });
  }

  adicionarDragao() {
    this.apiService.createDragao(this.addForm.value).subscribe(
      (data) => (
        window.alert('Dragão adicionado com sucesso!'),
        this.router.navigate(['/home'])
      ),
      (err) => window.alert('Algo deu errado =/')
    );
  }
}
