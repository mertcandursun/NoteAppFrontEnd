import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EditNote, Note } from '../app.component';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  readonly Url;

  constructor(private http: HttpClient) {
    this.Url = "https://localhost:44373";
   }

   getData() : Observable<any> {
     return this.http.get(this.Url + "/Note");
   }

   getNoteData(id: any): Observable<any> {
    return this.http.get<Note>(this.Url + "/Note/" + id.id);
  }

   postNote(post: Note): Observable<any>{
    return this.http.post(this.Url + "/Note", post);
  }

  // not working
  // patchNote(patch: EditNote, id: any): Observable<any>{
  //   return this.http.patch(this.Url + "/Note?id=1" + id, patch);
  // }

  // deleteNote(msg: Note){
  //   return this.http.delete(this.Url + "/Note/" + msg.id);
  // }
}
