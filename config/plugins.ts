export default ({ env }) => ({
  upload: {
    config: {
      provider: 'aws-s3',
      providerOptions: {
        baseUrl: env('CF_PUBLIC_ACCESS_URL'),
        endpoint: env('CF_ENDPOINT'),
        rootPath: env('CF_ROOT_PATH'),
        s3Options: {
          credentials: {
            accessKeyId: env('CF_ACCESS_KEY_ID'),
            secretAccessKey: env('CF_ACCESS_SECRET'),
          },
          region: env('CF_REGION'),
          params: {
            Bucket: env('CF_BUCKET'),
            ACL: env('AWS_ACL', 'public-read'),
          },
        },
      },
      actionOptions: {
        upload: {},
        uploadStream: {},
        delete: {},
      },
    },
  },
});
