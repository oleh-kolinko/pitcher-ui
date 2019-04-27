import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'home',
  templateUrl: './home.html',
  styleUrls: ['./home.scss']
})
export class HomeComponent {
    apiEndPoint = 'http//:localhost:3000'
    constructor(public http: HttpClient){

    }
    fileChange(event) {
        let fileList: FileList = event.target.files;
        if(fileList.length > 0) {
            let file: File = fileList[0];
            let formData:FormData = new FormData();
            formData.append('uploadFile', file, file.name);
            let headers = new HttpHeaders();
            /** In Angular 5, including the header Content-Type can invalidate your request */
            headers.append('Content-Type', 'multipart/form-data');
            headers.append('Accept', 'application/json');
            let options = { headers };
            this.http.post(`${this.apiEndPoint}`, formData, options)
                // .map(res => res.json())
                // .catch(error => Observable.throw(error))
                .subscribe(
                    data => console.log('success'),
                    error => console.log(error)
                )
        }
    }
}
