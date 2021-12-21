module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'c871dbe444efeac42971d9e41305ac01'),
  },
});
