const request = require('supertest');
const app = require('../app');

describe('GET /health', () => {
    it('should return status OK', async () => {
        const res = await request(app).get('/health');
        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty('status', 'OK');
    });
});


describe('POST /login', () => {
    it('should return success message with valid credentials', async () => {
        const res = await request(app)
            .post('/login')
            .send({ username: 'testuser', password: 'testpass' });
        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty('message', 'Login successful');
        expect(res.body.user).toHaveProperty('username', 'testuser');
    });

    it('should return error message with invalid credentials', async () => {
        const res = await request(app)
            .post('/login')
            .send({ username: '', password: '' });
        expect(res.statusCode).toEqual(401);
        expect(res.body).toHaveProperty('message', 'Invalid credentials');
    });
})