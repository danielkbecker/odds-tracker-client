<template>
  <div>
    {{info}}
  </div>
</template>
<script>

export default {
  data() {
    return {
      info: null,
      loading: true,
      errored: false,
    };
  },
  beforeMount() {
    // Can do /query instead
    this.axios.get('https://odds-tracker-server-pbmrnudl7a-uc.a.run.app/ping')
      .then((response) => {
        this.info = response.data;
      })
      .catch((error) => {
        console.log(error);
        this.errored = true;
      });
  },
};

</script>
