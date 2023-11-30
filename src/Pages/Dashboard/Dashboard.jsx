
import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';
import { Link } from 'react-router-dom';
import { IoPeople } from 'react-icons/io5';
import { IoIosHome } from 'react-icons/io';
import { HiOutlineCurrencyDollar } from 'react-icons/hi2';
import { FcSurvey } from 'react-icons/fc';
import { IoCreateOutline } from "react-icons/io5";
import { MdOutlineContactSupport } from "react-icons/md";
import { MdPaid } from "react-icons/md";
import AllUsers from './AllUsers/AllUsers';
import useAdmin from '../../hooks/useAdmin';
import useUser from '../../Hooks/useUser';
import useProUser from '../../Hooks/useProUser';
import useSurveyor from '../../Hooks/useSurveyor';
import CreateSurveys from '../Surveys/CreateSurveys';


const Dashboard = () => {
    const [isAdmin] = useAdmin();
    const [isUser] = useUser();
    const [isProUser] = useProUser();
    const [isSurveyor] = useSurveyor();

    return (
        <div className="mx-24 pt-32 mb-10 md:flex lg:flex gap-20 justify-center">
            <div className="pt-32">
                <Sidebar>
                    <Menu
                        menuItemStyles={{
                            button: {
                                [`&.active`]: {
                                    backgroundColor: '#13395e',
                                    color: '#b6c8d9',
                                },
                            },
                        }}
                    >
                        {isAdmin && (
                            <>
                                <MenuItem component={<Link to="/dashboard" />}>
                                    <div className="flex items-center gap-2">
                                        <IoPeople />
                                        All Users
                                    </div>
                                </MenuItem>
                                <MenuItem component={<Link to="/" />}>
                                    <div className="flex items-center gap-2">
                                        <HiOutlineCurrencyDollar />
                                        Payment History
                                    </div>
                                </MenuItem>
                            </>
                        )}

                        {isUser && (
                            <MenuItem component={<Link to="/user-dashboard" />}>
                                <div className="flex items-center gap-2">
                                    <IoIosHome />
                                    User Dashboard
                                </div>
                            </MenuItem>
                        )}

                        {isProUser && (
                            <MenuItem component={<Link to="/pro-user-dashboard" />}>
                                <div className="flex items-center gap-2">
                                    <HiOutlineCurrencyDollar />
                                    ProUser Dashboard
                                </div>
                            </MenuItem>
                        )}

                        {isSurveyor && (
                            <div>
                                <MenuItem component={<Link to="/dashboard" />}>
                                    <div className="flex items-center gap-2">
                                        <IoCreateOutline />
                                        Create Survey
                                    </div>
                                </MenuItem>
                                <MenuItem component={<Link to="/proUser" />}>
                                    <div className="flex items-center gap-2">
                                        <MdPaid></MdPaid>
                                        Upgrade to Pro
                                    </div>
                                </MenuItem>
                            </div>
                        )}

                        <div className="divider divider-info mx-5 opacity-30"></div>
                        <MenuItem component={<Link to="/" />}>
                            <div className="flex items-center gap-2">
                                <IoIosHome />
                                Home
                            </div>
                        </MenuItem>
                        <MenuItem component={<Link to="/surveys" />}>
                            <div className="flex items-center gap-2">
                                <FcSurvey />
                                Surveys
                            </div>
                        </MenuItem>
                        <MenuItem component={<Link to=""/>}>
                            <div className="flex items-center gap-2">
                                <MdOutlineContactSupport />
                                Contact Us
                            </div>
                        </MenuItem>
                    </Menu>
                </Sidebar>
            </div>
            <div>
                {isAdmin && <AllUsers></AllUsers>}
                {isSurveyor && <CreateSurveys></CreateSurveys>}
            </div>
        </div>
    );
};

export default Dashboard;
