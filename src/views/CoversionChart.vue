<template>
  <div>
    <canvas id="myChart" height="auto"></canvas>
  </div>
</template>
<script setup>
import Chart from "chart.js/auto";
import { onMounted } from "vue";

let delayed;

const a = () => {
  console.log(document.getElementById("myChart"));
};
onMounted(() => {
  const ctx = document.getElementById("myChart");
  // ctx.addEventListener("resize", (event) => {
  //   console.log(event, document.getElementById("myChart"));
  // });
  window.onresize = a();
  const data = {
    labels: ["January", "Febraury", "March", "April", "May", "June"],
    datasets: [
      {
        label: "Expected Conversion Volume",
        data: [92.625, 99.75, 78.375, 64.125, 10.45, 89.345],
        borderColor: "#B7E7C2",
        backgroundColor: "#D5F4DC",
        order: 1,
        datalabels: {
          anchor: "end",
          align: "top",
          color: "#B7E7C2",
          font: {
            color: "#B7E7C2",
            weight: "600",
          },
          formatter: function (value) {
            return value + "€";
          },
        },
      },
      {
        label: "Expected Savings Plan Conversions",
        data: [62, 67, 54, 43, 3, 78],
        borderColor: "#b575f494",
        backgroundColor: "#b575f494",
        type: "line",
        order: 0,
        datalabels: {
          anchor: "start",
          align: "bottom",
          color: "#B575F4",
          clamp: true,
          font: {
            weight: "bolder",
          },
        },
      },
    ],
  };
  new Chart(ctx, {
    type: "bar",
    data: data,
    options: {
      responsive: true,
      aspectRatio: window.innerWidth < 800 ? 1 : 2,
      layout: {
        padding: {
          top: 20,
          bottom: 20,
        },
      },
      scales: {
        y: {
          stacked: true,
          grid: {
            display: false,
          },
          ticks: {
            max: Math.max(...data.datasets[0].data) + 10,
            display: window.innerWidth <= 370 ? true : false,
            beginAtZero: true,
          },
        },
        x: {
          stacked: true,
          grid: {
            display: false,
          },
          ticks: {
            color: "#36454F",
            font: {
              weight: "bolder",
            },
          },
        },
      },
      plugins: {
        legend: {
          position: "bottom",
          align: "end",
        },
      },
      elements: {
        bar: {
          borderRadius: 8,
        },
      },

      hover: {
        animationDuration: 10,
      },
      animation: {
        duration: "1000",
        onComplete: () => {
          delayed = true;
        },
        delay: (context) => {
          let delay = 0;
          if (
            context.type === "data" &&
            context.mode === "default" &&
            !delayed
          ) {
            delay = context.dataIndex * 300 + context.datasetIndex * 100;
          }
          return delay;
        },
      },
    },
  });
});
</script>
<style></style>
