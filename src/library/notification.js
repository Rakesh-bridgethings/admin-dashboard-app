import React, { useEffect, Fragment } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Notification(props) {
    useEffect(() => {
        async function fetchData() {
            // console.log("msg::", props.msg);
            props.page && props.page !== '' && props.status === 'error' && toast.error(props.msg);
            props.status === 'success' && toast.success(props.msg);
            props.status === 'error' && !props.page && toast.error('There is Something Wrong! Please try again...');
        }
        fetchData();
    }, []);

    return (
        <Fragment>
            <ToastContainer
                position="top-right"
                autoClose={7000}
                newestOnTop={false}
                closeOnClick={true}
                hideProgressBar={false}
                // rtl={false}
                //transition= "bounce" //zoom, silde, bounce, flip
                pauseOnVisibilityChange={false}
                draggable={false}
            // pauseOnHover
            />
        </Fragment>
    )
}

export default Notification;






































