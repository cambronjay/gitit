import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {GitHubService} from '../../providers/githubservice';
import {DetailsPage} from '../details/details';

@Component({
  templateUrl: 'build/pages/github/github.html',
  providers: [GitHubService]
})

export class GitHubPage {

  results: any;
  GitHubSearch: string = '';
  val: string = '';
  constructor(private navCtrl: NavController, private githubservice: GitHubService) {
    this.val = '';
  }

  //Push user details to new view
  viewDetails(event, user) {
    this.navCtrl.push(DetailsPage, {
      user: user.login
    });
  }

  //User searchbar event
  search(search: any) {
    this.val = search.target.value;
    //Search only if character length is greater than 3 and search query is not empty
    if ((this.val && this.val.trim() != '') && this.val.trim().length > 2) {
        // Search for users using service
        this.githubservice.searchUsers(this.val)
          .then(data => this.results = data)
    }
  }

}
