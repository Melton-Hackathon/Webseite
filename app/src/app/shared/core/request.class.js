export default class RequestClass {
    constructor(baseURL) {
        this.baseURL = baseURL || 'https://melton.wicki.sbs';
    }

    async sendRequest(method, endpoint, data = null) {
        const url = this.baseURL + endpoint;
        const headers = {
            'Content-Type': 'application/json',
        };

        const requestOptions = {
            method,
            headers,
        };

        if (data) {
            requestOptions.body = JSON.stringify(data);
        }

        console.log(requestOptions)


        if (method === 'POST') {
            try {
                return await fetch(this.baseURL + endpoint, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(data)  // Modify this based on your requirement
                }).then(response => response.json())
                    .then(data => { return data })
                    .catch(error => console.error('Error:', error));
            } catch (error) {
                throw new Error(`Request error: ${error.message}`);
            }
        } else if (method === 'GET') {
            try {
                return await fetch(this.baseURL + endpoint, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                }).then(response => response.json())
                    .then(data => { return data })
                    .catch(error => console.error('Error:', error));
            } catch (error) {
                throw new Error(`Request error: ${error.message}`);
            }
        } else if (method === 'PUT') {
            try {
                return await fetch(this.baseURL + endpoint, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(yourDataObject) // Ersetzen Sie 'yourDataObject' durch die Daten, die Sie senden möchten
                }).then(response => response.json())
                    .then(data => { return data })
                    .catch(error => console.error('Error:', error));

            } catch (error) {
                throw new Error(`Request error: ${error.message}`);
            }
        } else if (method === 'DELETE') {
            try {
                return await fetch(this.baseURL + endpoint, {
                    method: 'DELETE',
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }).then(response => response.json())
                    .then(data => { return data })
                    .catch(error => console.error('Error:', error));
            } catch (error) {
                throw new Error(`Request error: ${error.message}`);
            }
        } else {
            throw new Error(`Request error: ${error.message}`);
        }
    }

    create(endpoint, data) {
        return this.sendRequest('POST', endpoint, data);
    }

    async get(endpoint) {
        return this.sendRequest('GET', endpoint);
    }

    async update(endpoint, data) {
        return this.sendRequest('PUT', endpoint, data);
    }

    async delete(endpoint) {
        return this.sendRequest('DELETE', endpoint);
    }
}


