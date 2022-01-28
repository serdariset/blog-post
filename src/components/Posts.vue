<template>
  <div class="post-container">
    <div class="posts">
      <div class="item">{{ post.item.cf_6099a2aea0d0960004268fd8 }}</div>
      <div class="item">{{ post.item.cf_6099a48aa0d09600042696d1 }}</div>
      <div class="item">
        {{ post.item.cf_6099a511a0d0960004269ab6 }}
      </div>
      <div class="item">{{ post.item.cf_6099a52ca0d0960004269ca7 }}</div>
      <div class="item">{{ post.item.cf_6099a538a0d0960004269e98 }}</div>
    </div>
    <div class="button-container">
      <button @click="updatePost()">Update</button>
      <button @click="deletePost()">Delete</button>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "Post",
  props: {
    post: Object,
  },
  data() {
    return {};
  },
  methods: {
    ...mapActions(["deletePostRequest"]),
    updatePost() {
      this.$router.push({ path: "/form", query: { index: this.post.index } });
    },
    deletePost() {
      this.deletePostRequest(this.post.index).then(() => {
        this.$emit("deleted", true);
      });
    },
  },
};
</script>

<style lang="scss">
.post-container {
  width: calc(50% - 1rem);
  height: 300px;
  background-color: chocolate;
  margin-bottom: 1rem;
  border-radius: 10px;
  background-color: #f2f2f2;
  box-shadow: 0px 0px 2px rgba(118, 96, 126, 0.45);

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  .item {
    height: 35px;
    display: flex;
    align-items: center;
  }
  .button-container {
    width: 100%;
    height: 3rem;
    display: flex;
    justify-content: center;
    margin-bottom: 10px;
    button {
      height: 3rem;
      width: 5rem;
      border: none;
      outline: none;
      border-radius: 5px;
      &:nth-child(1) {
        margin-right: 1rem;
        background-color: #1e88e5;
        color: white;
      }
      &:nth-child(2) {
        background-color: red;
        color: white;
      }
    }
  }
}
</style>
