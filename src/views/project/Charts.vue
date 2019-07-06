<template>
  <div class="animated fadeIn">
    <b-card-group columns class="card-columns">
      <b-card header="Line Chart">
        <div class="chart-wrapper">
          <line-example chartId="chart-line-01"/>
        </div>
      </b-card>
      <b-card header="Bar Chart">
        <div class="chart-wrapper">
          <bar-example chartId="chart-bar-01"/>
        </div>
      </b-card>
      <b-card header="Pie Chart">
        <div class="chart-wrapper">
          <pie-example chartId="chart-pie-01"/>
        </div>
      </b-card>
    </b-card-group>
  </div>
</template>
<script>

import BarExample from '../charts/BarExample'
import LineExample from '../charts/LineExample'
import PieExample from '../charts/PieExample'

export default {
  name: 'charts',
  components: {
    BarExample,
    LineExample,
    PieExample,
  }
}
</script>
