import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RepoManageService } from 'src/app/shared/services/repo-manage.service';
import { Repository } from 'src/app/shared/models/repository.model';

@Component({
  selector: 'app-add-repo',
  templateUrl: './add-repo.component.html',
  styleUrls: ['./add-repo.component.css']
})
export class AddRepoComponent implements OnInit {

  programmingLanguages = ['Java','Javascript','TypeScript','C#','Php'];
  types=['User','Admin'];

  marker = false;

  addRepoForm: FormGroup;
  repo: Repository;

  constructor(private manage: RepoManageService) { }

  ngOnInit() {
    this.addRepoForm = new FormGroup({
      name: new FormControl(null,[Validators.required,Validators.pattern("^[a-z-_.]{3,25}$")]),
      language: new FormControl(null,Validators.required),
      open_isues: new FormControl(null,[Validators.pattern('^[0-9]{1,3}$'), this.sizeChek.bind(this)]),
      watchers_count: new FormControl(null,Validators.pattern('^[0-9]{1,3}$')),
      size: new FormControl(null,[Validators.pattern('^[0-9]{1,16}$'), this.sizeChek.bind(this)]),
      owner: new FormGroup({
        login: new FormControl(null,[Validators.required, Validators.pattern("^[a-z0-9]{3,25}$")]),
        type: new FormControl(null,Validators.required)
      })
    });
    this.addRepoForm.statusChanges.subscribe(
      status=>{if(status == 'VALID') this.marker= true;}
    )
  }

  onSubmit(){
    if(this.marker){
      this.repo = this.addRepoForm.value;
      this.repo.id = 0;
      this.manage.addRepoFav(this.repo);
    }
  }

  sizeChek(control: FormControl): number{
    if(control.value < 1)
      return control.value;
    return null;
  }

}
