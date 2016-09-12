import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {GitHubService} from '../../providers/githubservice';

@Component({
  templateUrl: 'build/pages/about/about.html',
  providers: [GitHubService]
})
export class AboutPage {

  about: any;

  constructor(private navCtrl: NavController, private githubservice: GitHubService) {
    let userid = 'cambronjay';
    this.githubservice.getDetails(userid)
    .then(data => this.about = data);
  }

}
