const instagramController = {};
const axios = require('axios');
const instagramBaseUrl = 'https://www.instagram.com/';
const igServices = require('../services/instagramServices');

/**
 * Scrap Instagram feed by tags
 * @param  {[type]}  req [description]
 * @param  {[type]}  res [description]
 * @return {Promise}     [description]
 */
instagramController.scrapByTags = async (req,res) => {
  const tag = req.params.tags
  const url = instagramBaseUrl+'explore/tags/'+tag;
  axios.get(url, {
    params:{
      '__a':1,
      'max_id':req.query.max_id
    }
  }).then(async function (response) {
    if(req.query.formated == 'true'){
      result = await igServices.formatFromTags(response.data)
    }else{
      result = response.data
    }
    res.send(result)
  }).catch(function (error) {
    console.log(error);
    res.json({
      'status':'error',
      'message': error
    })
  })
}

/**
 * Scrap Instagram feed by username
 * @param  {[type]}  req [description]
 * @param  {[type]}  res [description]
 * @return {Promise}     [description]
 */
instagramController.scrapByUsername = async (req,res) => {
  const username = req.params.username;
  const url = instagramBaseUrl+username;
  axios.get(url, {
    params:{
      '__a':1,
      'max_id':req.query.max_id
    }
  }).then(async function (response) {
    if(req.query.formated == 'true'){
      result = await igServices.formatFromUsername(response.data)
    }else{
      result = response.data
    }
    res.send(result)
  }).catch(function (error) {
    console.log(error);
    res.json({
      'status':'error',
      'message': error
    })
  })
}

/**
 * Scrap Instagram content details
 * @param  {[type]}  req [description]
 * @param  {[type]}  res [description]
 * @return {Promise}     [description]
 */
instagramController.contentDetail = async (req,res) => {
  const shortcode = req.params.shortcode;
  const url = instagramBaseUrl+'p/'+shortcode;
  axios.get(url, {
    params:{
      '__a':1
    }
  }).then(async function (response) {
    if(req.query.formated == 'true'){
      result = await igServices.formatMedia(response.data)
    }else{
      result = response.data
    }
    res.send(result)
  }).catch(function (error) {
    console.log(error);
    res.json({
      'status':'error',
      'message': error
    })
  })
}

instagramController.searchByQuery = async (req,res) => {
  const query = req.query.q
  const url = instagramBaseUrl+'web/search/topsearch/'
  axios.get(url, {
    params:{
      'context' : 'blended',
      'query'   : query
    }
  }).then(function (response){
    res.send(response.data)
  }).catch(function (error) {
    console.log(error);
    res.json({
      'status':'error',
      'message': error
    })
  })
}

module.exports = instagramController;
