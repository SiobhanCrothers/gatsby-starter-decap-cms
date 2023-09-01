# Summary

In this summary we will provide some general steps for how to integrate Bravura Cloud with ServiceNow to create tickets. This is a general strategy and the details may need to be adjusted as needed.

The principals being expressed here will work with any ticketing system that exposes a REST Api. ServiceNow is being used as an example. 


## Steps

1. Set Up ServiceNow:

Before integrating with Hasura, set up ServiceNow to accept incoming requests.

* API Access: Ensure ServiceNow provides API access (typically through the REST API).
* Service Account: Create a service account with permissions to create incidents. Use this account to authenticate API requests from Hasura.
* API Endpoint: Identify the REST API endpoint for creating incidents. Typically, it's: https://<your-instance>.service-now.com/api/now/table/incident

2. Set Up Hasura:
* Event Trigger: Create an event trigger in Hasura. For instance, this could be based on inserting a row in a specific table.
* Webhook URL: Set the webhook URL to a middle layer (a server or cloud function) that transforms the Hasura payload into what ServiceNow expects.

3. Create the Middle Layer:
A middle layer (server/cloud function) acts as an intermediary, handling payload transformation and authentication.

* Receive Payload: Accept the payload from Hasura's event trigger.
* Transform Payload: Convert the Hasura payload to ServiceNow's format. This involves extracting and possibly renaming fields.
* Authentication: Authenticate the API request with the ServiceNow service account credentials.
* Make API Call: Send a POST request to the ServiceNow API endpoint to create a ticket.

4. Handle Failures:
* Retries: Implement retries if the ServiceNow API call fails.
* Logging: Log failures for debugging.
* Notifications: Optionally, send notifications (e.g., emails) if ticket creation fails.

## Example Middle Layer (Python & Flask):

Here's a basic Python/Flask server acting as the middle layer:


```
from flask import Flask, request, jsonify
import requests

app = Flask(__name__)

SERVICE_NOW_ENDPOINT = "https://<your-instance>.service-now.com/api/now/table/incident"
SERVICE_NOW_USER = "<service_account_username>"
SERVICE_NOW_PASS = "<service_account_password>"

@app.route("/create-ticket", methods=["POST"])
def create_ticket():
    payload = request.json

    # Transform Hasura payload to ServiceNow format
    incident_data = {
        "short_description": payload["event"]["data"]["new"]["description"],
        # Add other necessary fields
    }

    response = requests.post(
        SERVICE_NOW_ENDPOINT,
        auth=(SERVICE_NOW_USER, SERVICE_NOW_PASS),
        json=incident_data
    )

    if response.status_code == 201:
        return jsonify({"message": "Ticket created successfully"}), 200
    else:
        return jsonify({"error": "Failed to create ticket"}), 500

if __name__ == "__main__":
    app.run(debug=True)

```
