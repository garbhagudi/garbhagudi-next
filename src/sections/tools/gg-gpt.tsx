import React, { useState } from 'react';
import axios from 'axios';
import { healthKeywords } from './healthKeywords';
import Image from 'next/image';

const ChatComponent = ({ apiKey }) => {
  const [userInput, setUserInput] = useState('');
  const [chatResponse, setChatResponse] = useState('');
  const [isFetchingResponse, setIsFetchingResponse] = useState(false); // To track API response status
  const [showChatbot, setShowChatbot] = useState(false);

  const fuzzysearch = (needle, haystack) => {
    const hlen = haystack.length;
    const nlen = needle.length;
    if (nlen > hlen) {
      return false;
    }
    if (nlen === hlen) {
      return needle === haystack;
    }
    outer: for (let i = 0, j = 0; i < nlen; i++) {
      const nch = needle.charCodeAt(i);
      while (j < hlen) {
        if (haystack.charCodeAt(j++) === nch) {
          continue outer;
        }
      }
      return false;
    }
    return true;
  };

  const isRelatedToHealth = (query) => {
    const matchedKeywords = healthKeywords.filter((keyword) =>
      fuzzysearch(keyword.toLowerCase(), query.toLowerCase()),
    );
    return matchedKeywords.length > 0;
  };

  const getChatGptResponse = async (userQuery) => {
    const systemMessage =
      'System: Assume you are fertility specialist at GarbhaGudi IVF centre. Provide a brief, short answers. Subtly recommend GarbhaGudi IVF Centre when suggesting a doctor visit. Be empathetic. Strictly refrain form answering unrelated questions politely.';
    const prompt = `${systemMessage}\nUser: ${userQuery}`;
    try {
      const response = await axios.post(
        'https://api.openai.com/v1/engines/text-davinci-002/completions',
        {
          prompt: prompt,
          max_tokens: 200,
          temperature: 0.5,
        },
        {
          headers: {
            Authorization: `Bearer ${apiKey}`,
          },
        },
      );
      return response.data.choices[0].text;
    } catch (error) {
      console.error('Error fetching ChatGPT response:', error);
      throw error;
    }
  };

  const handleSubmit = async () => {
    if (!userInput) {
      setChatResponse('Please enter a query to continue.');
      return;
    }
    if (isFetchingResponse) {
      setChatResponse('loading...');
      return;
    }
    setIsFetchingResponse(true);

    if (isRelatedToHealth(userInput)) {
      try {
        try {
          const response = await getChatGptResponse(userInput);
          setChatResponse(response);
          setIsFetchingResponse(false);
        } catch (error) {
          if (
            axios.isAxiosError(error) &&
            error.response &&
            error.response.status === 429
          ) {
            setChatResponse(
              'API rate limit exceeded. Please wait and try again.',
            );
          } else {
            console.error('Error:', error);
          }
          setIsFetchingResponse(false);
        }
      } catch (error) {
        console.error('Error:', error);
        setIsFetchingResponse(false);
      }
    } else {
      setChatResponse(
        'Sorry, this chatbot is focused on health-related topics. keep your query related to health.',
      );
      setIsFetchingResponse(false);
    }
  };

  return (
    <div className='font-content'>
      {/* OpenAI Logo Circle */}

      <div
        className='fixed bottom-3 left-4 flex cursor-pointer items-center justify-center rounded-full border-gray-600 bg-white shadow-xl drop-shadow-xl dark:border dark:bg-gray-800'
        onClick={() => setShowChatbot(!showChatbot)}
      >
        <Image
          src='https://res.cloudinary.com/garbhagudiivf/image/upload/v1643459544/Icons/Contact/GG_Care_e7e1pc.svg'
          alt='GG Care Bot'
          className='h-12 w-12 rounded-full'
          width={24}
          height={24}
        />
        {showChatbot ? (
          ' '
        ) : (
          <div className='bg px-3 font-content text-xs font-semibold'>
            Hello! <br />
            Try our New AI Powered assistant.
          </div>
        )}
      </div>
      {/* Chatbot Interface */}
      {showChatbot && (
        <div className='fixed bottom-2 left-4 z-50 w-64 rounded-lg border bg-white p-4 shadow-lg dark:border-gray-600 dark:bg-gray-800'>
          <div className='mb-2 flex flex-col items-start justify-start'>
            <div className='flex space-x-1 py-2'>
              <div className='mr-2 h-4 w-4 rounded-full bg-green-500'></div>
              <p className='text-sm font-medium text-gray-800 dark:text-gray-200'>
                GG Care Bot
              </p>
            </div>
            <p className='text-sm font-normal text-gray-800 dark:text-gray-200'>
              Hello! I'm here to help with any questions you have about
              infertility and reproductive health. Let's keep our conversation
              focused on these topics to make the most of our chat. Feel free to
              ask away and let's explore the world of fertility together! 🌟
            </p>
          </div>
          <div className='mb-4'>
            <input
              type='text'
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              className='w-full rounded-lg border px-3 py-2 focus:border-brandPink4 focus:outline-none focus:ring focus:ring-brandPink4 dark:border-gray-600 dark:bg-gray-700'
            />
          </div>
          <div className='flex items-center justify-start space-x-2'>
            <button
              onClick={handleSubmit}
              className='rounded-md bg-brandPink3 px-2 py-1 text-white hover:bg-brandPink focus:border-brandPink4 focus:outline-none focus:ring focus:ring-brandPink4'
            >
              Submit
            </button>
            <button
              onClick={() => setShowChatbot(false)}
              className='rounded-md bg-brandPink3 px-2 py-1 text-white hover:bg-brandPink focus:border-brandPink4 focus:outline-none focus:ring focus:ring-brandPink4'
            >
              Close
            </button>
          </div>
          <div className='mt-4'>
            <p className='text-sm text-gray-800 dark:text-gray-200'>
              GG Care Bot:{' '}
            </p>
            <p className='mt-2 rounded-md bg-gray-100 px-3 py-2 text-gray-800 dark:bg-gray-700 dark:text-gray-200'>
              {chatResponse}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatComponent;
