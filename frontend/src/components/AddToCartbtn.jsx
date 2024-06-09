import React from 'react';
import {
    AlertDialog,
    AlertDialogBody,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogContent,
    AlertDialogOverlay,
    Button,
    useDisclosure
} from '@chakra-ui/react';
import { useCart } from '../context/CartContext'

function AddToCartBtn({ product, btnText }) {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const cancelRef = React.useRef();
    const { addToCart } = useCart();

    const handleAddToCart = () => {
        addToCart(product);
        onClose();
    };

    return (
        <>
            <Button colorScheme='blue' onClick={onOpen}>
                {btnText}
            </Button>

            <AlertDialog
                isOpen={isOpen}
                leastDestructiveRef={cancelRef}
                onClose={onClose}
            >
                <AlertDialogOverlay>
                    <AlertDialogContent>
                        <AlertDialogHeader fontSize='lg' fontWeight='bold'>
                            {btnText}
                        </AlertDialogHeader>

                        <AlertDialogBody>
                            Item added to cart!
                        </AlertDialogBody>

                        <AlertDialogFooter>
                            <Button ref={cancelRef} onClick={onClose}>
                                OK
                            </Button>
                            <Button colorScheme='blue' onClick={handleAddToCart} ml={3}>
                                Add
                            </Button>
                        </AlertDialogFooter>
                    </AlertDialogContent>
                </AlertDialogOverlay>
            </AlertDialog>
        </>
    );
}

export { AddToCartBtn };
