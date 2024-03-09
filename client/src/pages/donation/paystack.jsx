import React, { useState } from "react"
import { PaystackButton } from "react-paystack"
import { Icon } from '@iconify/react';

import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    FormControl,
    FormLabel,
    Button
  } from '@chakra-ui/react'

function Payment() {
  const { isOpen, onOpen, onClose } = useDisclosure()

  const publicKey = import.meta.env.REACT_APP_PAYSTACK_PUBLIC_KEY;
  const [email, setEmail] = useState("")
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [amount, setAmount] = useState("")

  const initialRef = React.useRef(null)
  const finalRef = React.useRef(null)


    const componentProps = {
    email,
    amount,
    metadata: {
      name,
      phone,
    },
    publicKey,
    text: "Pay Now",
    onSuccess: () =>
      alert("Thanks for doing business with us! Come back soon!!"),
    onClose: () => alert("Wait! Don't leave :("),
  }

  return (
    <>
        <button onClick={onOpen}  className='bg-[#14A800] py-[4px] px-[8px] rounded-[8px] text-[#fff] flex items-center gap-[10px]'>
            <p className='text-[#fff] text-[14px] font-[600]' >Support</p>
                
            <div>
                <Icon icon="mdi:cash" />
            </div>
        </button>


      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
        size={"sm"}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader fontSize={"16px"}>Emergency aid: donate now through our app</ModalHeader>
          <ModalCloseButton />
          <ModalBody  >
            <FormControl>
              <FormLabel fontSize={"14px"}>Name</FormLabel>
              <input
                className="w-[100%] border h-[32px] outline-0 text-[12px] pl-2"
                type="text"
                id="name"
                onChange={(e) => setName(e.target.value)}
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel fontSize={"14px"}>Email</FormLabel>
              <input
                className="w-[100%] border h-[32px] outline-0 text-[12px] pl-2"
                type="email"
                id="email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel fontSize={"14px"}>Phone Number</FormLabel>
              <input
                className="w-[100%] border h-[32px] outline-0 text-[12px] pl-2"
                type="text"
                id="phone"
                onChange={(e) => setPhone(e.target.value)}
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel fontSize={"14px"}>Amount</FormLabel>
              <input
                className="w-[100%] border h-[35px] outline-0 text-[12px] pl-2"
                type="number"
                id="amount"
                onChange={(e) => setAmount(e.target.value * 100)}
              />
            </FormControl>

          </ModalBody>

          <ModalFooter>
            {/* <Button colorScheme='blue' mr={3}>
              Save
            </Button> */}
            <Button fontSize={"14px"} h={"30px"} colorScheme='whatsapp'>
                <PaystackButton {...componentProps} />
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default Payment