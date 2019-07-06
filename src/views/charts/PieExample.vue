<script>
import { Pie } from 'vue-chartjs'

export default {
  extends: Pie,
  mounted () {
    this.renderChart({
       labels: ['No of User Stories Entered', 'Recent User Stories', 'Total user Stories', 'Newly Entered User Stories'],
      datasets: [
        {
         backgroundColor: [
            '#64DD17',
            '#795548',
            '#00D8FF',
            '#DD1B16'
          ],
          data: [40, 20, 80, 10]
        }
      ]
    }, {responsive: true, maintainAspectRatio: true})
  }
}
</script>