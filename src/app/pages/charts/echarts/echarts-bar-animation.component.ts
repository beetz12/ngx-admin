import { AfterViewInit, Component, OnDestroy } from '@angular/core';
import { NbThemeService } from '@nebular/theme';

@Component({
  selector: 'ngx-echarts-bar-animation',
  template: ` <div echarts [options]="options" class="echart"></div> `,
})
export class EchartsBarAnimationComponent implements AfterViewInit, OnDestroy {
  options: any = {};
  themeSubscription: any;

  constructor(private theme: NbThemeService) {}

  ngAfterViewInit() {
    this.themeSubscription = this.theme
      .getJsTheme()
      .subscribe((config: any) => {
        const xAxisData = [] as string[];
        const data1 = [] as number[];
        const data2 = [] as number[];

        const colors: any = config.variables ? config.variables : {};
        const echarts: any = config.variables
          ? config.variables['echarts']
          : {};

        this.options = {
          backgroundColor: echarts.bg,
          color: [colors.primaryLight, colors.infoLight],
          legend: {
            data: ['bar', 'bar2'],
            align: 'left',
            textStyle: {
              color: echarts.textColor,
            },
          },
          xAxis: [
            {
              data: xAxisData,
              silent: false,
              axisTick: {
                alignWithLabel: true,
              },
              axisLine: {
                lineStyle: {
                  color: echarts.axisLineColor,
                },
              },
              axisLabel: {
                textStyle: {
                  color: echarts.textColor,
                },
              },
            },
          ],
          yAxis: [
            {
              axisLine: {
                lineStyle: {
                  color: echarts.axisLineColor,
                },
              },
              splitLine: {
                lineStyle: {
                  color: echarts.splitLineColor,
                },
              },
              axisLabel: {
                textStyle: {
                  color: echarts.textColor,
                },
              },
            },
          ],
          series: [
            {
              name: 'bar',
              type: 'bar',
              data: [],
              animationDelay: (idx: number) => idx * 10,
            },
            {
              name: 'bar2',
              type: 'bar',
              data: [],
              animationDelay: (idx: number) => idx * 10 + 100,
            },
          ],
          animationEasing: 'elasticOut',
          animationDelayUpdate: (idx: any) => idx * 5,
        };

        for (let i = 0; i < 100; i++) {
          xAxisData.push('Category ' + i);
          data1.push((Math.sin(i / 5) * (i / 5 - 10) + i / 6) * 5);
          data2.push((Math.cos(i / 5) * (i / 5 - 10) + i / 6) * 5);
        }
      });
  }

  ngOnDestroy(): void {
    this.themeSubscription.unsubscribe();
  }
}
