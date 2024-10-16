import React from 'react'
import YouTube from 'react-youtube';
import ReactMarkdown from 'react-markdown'

const opts  = {
    height: '390',
    width: '640',
    playerVars: {
      autoplay: 0,
    },
  };
function ChapterContent({chapter,content}) {
  return (
    <div className='p-10'>
       <h2 className='font-bold text-2xl'>{chapter?.name}</h2>
       <p className='text-gray-500'>{chapter?.about}</p>
       {/* video */}
       <div className='flex justify-center my-6'>
        {content?.videoId ? (<YouTube
       videoId={content?.videoId}
        opts = {opts}
       />): (chapter?.name ? '' : 'Please click chapter name to show details')}
       </div> 
       {/* content */}
       <div >
        {content?.content?.map((item,index)=>(
          <div className='p-5 bg-sky-50 mb-3 rounded-lg'>
            <h2 className='font-bold text-lg'>{item?.title}</h2>
            {/* <p className='whitespace-pre-wrap'>{item?.explanation}</p> */}
            <ReactMarkdown>{item?.explanation}</ReactMarkdown>
            {item?.codeExample && (
            <div className='p-4 bg-black text-white rounded-md mt-3'>
            <pre>
              <code>
              {/* {item?.codeExample}  */}
              {item.codeExample.replace(/<precode>|<\/precode>/g, '')}
              </code>
            </pre>
            </div>)}
          </div>
        ))}
       </div>

    </div>
  )
}

export default ChapterContent