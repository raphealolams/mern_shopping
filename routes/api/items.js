const express = require('express')

const router = express.Router()

const ItemsController = require('../../controllers/items')


/**
 * @route GET api/items
 * @description GET all items 
 * @access Public
 */
router.get("/", ItemsController.getItems)


/**
 * @route POST api/items
 * @description Add items 
 * @access Public
 */
router.post("/", ItemsController.saveItems)


/**
 * @route DELETE api/items
 * @description Remove items 
 * @access Public
 */
router.delete("/:id", ItemsController.deleteItem)



module.exports = router