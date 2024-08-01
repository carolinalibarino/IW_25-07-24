const express = require('express');
const router = express.Router();
const customerController = require('../controllers/customerController');

router.get('/', customerController.getAllCustomers);
router.get('/add', (req, res) => res.render('add'));
router.post('/add', customerController.createCustomer);
router.get('/edit/:id', customerController.getCustomerById);
router.post('/edit/:id', customerController.updateCustomer);
router.get('/delete/:id', customerController.deleteCustomer);

module.exports = router;
