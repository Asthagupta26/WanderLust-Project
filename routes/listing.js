const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const Listing = require("../models/listing.js");
const {isLoggedIn, isOnwer, vaildateListing} = require("../middleware.js");

const listingController = require("../controllers/listings.js");
const multer  = require("multer");
const { storage } = require("../cloudConfig.js")
const upload = multer({storage});

router
  .route("/")
  .get(wrapAsync(listingController.index))
  .post( 
    isLoggedIn,
    upload.single("listing[image]"),
    vaildateListing,
    wrapAsync(listingController.createListing)
);

//New Route
router.get("/new", isLoggedIn, (listingController.renderNewForm));

router.route("/:id")
.get(wrapAsync(listingController.showListing))
.put(isLoggedIn,isOnwer,upload.single("listing[image]"), vaildateListing, wrapAsync(listingController.updateListing))
.delete(isLoggedIn,isOnwer, wrapAsync(listingController.destroyListing));

//Edit Route
router.get("/:id/edit",isLoggedIn,isOnwer, wrapAsync(listingController.renderEditForm));

module.exports = router;

