# # Geolocation API to know the latitudes and longitudes of a specific place. Replace address field to the place of your choice.

import requests
location = input("Enter the location ")
r = requests.get("https://maps.googleapis.com/maps/api/geocode/json?address="+location+",+Bangalore,+CA&key=API")
data = r.json()
d = data["results"][0]["geometry"]["location"]

print(d["lat"])
print(d["lng"])

# # Places API to find the list of police stations within a specific range radius from the current location (latitude+longitude)

r = requests.get("https://maps.googleapis.com/maps/api/place/textsearch/json?query=police station&location="+str(d['lat'])+","+str(d['lng'])+"&radius=1000&key=API")
data = r.json()
listPolice = data["results"]
for i in range(0, len(listPolice)):
	print(listPolice[i]["name"])
