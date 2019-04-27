import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PitchService } from '../../services/pitch';

@Component({
  selector: 'app-add-pitch',
  templateUrl: './add-pitch.component.html',
  styleUrls: ['./add-pitch.component.scss']
})
export class AddPitchComponent implements OnInit {

  public form: FormGroup;

  constructor(public formBuilder: FormBuilder, public pitchService: PitchService) { }

  ngOnInit() {
    this.buildForm();
  }


  private buildForm(): void {
    this.form = this.formBuilder.group({
      title: '',
      description: '',
      tags: '',
      titlePic: ''
    })
  }

  public createPitch(): void {
    let body = this.form.value;
    body.tags = body.tags.split(',').forEach(x => x = x.trim());
    this.pitchService.createPitch(body);
  }

}
