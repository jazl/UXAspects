import { Component } from '@angular/core';
import { ColorService } from '@ux-aspects/ux-aspects';
import { BaseChartDirective } from 'ng2-charts';
import { Chart } from 'chart.js';

@Component({
    selector: 'app',
    templateUrl: './src/app.component.html',
    styleUrls: ['./src/app.component.css']
})
export class AppComponent {

    // configure the directive data
    barChartData: Chart.ChartDataSets[];

    barChartLabels: string[];
    barChartOptions: Chart.ChartOptions;
    barChartLegend: boolean = false;
    barChartColors: any;

    labels: string[] = [
        '.doc', '.ppt', '.pdf', '.xls', '.html', '.txt',
        '.png', '.bmp', '.gif', '.svg', '.ttf', '.wav'
    ];
    data: number[] = [34, 25, 19, 34, 32, 44, 12, 27, 15, 48, 40, 36];

    page: number = 0;
    pageSize: number = 4;

    constructor(colorService: ColorService) {

        this.barChartLabels = this.getPageLabels();

        this.barChartData = [{
            data: this.getPageData(),
            borderWidth: 1
        }];

        // Prepare colors used in chart
        let gridColor = colorService.getColor('grey6').toHex();
        let barBackgroundColor = colorService.getColor('chart1').setAlpha(0.1).toRgba();
        let barHoverBackgroundColor = colorService.getColor('chart1').setAlpha(0.2).toRgba();
        let barBorderColor = colorService.getColor('chart1').toHex();
        let tooltipBackgroundColor = colorService.getColor('grey2').toHex();

        this.barChartOptions = {
            maintainAspectRatio: false,
            responsive: true,
            animation: false,
            scales: {
                xAxes: [{
                    barPercentage: 0.5,
                    categoryPercentage: 1,
                    gridLines: {
                        color: 'transparent'
                    }
                }],
                yAxes: [{
                    gridLines: {
                        color: gridColor
                    },
                    ticks: {
                        min: 0,
                        max: 50,
                        stepSize: 10
                    } as Chart.LinearTickOptions
                }]
            },
            tooltips: {
                backgroundColor: tooltipBackgroundColor,
                cornerRadius: 0,
                callbacks: {
                    title: (item: Chart.ChartTooltipItem[]) => {
                        return;
                    },
                    label: (item: Chart.ChartTooltipItem) => {
                        return `x: ${item.xLabel}, y: ${item.yLabel}`;
                    }
                },
                displayColors: false
            } as any
        };

        this.barChartColors = [
            {
                backgroundColor: barBackgroundColor,
                hoverBackgroundColor: barHoverBackgroundColor,
                borderColor: barBorderColor
            }
        ];

    }

    getPageData(): number[] {
        let startIdx = this.page * this.pageSize;
        let endIdx = startIdx + this.pageSize;

        return this.data.slice(startIdx, endIdx);
    }

    getPageLabels(): string[] {
        let startIdx = this.page * this.pageSize;
        let endIdx = startIdx + this.pageSize;

        return this.labels.slice(startIdx, endIdx);
    }

    goToPreviousPage(): void {

        if (this.hasPreviousPage()) {
            this.page -= 1;

            // get the data and labels for the new page
            this.barChartLabels = this.getPageLabels();
            this.barChartData[0].data = this.getPageData();
        }

    }

    goToNextPage(): void {

        if (this.hasNextPage()) {
            this.page += 1;

            // get the data and labels for the new page
            this.barChartLabels = this.getPageLabels();
            this.barChartData[0].data = this.getPageData();
        }

    }

    hasNextPage(): boolean {
        // get the index of the next page
        let nextPageIndex = (this.page + 1) * this.pageSize;

        // check if this index is out of bounds
        return nextPageIndex < this.data.length;
    }

    hasPreviousPage(): boolean {
        return this.page > 0;
    }

}