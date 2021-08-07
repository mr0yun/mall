<template>
  <div>
    <div v-if="Object.keys(commentInfo).length !== 0" class="comment-info">
      <div class="info-header">
        <div class="header-title">用户评价</div>
        <div class="header-more">
          更多
          <i class="arrow-right"></i>
        </div>
      </div>
      <div class="info-user">
        <img :src="commentInfo.user.avatar" alt="">
        <span>{{commentInfo.user.uname}}</span>
      </div>
      <div class="info-detail">
        <p>{{commentInfo.content}}</p>
        
        <div class="info-imgs">
          <img :src="item" v-for="(item, index) in commentInfo.images" :key="index">
        </div>

        <div class="info-other">
          <span class="date">{{commentInfo.created | showDate}}</span>
          <span>{{commentInfo.style}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {formatDate} from "@/common/utils";

  export default {
		name: "DetailCommentInfo",
    props: {
		  commentInfo: {
		    type: Object,
      }
    },
    filters: {
		  showDate: function (value) {
        let date = new Date(value*1000);
        return formatDate(date, 'yyyy-MM-dd hh:mm:ss')
      }
    }
	}
</script>

<style scoped>
  .comment-info {
    padding: 0.3125rem 0.75rem;
    color: #333;
    border-bottom: 0.3125rem solid #f2f5f8;
  }

  .info-header {
    height: 3.125rem;
    line-height: 3.125rem;
    border-bottom: 1px solid rgba(0,0,0,.1);
  }

  .header-title {
    float: left;
    font-size: 1rem;
  }

  .header-more {
    float: right;
    margin-right: 0.625rem;
    font-size: 0.875rem;
  }

  .info-user {
    padding: 0.625rem 0 0.3125rem;
  }

  .info-user img {
    width: 2.625rem;
    height: 2.625rem;
    border-radius: 50%;
  }

  .info-user span {
    position: relative;
    font-size: 1rem;
    top: -1rem;
    margin-left: 0.625rem;
  }

  .info-detail {
    padding: 0 0.3125rem 0.3rem;
  }

  .info-detail p {
    font-size: 0.875rem;
    color: #777;
    line-height: 1.5;
  }

  .info-detail .info-other {
    font-size: 0.75rem;
    color: #999;
    margin-top: 0.625rem;
  }

  .info-other .date {
    margin-right: 0.5rem;
  }

  .info-imgs {
    margin-top: 0.625rem;
  }

  .info-imgs img {
    width: 4.4rem;
    height: 4.4rem;
    margin-right: 0.5rem;
  }

  .arrow-right {
  border-top: 1px solid #999;
  border-left: 1px solid #999;
  width: 9px;
  height: 9px;
  background-color: transparent;
  transform: rotate(135deg);
  display: inline-block;
  margin-left: .1rem;
}
</style>
