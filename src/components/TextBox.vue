<template>
  <div class="text-box-container">
    <div class="input-group">
      <label for="textBox">
        {{ data.name }}
        <span
          class="hint"
          @mouseenter="tooltip = true"
          @mouseleave="tooltip = false"
          ><i class="far fa-lightbulb"></i
        ></span>
        <span class="tooltip" v-show="tooltip">{{ data.description }}</span>
      </label>
      <input
        type="text"
        class="textbox"
        id="textBox"
        :placeholder="data.place_holder"
        v-model.trim="$v.titleText.$model"
        @input="
          $emit('textboxValue', {
            value: titleText,
            error: !$v.titleText.$invalid,
          })
        "
        autocomplete="off"
        :class="inputStatus($v.titleText)"
      />
      <div class="error-group">
        <span
          class="type-error"
          v-if="$v.titleText.$dirty && !$v.titleText.required"
          >This field is required</span
        >
        <span
          class="type-error"
          v-if="data.input_validator == 'text' && !$v.titleText.alpha"
        >
          This field cannot contains spaces,numbers or special characters</span
        >
        <span
          class="type-error"
          v-if="data.input_validator == 'decimal' && !$v.titleText.decimal"
        >
          Not decimal</span
        >
        <span
          class="type-error"
          v-if="data.input_validator == 'integer' && !$v.titleText.integer"
        >
          Not integer</span
        >
      </div>
    </div>
  </div>
</template>

<script>
import { alpha, decimal, integer, requiredIf } from "vuelidate/lib/validators";
import { mapActions, mapState } from "vuex";

export default {
  name: "TextBox",
  props: {
    data: {
      type: Object,
    },
  },

  data() {
    return {
      tooltip: false,
      titleText: "",
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
    switch (this.data.input_validator) {
      case "text":
        return {
          titleText: {
            alpha,
            required: requiredIf(function () {
              return this.data.is_required;
            }),
          },
        };
      case "decimal":
        return {
          titleText: {
            decimal,
            required: requiredIf(function () {
              return this.data.is_required;
            }),
          },
        };
      case "integer":
        return {
          titleText: {
            integer,
            required: requiredIf(function () {
              return this.data.is_required;
            }),
          },
        };
      case "none" || "":
        return {
          titleText: {
            required: requiredIf(function () {
              return this.data.is_required;
            }),
          },
        };
    }
  },

  methods: {
    ...mapActions(["getWillUpdatePost"]),
    getUpdatedData() {
      let itemID = this.$route.query.index;

      this.getWillUpdatePost(itemID).then(() => {
        this.titleText = this.willUpdatedPost.data[`cf_${this.data.id}`];
        this.$emit("textboxValue", {
          value: this.titleText,
          error: !this.$v.titleText.$invalid,
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
  },
};
</script>

<style lang="scss">
.text-box-container {
  width: 100%;
  display: flex;
  padding: 1rem;

  input[type="text"] {
    display: flex;
    width: 100%;
    height: 2rem;
    outline: none;
    border: 1px solid #c9c8c8;
    border-radius: 5px;
    padding: 1rem;
  }
}
</style>
