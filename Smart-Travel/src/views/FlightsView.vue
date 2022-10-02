<template>
<v-layout row wrap>
<!-- other code -->
<v-text-field
    label="From Date"
    readonly
    prepend-icon="event"
    :value="fromDateDisp"
></v-text-field>
</v-layout>
</template>
<script>
export default {
  data() {
    return {
      fromDateVal: null,

      minDate: "2019-07-04",
      maxDate: "2019-08-30",
    };
  },
  computed: {
    fromDateDisp() {
      return this.fromDateVal;
      // format date, apply validations, etc. Example below.
      // return this.fromDateVal ? this.formatDate(this.fromDateVal) : "";
    },
  },
};
</script>