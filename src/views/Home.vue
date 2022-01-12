<template>
  <div class="home">
    <Form />
  </div>
</template>

<script lang="ts">
import Vue from "vue";

import Form from "@/components/Form.vue";

export default Vue.extend({
  name: "app-home",
  components: { Form },
});
</script>
