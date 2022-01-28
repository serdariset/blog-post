<template>
  <form class="form-container">
    <div
      v-for="(item, index) in data"
      :key="index"
      class="field-form"
      :class="item.css_style | setClass"
    >
      <TextBox
        v-if="item.input_type == 'textbox' && item.active"
        :data="item"
        @textboxValue="values[index] = { event: $event, id: 'cf_' + item.id }"
      />
      <SmartDDL
        v-if="item.input_type == 'smart_ddl' && item.active"
        :data="item"
        @categoryValue="values[index] = { event: $event, id: 'cf_' + item.id }"
      />
      <CheckBox
        v-if="item.input_type == 'checkbox' && item.active"
        :data="item"
        @checkboxValue="values[index] = { event: $event, id: 'cf_' + item.id }"
      />
      <Calendar
        v-if="item.input_type == 'calendar' && item.active"
        :data="item"
        @dateboxValue="values[index] = { event: $event, id: 'cf_' + item.id }"
      />

      <TextArea
        v-if="item.input_type == 'text' && item.active"
        :data="item"
        @textareaValue="values[index] = { event: $event, id: 'cf_' + item.id }"
      />
    </div>
    <div class="button-container">
      <div class="warning" v-if="isAnyError">
        Warning, operation failed! Please, check the fields!
      </div>
      <button @click.prevent="cancelButton()" class="cancel-button button">
        Cancel
      </button>
      <button @click.prevent="saveButton()" class="save-button button">
        Save
      </button>
    </div>
  </form>
</template>

<script>
import custom_fields from "@/assets/custom_field_data.js";
import TextBox from "@/components/TextBox.vue";
import SmartDDL from "@/components/SmartDDL.vue";
import CheckBox from "@/components/CheckBox.vue";
import Calendar from "@/components/Calendar.vue";
import TextArea from "@/components/TextArea.vue";
import { filters } from "@/mixins/global.js";
import { mapActions } from "vuex";

export default {
  name: "BlogForm",
  components: {
    TextBox,
    SmartDDL,
    CheckBox,
    Calendar,
    TextArea,
  },
  mixins: [filters],
  data() {
    return {
      data: "",
      isAnyError: false,
      values: {},
    };
  },
  mounted() {
    this.data = custom_fields;
  },

  methods: {
    ...mapActions(["updatePostRequest", "sendNewPostRequest"]),
    saveButton() {
      let value = [];

      for (let index = 0; index < Object.values(this.values).length; index++) {
        value.push(Object.values(this.values)[index]);
      }

      let anyError = value.every((d) => {
        return d.event.error == true;
      });

      let post = {
        index: this.$route.query.index,
        data: {},
      };

      for (let i = 0; i < value.length; i++) {
        post.data[value[i].id] = value[i].event.value;
      }
      if (anyError) {
        if (this.$route.query.index !== undefined) {
          this.updatePostRequest(post);
        } else {
          this.sendNewPostRequest(post.data);
        }
      } else {
        this.isAnyError = true;
      }
    },
    cancelButton() {
      this.$router.push({ path: "/" }, () => {});
    },
  },
};
</script>

<style lang="scss">
.form-container {
  width: 1200px;
  height: auto;
  padding: 1rem;
  display: flex;
  flex-wrap: wrap;
  background-color: #fff;
  .button-container {
    height: 40px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    .warning {
      height: 100%;
      align-items: center;
      display: flex;
      margin-right: 5rem;
      color: red;
    }
    .button {
      width: 100px;
      height: 30px;
      border-radius: 10px;
      border: none;
      outline: none;
      cursor: pointer;
    }
    .save-button {
      color: white;
      background-color: #2196f3;
      transition: 0.2s ease;
      &:hover {
        background-color: #1565c0;
      }
    }
    .cancel-button {
      color: black;
      margin-right: 1rem;
      background-color: #f2f2f2;
      transition: 0.2s ease;

      &:hover {
        background-color: #e0e0e0;
      }
    }
  }
  .row6 {
    width: 50%;
  }
  .row12 {
    width: 100%;
  }
  .input-group {
    display: flex;
    flex-direction: column;
    width: 100%;
    .form-error {
      border: 2px solid red !important;
    }
    .error-group {
      width: 100%;
      height: 1.5rem;
      padding-left: 0.5rem;
      margin-top: 0.5rem;
      .type-error {
        color: red;
      }
    }
    label {
      width: 100%;
      margin-bottom: 0.5rem;
      color: #333333;
      display: flex;
      height: 2rem;
      align-items: center;
      .hint {
        cursor: pointer;
        margin-left: 0.5rem;
      }
      .tooltip {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-left: 1rem;
        padding: 5px;
        border: 1px solid #c9c8c8;
        border-radius: 5px;
        font-size: 14px;
      }
    }
  }
}
</style>
