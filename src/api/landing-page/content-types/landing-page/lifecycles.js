const axios = require('axios')
const netlifyWebhook = strapi.config.get('custom.netlifyWebhook')

module.exports = {
  afterCreate() {
    netlifyWebhook && axios.post(netlifyWebhook)
  },

  afterUpdate() {
    netlifyWebhook && axios.post(netlifyWebhook)
  },
};
