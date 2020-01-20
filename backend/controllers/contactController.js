
Contact = require('../models/contactModel');
exports.index = function (req, res) {
    console.log(' --- GET ALL --- ')
    Contact.get(function (err, contacts) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        }
        res.json({
            status: "success",
            message: "Contacts retrieved successfully",
            responseData: contacts
        });
    });
};
// Handle create contact actions
exports.new = function (req, res) { //POST
    console.log(' --- ADD NEW CONTACT --- ');
    var contact = new Contact();
    contact.surname = req.body.surname[0];
    contact.name = req.body.name[0];
    contact.mail = req.body.mail[0];
// save the contact and check for errors
    contact.save(function (err) {
        // Check for validation error
        if (err)
            res.json(err);
        else
            res.json({
                message: 'success',
                responseData: contact
            });
            console.log(`HERE send _id contact: ${contact._id}`); //GET ID
    });
};
// Handle view contact info //localhost:8080/api/contacts/contact_id:5e01c4f775d0712b641622b0
exports.view = function (req, res) { //GET
    console.log(`--- GET ONE ---`);
    let id = req.params.contact_id.slice(11, req.params.contact_id.length);
    console.log(`id after slice is ${id}`)
    Contact.findById(id, function (err, contact) { //req.params.contact_id
        if (err)
            res.send(err);
        res.json({
            message: 'Contact details loading..',
            responseData: contact
        });
    });
};
// Handle update contact info
exports.update = function (req, res) { //PUT
    console.log('--- UPDATE ---')
    let id = req.params.contact_id.slice(11, req.params.contact_id.length);
    Contact.findById(id, function (err, contact) {
        if (err)
            res.send(err);
        contact.name = req.body.name ? req.body.name : contact.name;
        contact.gender = req.body.gender;
        contact.email = req.body.email;
        contact.phone = req.body.phone;
// save the contact and check for errors
        contact.save(function (err) {
            if (err)
                res.json(err);
            res.json({
                message: 'Contact Info updated',
                responseData: contact
            });
        });
    });
};
// Handle delete contact
exports.delete = function (req, res) { //DELETE
    console.log('--- DELETE ---')
    let id = req.params.contact_id.slice(11, req.params.contact_id.length);
    Contact.remove({
        _id: id
    }, function (err, contact) {
        if (err)
            res.send(err);
        res.json({
            status: "success",
            message: 'Contact deleted'
        });
    });
};