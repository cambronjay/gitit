import {Component} from '@angular/core';
import {NavController, NavParams, ModalController, ViewController} from 'ionic-angular';
import {GitHubService} from '../providers/githubservice';
import {MomentPipe} from '../pipes/moment';

@Component({
  templateUrl: 'build/modals/modal.html',
  providers: [GitHubService],
  pipes: [MomentPipe]
})

export class ModalPage {

  repos: any;

  constructor(private viewCtrl: ViewController, public navCtrl:NavController, private navParams:NavParams, public modalCtrl: ModalController, private githubservice: GitHubService) {
    let userid = this.navParams.get('repo');
    this.githubservice.getrepoDetails(userid)
    .then(data => this.repos = data);
  }

  close() {
    this.viewCtrl.dismiss();
  }

}
