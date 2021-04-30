import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Dragoes } from 'src/app/model/dragoes.model';
import { ApiService } from 'src/app/service/api.service';
import Formatacoes from 'src/app/utils/formatacoes';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  dragoes: Dragoes[];

  constructor(private apiService: ApiService, public router: Router) {}

  ngOnInit(): void {
    this.apiService.getDragoes().subscribe(
      (data) =>
        (this.dragoes = data.sort(function (a, b) {
          return a.name.toLocaleLowerCase() > b.name.toLocaleLowerCase()
            ? 1
            : b.name.toLocaleLowerCase() > a.name.toLocaleLowerCase()
            ? -1
            : 0;
        })),
      (err) => window.alert('Algo deu errado =/')
    );
  }

  deleteDragon(dragao: Dragoes): void {
    this.apiService.deleteDragao(dragao.id).subscribe(
      (data) => (
        (this.dragoes = this.dragoes.filter((u) => u !== dragao)),
        window.alert('Dragão deletado com sucesso!')
      ),
      (err) => window.alert('Algo deu errado =/')
    );
  }

  editDragon(dragao: Dragoes): void {
    window.localStorage.removeItem('editDragonId');
    window.localStorage.setItem('editDragonId', dragao.id.toString());
    this.router.navigate(['edit-dragon']);
  }

  formatarData(value) {
    return Formatacoes.formatarData(value);
  }

  goToAddDragonPage(): void {
    window.localStorage.removeItem('addDragonId');
    let ultimoDragao = this.dragoes[this.dragoes.length - 1];
    window.localStorage.setItem('addDragonId', ultimoDragao.id.toString());
    this.router.navigate(['/add-dragon']);
  }

  goToDetailsDragonPage(dragao: Dragoes): void {
    window.localStorage.removeItem('detailDragonId');
    window.localStorage.setItem('detailDragonId', dragao.id.toString());
    this.router.navigate(['/detail-dragon']);
  }
}
