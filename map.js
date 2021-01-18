mapboxgl.accessToken = 'pk.eyJ1IjoiYXJpYW5pdGpha2EiLCJhIjoiY2tnempyM25pMTRmcjJzcjFhZ3F3ZDAyZiJ9.bC7LqKIqW30UDQo2np-YeA';
                var map = new mapboxgl.Map({
                    container: 'map',
                    style: 'mapbox://styles/mapbox/streets-v11',
                    center: [20.8905, 42.6211],
                    zoom: 7.7
                });

                var marker = new mapboxgl.Marker()
                    .setLngLat([21.1655, 42.6629])
                    .addTo(map);

                var marker = new mapboxgl.Marker()
                    .setLngLat([20.4285, 42.3844])
                    .addTo(map);