<template>
  <div>
    {{info}}
  </div>
</template>
<script>
import axios from 'axios';

export default {
  data() {
    return {
      info: null,
      loading: true,
      errored: false,
    };
  },
  beforeMount() {
    axios
      .get('https://odds-tracker-backend-pbmrnudl7a-uc.a.run.app/ping')
      .then((response) => {
        this.info = response.data;
      })
      .catch((error) => {
        console.log(error);
        this.errored = true;
      })
      .finally(this.loading = false);
  },
};

</script>
