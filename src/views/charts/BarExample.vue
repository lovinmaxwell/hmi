<script>
import { Bar } from 'vue-chartjs'
import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips'

export default {
  extends: Bar,
  mounted () {
    // Overwriting base render method with actual data.
    this.renderChart(
      {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        datasets: [
          {
            label: 'User Stories',
            backgroundColor: ['#f87979', '#C51162', '#FF9800', '#64FFDA', '#795548', '#FF3D00',
             '#78909C', '#9E9E9E', '#000000', '#FFFF00', '#76FF03', '#18FFFF'
            
           ],
                data: [1840, 3773, 1907, 5120, 3510, 7040, 9197, 13588, 10589, 15420, 16298, 17786]
          }
        ]
      },
      {
        responsive: true,
        maintainAspectRatio: true,
        tooltips: {
          enabled: false,
          custom: CustomTooltips,
          intersect: true,
          mode: 'index',
          position: 'nearest',
          callbacks: {
            labelColor: function (tooltipItem, chart) {
              return { backgroundColor: chart.data.datasets[tooltipItem.datasetIndex].backgroundColor }
            }
          }
        }
      }
    )
  }
}
</script>
