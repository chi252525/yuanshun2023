<template>
    <div>
        <client-only>
            <b-navbar toggleable="lg">
    
                <b-navbar-brand class="px-lg-5 px-md-0" href="#">
                    <nuxt-link :to="{ name: 'index' }">
                        <img src="~assets/img/yuanshun.png" width="130" class="d-inline-block align-top" alt="Kitten">
                    </nuxt-link>
                </b-navbar-brand>
    
                <b-navbar-toggle target="navbar-toggle-collapse">
                    <template #default="{ expanded }">
                                                        <div v-if="expanded" class="icon p-1">
                                                          <b-icon  variant="dark" icon="chevron-bar-up"></b-icon>
                                                        </div >
                                                          <div  v-else class="icon p-1">
                                                          <b-icon variant="dark" icon="chevron-bar-down"></b-icon>
                                                        </div>
</template>
        </b-navbar-toggle>
        <!-- Right aligned nav items -->
        <b-collapse id="navbar-toggle-collapse" is-nav>
          <b-navbar-nav class="ml-auto ">
<template v-for="m in menus" :menu="m">
    <b-nav-item right>
        <div class=" pr-2 pl-2" :class="animated" @mouseenter="mouseenter(m.id)" @mouseleave="mouseleave(m.id)">
            <nuxt-link :to="{ name: m.name }">
                <div>
                    <span class="linkItemCh" v-show="m.active">{{ m.nameCh }}</span>
                    <span class="linkItem" v-show="!m.active">{{ m.nameEng }} </span>
                </div>
            </nuxt-link>
        </div>
    </b-nav-item>
</template>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </client-only>
  </div>
</template>

<style scoped>
.navbar {
    background-color: #ffffff !important
}

.navbar-light .navbar-toggler {
    border-color: #ffffff
}

.icon {
    border: 1px solid #000000;
}

a,
a:hover {
    color: #000000;
}

a {
    transition: opacity 0.5s;
}

.animated {
    transition: all 0.5s ease-in-out;
}

.linkItem {
    font-weight: 400;
    color: #010101
}

.linkItemCh {
    font-weight: 400;
    color: #FDB710
}

.navbar-collapse {
    padding-right: 50px;
}
</style>

<script>
export default {
    data() {
        return {
            menus: [
                { id: 0, name: "about", nameCh: "關於圓順", nameEng: "About", active: false },
                { id: 1, name: "fengshui", nameCh: "風水服務", nameEng: "Fengshui", active: false },
                { id: 2, name: "collection", nameCh: "設計作品", nameEng: "Project", active: false },
                { id: 3, name: "service", nameCh: "服務流程", nameEng: "Service", active: false },
                { id: 4, name: "contact", nameCh: "聯絡我們", nameEng: "Contact", active: false },
            ],
            animated: []
        }
    },
    methods: {
        mouseenter: function(id) {

            setTimeout(() => {

                this.animated = ['animated']
                this.menus[id].active = !this.menus[id].active;
            }, 300);

        },
        mouseleave: function(id) {

            setTimeout(() => {
                this.animated = ['']
                this.menus[id].active = false;

            }, 300);
        }
    }
}
</script>