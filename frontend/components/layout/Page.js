import React from 'react'

const Page = ({children}) => {
  return (
    <div className="flex h-[80vh] w-full items-center justify-center">
      {children}
    </div>
  );
}

export default Page
