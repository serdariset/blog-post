<template>
  <div class="smart-ddl-container">
    <div class="input-group">
      <label for="categoryBox">
        {{ data.name }}
        <span
          class="hint"
          @mouseenter="tooltip = true"
          @mouseleave="tooltip = false"
          ><i class="far fa-lightbulb"></i
        ></span>
        <span class="tooltip" v-show="tooltip">{{ data.description }}</span>
      </label>
      <div class="field-box">
        <select
          name="category"
          id="categoryBox"
          v-model="$v.category.$model"
          :class="inputStatus($v.category)"
          @click="
            $emit('categoryValue', {
              value: category,
              error: !$v.category.$invalid,
            })
          "
        >
          <option disabled value="">{{ data.place_holder }}</option>
          <option
            v-for="item in data.smart_ddl_items"
            :key="item.id"
            :value="item.id"
          >
            {{ item.name }}
          </option>
        </select>
        <span class="clear-value" @click="clearCategory()">
          <i class="fas fa-times"></i>
        </span>
      </div>
      <div class="error-group">
        <span
          class="type-error"
          v-if="$v.category.$error && !$v.category.required"
          >This field is required</span
        >
      </div>
    </div>
  </div>
</template>

<script>
import { requiredIf } from "vuelidate/lib/validators";
import { mapActions, mapState } from "vuex";

export default {
  name: "SmartDDL",
  props: {
    data: Object,
    defaultValue: String,
  },
  data() {
    return {
      tooltip: false,
      category: "",
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
  validations() {
    return {
      category: {
        required: requiredIf(function () {
          return this.data.is_required;
        }),
      },
    };
  },
  methods: {
    ...mapActions(["getWillUpdatePost"]),
    getUpdatedData() {
      let itemID = this.$route.query.index;

      this.getWillUpdatePost(itemID).then(() => {
        this.category = this.willUpdatedPost.data[`cf_${this.data.id}`];
        this.$emit("categoryValue", {
          value: this.category,
          error: !this.$v.category.$invalid,
        });
      });
    },
    inputStatus(val) {
      if (val.$invalid) {
        return "form-error";
      } else {
        return "";
      }
    },
    clearCategory() {
      this.category = "";
      this.$emit("categoryValue", {
        value: this.category,
        error: !this.$v.category.$invalid,
      });
    },
  },
};
</script>

<style lang="scss">
.smart-ddl-container {
  width: 100%;
  padding: 1rem;

  .field-box {
    position: relative;
    display: flex;
    align-items: center;
    width: 100%;
    select[name="category"] {
      height: 2.2rem;
      display: flex;
      width: 100%;
      outline: none;
      border-radius: 5px;
      padding-left: 0.7rem;
      border: 1px solid #c9c8c8;
    }
    .form-error {
      border: 2px solid red;
    }
    .clear-value {
      position: absolute;
      right: 40px;
      cursor: pointer;
      &:hover {
        color: red;
      }
    }
  }
}
</style>
