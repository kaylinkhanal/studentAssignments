export default function UserList() {
  const users = [
    {
      userId: "1",
      username: "JohnDoe",
      profilePicture: "/placeholder.svg?height=40&width=40",
      status: "online",
      lastSeen: "2024-10-27T10:00:00Z",
    },
    {
      userId: "2",
      username: "JaneSmith",
      profilePicture: "/placeholder.svg?height=40&width=40",
      status: "offline",
      lastSeen: "2024-10-26T18:30:00Z",
    },
    {
      userId: "3",
      username: "PeterJones",
      profilePicture: "/placeholder.svg?height=40&width=40",
      status: "online",
      lastSeen: "2024-10-27T10:15:00Z",
    },
    {
      userId: "4",
      username: "AliceJohnson",
      profilePicture: "/placeholder.svg?height=40&width=40",
      status: "away",
      lastSeen: "2024-10-27T09:45:00Z",
    },
    {
      userId: "5",
      username: "BobWilliams",
      profilePicture: "/placeholder.svg?height=40&width=40",
      status: "offline",
      lastSeen: "2024-10-25T12:00:00Z",
    },
  ]

  return (
    (<div className="w-[300px] border-r h-screen bg-background">
      <div className="p-4 border-b">
        <h2 className="font-semibold">Users</h2>
      </div>
      <div className="overflow-auto h-[calc(100vh-65px)]">
        {users.map((user) => (
          <button
            key={user.userId}
            className="flex items-center gap-3 w-full p-3 hover:bg-muted/50 transition-colors border-b">
            <div className="relative flex-shrink-0">
              <img
                src={user.profilePicture || "/placeholder.svg"}
                alt={user.username}
                className="h-10 w-10 rounded-full object-cover" />
              <span
                className={`absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-background ${
                  user.status === "online" ? "bg-green-500" : user.status === "away" ? "bg-yellow-500" : "bg-gray-500"
                }`} />
            </div>
            <div className="flex-1 min-w-0 text-left">
              <div className="font-medium truncate">{user.username}</div>
              <div className="text-xs text-muted-foreground truncate">
                {user.status === "online" ? "Online" : "Last seen 3 months ago"}
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>)
  );
}

