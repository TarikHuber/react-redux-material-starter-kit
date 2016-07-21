
export function checkStatus(response) {
  if (!response.ok) {   // (response.status < 200 || response.status > 300)
    const error = new Error(response.statusText);
    error.response = response;
    throw error;
  }
  return response;
}

export function parseJSON(response) {
  return response.json();
}

/**
 * A utility to call a restful service.
 *
 * @autor Yunjun Mu: https://github.com/cloudmu
 * @modifications Tarik Huber
 * @param url The restful service end point.
 * @config The config object of the call. Can be null.
 * @onRequest The callback function to create request action.
 * @onRequestSuccess The callback function to create request success action.
 *                 The function expects response json payload as its argument.
 * @onRequestFailure The callback function to create request failure action.
 *                 The function expects error as its argument.
 */
export function callApi(url, config, onRequest, onRequestSuccess, onRequestFailure) {
  return dispatch => {
    dispatch(onRequest);

    return fetch(url, config)
      .then(checkStatus)
      .then(parseJSON)
      .then((json) => {
        dispatch(onRequestSuccess(json, config));
      }).catch((error) => {
        const response = error.response;
        if (response === undefined) {
          dispatch(onRequestFailure(error, config));
        } else {
          parseJSON(response)
            .then((json) => {
              error.status = response.status;
              error.statusText = response.statusText;
              error.message = json.message;
              dispatch(onRequestFailure(error));
            }
          );
        }
      });
  };
}
