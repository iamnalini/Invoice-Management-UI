import { Component, OnInit } from '@angular/core';
import * as CanvasJS from './canvasjs.min';
import { GraphService } from '../graph.service';

@Component({
  selector: 'app-admingraph',
  templateUrl: './admingraph.component.html',
  styleUrls: ['./admingraph.component.css']
})
export class AdmingraphComponent implements OnInit {

  constructor(private graphService: GraphService) { }

  res_data:any;
  res_data1:any;

  ngOnInit(): void {

    this.graphService.admingraph().subscribe((res)=> {
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


    this.graphService.admingraph1().subscribe((res)=> {
      this.res_data1 = res;
      var graph_data = [];
      for(var i=0;i<this.res_data1.length;i++)
      {
          var obj = {};
          obj['y'] = parseInt(this.res_data1[i]['y']);
          obj['label'] = this.res_data1[i]['label'];
          graph_data.push(obj);
      }
      let chart = new CanvasJS.Chart("chartContainer1", {
        animationEnabled: true,
        exportEnabled: true,
        title: {
          text: "User Vs No. of Invoices"
        },
        axisX:{
          title: "Users"
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
