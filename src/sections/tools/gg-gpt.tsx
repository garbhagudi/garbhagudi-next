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
        className='fixed bottom-3 left-4  rounded-full flex items-center justify-center cursor-pointer shadow-xl drop-shadow-xl bg-white dark:bg-gray-800 dark:border border-gray-600'
        onClick={() => setShowChatbot(!showChatbot)}
      >
        <Image
          src='https://res.cloudinary.com/garbhagudiivf/image/upload/v1643459544/Icons/Contact/GG_Care_e7e1pc.svg'
          alt='GG Care Bot'
          className='w-12 h-12 rounded-full'
          width={24}
          height={24}
        />
        {showChatbot ? (
          ' '
        ) : (
          <div className='px-3 text-xs font-content font-semibold bg'>
            Hello! <br />
            Try our New AI Powered assistant.
          </div>
        )}
      </div>
      {/* Chatbot Interface */}
      {showChatbot && (
        <div className='fixed bottom-2 left-4 bg-white border rounded-lg shadow-lg p-4 w-64 z-50'>
          <div className='flex flex-col items-start justify-start mb-2'>
            <div className='flex space-x-1 py-2'>
              <div className='w-4 h-4 bg-green-500 rounded-full mr-2'></div>
              <p className='text-sm font-medium text-gray-800'>GG Care Bot</p>
            </div>
            <p className='text-sm font-normal text-gray-900'>
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
              className='w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring focus:ring-brandPink4 focus:border-brandPink4'
            />
          </div>
          <div className='flex items-center justify-start space-x-2'>
            <button
              onClick={handleSubmit}
              className='bg-brandPink3 text-white px-2 py-1 rounded-md hover:bg-brandPink focus:outline-none focus:ring focus:ring-brandPink4 focus:border-brandPink4'
            >
              Submit
            </button>
            <button
              onClick={() => setShowChatbot(false)}
              className='bg-brandPink3 text-white px-2 py-1 rounded-md hover:bg-brandPink focus:outline-none focus:ring focus:ring-brandPink4 focus:border-brandPink4'
            >
              Close
            </button>
          </div>
          <div className='mt-4'>
            <p className='text-gray-600 text-sm'>GG Care Bot: </p>
            <p className='bg-gray-100 rounded-md px-3 py-2 mt-2 text-gray-800'>
              {chatResponse}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatComponent;
