import { Component, OnInit } from '@angular/core';
import { StatisticsService } from '../statistics.service';

import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent implements OnInit {
  mainUrl = 'https://covid-19-data.p.rapidapi.com/totals?format=undefined';
  countryStatsUrl : 'https://corona-virus-world-and-india-data.p.rapidapi.com/api'
  confirmed: any;
  recovered: any;
  critical: any;
  deaths: any;
  displayedColumns = ["Confirmed", "Recovered", "Critical", "Deaths"];

  constructor(public httpClient: HttpClient) { }

    
  ngOnInit() {
    this.showStats();
    }

  showStats(){
    let httpHeaders = new HttpHeaders()
                         .set('x-rapidapi-host', 'covid-19-data.p.rapidapi.com').set('x-rapidapi-key', 'd7519d976fmshaf73ad96cdcb9fdp16f0eejsnc0fc8f5d9242');
    this.httpClient.get(this.mainUrl,{headers: httpHeaders}).subscribe((res : any) => {
    this.confirmed = res[0].confirmed;
    this.recovered = res[0].recovered;
    this.critical = res[0].critical;
    this.deaths = res[0].deaths;
  })}

  // showCountryStats(){
  //   console.log('HELLO vKira');
  //   let httpHeaders = new HttpHeaders()
  //                        .set('x-rapidapi-host', 'corona-virus-world-and-india-data.p.rapidapi.com').set('x-rapidapi-key', 'd7519d976fmshaf73ad96cdcb9fdp16f0eejsnc0fc8f5d9242');
  //   this.httpClient.get(this.countryStatsUrl,{headers: httpHeaders}).subscribe((res : any) => {
  //     console.log('DONE');
  // })}

}
