const Users = (props) => {
  const {users, setusers} = props

  const deleteHandler = (id) => {
      const copyusers = [...users]
      const filteredusers = copyusers.filter((user) => user.id != id)
      setusers(filteredusers)
    }

  const userlist = users.map((user) => {

    return(
              <li key={user.id}
              className="relative bg-gray-800 p-4 rounded shadow flex flex-col gap-1">
          <span className="text-lg">{user.name}</span>
          <small className="text-gray-400">{user.email}</small>
          <button onClick={() => deleteHandler(user.id)}
          className="absolute top-1/2 right-2 transform -translate-y-1/2 text-sm text-red-400 hover:text-red-500 hover:underline cursor-pointer">
            Delete
          </button>
        </li> 
    )
  })
  return (
    <div className="w-[30%] bg-gray-900 text-white p-6 border-l border-gray-700 min-h-screen">
      <h2 className="text-xl font-semibold mb-4">Registered Users</h2>
      <ul className="space-y-4">
      {users.length != 0 ? (userlist) : ( <h1 className="text-red-500 font-semibold mb-4">Data not found</h1> )}
      </ul>
    </div>
  );
};

export default Users;