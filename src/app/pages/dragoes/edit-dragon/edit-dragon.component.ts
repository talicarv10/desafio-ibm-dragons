import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Dragoes } from 'src/app/model/dragoes.model';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-edit-dragon',
  templateUrl: './edit-dragon.component.html',
  styleUrls: ['./edit-dragon.component.scss'],
})
export class EditDragonComponent implements OnInit {
  dragoes: Dragoes;
  editForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private apiService: ApiService
  ) {}

  ngOnInit() {
    let dragaoId = window.localStorage.getItem('editDragonId');
    if (!dragaoId) {
      alert('Algo deu errado :/');
      this.router.navigate(['home']);
      return;
    }
    this.editForm = this.formBuilder.group({
      id: [dragaoId],
      createdAt: ['', Validators.required],
      name: ['', Validators.required],
      type: ['', Validators.required],
      histories: ['', Validators.required],
    });
    this.apiService.getDragaoById(+dragaoId).subscribe((data) => {
      this.editForm.setValue(data);
      let dataFormatada = data.createdAt;
      if (data.createdAt.indexOf('/') > -1) {
        this.editForm.controls['createdAt'].setValue(dataFormatada);
      } else {
        this.editForm.controls['createdAt'].setValue(
          new Date(data.createdAt).toLocaleDateString()
        );
      }
    });
  }

  onSubmit() {
    this.apiService
      .updateDragao(this.editForm.value)
      .pipe()
      .subscribe(
        (data) => {
          if (data) {
            alert('Dragão alterado com sucesso!');
            this.router.navigate(['home']);
          } else {
            alert('Ocorreu um erro!');
          }
        },
        (error) => {
          alert(error);
        }
      );
  }
}
