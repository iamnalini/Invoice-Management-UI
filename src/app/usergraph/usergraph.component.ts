import { Component, OnInit } from '@angular/core';
import * as CanvasJS from './canvasjs.min';
import { GraphService } from '../graph.service';

@Component({
  selector: 'app-usergraph',
  templateUrl: './usergraph.component.html',
  styleUrls: ['./usergraph.component.css']
})
export class UsergraphComponent implements OnInit {

  constructor(private graphService: GraphService) { }

  res_data:any;

  ngOnInit(): void {

    this.graphService.usergraph({'user_id':localStorage.getItem('id')}).subscribe((res)=> {
      this.res_data = res;
      var graph_data = [];
      for(var i=0;i<this.res_data.length;i++)
      {
          var obj = {};
          obj['y'] = parseInt(this.res_data[i]['y']);
          obj['label'] = new Date(this.res_data[i]['label']);
          graph_data.push(obj);
      }
      let chart = new CanvasJS.Chart("chartContainer", {
        animationEnabled: true,
        exportEnabled: true,
        title: {
          text: "Date Vs No. of Invoices"
        },
        axisX:{
          title: "Date"
        },
        axisY:{
          title: "Number of Invoices"
        },
        data: [{
          type: "column",
          dataPoints: graph_data
        }]
      });
        
      chart.render();
  
    })

  }

}
