<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      app
    >
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title>
            Vue Blogs
          </v-list-item-title>
          <v-list-item-subtitle>
            A blog site built with MEVN
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      <v-divider></v-divider>
      <v-list rounded>
      <v-list-item-group
        color="primary"
      >
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.link"
          link
        >
          <v-list-item-icon>
            <v-icon v-text="item.icon"></v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title v-text="item.text"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
    </v-navigation-drawer>

    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title @click="$router.push({name: 'home'})">Blogs</v-toolbar-title>
    </v-app-bar>

    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
  export default {
    data: () => ({
      drawer: null, 
      items: [
        { text: 'Home', icon: 'mdi-home-outline', link: '/' },
        { text: 'New Post', icon: 'mdi-plus', link: '/new-post' },
        { text: 'About', icon: 'mdi-help', link: '/about' },
      ],
    }),
  }
</script>