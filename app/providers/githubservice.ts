import {Injectable} from '@angular/core';
import {Http, Response, Headers} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class GitHubService {

  constructor(private http: Http) {

  }

  // Search for users
  searchUsers(searchParam: string) {
    return new Promise(resolve => {
      this.http.get(`https://api.github.com/search/users?q=${searchParam}`)
        .map(res => res.json().items)
        .subscribe(data => {
          resolve(data);
        });

    });
  }

  // Get user details
  getDetails(login: string) {
    return new Promise(resolve => {
      this.http.get(`https://api.github.com/users/${login}`)
        .map(res => res.json())
        .subscribe(data => {
          resolve(data);
        });

    });
  }

  // Get user repo details
  getrepoDetails(login: string) {
    return new Promise(resolve => {
      this.http.get(`https://api.github.com/users/${login}/repos`)
        .map(res => res.json())
        .subscribe(data => {
          resolve(data);
        });

    });
  }

  // Error handler
  handleError(error: any) {
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg);
    return Observable.throw(errMsg);
  }


}
