import Directory from "./components/directory/directory.component";

const App = () => {
  // Images from unsplash
  const categories = [
    {
      id: 1,
      title: "Hats",
      imageUrl:
        "https://images.unsplash.com/photo-1638513848528-fe762cee75b2?q=80&w=2013&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 2,
      title: "Clothes",
      imageUrl:
        "https://images.unsplash.com/photo-1633933061665-bdd0f626e59c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 3,
      title: "Toys",
      imageUrl:
        "https://images.unsplash.com/photo-1585837575652-267c041d77d4?q=80&w=2095&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 4,
      title: "Treats",
      imageUrl:
        "https://images.unsplash.com/photo-1577349516274-37ff88a53627?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 5,
      title: "Health",
      imageUrl:
        "https://images.unsplash.com/photo-1605039904153-27a13c3035d0?q=80&w=2060&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  return <Directory categories={categories} />;
};

export default App;
