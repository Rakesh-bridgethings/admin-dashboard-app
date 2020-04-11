import axios from 'axios';
import { SERVER_URL, HEADER } from '../config/config';

class sideNavSerivce {
   static fetchtopUseritemdata() {
      return axios
         .get(`${SERVER_URL}user_info`, { headers: HEADER })
         .then(res => {
            // console.log("res.data::::", res.data);
            localStorage.setItem('BTDashoarduser_email', res.data.email);
            return res.data;
         })
         .catch(err => {
            return err;
         });
   }

   static logout() {
      return axios
         .delete(`${SERVER_URL}logout`, { headers: HEADER })
         .then(res => {
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
               const alldata = {
                  status: status,
                  data: res.data,
                  page: 'logout'
               }
               return alldata;
            }
         })
         .catch(err => {
            return err;
         });
   }

   static fetchLoginDetails(logindata) {
      return axios
         .post(`${SERVER_URL}login`, logindata, { headers: HEADER })
         .then(res => {
            var status = '';
            if (res.status === 200 && res.data !== '') {
               status = 'success';
            }
            if (res.status === 200 && res.data === '') {
               status = 'error';
            }
            if (status === 'success') {
               localStorage.setItem('BTDashoardauthToken', res.data.token);
            }
            const alldata = {
               status: status,
               data: res.data
            }
            return alldata;
         })
         .catch(err => {
            return err;
         });
   }

   static fetchResetDetails(email) {
      return axios
         .post(`${SERVER_URL}send_password_link?email=${email}`, { headers: HEADER })
         .then(res => {
            return res.data;
         })
         .catch(err => {
            return err;
         });
   }
}

export default sideNavSerivce;
