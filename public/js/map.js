mapboxgl.accessToken = mapToken ;
const map = new mapboxgl.Map({
container: "map",// container ID
// Choose from Mapbox's core styles, or make your own style with Mapbox Studio
style: 'mapbox://styles/mapbox/outdoors-v12',// style URL
center:listing.geometry.coordinates,//starting position (logitude, latitude)
zoom: 10 //starting zoom
});


const marker = new mapboxgl.Marker({ color: "Red"})
.setLngLat(listing.geometry.coordinates)//Listing.geometry.coordinates
.setPopup (new mapboxgl.Popup({offset: 25})
.setHTML(`<h4>${listing.title}</h4><p> Exact Location will be provide after booking</p>`))
.addTo(map);

