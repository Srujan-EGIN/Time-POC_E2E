import { Component } from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-chart',
  standalone: true,
  imports: [],
  templateUrl: './chart.component.html',
  styleUrl: './chart.component.scss'
})
export class ChartComponent {
  public chart: any;
  createChart(){
  
    this.chart = new Chart("MyChart", {
      type: 'bar', //this denotes tha type of chart

      data: {// values on X-Axis
        labels: ['October','November', 'December'], 
	       datasets: [
          {
            // label: "Sales",
            data: ['153','148', '116.3'],
            backgroundColor: '#a3cae9'
          },
          {
            // label: "Profit",
            data: ['10', '15', '10'],
            backgroundColor: '#d4d9de'
          }  
        ]
      },
      options: {
        aspectRatio:2.5
      }
      
    });
  }
  ngOnInit(): void {
    this.createChart();
  }
}
