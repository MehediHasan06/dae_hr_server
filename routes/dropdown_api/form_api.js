const router = require('express').Router();

const DistrictModel = require('../../schema/dropdown_api/district_api');
const UpazillaModel = require('../../schema/dropdown_api/upazilla_api');
const PostOfficeModel = require('../../schema/dropdown_api/postOffice_api');
const BcsBatchModel = require('../../schema/dropdown_api/bcs_batch');
const BcsRankModel = require('../../schema/dropdown_api/bcs_rank');
const BcsDivisionModel = require('../../schema/dropdown_api/bcs_division');
const CadreOfficeModel = require('../../schema/dropdown_api/cadre_office');
const CadreDesignationModel = require('../../schema/dropdown_api/cadre_designation');
const PayScaleModel = require('../../schema/dropdown_api/cadre_payScale');


// @get  -  /getDistrict
// API for getting districts
router.get('/getDistrict', async (req, res)=> {
    try{
        const districtData = await DistrictModel.find();
        res.send({
            success: true,
            message: `Hurre !`,
            data: districtData
        });
    } catch(error){
        res.send({
            success: false, 
            message: error.message 
        });
    }
});

// @POST  -  /addDistrict
// API for adding home district
router.post('/addDistrict', async (req, res) => {
    try{
        const districtName = new DistrictModel(req.body);
        await districtName.save();
        res.send({ 
            success: true,
            message: `New District name is added !`
        });
    } catch(error){
        res.send({
            success: false, 
            message: error.message 
        });        
    }
});


// @get  -  /getUpazilla
// API for getting upazillas
router.get('/getUpazilla', async (req, res)=> {
    try{
        const upazillaData = await UpazillaModel.find();
        res.send({
            success: true,
            message: `Hurre !`,
            data: upazillaData
        });
    } catch(error){
        res.send({
            success: false, 
            message: error.message 
        });
    }
});

// @POST  -  /addUpazilla
// API for adding upazilla
router.post('/addUpazilla', async (req, res) =>{
    try{
        const upazillaName = new UpazillaModel(req.body);
        await upazillaName.save();
        res.send({ 
            success: true,
            message: `New Upazilla name is added !`
        });
    } catch(error){
        res.send({
            success: false, 
            message: error.message 
        });  
    }
});


// @get  -  /getPostOffice
// API for getting post offices
router.get('/getPostOffice', async (req, res)=> {
    try{
        const postOfficeData = await PostOfficeModel.find();
        res.send({
            success: true,
            message: `Hurre !`,
            data: postOfficeData
        });
    } catch(error){
        res.send({
            success: false, 
            message: error.message 
        });
    }
});

// @POST  -  /addPostOffice
// API for adding Post Office
router.post('/addPostOffice', async (req, res) => {
    try{
        const postOfficeName = new PostOfficeModel(req.body);
        await postOfficeName.save();
        res.send({ 
            success: true,
            message: `New Post Office name is added !`
        });
    } catch(error){
        res.send({
            success: false, 
            message: error.message 
        }); 
    }
});


// @get  -  /getBatch
// API for getting BCS batches
router.get('/getBatch', async (req, res)=> {
    try{
        const BatchData = await BcsBatchModel.find();
        res.send({
            success: true,
            message: `Hurre !`,
            data: BatchData
        });
    } catch(error){
        res.send({
            success: false, 
            message: error.message 
        });
    }
});

// @POST  -  /addBatch
// API for adding a batch of BCS 
router.post('/addBatch', async (req, res) => {
    try{
        const batchName = new BcsBatchModel(req.body);
        await batchName.save();
        res.send({ 
            success: true,
            message: `New BCS Batch is added !`
        });
    } catch(error){
        res.send({
            success: false, 
            message: error.message 
        });  
    }
});


// @get  -  /getRank
// API for getting ranks
router.get('/getRank', async (req, res)=> {
    try{
        const rankData = await BcsRankModel.find();
        res.send({
            success: true,
            message: `Hurre !`,
            data: rankData
        });
    } catch(error){
        res.send({
            success: false, 
            message: error.message 
        });
    }
});

// @POST  -  /addRank
// API for adding a new rank
router.post('/addRank', async (req, res) => {
    try{
        const rankName = new BcsRankModel(req.body);
        await rankName.save();
        res.send({ 
            success: true,
            message: `New BCS Rank is added !`
        });
    } catch(error){
        res.send({
            success: false, 
            message: error.message 
        });  
    }
});


// @get  -  /getDivision
// API for getting divisions
router.get('/getDivision', async (req, res)=> {
    try{
        const divisionData = await BcsDivisionModel.find();
        res.send({
            success: true,
            message: `Hurre !`,
            data: divisionData
        });
    } catch(error){
        res.send({
            success: false, 
            message: error.message 
        });
    }
});
// @POST  -  /addDivision
// API for adding a new division
router.post('/addDivision', async (req, res) => {
    try{
        const divisionName = new BcsDivisionModel(req.body);
        await divisionName.save();
        res.send({ 
            success: true,
            message: `New BCS Division is added !`
        });
    } catch(error){
        res.send({
            success: false, 
            message: error.message 
        }); 
    }
});


// @get  -  /getOffice
// API for getting offices
router.get('/getOffice', async (req, res)=> {
    try{
        const officeData = await CadreOfficeModel.find();
        res.send({
            success: true,
            message: `Hurre !`,
            data: officeData
        });
    } catch(error){
        res.send({
            success: false, 
            message: error.message 
        });
    }
});

// @POST  -  /addOffice
// API for adding a new Cadre Office
router.post('/addOffice', async (req, res) => {
    try{
        const officeName = new CadreOfficeModel(req.body);
        await officeName.save();
        res.send({ 
            success: true,
            message: `New Cadre Office is added !`
        });
    } catch(error){
        res.send({
            success: false, 
            message: error.message 
        });
    }
});


// @GET  -  /getDesignation
// API for getting designations
router.get('/getDesignation', async (req, res)=> {
    try{
        const designationData = await CadreDesignationModel.find();
        res.send({
            success: true,
            message: `Hurre !`,
            data: designationData
        });
    } catch(error){
        res.send({
            success: false, 
            message: error.message 
        });
    }
});

// @POST  -  /addDesignation
// API for adding a new Cadre Designation
router.post('/addDesignation', async (req, res) => {
    try{
        const designationName = new CadreDesignationModel(req.body);
        await designationName.save();
        res.send({ 
            success: true,
            message: `New Cadre Designation is added !`
        });
    } catch(error){
        res.send({
            success: false, 
            message: error.message 
        });
    }
});

// @GET  -  /getPayScale
// API for getting Payscale
router.get('/getPayScale', async (req, res)=> {
    try{
        const payScaleData = await PayScaleModel.find();
        res.send({
            success: true,
            message: `Hurre !`,
            data: payScaleData
        });
    } catch(error){
        res.send({
            success: false, 
            message: error.message 
        });
    }
});

// @POST  -  /addPayScale
// API for adding a payscale
router.post('/addPayScale', async (req, res) => {
    try{
        const payScale = new PayScaleModel(req.body);
        await payScale.save();
        res.send({ 
            success: true,
            message: `New Cadre payscale is added !`
        });
    } catch(error){
        res.send({
            success: false, 
            message: error.message 
        });
    }
});


module.exports = router;