<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>
<script>
import { listSimpleStudentToCustomerDTOByMobileApi } from "../api/index";
export default {
  data() {
    return {};
  },
  created() {
    this.getData();
  },
  methods: {
    getData() {
      listSimpleStudentToCustomerDTOByMobileApi(
        this.$FQ({ mobile: 18903466253 })
      ).then((res) => {
        console.log(res);
      });
    },
  },
};
</script>
