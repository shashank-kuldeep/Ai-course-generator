import React from 'react'

function Hero() {
  return (
<section className="bg-white lg:grid lg:h-screen lg:place-content-center">
  <div className="mx-auto w-screen max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
    <div className="mx-auto max-w-prose text-center">
      <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
        Ai-course-generator
        <strong className="text-purple-600"> increase </strong>
        your learning potential with AI
      </h1>

      <p className="mt-4 text-base text-pretty text-gray-700 sm:text-lg/relaxed">
        Prepare yourself for a better future with our AI-powered course generator.
      </p>

      <div className="mt-4 flex justify-center gap-4 sm:mt-6">
        <a className="inline-block rounded border border-purple-600 bg-purple-600 px-5 py-3 font-medium text-white shadow-sm transition-colors hover:bg-indigo-700" href="#">
          Get Started
        </a>

      </div>
    </div>
  </div>
</section>
  )
}

export default Hero
