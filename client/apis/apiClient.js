import request from 'superagent'

const rootUrl = '/api/v1/albums'

export function getAlbums() {
  return request.get(rootUrl).then((res) => res.body)
}

export function addNewAlbum(newAlbum) {
  return request
    .post(rootUrl)
    .send(newAlbum)
    .then((res) => res.body)
}

export function deleteAlbum(id) {
  return request.del(`${rootUrl}/${id}`).then((res) => res)
}

export function updateAlbum(id, details) {
  return request
    .patch(`${rootUrl}/${id}`)
    .send(details)
    .then((res) => res)
}
