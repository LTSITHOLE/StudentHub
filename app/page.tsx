import Image from 'next/image';
export default function Home() {
  return (
    <main>
      <div className="flex flex-col items-center justify-center min-h-screen py-2">
        <h1 className="text-3xl">Sign Up</h1>
        <form className="flex flex-col space-y-4" >
          <input
            type="email"
            placeholder="Email"
            className="border p-2"
          />
          <input
            type="password"
            placeholder="Password"
            className="border p-2"
          />
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded"
           
          >
          </button>
        </form>
      </div>
    </main>
  );
}
