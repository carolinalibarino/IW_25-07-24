const Customer = require('../models/customerModel');

exports.getAllCustomers = async (req, res) => {
    const customers = await Customer.findAll();
    res.render('index', { customers });
};

exports.getCustomerById = async (req, res) => {
    const customer = await Customer.findById(req.params.id);
    res.render('edit', { customer });
};

exports.createCustomer = async (req, res) => {
    await Customer.create(req.body);
    res.redirect('/');
};

exports.updateCustomer = async (req, res) => {
    await Customer.update(req.params.id, req.body);
    res.redirect('/');
};

exports.deleteCustomer = async (req, res) => {
    await Customer.delete(req.params.id);
    res.redirect('/');
};
