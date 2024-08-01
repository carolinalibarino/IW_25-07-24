const db = require('../config/db');

class Customer {
    static async findAll() {
        const [rows] = await db.query('SELECT * FROM customers');
        return rows;
    }

    static async findById(id) {
        const [rows] = await db.query('SELECT * FROM customers WHERE id = ?', [id]);
        return rows[0];
    }

    static async create(customer) {
        const { name, email } = customer;
        const result = await db.query('INSERT INTO customers (name, email) VALUES (?, ?)', [name, email]);
        return result[0].insertId;
    }

    static async update(id, customer) {
        const { name, email } = customer;
        await db.query('UPDATE customers SET name = ?, email = ? WHERE id = ?', [name, email, id]);
    }

    static async delete(id) {
        await db.query('DELETE FROM customers WHERE id = ?', [id]);
    }
}

module.exports = Customer;
