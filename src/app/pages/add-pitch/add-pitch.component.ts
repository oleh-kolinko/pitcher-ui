import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PitchService } from '../../services/pitch';

@Component({
  selector: 'app-add-pitch',
  templateUrl: './add-pitch.component.html',
  styleUrls: ['./add-pitch.component.scss']
})
export class AddPitchComponent implements OnInit {

  public form: FormGroup;
  public file: any;

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

  fileChange(event) {
    let fileList: FileList = event.target.files;
    if (fileList.length > 0) {
      this.file = fileList[0];
    }
  }

  public createPitch(): void {
    let body = this.form.value;
    body.tags = body.tags.split(',').forEach(x => x = x.trim());
    let formData: FormData = new FormData();
    formData.append('uploadFile', this.file, this.file.name);
    let headers = new Headers();
    /** In Angular 5, including the header Content-Type can invalidate your request */
    headers.append('Content-Type', 'multipart/form-data');
    headers.append('Accept', 'application/json');
    let options = { headers: headers };
    this.pitchService.createPitch(formData, options);
    this.form.reset();
    //this.pitchService.createPitch(body, null);
    //this.form.reset();
  }

  public createPitchWithVideo(): void {
      let fileList: FileList = event.target.files;
      if (fileList.length > 0) {
        let file: File = fileList[0];
        
      }

}
