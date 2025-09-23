import request from 'supertest';
import Post from '../types/comments';
import Comments from '../types/comments';

const jsonPlaceholderBaseUrl = 'https://jsonplaceholder.typicode.com';


describe('/comments tests', () => {
  it('should return ok', async () => {
    const response = await request(jsonPlaceholderBaseUrl).get('/');

    expect(response.status).toBe(200);

  });

  it('should return comment by id', async () => {
    const response = await request(jsonPlaceholderBaseUrl).get('/comments/1');

    expect(response.body).toHaveProperty('name');
    expect(response.body).toHaveProperty('email');
    expect(response.body).toHaveProperty('body');
    expect(response.body).toHaveProperty('id', 1);
    expect(response.body).toHaveProperty('postId', 1);
  });

  it('should /comments endpoint return array', async () => {
    const response = await request(jsonPlaceholderBaseUrl).get('/comments');

    expect(Array.isArray(response.body)).toBe(true);
    expect(response.body.length).toBeGreaterThan(0);
  });

  it('should every comment have the correct type', async () => {
    const response = await request(jsonPlaceholderBaseUrl).get('/comments');

    response.body.forEach((comment: Comments) => {
      expect(comment).toHaveProperty('id');
      expect(comment).toHaveProperty('name');
      expect(comment).toHaveProperty('email');
      expect(comment).toHaveProperty('body');
      expect(comment).toHaveProperty('id');
      expect(comment).toHaveProperty('postId');
    });
  });

  it('should return given id comment', async () => {
    const response = await request(jsonPlaceholderBaseUrl).get('/comments?postId=1');

    response.body.forEach((comment: Comments) => {
      expect(comment).toHaveProperty('postId');
      expect(comment.postId).toBe(1);

    });
  });

  it('should comment return empty array for non-existing postId', async () => {

    const response = await request(jsonPlaceholderBaseUrl).get('/comments');
    const commentsCount = response.body.length;
       const response2 = await request(jsonPlaceholderBaseUrl).get('/comments/?postId=' + (commentsCount + 1));

    expect(response2.body).toEqual([]);
  });


});