<template>
  <!-- Women Banner Section Begin -->
  <section class="women-banner spad">
    <div class="container-fluid">
      <div class="row">
        <div class="col-lg-12 mt-5" v-if="products.length">
          <carousel class="product-slider" :autoplay="true" :items="3" :nav="false">
            <div class="product-item" v-for="item in products" :key="item.id">
              <div class="pi-pic">
                <!-- <img src="img/products/women-2.jpg" alt="" /> -->
                <!-- <img :src="mickey1"> -->
                <img :src="item.product_galleries[0].photo" alt />
                <ul>
                  <li class="w-icon active">
                    <router-link to="/product"><i class="icon_bag_alt"></i></router-link>
                  </li>
                  <li class="quick-view"><router-link :to="'/product/'+item.id" >+ Quick View</router-link></li>
                </ul>
              </div>
              <div class="pi-text">
                <div class="catagory-name">{{item.type}}</div>
                <router-link to="/product" >
                  <h5>{{item.name}}</h5>
                </router-link>
                <div class="product-price">
                  ${{item.price}}
                  <span>$35.00</span>
                </div>
              </div>
            </div>
          </carousel>
        </div>
        <div class="col-lg-12" v-else>
          <p>Data tidak ditemukan</p>
        </div>
      </div>
    </div>
  </section>
  <!-- Women Banner Section End -->
</template>

<script>
import carousel from 'vue-owl-carousel'
import axios from 'axios'

export default {
	name: "banneritem",
	components: {
		carousel
	},
	data() {
		return {
			mickey1: require('@/assets/img/mickey1.jpg'),
			women_2: require('@/assets/img/products/women-2.jpg'),
			women_3: require('@/assets/img/products/women-3.jpg'),
			women_4: require('@/assets/img/products/women-4.jpg'),
      products: []
		}
	},
  mounted() {
    axios
    .get("http://103.193.177.167/api/v1/products")
    .then(res => (this.products = res.data.data.data))
    .catch(err => console.log(err) )
  }
}
</script>

<style scoped>
  .product-item {
    margin-right: 25px;
  }
</style>