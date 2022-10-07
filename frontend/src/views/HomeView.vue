<template>
  <v-container fluid>
    <v-alert border="left" close-text="Close Alert" color="green accent-4" dark dismissible v-if="this.$route.params.message">
      {{this.$route.params.message}}
    </v-alert>
    <v-row no-gutters>
      <v-col sm="4" class="pa-3" v-for="blog in blogs" :key="blog._id">
        <v-card class="pa-1" :to="{ name: 'view-post', params: {id: blog._id}}">
          <v-img height="250" :src="`/${blog.image}`"></v-img>
          <v-btn class="ml-4 mt-3" small outlined color="blue-darken-2">
            {{ blog.category }}
          </v-btn>
          <v-card-title class="headline">{{ blog.title }}</v-card-title>
          <v-card-text class="py-0">
            <p>{{ blog.content.slice(0, 90) + '...'}}</p>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  import API from '../api'
  export default {
    name: 'Home',
    data: () => ({
      blogs: [],
    }),
    async created () {
      this.blogs = await API.getAllBlogs()
    }
  }
</script>
