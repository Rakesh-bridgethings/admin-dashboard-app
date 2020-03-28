import { combineReducers } from "redux";
import SideNavItem from './SideNavItem';
import ThemeOptions from './ThemeOptions';
import Status from './status';

const rootReducers = combineReducers({ 
    SideNavItem,
    ThemeOptions,
    Status,
  });

export default rootReducers;

