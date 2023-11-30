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
          <b-navbar-nav class="ml-auto">
            <b-nav-item v-for="m in menus" :menu="m" :key="m.id" right>
              <nuxt-link :to="{ name: m.name }">
                <span @mouseover="">{{ m.nameEng }}</span> &nbsp;
              </nuxt-link>
            </b-nav-item>
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
</style>

<script>
export default {
    data() {
        return {
            menus: [
                { id: 1, name: "about", nameCh: "關於圓順", nameEng: "About", showName: "A" },
                { id: 2, name: "fengshui", nameCh: "風水服務", nameEng: "Fengshui", showName: "A" },
                { id: 3, name: "collection", nameCh: "設計作品", nameEng: "Project", showName: "A" },
                { id: 4, name: "service", nameCh: "服務流程", nameEng: "Service", showName: "A" },
                { id: 5, name: "contact", nameCh: "聯絡我們", nameEng: "Contact", showName: "A" },
            ],
        }
    },
    methods: {
        getShowName(id) {
            let menu = this.menus.filter((m) => m.id == id);
        }
    }
}
</script>