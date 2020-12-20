<template>
  <div id = "home">
    <div class = "homePage"
          v-bind:style = "imgStyle">
      <div class="container">
        <div class="row">
          <div class="col-sm rel-box"
            v-bind:style = "imgStyle"  >
            <div class = "first">
            <h1>Natalia Konovalova</h1>
            <p class="job-title">Full Stack Developer</p>
            <a href="/contact" class="btn btn-fill mr-3"
                @click = "goToContact">Hire me</a>
            <div class="visible-xxs clearfix"></div>
            <a href="#portfolio" class="btn btn-border">Explore more</a>
            </div>
          </div>
          <div class="col-sm rel-box"
              v-bind:style = "imgStyle"  >
            <div class = "second">
              <!--<img alt="Natalia's photo" src="../../public/img/photo.png">-->
          </div>
          </div>
        </div>
      </div>
    </div>
    <about-app></about-app>
  </div>
</template>

<script>
  import aboutApp from './About'
  export default {
    components: {
      aboutApp
    },
    data() {
      return {
        imgStyle : {height: ''}
      }
    },
    mounted() {
      this.imgStyle.height =  `${window.innerHeight}px`;
    },
    methods: {
      goToContact() {
        this.$router.push('/contact')
      }
    }
  }
</script>
<style scoped>
.homePage {
    background: url(../../public/img/mainpage.jpg) no-repeat center / cover;
    min-height: 600px;
    width: 100%;
}
.rel-box {
    position: relative;
    min-height: 600px;
}
.first {
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    -webkit-transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    -moz-transform: translateY(-50%);
    -o-transform: translateY(-50%);
    z-index: 2;
}

.second {
    position: absolute;
    right: 0;
    bottom: 10%;
}
h1 {
    font-weight: 700;
    margin: 0 0 15px;
    text-transform: uppercase;
}
.job-title {
    font-size: 22px;
    margin-bottom: 30px;
    line-height: 1;
}
.homePage img {
    height: 400px;
}

    @media only screen and (min-width: 960px) {
        /* styles for browsers larger than 960px; */
        h1 {
          font-size: 2.5rem;
        }
    }
    @media only screen and (min-width: 1440px) {
        /* styles for browsers larger than 1440px; */
        h1 {
          font-size: 3rem;
        }
    }
    @media only screen and (min-width: 480px) {
       /* styles for mobile browsers smaller than 480px; (iPhone) */
       h1 {
          font-size: 1.5rem;
        }
    }
    @media only screen and (min-width: 768px) {
       /* default iPad screens */
       h1 {
          font-size: 2rem;
        }
    }
</style>
