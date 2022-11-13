<template>
  <div class="product-container">
    <div class="title">Top Product</div>

    <!-- <ProductCard :product-details="item" :pd-img="item.img" :index="i" />
    </div> -->

    <div>
      <div class="product-card">
        <img src="../assets/ff.webp" alt="sofa" class="product-img" />
        <div class="product-title">Bed</div>

        <div>
          <div class="product-description-container">
            <!--  #product 1 -->
            <div class="description-container">
              <div class="description-title">Active customers</div>
              <p class="description-value">20</p>
            </div>
            <!--  #product 2 -->
            <div class="description-container">
              <div class="description-title">Total Savings</div>
              <p class="description-value">1421.45€</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div>
      <div class="product-card">
        <img src="../assets/sofa.png" alt="sofa" class="product-img" />
        <div class="product-title">Sofa Powder (3-Sizer)</div>

        <div>
          <div class="product-description-container">
            <!--  #product 1 -->
            <div class="description-container">
              <div class="description-title">Active customers</div>
              <p class="description-value">8</p>
            </div>
            <!--  #product 2 -->
            <div class="description-container">
              <div class="description-title">Total Savings</div>
              <p class="description-value">2310.31€</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
// import ProductCard from "./ProductCard.vue";
// const data = [
//   {
//     name: "Bed",
//     imageSrc: "../assets/ff.webp",
//     activeCustomers: 20,
//     savings: "421.45€",
//   },
//   {
//     name: "Sofa Powder (3-Sizer)",
//     imageSrc: "../assets/sofa.png",
//     activeCustomers: 8,
//     savings: "521.45€",
//   },
// ];
</script>
