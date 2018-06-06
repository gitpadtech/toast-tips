if (process.env.NODE_ENV === 'production') {
  module.exports = require('./dist/toast-tips.production.min');
} else {
  module.exports = require('./dist/toast-tips.development');
}
