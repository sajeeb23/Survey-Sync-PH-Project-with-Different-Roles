
import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';
import { Link } from 'react-router-dom';
import { IoPeople } from 'react-icons/io5';
import { IoIosHome } from 'react-icons/io';
import { IoCreateOutline } from "react-icons/io5";
import { MdOutlineContactSupport } from "react-icons/md";
import AllUsers from './AllUsers/AllUsers';
import useAdmin from '../../hooks/useAdmin';
import useStudent from '../../Hooks/useStudent';
import StudentDashboard from './StudentDashboard';
import { MdNotificationsActive } from "react-icons/md";
import { IoImagesSharp } from "react-icons/io5";


const Dashboard = () => {
    const [isAdmin] = useAdmin();
    const [isStudent] = useStudent();
    
    return (
        <div className="mx-24 pt-32 mb-10 md:flex lg:flex gap-20 justify-center">
            <div className="pt-32">
                
            <Sidebar className='fixed top-0 left-0 h-full'>
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
                                        Admin Dashboard
                                    </div>
                                </MenuItem>
                                <MenuItem component={<Link to="/createsurvey" />}>
                                    <div className="flex items-center gap-2">
                                        <IoCreateOutline />
                                        Create Notice
                                    </div>
                                </MenuItem>
                            </>
                            
                        )}

                        {isStudent && !isAdmin && (
                            <>
                            <MenuItem component={<Link to="/dashboard" />}>
                                <div className="flex items-center gap-2">
                                    <IoIosHome />
                                    Student Dashboard
                                </div>
                            </MenuItem>
                            <MenuItem component={<Link to="/surveys" />}>
                                <div className="flex items-center gap-2">
                                    <MdNotificationsActive/>
                                    All Notices
                                </div>
                            </MenuItem>

                            </>
                            
                        )}


                        <div className="divider divider-info mx-5 opacity-30"></div>
                        <MenuItem component={<Link to="/" />}>
                            <div className="flex items-center gap-2">
                                <IoIosHome />
                                Home
                            </div>
                        </MenuItem>
                        <MenuItem component={<Link to="/gallery" />}>
                            <div className="flex items-center gap-2">
                                <IoImagesSharp></IoImagesSharp>
                                Gallery
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
                {isStudent && !isAdmin && <StudentDashboard></StudentDashboard>}
                
            </div>
        </div>
    );
};

export default Dashboard;
