export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100 p-4">
      {/* Profile Card */}
      <div className="w-full max-w-sm bg-white rounded-2xl shadow-md overflow-hidden text-center">
        {/* Top Banner */}
        <div className="h-24 bg-gray-500" />

        <div className="px-6 pb-6">
          {/* Avatar Image */}
          <img
            src="https://i.pinimg.com/originals/31/ee/8c/31ee8cf175d26d71d01e471bdad33af9.jpg"
            alt="Jireh Mae Tumala"
            className="w-24 h-24 rounded-full mx-auto -mt-12 mb-4 object-cover border-4 border-white shadow"
          />

          {/* Name and Title */}
          <h1 className="text-xl font-bold text-slate-800">Jireh Mae Tumala</h1>
          <p className="text-sm text-indigo-600 font-medium mb-3">
            BS Information Technology Student
          </p>

          {/* Description */}
          <p className="text-slate-600 text-sm mb-5">
            Hello! I am a student who enjoys learning about technology and web
            development.
          </p>

          {/* Skills */}
          <div className="flex justify-center gap-2 mb-6">
            <span className="text-xs bg-slate-100 text-slate-700 px-2.5 py-1 rounded-md">
              Web Dev
            </span>
            <span className="text-xs bg-slate-100 text-slate-700 px-2.5 py-1 rounded-md">
              UI/UX
            </span>
            <span className="text-xs bg-slate-100 text-slate-700 px-2.5 py-1 rounded-md">
              React
            </span>
          </div>

          {/* Action Button */}
          <button className="w-full bg-gray-400 text-white text-sm font-medium py-2.5 px-4 rounded-xl hover:bg-indigo-500 transition">
            View Profile
          </button>
        </div>
      </div>
    </div>
  );
}
