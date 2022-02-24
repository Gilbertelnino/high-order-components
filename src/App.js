import "./App.css";
import { User } from "./User";
import { Post } from "./Post";
import { withResourceData } from "./withResourceData";

const UserWithResourceData = withResourceData(
  User,
  "https://jsonplaceholder.typicode.com/users",
  "users"
);
const PostWithResourceData = withResourceData(
  Post,
  "https://jsonplaceholder.typicode.com/posts",
  "posts"
);

function App() {
  return (
    <div className="App">
      <div>
        <h1>Users</h1>
        <UserWithResourceData />
      </div>
      <div>
        <h1>Posts</h1>
        <PostWithResourceData />
      </div>
    </div>
  );
}

export default App;
