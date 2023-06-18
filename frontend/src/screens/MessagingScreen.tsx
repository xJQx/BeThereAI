import React from 'react';
import { Navbar } from 'components/Navbar';
import { ButtonSettings } from 'components/ButtonSettings';

const exmapleConversation = [
  {
    name: 'Alice',
    time: '11:30am',
    profile: 'assets/profile-image-user-3.jpg',
    content: {
      type: 'text',
      data: 'Hello, Bob. How are you?',
    },
  },
  {
    name: 'Bob',
    time: '11:30am',
    profile: 'assets/profile-image-elderly-2.jpg',
    content: {
      type: 'text',
      data: "I'm doing well, Alice. How about you?",
      emotion: 'happy',
    },
  },
  {
    name: 'Alice',
    time: '11:30am',
    profile: 'assets/profile-image-user-3.jpg',
    content: {
      type: 'image',
      data: 'https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_2x3.jpg',
    },
  },
  {
    name: 'Bob',
    time: '11:30am',
    profile: 'assets/profile-image-elderly-2.jpg',
    content: {
      type: 'audio',
      data: 'https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_2x3.jpg',
      emotion: 'sad',
    },
  },
  {
    name: 'Alice',
    time: '11:30am',
    profile: 'assets/profile-image-user-3.jpg',
    content: {
      type: 'text',
      data: 'Oh no... I am coming over to accompany you...',
    },
  },
];
const currentUser = 'Bob';

export const MessagingScreen = () => {
  return (
    <div className='min-h-screen brand-light-blue'>
      {/* <button onClick={handleLogOut}>log out</button> */}
      <Navbar
        img={{
          src: 'assets/profile-image-user-3.jpg',
          alt: 'profile image',
        }}
        name='Welcome, Linda!'
        icons={[<ButtonSettings key='settings' />]}
      />
      <div className='min-h-screen bg-gradient-to-b from-white to-brand-light-blue rounded-t-3xl shadow-xl shadow-brand-dark-blue flex flex-col p-4 gap-10 pb-0'>
        {exmapleConversation.map((message, i) => {
          return (
            <div
              className='flex gap-2 items-center relative'
              key={i}
              style={{
                alignSelf: message.name === currentUser ? 'start' : 'end',
              }}
            >
              {message.name === currentUser && (
                <img
                  src={message.profile}
                  className='object-cover object-center w-10 h-10 rounded-full'
                />
              )}
              {message.content.type === 'text' && (
                <div className='w-40 p-2 text-white bg-brand-blue rounded-xl my-2'>
                  {message.content.data}
                </div>
              )}
              {message.content.type === 'image' && (
                <div className='bg-brand-blue p-2 rounded-xl'>
                  <img src={message.content.data} className='w-40 rounded-xl' />
                </div>
              )}
              {message.content.type === 'audio' && (
                <div className='bg-brand-blue p-2 rounded-xl flex gap-1 items-center w-40'>
                  <img src='assets/equalizer.png' className='w-6 invert' />
                  <img src='assets/play.png' className='w-4 h-4 invert' />
                </div>
              )}
              {message.name === currentUser || (
                <img
                  src={message.profile}
                  className='object-cover object-center w-10 h-10 rounded-full'
                />
              )}
              {message.content.emotion && (
                <div className='absolute right-6 -top-6 translate-x-full flex items-center gap-1'>
                  <div className='text-5xl'>
                    {message.content.emotion === 'happy' ? '😄' : '😢'}
                  </div>
                  <div className='bg-brand-light-blue p-1 rounded-xl text-brand-blue'>
                    {message.content.emotion}
                  </div>
                </div>
              )}
              <div className='absolute -right-1 bottom-0 translate-x-full text-xs text-brand-blue'>
                {message.time}
              </div>
            </div>
          );
        })}
      </div>
      <div className='w-full h-32 bg-brand-blue rounded-t-xl flex gap-4 items-center justify-center text-brand-dark-blue pb-6 px-2 text-sm'>
        <div className='rounded-full bg-brand-light-blue w-8 h-8 text-5xl flex items-center justify-center'>
          +
        </div>
        <div className='bg-brand-light-blue rounded p-1 font-bold flex flex-col items-center'>
          View AI
        </div>
        <div className='bg-brand-light-blue rounded p-1'>
          I hope you are doing okay...
        </div>
        <div className='bg-brand-light-blue rounded-full flex items-center justify-center w-8 h-8 text-4xl'>
          {' '}
          ↑
        </div>
      </div>
    </div>
  );
};
