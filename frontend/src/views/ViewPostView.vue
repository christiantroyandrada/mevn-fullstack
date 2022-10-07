<template>
    <v-container>
        <v-row no-gutters>
            <v-col sm="10" class="pa-4 mx-auto">
                <v-card class="px-2">
                    <v-img :src="`/${blog.image}`"></v-img>
                    <v-card-actions class="pb-0">
                        <v-row class="mt-1 mx-1">
                            <v-col sm="2">
                                <v-btn  text color="blue darken-2">{{ blog.category }}</v-btn>
                            </v-col>
                            <v-col sm="10" class="d-flex justify-end">
                                <v-btn outlined class="mx-2" :to="{name: 'edit-post', params:{id: blog._id}}" color="green lighten-2">Edit</v-btn>
                                <v-btn outlined class="mx-2" color="error" @click="confirmDelete">Delete</v-btn>
                            </v-col>
                        </v-row>
                    </v-card-actions>
                    <v-card-subtitle class="headline">
                        <h3>{{ blog.title }}</h3>
                    </v-card-subtitle>
                    <v-card-text class="grey--text">
                        <p>{{ blog.content}}</p>
                        <p>{{ blog.created}}</p>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
        <DeleteModal :dialog=dialog @close="confirmDelete" @delete="deleteBlog">
        </DeleteModal>
    </v-container>
</template>

<script>
import API from '../api'
import DeleteModal from '../components/DeleteModal.vue'
export default{
    components: {
        DeleteModal
    },
    data: () => ({
        blog: {},
        dialog: false,
    }),
    async created() {
        const response = await API.viewBlog(this.$route.params.id);
        this.blog = response;
    },
    methods: {
        confirmDelete () {
            this.dialog = !this.dialog;
        },
        async deleteBlog () {
          const response = await API.deleteBlog(this.blog._id);
          this.$router.push({name: 'home', params:{message: response.message}});
        },
    },
}
</script>