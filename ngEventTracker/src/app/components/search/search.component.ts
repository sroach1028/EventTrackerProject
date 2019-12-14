import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ExtinctionService } from 'src/app/services/extinction.service';
import { Router } from '@angular/router';
import { Extinction } from 'src/app/models/extinction';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

//F I E L D S

classes = ['Mammal','Reptile','Bird','Amphibian'];
urlId: number;
selected = null;
extinctions: Extinction[];

  constructor(
    private extSvc: ExtinctionService,
    private router: Router,
    private currentRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.extSvc.index().subscribe(
      data => {
        this.extinctions = data;
          });
}
  setSelected(animClass){
    this.selected = animClass;
  }
}
