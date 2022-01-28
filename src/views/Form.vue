<template>
  <div class="form-page-container">
    <div class="home-page">
      <button @click="homePage()">Home Page</button>
    </div>
    <BlogForm />
  </div>
</template>

<script>
import BlogForm from "../components/BlogForm.vue";
export default {
  components: { BlogForm },
  methods: {
    homePage() {
      this.$router.push({ path: "/" }, () => {});
    },
  },
};
</script>

<style lang="scss">
.form-page-container {
  width: 100%;
  display: flex;
  justify-content: center;
  padding-top: 5rem;
  flex-direction: column;
  align-items: center;
  .home-page {
    width: 1200px;
    height: 3rem;
    button {
      height: 3rem;
      width: 5rem;
      border: none;
      outline: none;
      border-radius: 5px;
      cursor: pointer;
      background-color: #1e88e5;
      color: white;
    }
  }
}
</style>
