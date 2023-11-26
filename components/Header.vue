<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="dark">
      <b-navbar-brand href="#">
        <nuxt-link :to="{ name: 'index' }">
          <img src="https://hemusih.com/yuan-shun-interior-design/images/yuan/logo2.png" width="130"
          class="d-inline-block align-top" alt="Kitten">
            </nuxt-link>
      
      </b-navbar-brand>
      <b-navbar-toggle target="navbar-toggle-collapse">
        <template #default="{ expanded }">
          <b-icon v-if="expanded" icon="chevron-bar-up"></b-icon>
          <b-icon v-else icon="chevron-bar-down"></b-icon>
        </template>
      </b-navbar-toggle>
      <!-- Right aligned nav items -->
      <b-collapse id="navbar-toggle-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item right>
            <nuxt-link :to="{ name: 'about' }">
              關於圓順
            </nuxt-link>
          </b-nav-item>
          <b-nav-item right>
            <nuxt-link :to="{ name: 'fengshui' }">
              風水服務
            </nuxt-link>
          </b-nav-item>
          <b-nav-item right>
            <nuxt-link :to="{ name: 'collection' }">
              設計作品
            </nuxt-link>
          </b-nav-item>
          <b-nav-item right>
            <nuxt-link :to="{ name: 'service' }">
              服務流程
            </nuxt-link>
          </b-nav-item>
          <b-nav-item right>
            <nuxt-link :to="{ name: 'contact' }">
              聯絡我們
            </nuxt-link>
          </b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>
<style></style>
<script>
</script>