import NodeTrello from 'node-trello';
var t = new NodeTrello(process.env.TRELLO_API_KEY, process.env.TRELLO_API_TOKEN);
const Trello = {};

const API = {
  get: url => {
    const promise = new Promise();
    t.get(url, function(err, data) {
      if (err) {
        promise.reject(err);
      } else {
        promise.resolve(data);
      }
    });
    return promise;
  },
  put: (url, requestMessage, successMessage, errorMessage) => {
    const promise = new Promise();
    t.put(url, function(err, data) {
      if (err) {
        promise.reject(err);
      } else {
        promise.resolve(data);
      }
    });
    return promise;
  },
  post: (url, requestMessage, successMessage, errorMessage) => {
    const promise = new Promise();
    t.post(url, function(err, data) {
      if (err) {
        promise.reject(err);
      } else {
        promise.resolve(data);
      }
    });
    return promise;
  },
};

Trello.fetchListsWithCards = (boardId) => API.get(
  `/1/boards/${boardId}/lists?cards=all&card_fields=labels`,
);

export default Trello;
