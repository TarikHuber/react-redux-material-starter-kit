'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.checkStatus = checkStatus;
exports.parseJSON = parseJSON;
exports.callApi = callApi;

var API_ROOT = 'https://api.github.com';
var API_TOKEN = 'apiToken';

function checkStatus(response) {
  if (!response.ok) {
    // (response.status < 200 || response.status > 300)
    var error = new Error(response.statusText);
    error.response = response;
    throw error;
  }
  return response;
}

function parseJSON(response) {
  return response.json();
}

/**
 * A utility to call a restful service.
 *
 * @autor Yunjun Mu: https://github.com/cloudmu
 * @param url The restful service end point.
 * @config The config object of the call. Can be null.
 * @onRequest The callback function to create request action.
 * @onRequestSuccess The callback function to create request success action.
 *                 The function expects response json payload as its argument.
 * @onRequestFailure The callback function to create request failure action.
 *                 The function expects error as its argument.
 */
function callApi(url, config, onRequest, onRequestSuccess, onRequestFailure) {
  return function (dispatch) {
    dispatch(onRequest);

    return fetch(url, config).then(checkStatus).then(parseJSON).then(function (json) {
      dispatch(onRequestSuccess(json));
    }).catch(function (error) {
      var response = error.response;
      if (response === undefined) {
        dispatch(onRequestFailure(error));
      } else {
        parseJSON(response).then(function (json) {
          error.status = response.status;
          error.statusText = response.statusText;
          error.message = json.message;
          dispatch(onRequestFailure(error));
        });
      }
    });
  };
}