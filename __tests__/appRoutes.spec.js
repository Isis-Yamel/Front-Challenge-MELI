const request = require("supertest");
const app = require("../index");

describe('app routes', () => {
  it('should redirect from "/" to "/login"', async () => {
    const res = await request(app)
      .get('/')

    expect(res.statusCode).toEqual(301);
  });

  it('should return a token when user login', async () => {
    const res = await request(app)
      .post('/login')
      .expect("Content-Type", /json/)
      .send({
        author: {
          name: 'Isis',
          lastName: 'Salamanca'
        }
      })

    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('token');
  });

  it('should return 401 if user tries to access "/api/items" without auth header', async () => {
    const res = await request(app)
      .get("/api/items")

    expect(res.statusCode).toEqual(401);
  });

  it('should access "/api/items" with auth header and return items data', async () => {
    const res = await request(app)
      .post('/login')
      .expect("Content-Type", /json/)
      .send({
        author: {
          name: 'Isis',
          lastName: 'Salamanca'
        }
      })

    const response = await request(app)
      .get("/api/items")
      .set('Authorization', `Bearer ${res.body.token}`)

    expect(response.statusCode).toEqual(200);
    // test that the route has the return data
    expect(response.body).toHaveProperty('author');
    expect(response.body).toHaveProperty('items');
  });

  it('should access item detail "/api/items/:id" and return data', async () => {
    const res = await request(app)
      .get("/api/items/MLA1131359154")

    expect(res.statusCode).toEqual(200);
    // test that the route has the return data
    expect(res.body).toHaveProperty('author');
    expect(res.body).toHaveProperty('item');
    // test that the item has the description append by the controller
    expect(res.body.item).toHaveProperty('description');
  });
});