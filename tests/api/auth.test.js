import test from 'ava';
import request from 'supertest';
import app from '../../src/main';

test.beforeEach(async t => {
  t.context.request = request(app.callback())
})

test('guest login return jwt', async t => {
  const {body, status, type} = await t.context.request.get('/auth/guest');
  t.is(status, 200)
  t.is(typeof body.token, 'string');
});


