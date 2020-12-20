<template>
    <header>
        <nav id="header"
        class="fixed-top navbar"
        v-bind:style = "scrollEffect">

            <router-link class="logo navbar-brand" :to="{name: 'Home'}">Home Logo</router-link>

            <button class="navbar-toggle collapsed" type="button" >
                <span class="navbar-toggler-icon"></span>
            </button>

            <ul class="nav justify-content-end">
                 <li class="nav-item">
                    <router-link class="nav-link" :to="{name: 'Home'}"  exact
                        >Home</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" :to = "{name: 'About', hash: '#about'}"
 >About</router-link>
                </li>

                <li class="nav-item">
                    <router-link class="nav-link" to="/portfolio">Portfolio</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" to="/contact">Contact</router-link>
                </li>
            </ul>
        </nav>
    <router-view/>
  </header>
</template>

<script>

export default {
    data() {
        return {
            scrollPosition: null,
            scrollEffect: {backgroundColor: 'rgba(255, 255, 255, 0)',
                           padding: '30px 0px',
                           boxShadow: 'rgba(0, 0, 0, 0) 0px 0px 20px 6px'
                          },
            windowHeight: null,
        }
    },
    methods: {
        updateScroll() {
            this.scrollPosition = window.scrollY;
            if (this.scrollPosition <= this.windowHeight) {
                this.scrollEffect.backgroundColor = `rgba(255, 255, 255, ${this.scrollPosition/this.windowHeight})`
                this.scrollEffect.padding = `${30 - 25*this.scrollPosition/this.windowHeight}px 0px`
                this.scrollEffect.boxShadow = `rgba(0, 0, 0, ${this.scrollPosition/this.windowHeight*0.2}) 0px 0px 20px 6px`
                }
            else {
                this.scrollEffect.backgroundColor = 'rgba(255, 255, 255, 1)';
                this.scrollEffect.padding = '5px 0px';
                this.scrollEffect.boxShadow = 'rgba(0, 0, 0, 0.2) 0px 0px 20px 6px'
                }
        }
    },
    mounted() {
        window.addEventListener('scroll', this.updateScroll);
        this.windowHeight = window.innerHeight;
    },

}
</script>
<style scoped>
    .nav-link {
      text-transform: uppercase;
      color: #212121;
      font-weight: 600;
   }

   .nav-link:hover, .active {
      color: #212121;
      border-bottom: 2px solid #212121;
   }
    .logo {
        border-bottom: none!important;
    }
</style>
