<template>
  <div class="home">
    <div class="new-post">
      <button class="new-btn" @click="newPost()">New Post</button>
    </div>
    <div class="posts-container">
      <Posts
        v-for="(item, index) in db"
        :key="index"
        :post="{ item: item.data, index: item.id }"
        @deleted="getDatabase()"
      />
    </div>
  </div>
</template>

<script>
import Posts from "@/components/Posts.vue";

import { mapActions, mapState } from "vuex";

export default {
  components: { Posts },
  name: "Home",
  data() {
    return {
      db: "",
    };
  },
  mounted() {
    this.getDatabase();
  },
  computed: {
    ...mapState(["postData"]),
  },
  methods: {
    ...mapActions(["getPosts"]),
    newPost() {
      this.$router.push({ path: "/form" }, () => {});
    },
    getDatabase() {
      this.getPosts().then(() => {
        this.db = this.postData;
      });
    },
  },
};
</script>
<style lang="scss">
.home {
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 5rem;
  .new-post {
    width: 1200px;
    display: flex;
    padding: 1rem 0;
    border-bottom: 2px solid #90a4ae;
    margin-bottom: 2rem;
    .new-btn {
      height: 3rem;
      width: 6rem;
      background-color: #1e88e5;
      color: white;
      border-radius: 1.5rem;
      outline: none;
      border: none;
      cursor: pointer;
    }
  }
  .posts-container {
    width: 1200px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
}
</style>
