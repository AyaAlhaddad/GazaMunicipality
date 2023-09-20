<template>
 
        <div 
            :id="id"
                style="height: 370px; width: 50% ;"
            ></div>

</template>
<script>
export default {
name: 'chart',

props:{
  id:'chartContainer',
},
  mounted() {
    const options = {
      title: {
        text: "من أين تأتي أمول بلدية غزة؟"
      },
      
      data: [{
            type: "doughnut",
            startAngle: 90,
            indexLabel: "{label} {y}(#percent%)",
            yValueFormatString: "#,##0K",
            toolTipContent: "<span style='\"position: absolute; height: auto; box-shadow: rgba(0, 0, 0, 0.1) 1px 1px 2px 2px; z-index: 1000; pointer-events: none; display: none; border-radius: 0px; left: 167px; bottom: -151px; transition: left 0.1s ease-out 0s, bottom 0.1s ease-out 0s;\"'>{label}</span>, {y} tonnes",
            dataPoints: [
              { label: "China", y: 4500, color: "#DE2910" },
              { label: "Russia", y: 600, color: "#0039A6" },
              { label: "India", y: 370, color: "#F79432" },
              { label: "United States Of America", y: 320, color: "#37366B" },
              { label: "Brazil", y: 210, color: "#F5D900" },
              { label: "Malaysia", y: 150, color: "#F7C600" },
              { label: "Others", y: 876, color: "#7a7677" }
            ]
          }
        ,
        
    ]
        
    };
    const chart = new CanvasJS.Chart(this.id, options);
    // const chart2 = new CanvasJS.Chart("chartContainer", options);
    chart.render();
    // chart2.render();
  }
}
</script>