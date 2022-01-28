<template>
  <div class="calendar-container">
    <div class="input-group">
      <label for="calendarBox">
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
        <input
          type="date"
          name="createdDate"
          id="calendarBox"
          v-model.trim="$v.date.$model"
          :class="inputStatus($v.date)"
          @change="
            $emit('dateboxValue', { value: date, error: !$v.date.$invalid })
          "
        />
        <span class="clear-value" @click="clearDate()">
          <i class="fas fa-times"></i>
        </span>
      </div>
      <div class="error-group">
        <span class="type-error" v-if="$v.date.$error && !$v.date.required"
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
  name: "Calendar",
  props: {
    data: {
      type: Object,
      require: true,
    },
    defaultValue: String,
  },
  data() {
    return {
      tooltip: false,
      date: "",
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
        this.date = this.willUpdatedPost.data[`cf_${this.data.id}`].slice(
          0,
          10
        );
        this.$emit("dateboxValue", {
          value: this.date,
          error: !this.$v.date.$invalid,
        });
      });
    },
    clearDate() {
      this.date = "";
      this.$emit("dateboxValue", {
        value: this.date,
        error: !this.$v.date.$invalid,
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
  validations() {
    return {
      date: {
        required: requiredIf(function () {
          return this.data.is_required;
        }),
      },
    };
  },
};
</script>

<style lang="scss">
.calendar-container {
  width: 100%;
  padding: 1rem;
  .field-box {
    position: relative;
    display: flex;
    align-items: center;
    width: 100%;
    input[type="date"] {
      display: flex;
      width: 100%;
      height: 2rem;
      outline: none;
      border: 1px solid #c9c8c8;
      border-radius: 5px;
      padding: 1rem;
      font-family: "Roboto", sans-serif;
    }

    .clear-value {
      position: absolute;
      right: 50px;
      cursor: pointer;
      &:hover {
        color: red;
      }
    }
  }
}
</style>
