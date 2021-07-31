import { ProSidebar, Menu, MenuItem, SubMenu, SidebarHeader, SidebarFooter, SidebarContent } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import { FaGem, FaHeart } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Usage = () => {
    return (
        <>
            <ProSidebar className="sideb">
                <Menu iconShape="square">
                    <MenuItem icon={<FaGem />}>EXPERIMENTS</MenuItem>
                    <SubMenu title="Experiment 1" icon={<FaHeart />}>
                        <MenuItem><p><Link to="exp1" exact>Experiment 1</Link></p></MenuItem>
                        <MenuItem>Component 2</MenuItem>
                    </SubMenu>
                    <SubMenu title="Experiment 2" icon={<FaHeart />}>
                        <MenuItem><Link to="exp2" exact>Experiment 2</Link></MenuItem>
                        <MenuItem>Component 2</MenuItem>
                    </SubMenu>
                    <SubMenu title="Experiment 3" icon={<FaHeart />}>
                        <MenuItem>Component 1</MenuItem>
                        <MenuItem>Component 2</MenuItem>
                    </SubMenu>
                    <SubMenu title="Experiment 4" icon={<FaHeart />}>
                        <MenuItem>Component 1</MenuItem>
                        <MenuItem>Component 2</MenuItem>
                    </SubMenu>
                    <SubMenu title="Experiment 5" icon={<FaHeart />}>
                        <MenuItem>Component 1</MenuItem>
                        <MenuItem>Component 2</MenuItem>
                    </SubMenu>
                    <SubMenu title="Experiment 6" icon={<FaHeart />}>
                        <MenuItem>Component 1</MenuItem>
                        <MenuItem>Component 2</MenuItem>
                    </SubMenu>
                    <SubMenu title="Experiment 7" icon={<FaHeart />}>
                        <MenuItem>Component 1</MenuItem>
                        <MenuItem>Component 2</MenuItem>
                    </SubMenu>
                </Menu>


                {/* <SidebarHeader>
                    {3 + 4}
                </SidebarHeader>
                <SidebarContent>
                    {8 + 8}
                </SidebarContent>
                <SidebarFooter>
                    {7 * 9}
                </SidebarFooter> */}
            </ProSidebar>


        </>
    )
}

export default Usage;