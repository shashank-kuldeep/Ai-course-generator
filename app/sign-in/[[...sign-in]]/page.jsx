import { SignIn } from '@clerk/nextjs'

export default function Page() {
  return (
    <div className="flex h-screen w-full">
      {/* Left half - Image */}
      <div className="w-1/2 h-full">
        <img
          src="/fuckai.png"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>
      {/* Right half - SignIn */}
      <div className="w-1/2 flex items-center justify-center">
        <SignIn />
      </div>
    </div>
  );
}
