// module.exports = ({ env }) => ({
//   upload: {
//     config: {
//       provider: 'aws-s3',
//       providerOptions: {
//         accessKeyId: env('AWS_ACCESS_KEY_ID'),
//         secretAccessKey: env('AWS_ACCESS_SECRET'),
//         region: env('AWS_REGION'),
//         params: {
//           Bucket: env('AWS_BUCKET'),
//         },
//         logger: console,
//       },
//     },
//   },
// });

module.exports = ({ env }) => ({
  upload: {
    config: {
      provider: 'cloudinary',
      providerOptions: {
        cloud_name: env('CLOUDINARY_NAME'),
        api_key: env('CLOUDINARY_KEY'),
        api_secret: env('CLOUDINARY_SECRET'),
      },
      actionOptions: {
        upload: {},
        delete: {},
      },
    },
  },
});
