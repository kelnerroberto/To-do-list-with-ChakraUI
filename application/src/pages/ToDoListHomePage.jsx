import { Flex } from '@chakra-ui/layout';
import React from 'react';
import AddToList from '../components/main/AddToList';
import Header from '../components/main/Header';
import ListComponent from '../components/main/ListComponent';

export default function ToDoListHomePage() {
  return (
    <Flex height='100vh' alignItems='center' direction='column'>
      <Header />
      <AddToList />
      <ListComponent />
    </Flex>
  )
}