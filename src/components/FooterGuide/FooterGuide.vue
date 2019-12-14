<template>
	<div class="footerGuide">
		<div class="footer_item">
			<span><i class="iconfont icon-waimai" :class="{on: $route.path==='/msite'}" @click="goto('/msite')"></i></span>
			<span>首页</span>
		</div>
		<div class="footer_item">
			<span><i class="iconfont icon-search2" :class="{on: $route.path==='/search'}" @click="goto('/search')"></i></span>
			<span>搜索</span>
		</div>
		<div class="footer_item">
			<span><i class="iconfont icon-dingdan" :class="{on: $route.path==='/order'}"
				@click="goto('/order')"
			></i></span>
			<span>订单</span>
		</div>
		<div class="footer_item">
			<span><i class="iconfont icon-geren" :class="{on: $route.path==='/profile'}" @click="goto('/profile')"></i></span>
			<span>个人</span>
		</div>
	</div>
	
</template>


<script>
	export default{
		methods:{
			goto(path){
				this.$router.replace(path)
			}
		}
	}
</script>


<style scoped lang="stylus" rel="stylesheet/stylus">
  @import '../../common/stylus/mixins.styl'
  .footerGuide
    top-border-1px(#cccccc)
    display flex
    position fixed
    left 0
    bottom 0
    height 50px
    width 100%
    .footer_item
      display flex
      flex-direction column
      text-align center
      width 25%
      .on
        color $green
      span
        margin-top 3px
        font-size 12px
        i
          font-size 22px
</style>
