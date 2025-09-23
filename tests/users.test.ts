import request from 'supertest';
import Users from '../types/users';

const jsonPlaceholderBaseUrl = 'https://jsonplaceholder.typicode.com';


describe('/users tests', () => {
  it('should return ok', async () => {
    const response = await request(jsonPlaceholderBaseUrl).get('/');

    expect(response.status).toBe(200);

  });

  it('should /users endpoint return an array', async () => {
    const response = await request(jsonPlaceholderBaseUrl).get('/users');

    expect(Array.isArray(response.body)).toBe(true);
    expect(response.body.length).toBeGreaterThan(0);
  });

  it('should every user have the correct type', async () => {
    const response = await request(jsonPlaceholderBaseUrl).get('/users');

    response.body.forEach((user: Users) => {
      expect(user).toHaveProperty('id');
      expect(user).toHaveProperty('username');
      expect(user).toHaveProperty('email');
      expect(user).toHaveProperty('address');
      expect(user).toHaveProperty('phone');
      expect(user).toHaveProperty('website');
      expect(user).toHaveProperty('company');
    });
  });
  it('should return given id user', async () => {
    const response = await request(jsonPlaceholderBaseUrl).get('/users/1');

    expect(response.body).toHaveProperty('id', 1);
    expect(response.body).toHaveProperty('username');
    expect(response.body).toHaveProperty('email');
    expect(response.body).toHaveProperty('address');
    expect(response.body).toHaveProperty('phone');
    expect(response.body).toHaveProperty('website');
    expect(response.body).toHaveProperty('company');

  });

  it('should /users return empty object for non-existing user', async () => {
    const response = await request(jsonPlaceholderBaseUrl).get('/users');
    const usersCount = response.body.length;
    const response2 = await request(jsonPlaceholderBaseUrl).get('/comments/?postId=' + (usersCount + 1));

    expect(response2.body).toEqual({});

  });





});