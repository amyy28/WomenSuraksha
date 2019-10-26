# Places API to find the list of police stations within a specific range radius from the current location (latitude+longitude)

import requests
r = requests.get("https://maps.googleapis.com/maps/api/place/textsearch/json?query=police station&location=12.9255,77.5468&radius=1000&key=AIzaSyCyFR5nUdc-N4GV_mvPR4tYYT0_mkml8zs")
data = r.json()
listPolice = data["results"]
for i in range(0, len(listPolice)):
	print(listPolice[i]["name"])