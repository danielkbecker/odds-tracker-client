<template>
     <select v-model="selected" aria-label="Select">
      <option v-for="(option, index) in options" :value="option.value" :key="index">
        {{ option.text }}
      </option>
    </select>
    <div>Selected: {{ selected }}</div>
  <div>
    {{display_odds}}
  </div>
    <div v-if="isLoadingGet">
      <LoadingIndicator/>
    </div>
</template>
<script>
import { mapState, mapActions } from 'pinia';
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
      loading: true,
      errored: false,
      selected: 'nfl',
      options: [
        { text: 'NFL', value: 'nfl' },
        { text: 'NBA', value: 'nba' },
        { text: 'NHL', value: 'nhl' },
        { text: 'CFB', value: 'college_football' },
      ],
    };
  },
  computed: {
    ...mapState(useLoadingIndicatorStore, ['isLoading']),
    ...mapState(useVegasInsiderStore, ['current_odds']),
    ...mapActions(useVegasInsiderStore, ['getOddsTable']),
    isLoadingGet() {
      return this.isLoading;
    },
    display_odds() {
      return this.vegasInsiderStore.current_odds;
    },
  },
  watch: {
    selected() {
      this.vegasInsiderStore.getOddsTable(this.selected);
    },
  },
  methods: {
    fetchInitOdds() {
      this.vegasInsiderStore.getOddsTable('nfl');
    },
  },
  beforeMount() {
    this.fetchInitOdds();
  },
};

</script>
<style>
</style>
