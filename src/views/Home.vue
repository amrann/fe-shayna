<template>
  <div class="home">
		<Header />
		<HeroCarousel />
		<BannerItem />
		<InstagramItem />
		<PartnerItem />
		<Footer />
		
  </div>
</template>

<script>
import Header from '../components/Header.vue';
import HeroCarousel from '../components/HeroCarousel.vue'
import BannerItem from '../components/BannerItem.vue'
import InstagramItem from '../components/InstagramItem.vue'
import PartnerItem from '../components/PartnerItem.vue'
import Footer from '../components/Footer.vue'

export default {
	name: "home",
	components: {
		Header,
		HeroCarousel,
		BannerItem,
		InstagramItem,
		PartnerItem,
		Footer
	}
}
</script>