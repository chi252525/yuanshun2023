<template>
    <div>
        <b-navbar toggleable="lg">
            <b-navbar-brand href="#">
                <nuxt-link :to="{ name: 'index' }">
                    <img src="https://hemusih.com/yuan-shun-interior-design/images/yuan/logo2.png" width="130" class="d-inline-block align-top" alt="Kitten">
                </nuxt-link>
    
            </b-navbar-brand>
            <b-navbar-toggle target="navbar-toggle-collapse">
                <template #default="{ expanded }">
                                                                                                        <div class="icon p-1">
                                                                                                        <b-icon v-if="expanded" variant="light" icon="chevron-bar-up"></b-icon>
                                                                                                        <b-icon v-else variant="light" icon="chevron-bar-down"></b-icon>
                                                                                                      </div>
</template>
        </b-navbar-toggle>
        <!-- Right aligned nav items -->
        <b-collapse id="navbar-toggle-collapse" is-nav>
          <b-navbar-nav class="ml-auto ">
<template v-for="m in menus" :menu="m">
    <b-nav-item right>
        <div class="linkItem pr-2 pl-2" :class="animated" @mouseenter="mouseenter(m.id)" @mouseleave="mouseleave(m.id)">
            <nuxt-link :to="{ name: m.name }">
                <div>
                    <span v-show="m.active">{{ m.nameCh }}</span>
                    <span v-show="!m.active">{{ m.nameEng }} </span>
                </div>
            </nuxt-link>
        </div>
    </b-nav-item>
</template>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
</template>

<style scoped>
.navbar {
    background-color: black !important
}

.icon {
    border: 1px solid #ffffff;
}

a,
a:hover {
    color: #ffffff;
}

a {
    transition: opacity 0.5s;
}

.animated {
    transition: all 0.5s ease-in-out;
    /* background-color: blue; */
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
                console.log('in');

                this.animated = ['animated']
                this.menus[id].active = !this.menus[id].active;
            }, 300);

        },
        mouseleave: function(id) {

            setTimeout(() => {
                console.log('out');
                this.animated = ['']
                this.menus[id].active = false;
                
            }, 300);
        }
    }
}
</script>