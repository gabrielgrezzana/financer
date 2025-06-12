// components/menu.tsx
import { Box, Text, Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../redux/authSlice";
import { openModal } from "../redux/modalSlice";
import { ModalType } from "../types/menu.types";

interface MenuProps {}

// Configuração dos botões do menu para facilitar manutenção
const menuButtons = [
  {
    id: 'financer',
    label: 'Financer',
    modalType: ModalType.FINANCER,
    className: 'button'
  },
  {
    id: 'metamask',
    label: 'MetaMask',
    modalType: ModalType.METAMASK,
  },
  {
    id: 'history',
    label: 'History',
    modalType: ModalType.HISTORY,
  },
  {
    id: 'labels',
    label: 'Labels',
    modalType: ModalType.LABEL,
  }
];

function Menu({}: MenuProps) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleOpenModal = (modalType: ModalType, data?: any) => {
    dispatch(openModal({ type: modalType, data }));
  };

  const handleLogout = () => {
    dispatch(logout());
    navigate('/login', { replace: true });
  };

  return (
    <Box
      zIndex={99}
      __css={{
        backgroundColor: 'rgba(30, 8, 47, 0.9)',
        width: '20vw',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        gap: '30px',
        alignItems: 'center',
      }}
    >
      <Text fontSize="2xl" fontWeight="bold" marginTop={'30px'}>
        Menu
      </Text>
      
      {menuButtons.map((button) => (
        <Button
          key={button.id}
          className={button.className}
          width={'90%'}
          backgroundColor={"#ccc"}
          borderWidth={'1px'}
          borderColor={'purple'}
          boxShadow={'0 0 10px purple'}
          onClick={() => handleOpenModal(button.modalType)}
          _hover={{
            backgroundColor: "#ddd",
            transform: "translateY(-2px)",
            boxShadow: "0 0 15px purple"
          }}
          transition="all 0.2s"
        >
          {button.label}
        </Button>
      ))}
      
      <Button
        width={'90%'}
        backgroundColor={"#ff6b6b"}
        borderWidth={'1px'}
        borderColor={'red'}
        boxShadow={'0 0 10px red'}
        color="white"
        onClick={handleLogout}
        _hover={{
          backgroundColor: "#ff5252",
          transform: "translateY(-2px)",
          boxShadow: "0 0 15px red"
        }}
        transition="all 0.2s"
      >
        Sair
      </Button>
    </Box>
  );
}

export default Menu;