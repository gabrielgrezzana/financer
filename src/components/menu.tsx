import { Box, Text, Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../redux/authSlice";
import { ModalType } from "../types/menu.types";


interface MenuProps {
    onOpenModal: (e: ModalType) => void;
}

function Menu({ onOpenModal }: MenuProps) {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleOpenModal = (e: ModalType): any => {
        console.log(e);
        onOpenModal(e);
    }
    

    const handleLogout = () => {
        dispatch(logout());
        navigate('/login', { replace: true }); 
    }

    return (
        <Box __css={{
            backgroundColor: '#001144',
            width: '20vw',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',                                    
            gap: '30px',
            alignItems: 'center',            
        }}>
            <Text fontSize='2xl' fontWeight='bold' marginTop={'30px'}>Menu</Text>
            <Button width={'90%'} backgroundColor={"#ccc"} borderWidth={'1px'} borderColor={'blue'} boxShadow={'0 0 10px blue'} onClick={handleLogout}>Financer</Button>
            <Button width={'90%'} backgroundColor={"#ccc"} borderWidth={'1px'} borderColor={'blue'} boxShadow={'0 0 10px blue'} onClick={handleLogout}>MetaMask</Button>
            <Button width={'90%'} backgroundColor={"#ccc"} borderWidth={'1px'} borderColor={'blue'} boxShadow={'0 0 10px blue'} onClick={handleLogout}>History</Button>
            <Button width={'90%'} backgroundColor={"#ccc"} borderWidth={'1px'} borderColor={'blue'} boxShadow={'0 0 10px blue'} onClick={handleOpenModal(ModalType.LABEL)}>Labels</Button>
            <Button width={'90%'} backgroundColor={"#ccc"} borderWidth={'1px'} borderColor={'blue'} boxShadow={'0 0 10px blue'} onClick={handleLogout}>Sair</Button>            
        </Box>
    )
}

export default Menu;