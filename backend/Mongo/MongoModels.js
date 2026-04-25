const mongoose = require("mongoose");

const Aptitude = new mongoose.Schema({
     Topic: {
        type: String,
        required: true,
     },
     QA: [
        {
           question: {
              type: String,
              required: true,
           },
           answer: {
              type: String,
              required: true,
           },
        },
     ],
  });

const Dsa = new mongoose.Schema({
   Topic: {
      type: String,
      required: true,
   },
   QA: [
      {
         question: {
            type: String,
            required: true,
         },
         answer: {
            type: String,
            required: true,
         },
      },
   ],
});

const Resource = new mongoose.Schema({
   category: {
      type: String,
      required: true,
   },
   items: [mongoose.Schema.Types.Mixed]
});

const AptitudeModel = mongoose.model('AptitudeModel', Aptitude);
const DsaModel = mongoose.model('DsaModel', Dsa);
const ResourceModel = mongoose.model('ResourceModel', Resource);

module.exports = {
   AptitudeModel,
   DsaModel,
   ResourceModel
};
  





