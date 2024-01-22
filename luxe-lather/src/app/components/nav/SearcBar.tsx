"use client"

const SearcBar = () => {

  return (
    <div className="flex items-center">
      <input 
        autoComplete="off"
        type="text"
        placeholder="Search"
        className="p-2 border border-gray-300 rounded-l-md focus:outline-none focus:border-[0.5px] focus:border-slate-500"
      />
      <button className="bg-slate-700 p-2 hover:opacity-80 text-white rounded-r-md"> Search </button>
    </div>
  )
}

export default SearcBar
