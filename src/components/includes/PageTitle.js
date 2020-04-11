import React, { useRef, Fragment, useState, useEffect } from 'react';
import cx from 'classnames';
import { toast, Slide } from 'react-toastify';
import { UncontrolledDropdown, DropdownToggle, DropdownMenu, Nav, NavItem, NavLink, Button, UncontrolledTooltip } from 'reactstrap';
import ThemeOptionSerivce from '../../services/ThemeOption'

function PageTitle(props) {
    const [themeoption, setthemeoption] = useState({});


    // const toggle = (name) => {
    //     // setState({
    //     //     [name]: !state[name],
    //     //     progress: 0.5,
    //     // })
    // }

    const notify22 = () => {
        toast("Another toastify example!!!", {
            transition: Slide,
            closeButton: true,
            autoClose: 5000,
            position: 'bottom-center',
            type: 'success'
        });
    }

    // let {
    //     enablePageTitleIcon,
    //     enablePageTitleSubheading,
    //     heading,
    //     icon,
    //     subheading
    // } = props.data && props.data.ThemeOptions;

    useEffect(() => {
        setthemeoption(ThemeOptionSerivce);
    }, []);


    return (
        <div className="app-page-title">
            <div className="page-title-wrapper">
                <div className="page-title-heading">
                    <div
                        className={cx("page-title-icon", { 'd-none': !themeoption.enablePageTitleIcon })}>
                        <i className={props.icon} />
                    </div>
                    <div>
                        {props.heading}
                        <div
                            className={cx("page-title-subheading", { 'd-none': !themeoption.enablePageTitleSubheading })}>
                            {props.subheading}
                        </div>
                    </div>
                </div>
                <div className="page-title-actions">
                    <Button className="btn-shadow mr-3" onClick={() => notify22()} color="dark" id="Tooltip-123">
                        {/* <FontAwesomeIcon icon={faStar}/>  */}
                        <i className='pe-7s-refresh-2' /> Refresh
                        </Button>
                    {/* <UncontrolledTooltip placement="left" target={'Tooltip-123'}>
                            Show a Toastify notification example!
                            </UncontrolledTooltip> */}
                    <label>25 Dec 2019 to 24 Jan 2020</label>
                </div>
            </div>
        </div>
    );
}


export default PageTitle;


