<template>
  <div>
    {{info}}
  </div>
  <button @click="getFooData">Click me</button>
    <div v-if="isLoading">
      <LoadingIndicator/>
      <div>Loading... ({{refCount}})</div>
    </div>
</template>
<script>
import LoadingIndicator from '@/components/LoadingIndicator/LoadingIndicator.vue';

export default {
  components: { LoadingIndicator },
  data() {
    return {
      info: null,
      loading: true,
      errored: false,
      fooInfo: '',
    };
  },
  computed: {
    isLoading() {
      return this.$store.getters.isLoadingGet;
    },
    refCount() {
      return this.$store.getters.refCounter;
    },
  },
  methods: {
    getFooData() {
      this.axios
        .get('https://reqres.in/api/users?delay=$3')
        .then((resp) => {
          this.fooInfo = resp.data.data;
        });
    },
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
<style>
.lds-ellipsis div {
  position: absolute;
  top: 27px;
  width: 11px;
  height: 11px;
  border-radius: 50%;
  background: white;
  animation-timing-function: cubic-bezier(0, 1, 1, 0);
}
.lds-ellipsis div:nth-child(1) {
  left: 6px;
  animation: lds-ellipsis1 0.6s infinite;
}
.lds-ellipsis div:nth-child(2) {
  left: 6px;
  animation: lds-ellipsis2 0.6s infinite;
}
.lds-ellipsis div:nth-child(3) {
  left: 26px;
  animation: lds-ellipsis2 0.6s infinite;
}
.lds-ellipsis div:nth-child(4) {
  left: 45px;
  animation: lds-ellipsis3 0.6s infinite;
}
@keyframes lds-ellipsis1 {
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
}
@keyframes lds-ellipsis3 {
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(0);
  }
}
@keyframes lds-ellipsis2 {
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(19px, 0);
  }
}
</style>
