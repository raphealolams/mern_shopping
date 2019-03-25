const Item = require('../models/Items')

let ItemsController = {}

/**
 * @param req
 * @param res
 * @description 
 * @author Ajilore Raphaal
 */
ItemsController.getItems = function(req, res) {
    Item.find()
        .sort({date: -1 })
        .then(items => res.status(404).json(items))
}


/**
 * @param req
 * @param res
 * @description 
 * @author Ajilore Raphaal
 */
ItemsController.saveItems = function(req, res) {
    const newItem = new Item({
        name: req.body.name
    })


    newItem.save()
        .then(item => res.status(404).json(item))
}


/**
 * @param req
 * @param itemId
 * @param res
 * @description 
 * @author Ajilore Raphaal
 */
ItemsController.deleteItem = function(req, res) {
    Item.findById(req.params.id)
        .then(item => {
            item.remove()
                .then(() => res.status(404).json({success: true}))
        }).catch(err => res.status(404).json({success: false}))
}






module.exports = ItemsController

