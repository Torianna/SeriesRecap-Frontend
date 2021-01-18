import { Component, OnInit } from '@angular/core';
import { SeriesService } from '../../services/series.service';
import { ListOfSeries } from '../../models/list';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-share-link',
  templateUrl: './share-link.component.html',
  styleUrls: ['./share-link.component.scss']
})
export class ShareLinkComponent implements OnInit {

  public link: ListOfSeries;
  public  fullLink: string;
  constructor(private seriesService: SeriesService) { }

  ngOnInit() {
  }

  async generateLink() {
    const linkToShare = this.seriesService.getLinkToShare(localStorage.getItem('userName'));
    this.link = await linkToShare;
    console.log(this.link.id);
    this.fullLink = environment.baseUrl + `/share?id=${this.link.id}`;
    return this.fullLink;
  }
}
