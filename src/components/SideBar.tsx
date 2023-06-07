import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import PermIdentityIcon from '@mui/icons-material/PermIdentity'
import { Link } from 'react-router-dom'

const SideBar = () => {
    return (
        <div className='pt-10 w-2/12 flex items-center flex-col'>
            <PermIdentityIcon fontSize="large" />
            username
            <nav aria-label="secondary mailbox folders" className='w-full'>
                <List>
                    <ListItem disablePadding>
                        <ListItemButton component={Link} to='/bundles'>
                            <ListItemText className='text-center' primary="Bundles" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton component={Link} to='/domains'>
                            <ListItemText className='text-center' primary="Domains" />
                        </ListItemButton>
                    </ListItem>
                </List>
            </nav>
        </div>
    )
}

export default SideBar