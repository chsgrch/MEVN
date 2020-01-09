import { Bar } from "vue-chartjs";

export default {
  extends: Bar,
  mounted() {
    // Overwriting base render method with actual data.
    this.renderChart(
      {
        labels: [
          "2010",
          "2011",
          "2012",
          "2013",
          "2014",
          "2015",
          "2016",
          "2017",
          "2018",
          "2019"
        ],
        datasets: [
          {
            label: "Урожай бахчевых",
            backgroundColor: "#f87979",
            height: 90,
            data: [30, 35, 37, 39, 41, 41, 43, 60, 65, 70]
          },
          {
            label: "Урожай кукурузы",
            backgroundColor: "#596fd7",
            height: 90,
            data: [40, 42, 45, 48, 54, 63, 72, 78, 85, 90]
          },
          {
            label: "Урожай подсолечника",
            backgroundColor: "#74FF33",
            height: 90,
            data: [35, 40, 45, 50, 58, 58, 64, 64, 70, 80]
          }
        ]
      },
      { responsive: true, maintainAspectRatio: false }
    );
  }
};
