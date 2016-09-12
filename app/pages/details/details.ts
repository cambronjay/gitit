import {Component} from '@angular/core';
import {NavController,  NavParams, ModalController, ViewController} from 'ionic-angular';
import {ModalPage} from '../../modals/modal';
import {GitHubService} from '../../providers/githubservice';
import {MomentPipe} from '../../pipes/moment';

@Component({
  templateUrl: 'build/pages/details/details.html',
  providers: [GitHubService],
  pipes: [MomentPipe]
})
export class DetailsPage {

  userdetails: any;

  constructor(private navCtrl: NavController, private navParams:NavParams, private githubservice: GitHubService, public modalCtrl: ModalController) {
    let userid = this.navParams.get('user');
    this.githubservice.getDetails(userid)
    .then(data => this.userdetails = data);
  }

  //Push repos details to modal
  viewRepos(event, repo) {
    let modal = this.modalCtrl.create(ModalPage,{ repo: repo.login });
    modal.present();
  }

}
