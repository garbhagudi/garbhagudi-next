module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '5ed5260f649049033a3c38c6522d0a60'),
  },
});
