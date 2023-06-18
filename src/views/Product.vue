<template>
  <div class="product">
		<Header />

    <!-- Breadcrumb Section Begin -->
    <div class="breacrumb-section text-left">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="breadcrumb-text product-more">
              <router-link to="/" ><i class="fa fa-home"></i> Home</router-link>
              <span>Detail</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Breadcrumb Section Begin -->

    <!-- Product Shop Section Begin -->
    <section class="product-shop spad page-details">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="row">
              <div class="col-lg-6">
                <div class="product-pic-zoom">
                  <img class="product-big-img" :src="default_img" alt="" />
                </div>
                <div class="product-thumbs">
                    <carousel :autoplay="true" :loop="true" :dots="false" :nav="false" class="product-thumbs-track ps-slider">
                      <div class="pt" @click="changeImg(data_dummy[0])" :class="data_dummy[0] == default_img ? 'active' : ''">
                        <img :src="mickey_1" alt="" />
                      </div>

                      <div class="pt" @click="changeImg(data_dummy[1])" :class="data_dummy[1] == default_img ? 'active' : ''">
                        <img :src="mickey_2" alt="" />
                      </div>

                      <div class="pt" @click="changeImg(data_dummy[2])" :class="data_dummy[2] == default_img ? 'active' : ''">
                        <img :src="mickey_3" alt="" />
                      </div>

                      <div class="pt" @click="changeImg(data_dummy[3])" :class="data_dummy[3] == default_img ? 'active' : ''">
                        <img :src="mickey_4" alt="" />
                      </div>
                    </carousel>
                </div>
              </div>
              <div class="col-lg-6">
                <div class="product-details text-left">
                  <div class="pd-title">
                    <span>oranges</span>
                    <h3>Pure Pineapple</h3>
                  </div>
                  <div class="pd-desc">
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, error officia. Rem aperiam laborum voluptatum vel, pariatur modi hic provident eum iure natus quos non a sequi, id accusantium! Autem.
                    </p>
                    <p>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam possimus quisquam animi, commodi, nihil voluptate nostrum neque architecto illo officiis doloremque et corrupti cupiditate voluptatibus error illum. Commodi expedita animi nulla aspernatur.
                      Id asperiores blanditiis, omnis repudiandae iste inventore cum, quam sint molestiae accusamus voluptates ex tempora illum sit perspiciatis. Nostrum dolor tenetur amet, illo natus magni veniam quia sit nihil dolores.
                      Commodi ratione distinctio harum voluptatum velit facilis voluptas animi non laudantium, id dolorem atque perferendis enim ducimus? A exercitationem recusandae aliquam quod. Itaque inventore obcaecati, unde quam
                      impedit praesentium veritatis quis beatae ea atque perferendis voluptates velit architecto?
                    </p>
                    <h4>$495.00</h4>
                  </div>
                  <div class="quantity">
                    <router-link to="/cart" ><a href="shopping-cart.html" class="primary-btn pd-cart">Add To Cart</a> </router-link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Product Shop Section End -->

    <RelatedItem />


		<Footer />
		
  </div>
</template>

<script>
import Header from '../components/Header.vue'
import RelatedItem from '../components/RelatedItem.vue'
import Footer from '../components/Footer.vue'

import carousel from 'vue-owl-carousel'

export default {
	name: "home",
	components: {
		Header,
    RelatedItem,
		Footer,
    carousel
	},
  data() {
    return {
      default_img : require('@/assets/img/mickey1.jpg'),
      data_dummy: [
        require('@/assets/img/mickey1.jpg'),
        require('@/assets/img/mickey2.jpg'),
        require('@/assets/img/mickey3.jpg'),
        require('@/assets/img/mickey4.jpg'),
      ],
      mickey_1 : require('@/assets/img/mickey1.jpg'),
      mickey_2 : require('@/assets/img/mickey2.jpg'),
      mickey_3 : require('@/assets/img/mickey3.jpg'),
      mickey_4 : require('@/assets/img/mickey4.jpg')

    }
  },
  methods: {
    changeImg(urlImg) {
      this.default_img = urlImg;
    }
  }
}
</script>

<style scoped>
  .product-thumbs .pt {
    margin-right : 10px;
  }
</style>