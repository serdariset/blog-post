<template>
  <div class="checkbox-container">
    <div class="input-group">
      <input
        type="checkbox"
        id="checkBox"
        v-model="$v.allow.$model"
        @click="
          $emit('checkboxValue', { value: !allow, error: !$v.allow.$invalid })
        "
      />
      <label for="checkBox"> {{ data.name }} </label>
    </div>
    <div class="error-group">
      <span class="type-error" v-if="$v.allow.$invalid && !$v.allow.required"
        >This field is required</span
      >
    </div>
  </div>
</template>

<script>
import { requiredIf } from "vuelidate/lib/validators";

import { mapActions, mapState } from "vuex";

export default {
  name: "Checkbox",
  props: {
    data: {
      type: Object,
      require: true,
    },
  },
  data() {
    return {
      allow: false,
    };
  },
  computed: {
    ...mapState(["willUpdatedPost"]),
  },
  mounted() {
    if (this.$route.query.index !== undefined) {
      this.getUpdatedData();
    }
  },
  methods: {
    ...mapActions(["getWillUpdatePost"]),
    getUpdatedData() {
      let itemID = this.$route.query.index;

      this.getWillUpdatePost(itemID).then(() => {
        this.allow = this.willUpdatedPost.data[`cf_${this.data.id}`];
        this.$emit("checkboxValue", {
          value: this.allow,
          error: !this.$v.allow.$invalid,
        });
      });
    },
  },
  validations() {
    return {
      allow: {
        required: requiredIf(function () {
          return this.data.is_required;
        }),
      },
    };
  },
};
</script>

<style lang="scss">
.checkbox-container {
  width: 100%;
  display: flex;
  padding: 1rem;
  .input-group {
    display: flex;
    align-items: center;
    flex-direction: row !important;
    input[type="checkbox"] {
      height: 1.2rem;
      width: 1.2rem;
      margin-right: 1rem;
      border: none;
      outline: none;
      border-radius: 10px;
      border: 1px solid #c9c8c8;
      cursor: pointer;
    }
    label {
      margin-bottom: 0 !important;
    }
  }
}
</style>
