import '@testing-library/jest-dom';

import React from 'react';
import {
  render, screen, waitFor,
} from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import HomePage from './HomePage';
import store from '../states';
import api from '../utils/api';
import { setAuthUserActionCreator } from '../states/authUser/action';

const fakeTalksResponse = [
  {
    id: 'talk-1',
    text: 'Talk Test 1',
    user: 'user-1',
    replyTo: '',
    likes: [],
    createdAt: '2022-09-22T10:06:55.588Z',
  },
];

const fakeUsersResponse = [
  {
    id: 'user-1',
    name: 'User Test 1',
    photo: 'https://generated-image-url.jpg',
  },
];

describe('Homepage', () => {
  beforeEach(() => {
    api._getAllTalks = api.getAllTalks;
    api._getAllUsers = api.getAllUsers;
  });

  afterEach(() => {
    api.getAllTalks = api._getAllTalks;
    api.getAllUsers = api._getAllUsers;

    delete api._getAllTalks;
    delete api._getAllUsers;
  });

  it('should render correctly', async () => {
    // Arrange;
    api.getAllTalks = () => Promise.resolve(fakeTalksResponse);
    api.getAllUsers = () => Promise.resolve(fakeUsersResponse);
    await store.dispatch(setAuthUserActionCreator({ id: 'user-1' }));

    render(
      <BrowserRouter>
        <Provider store={store}>
          <HomePage />
        </Provider>
      </BrowserRouter>,
    );

    await waitFor(() => expect(screen.getByText('Talk Test')).toBeInTheDocument());
  });
});
