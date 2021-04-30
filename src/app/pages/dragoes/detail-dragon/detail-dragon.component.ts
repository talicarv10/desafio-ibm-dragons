import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Dragoes } from 'src/app/model/dragoes.model';
import { ApiService } from 'src/app/service/api.service';
import Formatacoes from 'src/app/utils/formatacoes';

@Component({
  selector: 'app-detail-dragon',
  templateUrl: './detail-dragon.component.html',
  styleUrls: ['./detail-dragon.component.scss'],
})
export class DetailDragonComponent implements OnInit {
  dragao: Dragoes;
  historias: Array<any>;
  historia: string;

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    let dragaoId = window.localStorage.getItem('detailDragonId');
    this.apiService.getDragaoById(+dragaoId).subscribe((data) => {
      this.dragao = data;
      if (data.histories instanceof Array) {
        this.historias = data.histories;
      } else {
        this.historia = data.histories;
      }
    });
  }

  formatarData(value) {
    return Formatacoes.formatarData(value);
  }
}
