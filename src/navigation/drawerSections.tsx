import React from 'react';
import {Routes} from '../config/constants';

import ProfileIcon from '../assets/profile.svg';
import HeartIcon from '../assets/heart.svg';
import CartIcon from '../assets/cart.svg';
import FilledCartIcon from '../assets/filledCart.svg';
import EnvelopeIcon from '../assets/envelope.svg';
import PhoneIcon from '../assets/phone.svg';
import ShareIcon from '../assets/share.svg';
import HomeIcon from '../assets/home.svg';

export interface DrawerSectionsType {
  title?: string;
  items: Array<{
    label: string;
    icon: JSX.Element;
    route: Routes;
  }>;
}

export const drawerSections: DrawerSectionsType[] = [
  {
    title: 'My Account',
    items: [
      {
        label: 'Home',
        icon: <HomeIcon />,
        route: Routes.Main,
      },
      {
        label: 'My Profile',
        icon: <ProfileIcon />,
        route: Routes.Profile,
      },
      {
        label: 'My Wish List',
        icon: <HeartIcon />,
        route: Routes.Profile,
      },
      {
        label: 'My Cart',
        icon: <CartIcon />,
        route: Routes.CartNavigator,
      },
      {
        label: 'My Orders',
        icon: <FilledCartIcon />,
        route: Routes.Profile,
      },
    ],
  },
  {
    title: 'Support',
    items: [
      {
        label: 'Email',
        icon: <EnvelopeIcon />,
        route: Routes.Profile,
      },
      {
        label: 'Call',
        icon: <PhoneIcon />,
        route: Routes.Profile,
      },
    ],
  },
  {
    items: [
      {
        label: 'Share',
        icon: <ShareIcon />,
        route: Routes.Profile,
      },
    ],
  },
];
