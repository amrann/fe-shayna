<template>
	<!-- Partner Logo Section Begin -->
	<div class="partner-logo">
		<div class="container">
			<carousel class="logo-carousel" :loop="true" :dots="false" :items="5" :nav="false" :autoplay="true">
				<div class="logo-item">
					<div class="tablecell-inner">
						<img :src="logo_1" alt=""/>
					</div>
				</div>
				<div class="logo-item">
					<div class="tablecell-inner">
						<img :src="logo_2" />
					</div>
				</div>
				<div class="logo-item">
					<div class="tablecell-inner">
						<img :src="logo_3" />
					</div>
				</div>
				<div class="logo-item">
					<div class="tablecell-inner">
						<img :src="logo_4" />
					</div>
				</div>
				<div class="logo-item">
					<div class="tablecell-inner">
						<img :src="logo_5" />
					</div>
				</div>
			</carousel>
		</div>
	</div>
	<!-- Partner Logo Section End -->
</template>

<script>
import carousel from 'vue-owl-carousel'

export default {
	name: "PartnerItem",
	components: {
		carousel
	},
	data() {
		return {
			logo_1: require('@/assets/img/logo-carousel/logo-1.png'),
			logo_2: require('@/assets/img/logo-carousel/logo-2.png'),
			logo_3: require('@/assets/img/logo-carousel/logo-3.png'),
			logo_4: require('@/assets/img/logo-carousel/logo-4.png'),
			logo_5: require('@/assets/img/logo-carousel/logo-5.png')
		}
	}
}
</script>