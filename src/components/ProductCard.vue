<template>
  <div>
    <div class="product-card">
      <img src="../assets/ff.webp " alt="sofa" class="product-img" />
      <div class="product-title">
        {{ props.productDetails.name }}
      </div>

      <div>
        <div class="product-description-container">
          <!--  #product 1 -->
          <div class="description-container">
            <div class="description-title">Active customers</div>
            <p class="description-value">
              {{ props.productDetails.activeCustomers }}
            </p>
          </div>
          <!--  #product 2 -->
          <div class="description-container">
            <div class="description-title">Total Savings</div>
            <p class="description-value">{{ props.productDetails.savings }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { defineProps } from "vue";
const props = defineProps({
  productDetails: Object,
  pdImg: String,
  index: Number,
});
</script>
