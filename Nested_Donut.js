(function() { 
	let template = document.createElement("template");
    template.innerHTML = `
        <div id="chart_div" class="Chart1" style="width:800px; height:600px" ></div>`;

    class NestedDonut extends HTMLElement {
		    constructor() {
			      super(); 
			      let shadowRoot = this.attachShadow({mode: "open"});
			      shadowRoot.appendChild(template.content.cloneNode(true));
			
			      this.addEventListener("click", event => {
				        var event = new Event("onClick");
				        this.dispatchEvent(event);
			      });
			      this._props = {};
		    }
	    
        onCustomWidgetBeforeUpdate(changedProperties) {
            this._props = { ...this._props, ...changedProperties };
        }

        onCustomWidgetAfterUpdate(changedProperties) {
            this._props = { ...this._props, ...changedProperties };
            var myprops = this._props       
            var val = myprops.value;           

			const script = document.createElement('script');
			script.type = 'text/javascript';
			script.async = true;
            script.onload = function () {  
                const script1 = document.createElement('script');
                script1.type = 'text/javascript';
                script1.async = true;
    
                script1.onload = function () {  
                    const script2 = document.createElement('script');
                    script2.type = 'text/javascript';
                    script2.async = true;
        
                    script2.onload = function () {  
                      drawchart(val)}

                      function drawchart(props) {
                        var a=props.split(";");
                        var chartdata=[];
                        for (let i = 0; i < a.length; i++) {
                          const b=a[i].split(":");
                          const a1 = b[0];
                          const a2 = Number(b[1]);
                          const a3 = Number(b[2]);
                          var c1={
                            Label: a1,
                            Value1: a2,
                            Value2: a3

                          }
                          chartdata.push(c1);
                        }
                      
                        am4core.ready(function() {

                          // Themes begin
                          am4core.useTheme(am4themes_animated);
                          // Themes end
                          
                          // Create chart instance
                          const ctx = document.querySelector(".sapCustomWidgetWebComponent").shadowRoot.querySelector("#chart_div");
                           var chart = am4core.create(ctx, am4charts.PieChart);
                          
                          // Let's cut a hole in our Pie chart the size of 40% the radius
                          chart.innerRadius = am4core.percent(40);
                          
                          // Add data
                          chart.data = chartdata;
                          
                          // Add and configure Series
                          var pieSeries = chart.series.push(new am4charts.PieSeries());
                          pieSeries.dataFields.value = "Value1";
                          pieSeries.dataFields.category = "Label";
                          pieSeries.slices.template.stroke = am4core.color("#fff");
                          pieSeries.slices.template.strokeWidth = 2;
                          pieSeries.slices.template.strokeOpacity = 1;
                          
                          // Disabling labels and ticks on inner circle
                          pieSeries.labels.template.disabled = true;
                          pieSeries.ticks.template.disabled = true;
                          
                          // Disable sliding out of slices
                          pieSeries.slices.template.states.getKey("hover").properties.shiftRadius = 0;
                          pieSeries.slices.template.states.getKey("hover").properties.scale = 0.9;
                          
                          // Add second series
                          var pieSeries2 = chart.series.push(new am4charts.PieSeries());
                          pieSeries2.dataFields.value = "Value2";
                          pieSeries2.dataFields.category = "Label";
                          pieSeries2.slices.template.stroke = am4core.color("#fff");
                          pieSeries2.slices.template.strokeWidth = 2;
                          pieSeries2.slices.template.strokeOpacity = 1;
                          pieSeries2.slices.template.states.getKey("hover").properties.shiftRadius = 0;
                          pieSeries2.slices.template.states.getKey("hover").properties.scale = 1.1;
                          
                          }); // end am4core.ready()
                                        
                                                                  
                        }
                        script2.src = 'https://www.amcharts.com/lib/4/themes/animated.js';
                        document.head.appendChild(script2);           
                                                              
                    }
                    script1.src = 'https://www.amcharts.com/lib/4/charts.js';             
                    document.head.appendChild(script1);                                    
                }
                script.src = 'https://www.amcharts.com/lib/4/core.js';
                document.head.appendChild(script);

            }
    }
    customElements.define("com-sample-nesteddonut", NestedDonut);
})();
