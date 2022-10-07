<template>
    <v-container>
        <v-row no-gutters>
            <v-col sm="10" class="mx-auto">
                <v-card class="pa-5">
                    <v-card-title>Edit Blog</v-card-title>
                    <v-divider></v-divider>
                    <v-form ref="form" @submit.prevent="updateForm" class="pa-5" enctype="multipart/form-data">
                        <v-text-field label="Title" v-model="post.title" prepend-icon="mdi-note-outline" :rules="rules"></v-text-field>
                        <v-text-field label="Category" v-model="post.category" prepend-icon="mdi-view-list-outline" :rules="rules"></v-text-field>
                        <v-textarea label="Content" v-model="post.content" prepend-icon="mdi-note-plus-outline" :rules="rules"></v-textarea>
                        <v-file-input @change="selectFile" :rules="rules" show-size counter multiple label="Select an Image"></v-file-input>
                        <v-img :src="`/${post.image}`" width="125"></v-img>
                        <v-btn type="submit" class="mt-3" dark color="green darken-2">Edit Blog</v-btn>
                    </v-form>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>
<script>
import API from '../api'
export default {
    data: () => ({
        rules:[(v) => !!v||"This Field is required"],
        post: {
            title: '',
            category: '',
            content: '',
            image: '',
        },
        image: '',
    }),
    async created(){
        this.post = await API.viewBlog(this.$route.params.id)
    },
    methods:{
        selectFile(file) {
            this.image = file[0]
        },
        async updateForm(){
            const data = new FormData();
            data.append('image', this.image);
            data.append('title', this.post.title);
            data.append('category', this.post.category);
            data.append('content', this.post.content);
            data.append('old_image', this.post.image)
            if(this.$refs.form.validate()){
                const response = await API.updateBlog(this.$route.params.id, data);
                this.$router.push({name: 'home', params:{message: response.message}})
            }
        }
    },
}
</script>