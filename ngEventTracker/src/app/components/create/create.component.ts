import { Component, OnInit } from '@angular/core';
import { Extinction } from 'src/app/models/extinction';
import { ExtinctionService } from 'src/app/services/extinction.service';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
newExt: Extinction = new Extinction();

  constructor(private extSvc: ExtinctionService, private router: Router

    ) { }

  ngOnInit() {

  }

  createExt(form: NgForm) {
    this.newExt = form.value;
    this.extSvc.create(this.newExt).subscribe(
      good => {
        this.router.navigateByUrl('extinctions');
      },
      bad => {
        console.error(bad);
      }
    );
  }
}
