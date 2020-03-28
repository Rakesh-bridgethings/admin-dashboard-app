import { fetch_topUseritem_success, login_user, reset_password } from '../actions/sidenavitem';
import { data_post_status } from '../actions/sidenavitem';
import axios from 'axios';
import { SERVER_URL, HEADER } from '../config/config';
import statusMessage from './status';

export function fetchtopUseritemdata() {
   return dispatch => new Promise(async (resolve, reject) => {
      await statusMessage(dispatch, 'loading', true);
      try {
         axios.get(`${SERVER_URL}user_info`, { headers: HEADER })
            .then(async (res) => {
               statusMessage(dispatch, "loading", false);
               localStorage.setItem('BTDashoarduser_email', res.data.email);
               resolve(
                  dispatch(fetch_topUseritem_success(res.data.menus[0]))
               );
            });
      } catch (error) {
         reject(error);
      }
   }).catch(async (err) => { await statusMessage(dispatch, 'error', err); throw err; });
}

export function logout() {
   return dispatch => new Promise(async (resolve, reject) => {
      await statusMessage(dispatch, 'loading', true);
      try {
         axios.delete(`${SERVER_URL}logout`, { headers: HEADER }).then(async (res) => {
            if (res.data) {
               localStorage.setItem('BTDashoardauthToken', '');
               localStorage.setItem('BTDashoarduser_email', '');
               var status = '';
               if (res.status === 200 && res.data !== '') {
                  status = 'success';
               }
               if (res.status === 200 && res.data === '') {
                  status = 'error';
               }
               resolve(
                  dispatch(data_post_status(status, res.data, 'logout'))
               );
            }
         }).catch(error => {
            statusMessage(dispatch, 'error', error);
            reject(error);
            resolve(
               dispatch(data_post_status('error', error, 'logout'))
            );
         });
      } catch (error) {
         reject(error);
      }
   }).catch(async (err) => { await statusMessage(dispatch, 'error', err); throw err; });
}

export function fetchLoginDetails(logindata) {
   return dispatch => new Promise(async (resolve, reject) => {
      await statusMessage(dispatch, 'loading', true);
      try {
         axios.post(`${SERVER_URL}login`, logindata, { headers: HEADER }).then(async (res) => {
            statusMessage(dispatch, "loading", false);
            var status = '';
            if (res.status === 200 && res.data !== '') {
               status = 'success';
            }
            if (res.status === 200 && res.data === '') {
               status = 'error';
            }
            if(status === 'success') {
               localStorage.setItem('BTDashoardauthToken', res.data.token);
            }
            resolve(
               dispatch(login_user(status, res.data))
            );
         }).catch(error => {
            statusMessage(dispatch, 'error', error);
            resolve(
               dispatch(login_user('error', error))
            );
            reject(error);
         });
      } catch (error) {
         resolve(
            dispatch(login_user('error', error))
         );
         reject(error);         
      }
   }).catch(async (err) => {
      await statusMessage(dispatch, 'error', err);
      throw err;
   });
}

export function fetchResetDetails(email) {
   return dispatch => new Promise(async (resolve, reject) => {
      await statusMessage(dispatch, 'loading', true);
      try {
         axios.get(`${SERVER_URL}send_password_link?email=${email}`, { headers: HEADER })
            .then(async (res) => {
               statusMessage(dispatch, "loading", false);
               resolve(
                  dispatch(reset_password(res.data))
               );
            });
      } catch (error) {
         reject(error);
      }
   }).catch(async (err) => { await statusMessage(dispatch, 'error', err); throw err; });
}
