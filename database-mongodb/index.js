const mongoose = require('mongoose');

<<<<<<< HEAD
const mongoUri = 'mongodb+srv://root:IloveCareyJRoselee@hrei-cluster-o4i6i.mongodb.net/hrei-related-items-and-size-chart';
=======
// const mongoUri = 'mongodb://localhost/hrei-related-items-and-size-chart'
const mongoUri = 'mongodb+srv://root:IloveCareyJRoselee@hrei-cluster-o4i6i.mongodb.net/hrei-related-items-and-size-chart?retryWrites=true';
>>>>>>> fb3274b6ecafa59bcc5112231835818853f99035
const Product = require('./Product.js');
const Pav = require('./Pav.js');

const db = mongoose.connect(mongoUri, {
  useNewUrlParser: true,
});

const fetchChartFromDB = () => {
  const query = Product.find({});
  return query;
};

const fetchFourRandomPAVsFromDB = () => {
  const collection = Pav.aggregate(
    [{
      $sample: {
        size: 4,
      },
    }],
  );
  return collection;
};

module.exports.db = db;
module.exports.fetchChartFromDB = fetchChartFromDB;
module.exports.fetchFourRandomPAVsFromDB = fetchFourRandomPAVsFromDB;
