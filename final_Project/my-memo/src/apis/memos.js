import sendRequest from './sendRequest'
import sendMultipartRequest from './sendMultipartRequest'


export default {
       getMemos() {
              return sendRequest({
                     url: '/api/memos',
                     method:'get'
              })
       },
       getMemo(memoId) {
              return sendRequest({
                     url: '/api/memos/' + memoId,
                     method:'get'
              })
       },
       addMemo(data) {
              return sendMultipartRequest({
                     url: '/api/memos',
                     method: 'post',
                     data
              })
       },
       getUsers() {
              return sendRequest({
                      url: '/api/admin/users' ,
                     method:'get'
              })
       },
        getUser(userid) {
              return sendRequest({
                      url: '/api/admin/users/'+userid ,
                     method:'get'
              })
       },
       adduser(data) {
              return {
                     url: '/api/users/',
                     method: 'post',
                     data
               }
       },
       removeMemo(data) {
              return sendRequest({
                     url: '/api/memos/' + data,
                     method:'DELETE'
                     
              })
       }
}