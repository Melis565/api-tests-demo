import request from 'supertest';

const jsonPlaceholderBaseUrl = 'https://jsonplaceholder.typicode.com';
describe('/posts tests', () => {
   it('should return ok', async () => {
    const response = await request(jsonPlaceholderBaseUrl).get('/');

    expect(response.status).toBe(200);
  
  });

  it('should return post by id', async () => {
    const response = await request(jsonPlaceholderBaseUrl).get('/posts/1');

    expect(response.body).toHaveProperty('title');
    expect(response.body).toHaveProperty('body');
    expect(response.body).toHaveProperty('id', 1);
    expect(response.body).toHaveProperty('userId', 1);
  });
});