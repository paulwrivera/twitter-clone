import { signIn } from 'next-auth/react';
import React from 'react';
import Image from 'next/image';

function Login({ providers }) {
  return (
    <div className="flex flex-col items-center space-y-20 pt-48">
      <Image
        src="https://rb.gy/ogau5a"
        width={150}
        height={150}
        objectFit="contain"
      />
      <div>
        {Object.values(providers).map((provider) => (
          <div key={provider.name}>
            <a
              href="#_"
              class="relative inline-flex items-center justify-center px-6 py-3 text-lg font-medium tracking-tighter text-white bg-gray-800 rounded-md group"
              onClick={() =>
                signIn(provider.id, {
                  callbackUrl: '/',
                })
              }
            >
              <span class="absolute inset-0 w-full h-full mt-1 ml-1 transition-all duration-300 ease-in-out bg-purple-600 rounded-md group-hover:mt-0 group-hover:ml-0"></span>
              <span class="absolute inset-0 w-full h-full bg-white rounded-md "></span>
              <span class="absolute inset-0 w-full h-full transition-all duration-200 ease-in-out delay-100 bg-purple-600 rounded-md opacity-0 group-hover:opacity-100 "></span>
              <span class="relative text-purple-600 transition-colors duration-200 ease-in-out delay-100 group-hover:text-white">
                Sign in with {provider.name}
              </span>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Login;
