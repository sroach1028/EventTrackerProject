import { Component, OnInit } from '@angular/core';
import { ExtinctionService } from 'src/app/services/extinction.service';
import { ActivatedRoute, Router } from "@angular/router";
import { Extinction } from 'src/app/models/extinction';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-extinction',
  templateUrl: './extinction.component.html',
  styleUrls: ['./extinction.component.css']
})
export class ExtinctionComponent implements OnInit {

  // F I E L D S
  title = 'Animal Extinctions';
  selected = null;
  extinctions = [];
  urlId: number;
  newExt: Extinction = new Extinction();

  constructor(private extSvc: ExtinctionService,
              private router: Router,
              private currentRoute: ActivatedRoute) { }

  ngOnInit() {
    this.extSvc.index().subscribe(
      data => {
        this.extinctions = data;
        if (this.currentRoute.snapshot.paramMap.get("id")) {
          this.urlId = +this.currentRoute.snapshot.paramMap.get("id");
          this.extinctions.forEach(e => {
            if (e.id === this.urlId) {
              this.selected = e;
            }
          });
          if (this.selected == null) {
            this.router.navigateByUrl('**');
          }
        }
      },
      err => console.error("Reload error in Component")
    );
  }

  reload() {
    this.extSvc.index().subscribe(
      good => {
        this.extinctions = good;
        console.log(good);
      },
      bad => {
        console.error(bad);
      }
    );
    this.newExt = new Extinction();
    this.selected = null;
    // this.editExt = null;
  }

  displaySelected(ext) {
    this.selected = ext;
  }

  createExt(form: NgForm){
    this.newExt = form.value;
    this.extSvc.create(this.newExt).subscribe(
      good => {
        this.reload();
      },
      bad => {
        console.error(bad);
      }
    );
  }

  delete() {
    this.extSvc.destroy(this.selected.id).subscribe(
      good => {
        this.reload();
      },
      bad => {
        console.error(bad);
      }
    );
  }


}
