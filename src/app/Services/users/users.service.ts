import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  todos = new BehaviorSubject(null);
  todos_ = new BehaviorSubject(null);

  constructor(
    private http: HttpClient,
  ) { }

  get_todos(): Observable<any> {
    return this.http.get(environment.todos);
  }

  _get_todos() {
    this.get_todos().subscribe(response => {
      if (response) {
        if (response.length > 0) {
          this.todos.next(response);
        } else {
          console.log('error dey')
        }
      }
    }, error => {
      console.log(error)
    });
  }
}
