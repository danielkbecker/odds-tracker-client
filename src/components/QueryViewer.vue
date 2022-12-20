<template>
  <div>
    {{info}}
  </div>
  <div>
    {{fooInfo}}
  </div>
  <div>
    {{newTables}}
  </div>
  <div>
    {{nhl_table}}
  </div>
  <button @click="postRequest('nhl_odds')">Click me to test post request</button>
  <button @click="getTables">Click me for new way to get tables</button>
  <button @click="getFooData">Click me</button>
    <div v-if="isLoadingGet">
      <LoadingIndicator/>
      <div>Loading... ({{refCounter}})</div>
    </div>
</template>
<script>
import { mapState } from 'pinia';
import LoadingIndicator from '@/components/LoadingIndicator.vue';
import { useLoadingIndicatorStore } from '../stores/LoadingIndicatorStore';
import { useVegasInsiderStore } from '../stores/VegasInsiderStore';

export default {
  setup() {
    const vegasInsiderStore = useVegasInsiderStore();
    return { vegasInsiderStore };
  },
  components: { LoadingIndicator },
  data() {
    return {
      info: null,
      loading: true,
      errored: false,
      fooInfo: '',
      newTables: null,
      nhl_table: null,
    };
  },
  computed: {
    ...mapState(useLoadingIndicatorStore, ['isLoading', 'refCount']),
    isLoadingGet() {
      return this.isLoading;
    },
    refCounter() {
      return this.refCount;
    },
  },
  methods: {
    postRequest(table) {
      this.vegasInsiderStore.getOddsTable(table);
      this.nhl_table = this.vegasInsiderStore.requested_table;
    },
    getTables() {
      this.vegasInsiderStore.fetchTablesFromBackend();
      console.log('New Tables', this.vegasInsiderStore.tables);
      this.newTables = this.vegasInsiderStore.tables;
    },
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
    this.axios.get('/query/tables')
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
