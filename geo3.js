(function () {


let template = document.createElement("template");
            template.innerHTML = `
              
  		      <style>
                 	      @import "https://cdn.jsdelivr.net/npm/maptalks/dist/maptalks.css";
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
			     .maptalks-attribution{
			        display:none;
			      }
                    
  		      </style>
  		
		      <div id="map"></div>
  	      `;
	
            

            class Box extends HTMLElement {
		  
                constructor() {
                    super();
                    this._shadowRoot = this.attachShadow({ mode: "open" });
                    this._shadowRoot.appendChild(template.content.cloneNode(true));
                    
			//this.$element = shadowRoot.getElementById("map");
		    //var prop = '{"type":"FeatureCollection","features":[' +
			//	'{"type": "Feature", "properties": { "City": "New York", "Country": "US", "Contract": "30000033", "ZipCode": "10059", "Amount": "78.68" }, "geometry": { "type": "Point", "coordinates": [113.950375, 22.534875] } },' +
			//	'{"type":"Feature", "properties": { "City":"New York", "Country":"US", "Contract":"30000033", "ZipCode":"10059", "Amount":"88.68"}, "geometry": { "type":"Point", "coordinates": [113.950625, 22.534875] } },' +
			//	'{"type":"Feature", "properties": { "City":"New York", "Country":"US", "Contract":"30000033", "ZipCode":"10059", "Amount":"98.68"}, "geometry": { "type":"Point", "coordinates": [113.930625, 22.516125] } },' +
			//	'{"type":"Feature", "properties": { "City":"New York", "Country":"US", "Contract":"30000033", "ZipCode":"10059", "Amount":"78.68"}, "geometry": { "type":"Point", "coordinates": [113.930375, 22.516125] } },' +
			//	'{"type":"Feature", "properties": { "City":"New York", "Country":"US", "Contract":"30000033", "ZipCode":"10059", "Amount":"88.68"}, "geometry": { "type":"Point", "coordinates": [113.930125, 22.515625] } },' +
			//	'{"type":"Feature", "properties": { "City":"New York", "Country":"US", "Contract":"30000033", "ZipCode":"10059", "Amount":"98.68"}, "geometry": { "type":"Point", "coordinates": [113.930125, 22.515875] } },' +
			//	'{"type":"Feature", "properties": { "City":"New York", "Country":"US", "Contract":"30000033", "ZipCode":"10059", "Amount":"78.68"}, "geometry": { "type":"Point", "coordinates": [113.930375, 22.515625] } },' +
			//	'{"type":"Feature", "properties": { "City":"New York", "Country":"US", "Contract":"30000033", "ZipCode":"10059", "Amount":"88.68"}, "geometry": { "type":"Point", "coordinates": [113.929625, 22.515625] } },'+
			//	'{"type":"Feature","properties":{"City":"New York","Country":"US","Contract":"30000033","ZipCode":"10059","Amount":"98.68"},"geometry":{"type":"Point","coordinates":[114.151875,22.555125]}}]}';
			
			
			
                    //setTimeout(function () {
                    //    load(prop, shadowRoot.getElementById("map"));
                    //}, 3000);
			
			//console.log("constructor load");
			//console.log("JSON " + this.$info);
			//console.log("Center " + this.$color);
			
			//console.log("DOM Element " + shadowRoot.getElementById("map"));

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
			
			console.log("result change of geo 2");
			//if(this.$info != null && this.$info != '' && this.$info != undefined)
			{
				
				var data = '{"type":"FeatureCollection","features":[' + this.$info + "]}";
				var center = this.$color;
				
				let ele = this._shadowRoot;
				//console.log(ele.getElementById("map"));
				setTimeout(function () {
				//    load(data, this._shadowRoot.getElementById("map"), center);
				    load(data, ele.getElementById("map"), center);
				}, 3000);
			}
		}   
            
			LoadScript();
            function LoadScript() {

                const script2 = document.createElement('script');
                script2.type = 'text/javascript';
                script2.src = 'https://cdn.jsdelivr.net/npm/dat.gui@0.7.6/build/dat.gui.min.js';
                document.head.appendChild(script2);
                eval(script2);

                const script1 = document.createElement('script');
                script1.type = 'text/javascript';
                script1.src = 'https://cdn.jsdelivr.net/npm/gcoord@0.2.3/dist/gcoord.js';
                document.head.appendChild(script1);
                eval(script1);

                const script4 = document.createElement('script');
                script4.type = 'text/javascript';
                script4.src = 'https://maptalks.org/maptalks.three/demo/js/maptalks.js';
                document.head.appendChild(script4);
                eval(script4);

                const script5 = document.createElement('script');
                script5.type = 'text/javascript';
                script5.src = 'https://cdn.jsdelivr.net/npm/three@0.104.0/build/three.min.js';
                document.head.appendChild(script5);
                eval(script5);

                setTimeout(function () {
                    const script6 = document.createElement('script');
                    script6.type = 'text/javascript';
                    script6.src = 'https://cdn.jsdelivr.net/npm/maptalks.three@latest/dist/maptalks.three.js';
                    document.head.appendChild(script6);
                    eval(script6);
                }, 2000);
                
                const script7 = document.createElement('script');
                script7.type = 'text/javascript';
                script7.src = 'https://cdn.jsdelivr.net/npm/three@0.104.0/examples/js/libs/stats.min.js';
                document.head.appendChild(script7);
                eval(script7);

          }

            

            let initCalled = false;
            function load(prop, ele, cent) {
                if (!initCalled) {
                    initCalled = true;
		    
		    let cen = [];
		    cen[0] = parseFloat(cent.split(',')[0]);
		    cen[1] = parseFloat(cent.split(',')[1]);
		    console.log("center " + cen);
			
                    map = new maptalks.Map(ele, {
                        "center": cen,
                        zoom: 14,
                        pitch: 85,
                        baseLayer: new maptalks.TileLayer('tile', {
                            urlTemplate: 'http://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}.png',
                            subdomains: ['a', 'b', 'c', 'd', 'e'],
                        })
                    });
                    // the ThreeLayer to draw buildings
                    threeLayer = new maptalks.ThreeLayer('t', {
                        forceRenderOnMoving: true,
                        forceRenderOnRotating: true
                        // animation: true
                    });
                    threeLayer.prepareToDraw = function (gl, scene, camera) {
                        stats = new Stats();
                        stats.domElement.style.zIndex = 100;
                        //document.getElementById('Geomap').appendChild(stats.domElement);
                        ele.appendChild(stats.domElement);

                        var light = new THREE.DirectionalLight(0xffffff);
                        light.position.set(0, -10, 10).normalize();
                        scene.add(light);
                        scene.add(new THREE.AmbientLight(0xffffff, 0.2));
                        addBar(scene, prop, ele);

                    };
                    threeLayer.addTo(map);
                }
            }

            function addBar(scene, prop, ele) {
                bars = [], selectMesh = [];
                material = new THREE.MeshLambertMaterial({ color: 'rgb(38,160,146)', transparent: true, opacity: 1 });
                highlightmaterial = new THREE.MeshBasicMaterial({ color: 'yellow', transparent: true });
                
		let data = "";
		    console.log("data - " + prop);
		var json = JSON.parse(prop);
                for (var i = 0; i < json.features.length; i++) {
                     data = json.features.slice(0, Infinity).map(function (dataItem) {
                        dataItem = gcoord.transform(dataItem, gcoord.AMap, gcoord.WGS84);
                        return {
                            coordinate: dataItem.geometry.coordinates,
                            //height: dataItem.properties.Amount * 2,
		            height : 200,		
                            value: dataItem.properties.Amount,
                            city: dataItem.properties.City,
                            zip: dataItem.properties.ZipCode,
                            //height: Math.random() * 200,
                            //value: Math.random() * 10000,
                            topColor: '#fff'
                        }
                     });
                   
                }
                const time = 'time';
                console.time(time);
                const box = threeLayer.toBoxs(data, {}, material);
                bars.push(box);
                console.timeEnd(time);

                // tooltip test
                box.setToolTip('hello', {
                    showTimeout: 0,
                    eventsPropagation: true,
                    dx: 10
                });
                threeLayer.addMesh(bars);


                //infowindow test
                box.setInfoWindow({
                    content: 'hello world,height:',
                    title: 'message',
                    animationDuration: 0,
                    autoOpenOn: false
                });


                ['click', 'empty', 'mousemove'].forEach(function (eventType) {
                    box.on(eventType, function (e) {
                        const select = e.selectMesh;
                        if (e.type === 'empty' && selectMesh.length) {
                            threeLayer.removeMesh(selectMesh);
                            selectMesh = [];
                        }

                        let data, baseObject;
                        if (select) {
                            data = select.data;
                            baseObject = select.baseObject;
                            if (baseObject && !baseObject.isAdd) {
                                baseObject.setSymbol(highlightmaterial);
                                threeLayer.addMesh(baseObject);
                                selectMesh.push(baseObject);
                            }
                        }


                        if (selectMesh.length > 20) {
                            threeLayer.removeMesh(selectMesh);
                            selectMesh = [];
                        }
                        // override tooltip
                        if (e.type === 'mousemove' && data) {
                            const height = data.value;
                            const tooltip = this.getToolTip();
                            tooltip._content = `value:${height}`;
                        }
                        //override infowindow
                        if (e.type === 'click' && data) {
                            const height = data.value;
                            const city = data.city;
                            const zip = data.zip;
                            const infoWindow = this.getInfoWindow();
                            const content = 'City : ' + city + '<br> ZipCode : ' + zip + '<br> value : ' + height;
                            infoWindow.setContent(content);
                            if (infoWindow && (!infoWindow._owner)) {
                                infoWindow.addTo(this);
                            }
                            this.openInfoWindow(e.coordinate);
                        }
                    });
                }); 
                animation();
                initGui(ele);
            }

            function animation() {
                // layer animation support Skipping frames
                threeLayer._needsUpdate = !threeLayer._needsUpdate;
                if (threeLayer._needsUpdate) {
                    threeLayer.renderScene();
                }
                stats.update();
                requestAnimationFrame(animation);
            }

            function initGui(ele) {
                var params = {
                    add: true,
                    color: material.color.getStyle(),
                    show: true,
                    opacity: material.opacity,
                    altitude: 0,
                    animateShow: animateShow
                };

                var gui = new dat.GUI();
                gui.add(params, 'add').onChange(function () {
                    if (params.add) {
                        threeLayer.addMesh(bars);
                    } else {
                        threeLayer.removeMesh(bars);
                    }
                });
                gui.addColor(params, 'color').name('bar color').onChange(function () {
                    material.color.set(params.color);
                    bars.forEach(function (mesh) {
                        mesh.setSymbol(material);
                    });
                });
                gui.add(params, 'opacity', 0, 1).onChange(function () {
                    material.opacity = params.opacity;
                    bars.forEach(function (mesh) {
                        mesh.setSymbol(material);
                    });
                });
                gui.add(params, 'show').onChange(function () {
                    bars.forEach(function (mesh) {
                        if (params.show) {
                            mesh.show();
                        } else {
                            mesh.hide();
                        }
                    });
                });
                gui.add(params, 'altitude', 0, 300).onChange(function () {
                    bars.forEach(function (mesh) {
                        mesh.setAltitude(params.altitude);
                    });
                });
                gui.add(params, 'animateShow');

                $('.dg,.ac').css('display', 'none');

                const rem = ele.childNodes[1];
                rem.style.display = 'none';
            }

            function animateShow() {
                bars.forEach(function (mesh) {
                    mesh.animateShow({
                        duration: 3000
                    });
                });

            }
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			}
            window.customElements.define("com-demo-gauge", Box);
       })();