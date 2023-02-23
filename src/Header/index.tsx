const Index = ({ showPostList,back }: any) => {
  return (
    <ul>
      {showPostList && 
      <li>
        <span className="prev" onClick={e=>back()}>
          &#8249;
        </span>
      </li>}
      <li>
       
        <span className="active" >
          {showPostList ? "Post List" : "Users List"}
        </span>
      </li>
    </ul>
  );
};
export default Index;
