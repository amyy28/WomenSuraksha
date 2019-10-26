# Geolocation API to know the latitudes and longitudes of a specific place. Replace address field to the place of your choice.

import requests
r = requests.get("https://maps.googleapis.com/maps/api/geocode/json?address=PES+University,+Bangalore,+CA&key=YOUR_API_KEY")
data = r.json()
d = data["results"][0]["geometry"]["location"]
print(d["lat"])
print(d["lng"])