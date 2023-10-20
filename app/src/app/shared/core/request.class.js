export default class RequestClass {
    constructor(baseURL) {
        this.baseURL = baseURL || 'http://10.2.2.11:3000';
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

        try {
            const response = await fetch(url, requestOptions);
            if (!response.ok) {
                throw new Error(`Request failed with status ${response.status}`);
            }
            return await response.json();
        } catch (error) {
            throw new Error(`Request error: ${error.message}`);
        }
    }

    async create(endpoint, data) {
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


