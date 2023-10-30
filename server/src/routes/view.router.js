const express = require('express');
const router = express.Router();
const stripe = require("stripe")('sk_test_51Nyu4hJgpjBZ7R6dzJylZQdqhOBD3q2i6KgGnuC3xgQhCOmLewMJ6tfB7hNMfwWLG9l6u8WHnFFNa17klfLhKuBG004659ATnx');

const {
  Project,
  House,
  HouseProject,
  PhotoProject,
  PhotoUnderConstruction,
  Email,
  File,
  Document,
} = require('../../db/models');

const multer = require('../middlewares/upload-middleware')
const filemutler = require('../middlewares/text-middleware')

// const calculateOrderAmount = (items) => {
//   // Replace this constant with a calculation of the order's amount
//   // Calculate the order total on the server to prevent
//   // people from directly manipulating the amount on the client
//   return 1400;
// };

// Маршрут для отображения всех проектов
router.get('/projects', async (req, res) => {
  try {
    const projects = await Project.findAll({
      include: [
        {
          model: PhotoProject,
          as: 'photos',
        },
      ],
    });

    res.json(projects);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Что-то пошло не так' });
  }
});
router.post('/email', async (req, res) => {
  try{
    console.log(req.body);
    const {email} = req.body;
    await Email.findOrCreate({where: {email: email}});
  }
  catch(err){console.log(err)}
})

router.get('/houses', async (req, res) => {
  try {
    const houses = await House.findAll({ raw: true });
    for (let i = 0; i < houses.length; i += 1) {
      const photo = await HouseProject.findAll({
        where: { houseId: houses[i].id },
      });
      houses[i].photoSrc = photo;
    }
    res.json(houses);
  } catch (err) {
    console.log(err);
  }
});

router.post("/create-payment-intent", async (req, res) => {
  const { items, amount } = req.body;
  // Create a PaymentIntent with the order amount and currency
  const paymentIntent = await stripe.paymentIntents.create({
    // amount: calculateOrderAmount(items),
    amount: Number(amount),
    currency: "usd",
    // In the latest version of the API, specifying the `automatic_payment_methods` parameter is optional because Stripe enables its functionality by default.
    automatic_payment_methods: {
      enabled: true,
    },
  });
  console.log('Оплата', paymentIntent.client_secret);
  
  res.send({
    clientSecret: paymentIntent.client_secret,
  });
});

router.post('/addPhoto/:id', multer.array('files'),  async (req, res) => {
  try{
    for(let i = 0; i < req.files.length; i += 1){
      await PhotoUnderConstruction.findOrCreate({where: {photo: `http://localhost:3000/image/${req.files[i].filename}`, userId: req.params.id},
    })
    }
    res.sendStatus(200);
  }
  catch(err){console.log(err)}
})

router.post('/addFile/:id', filemutler.single('files'),  async (req, res) => {
  try{
    console.log();
    const file = await File.findOrCreate({where: {file: `http://localhost:3000/file/${req.file.filename}`, userId: req.params.id},
    })
    res.send(file)
  }
  catch(err){console.log(err)}
})

router.post('/workFiles', multer.array('documents'),  async (req, res) => {
  try{
    const array = [];
    for(let i = 0; i < req.files.length; i += 1){
      array.push(`http://localhost:3000/image/${req.files[i].filename}`)
    }
    res.send(array)
  }
  catch(err){console.log(err)}
})

router.post('/addPhotoProject/:id', multer.array('files'),  async (req, res) => {
  try{
    const result = await PhotoProject.findOrCreate({where: {photo: `http://localhost:3000/image/${req.files[0].filename}`, projectId: req.params.id},
    })
    res.sendStatus(200);
  }
  catch(err){console.log(err)}
})

router.post('/document', async (req, res) => {
  console.log(req.body);
  const file = req.body.result[0].file;
  const {name, executor, price, stage} = req.body;
  // console.log(file, name, executor, price, stage);
  try{
    await Document.findOrCreate({where:{name, status: 'В работе', executor, stageConstructionId: stage, price, payment: 'Не оплачено', files: file , date: ''}})
    res.sendStatus(200)
  }
  catch(err){console.log(err)}
})


router.get('/:id', async (req, res) => {
  const project = await Project.findByPk(req.params.id);
  res.json(project);
});

module.exports = router;












