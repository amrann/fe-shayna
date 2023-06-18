<template>
  <!-- Hero Section Begin -->
  <section class="hero-section">
    <carousel class="hero-items" :items="1" :nav="false">

      <div class="single-hero-items set-bg" :style="{ backgroundImage: 'url(' + background_hero_1 + ')' }">
        <div class="container">
          <div class="row">
            <div class="col-lg-5">
              <span>Bag,kids</span>
              <h1>Black friday</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore
              </p>
              <a href="#" class="primary-btn">Shop Now</a>
            </div>
          </div>
        </div>
      </div>
      <div class="single-hero-items set-bg" :style="{ backgroundImage: 'url(' + background_hero_2 + ')' }">
        <div class="container">
          <div class="row">
            <div class="col-lg-5">
              <span>Bag,kids</span>
              <h1>Black friday</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore
              </p>
              <a href="#" class="primary-btn">Shop Now</a>
            </div>
          </div>
        </div>
      </div>
      <div class="single-hero-items set-bg" :style="{ backgroundImage: 'url(' + background_hero_3 + ')' }">
        <div class="container">
          <div class="row">
            <div class="col-lg-5">
              <span>Bag,kids</span>
              <h1>Black friday</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore
              </p>
              <a href="#" class="primary-btn">Shop Now</a>
            </div>
          </div>
        </div>
      </div>

    </carousel>
  </section>
  <!-- Hero Section End -->
</template>

<script>
import carousel from 'vue-owl-carousel'

export default {
	name: "home",
	components: {
		carousel
	},
	data() {
		return {
			background_hero_1: require('@/assets/img/hero-1.jpg'),
			background_hero_2: require('@/assets/img/hero-2.jpg'),
			background_hero_3: require('@/assets/img/hero-3.jpg'),
		}
	}
}
</script>