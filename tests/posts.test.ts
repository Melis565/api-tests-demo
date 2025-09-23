import request from 'supertest';
import Post from '../types/post';

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

  it('should /posts endpoint return array', async () => {
    const response = await request(jsonPlaceholderBaseUrl).get('/posts');

    expect(Array.isArray(response.body)).toBe(true);
    expect(response.body.length).toBeGreaterThan(0);
  });

  it('should every post have the correct type', async () => {
    const response = await request(jsonPlaceholderBaseUrl).get('/posts');

    response.body.forEach((post: Post) => {
      expect(post).toHaveProperty('id');
      expect(post).toHaveProperty('title');
      expect(post).toHaveProperty('body');
      expect(post).toHaveProperty('userId');
    });
  });

  it('should POST /posts return 200', async () => {
    const response = await request(jsonPlaceholderBaseUrl).post('/posts').send({
      title: 'foo',
      body: 'bar',
      userId: 1,
    });

    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty('id');
    expect(response.body).toHaveProperty('title', 'foo');
    expect(response.body).toHaveProperty('body', 'bar');
    expect(response.body).toHaveProperty('userId', 1);
  });

});