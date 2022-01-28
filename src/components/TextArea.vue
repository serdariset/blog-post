<template>
  <div class="textarea-container">
    <div class="input-group">
      <label for="textArea">
        {{ data.name }}
        <span
          class="hint"
          @mouseenter="tooltip = true"
          @mouseleave="tooltip = false"
          ><i class="far fa-lightbulb"></i
        ></span>
        <span class="tooltip" v-show="tooltip">{{ data.description }}</span>
      </label>
      <textarea
        name="textArea"
        id="textArea"
        :placeholder="data.place_holder"
        v-model="$v.textAreaTitle.$model"
        :class="inputStatus($v.textAreaTitle)"
        @keyup="
          $emit('textareaValue', {
            value: textAreaTitle,
            error: !$v.textAreaTitle.$error,
          })
        "
      ></textarea>
      <div class="error-group">
        <span
          class="type-error"
          v-if="$v.textAreaTitle.$dirty && !$v.textAreaTitle.required"
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
  name: "TextArea",
  props: {
    data: {
      type: Object,
      require: true,
    },
  },
  data() {
    return {
      tooltip: false,
      textAreaTitle: "",
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
      textAreaTitle: {
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
        this.textAreaTitle = this.willUpdatedPost.data[`cf_${this.data.id}`];
        this.$emit("textareaValue", {
          value: this.textAreaTitle,
          error: !this.$v.textAreaTitle.$invalid,
        });
      });
    },
    inputStatus(val) {
      if (val.$dirty) {
        if (val.$error) {
          return "form-error";
        } else {
          return "";
        }
      }
    },
  },
};
</script>

<style lang="scss">
.textarea-container {
  width: 100%;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  textarea[name="textArea"] {
    width: 100%;
    display: flex;
    resize: none;
    height: 5rem;
    outline: none;
    border: 1px solid #c9c8c8;
    border-radius: 5px;
    padding: 1rem;
    font-family: "Roboto", sans-serif;
  }
}
</style>
