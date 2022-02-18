const router = require("express").Router();
const { PrismaClient } = require("@prisma/client");
const { amenities } = new PrismaClient();

router.get('/', async (req, res) => {
  const amenityData = await amenities.findMany();

  res.json(amenityData)
})

router.get('/capacity', async (req, res) => {
  const {amenityId} = req.query;
  // console.log(req.body)
 try { const amenityData = await amenities.findUnique({
    where: {
      id: parseInt(amenityId)
    },
    select: {
      capacity: true
    }
    
  });

  res.json(amenityData)
} catch(err) {
  console.log(err)
}
})


module.exports = router





    // "get-stream": {
    //   "version": "4.1.0",
    //   "resolved": "https://registry.npmjs.org/get-stream/-/get-stream-4.1.0.tgz",
    //   "integrity": "sha512-GMat4EJ5161kIy2HevLlr4luNjBgvmj413KaQA7jt4V8B4RDsfpHk7WQ9GVqfYyyx8OS/L66Kox+rJRNklLK7w==",
    //   "requires": {
    //     "pump": "^3.0.0"
    //   }
    // },


// 3105      "version": "1.1.1",
// "resolved": "https://registry.npmjs.org/string_decoder/-/string_decoder-1.1.1.tgz",
// "integrity": "sha512-n/ShnvDi6FHbbVfviro+WojiFzv+s8MPMHBczVePfUpDJLwoLT0ht1l4YwBCbi8pJAveEEdnkHyPyTP/mzRfwg==",
// "requires": {
//   "safe-buffer": "~5.1.0"






    // "version": "2.3.2",
    // "resolved": "https://registry.npmjs.org/fsevents/-/fsevents-2.3.2.tgz",
    // "integrity": "sha512-xiqMQR4xAeHTuB9uWm+fFRcIOgKBMiOBP+eXiyT7jsgVCq1bkVygt00oASowB7EdtpOHaaPgKt812P9ab+DDKA==",