<template>
  <!-- Instagram Section Begin -->
  <div class="instagram-photo">
    <div class="insta-item set-bg" v-bind:style="{ backgroundImage: 'url(' + insta_1 + ')' }">
        <div class="inside-text">
            <i class="ti-instagram"></i>
            <h5><a href="#">shayna_gallery</a></h5>
        </div>
    </div>
    <div class="insta-item set-bg" v-bind:style="{ backgroundImage: 'url(' + insta_2 + ')' }">
        <div class="inside-text">
            <i class="ti-instagram"></i>
            <h5><a href="#">shayna_gallery</a></h5>
        </div>
    </div>
    <div class="insta-item set-bg" v-bind:style="{ backgroundImage: 'url(' + insta_3 + ')' }">
        <div class="inside-text">
            <i class="ti-instagram"></i>
            <h5><a href="#">shayna_gallery</a></h5>
        </div>
    </div>
    <div class="insta-item set-bg" v-bind:style="{ backgroundImage: 'url(' + insta_4 + ')' }">
        <div class="inside-text">
            <i class="ti-instagram"></i>
            <h5><a href="#">shayna_gallery</a></h5>
        </div>
    </div>
    <div class="insta-item set-bg" v-bind:style="{ backgroundImage: 'url(' + insta_5 + ')' }">
        <div class="inside-text">
            <i class="ti-instagram"></i>
            <h5><a href="#">shayna_gallery</a></h5>
        </div>
    </div>
    <div class="insta-item set-bg" v-bind:style="{ backgroundImage: 'url(' + insta_6 + ')' }">
        <div class="inside-text">
            <i class="ti-instagram"></i>
            <h5><a href="#">shayna_gallery</a></h5>
        </div>
    </div>
  </div>
  <!-- Instagram Section End -->
</template>

<script>
export default {
	name: "instagramitem",
	data() {
		return {
			insta_1: require('@/assets/img/insta-1.jpg'),
			insta_2: require('@/assets/img/insta-2.jpg'),
			insta_3: require('@/assets/img/insta-3.jpg'),
			insta_4: require('@/assets/img/insta-4.jpg'),
			insta_5: require('@/assets/img/insta-5.jpg'),
			insta_6: require('@/assets/img/insta-6.jpg'),
		}
	}
}
</script>