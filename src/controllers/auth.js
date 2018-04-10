const guest = async function guest(ctx) {
  ctx.body = {
    code: 200,
    token: 'Hello World',
  };
};

module.exports = {
  guest,
};
