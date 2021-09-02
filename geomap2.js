
(function () {
	
	let template = document.createElement("template");
	template.innerHTML = `
		<style>
			html,
			body {
				margin: 0px;
				height: 100%;
				width: 100%;
			}

			#map {
				width: 100%;
				height: 100%;
				background-color: #b2c2d2
			}
		</style>
		
		<div id="map"></div>
	`;
	let initCalled = false;
  function load(prop){
	  if(!initCalled){
		initCalled = true;  
	  console.log("Data - " + prop);
	  const script1 = document.createElement('script');
          script1.type = 'text/javascript';
	  script1.src = 'https://cdn.jsdelivr.net/npm/gcoord@0.2.3/dist/gcoord.js';
	  document.head.appendChild(script1);
	  
	  const script2 = document.createElement('script');
	  script2.type = 'text/javascript';
	  script2.src = 'https://cdn.jsdelivr.net/npm/dat.gui@0.7.6/build/dat.gui.min.js';
	  document.head.appendChild(script2);
	  
	  const script3 = document.createElement('script');
	  script3.type = 'text/javascript';
	  script3.src = 'https://cdnjs.cloudflare.com/ajax/libs/jquery/1.10.2/jquery.min.js';
	  document.head.appendChild(script3);

	  const script4 = document.createElement('script');
	  script4.type = 'text/javascript';
	  script4.src = 'https://maptalks.org/maptalks.three/demo/js/maptalks.js';
	  document.head.appendChild(script4);

	  const script5 = document.createElement('script');
	  script5.type = 'text/javascript';
	  script5.src = 'https://cdn.jsdelivr.net/npm/three@0.104.0/build/three.min.js';
	  document.head.appendChild(script5);

	  const script6 = document.createElement('script');
	  script6.type = 'text/javascript';
	  script6.src = 'https://cdn.jsdelivr.net/npm/maptalks.three@latest/dist/maptalks.three.js';
	  document.head.appendChild(script6);

          const script7 = document.createElement('script');
	  script7.type = 'text/javascript';
	  script7.src = 'https://cdn.jsdelivr.net/npm/three@0.104.0/examples/js/libs/stats.min.js';
	  document.head.appendChild(script7);
	  
	  const style = document.createElement('style');
          style.type = 'text/css';
	  style.href = 'https://cdn.jsdelivr.net/npm/maptalks/dist/maptalks.css';
	  document.head.appendChild(style);
	  }
  }
	

  
	class Box extends HTMLElement {
		
		constructor() {
			super();
			let shadowRoot = this.attachShadow({ mode: "open" });
			shadowRoot.appendChild(template.content.cloneNode(true));

			this.$style = shadowRoot.querySelector('style');
			this.$svg = shadowRoot.querySelector('svg');

			this.addEventListener("click", event => {
				var event = new Event("onClick");
				this.dispatchEvent(event);
			});

			this._props = {};
		}

        	render(val, info, color) {
		   let json = val + " " + info + " " + color;
                   
		}
	
	

		onCustomWidgetBeforeUpdate(changedProperties) {
			this._props = { ...this._props, ...changedProperties };
		}

		onCustomWidgetAfterUpdate(changedProperties) {
			if ("value" in changedProperties) {
				this.$value = changedProperties["value"];
			}

			if ("info" in changedProperties) {
				this.$info = changedProperties["info"];
			}

			if ("color" in changedProperties) {
				this.$color = changedProperties["color"];
            		}
                        load(this.$value + this.$info + this.$color);
			this.render(this.$value, this.$info, this.$color);
			console.log("hello");
		}
	}
    customElements.define("com-demo-gauge", Box);
    
})();
    
