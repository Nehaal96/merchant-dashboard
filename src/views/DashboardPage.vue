<template>
  <div class="second-layer">
    <!-- <div class="banner-container">
      <div class="banner">
        <div>Conversion Rate</div>
      </div>
      <div class="banner"></div>
      <div class="banner"></div>
      <div class="banner"></div>
      <div class="banner"></div>
    </div> -->
    <div class="product-information">
      <div class="chart-container">
        <div class="title">Forecast</div>
        <ConversionChart />
      </div>
      <ProductList />
    </div>
  </div>
</template>
<script setup>
import ConversionChart from "./CoversionChart.vue";
import ProductList from "../components/ProductList.vue";
import "./stylesheets/dashboard.css";
</script>
<style></style>
