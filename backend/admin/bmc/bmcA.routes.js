const express = require('express');
const router = express.Router();

const bmcController = require('./bmcA.controller');

router.get('/', bmcController.getAllBmc);         // GET semua BMC
router.get('/:id', bmcController.getBmcById);     // GET BMC by ID
router.post('/', bmcController.createBmc);        // POST buat BMC baru
router.put('/:id', bmcController.updateBmc);      // PUT update BMC
router.delete('/:id', bmcController.deleteBmc);   // DELETE BMC
router.get('/submission', authenticate, isProjectOfficer, getBMCSubmissions);
router.put('/submission/:id/verify', authenticate, isBMCAdmin, verifySubmission);
router.delete('/submission/:id', authenticate, isSuperAdmin, deleteSubmission);

module.exports = router;
