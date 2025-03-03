import Profile from "./components/Profile";

function App() {
  return (
    <div className="app">
      <Profile
        avatar="https://media.licdn.com/dms/image/v2/D4D03AQG1kU88dLdnlg/profile-displayphoto-shrink_200_200/B4DZVKfJ31HIAY-/0/1740711436824?e=1746662400&v=beta&t=pW0mgNVHhDAm9lm1hcs30p9agxIMpstjACvtyt9UFvQ"
        name="Lucas Felipe"
        bio="Full-stack javascript developer at Acme Inc."
        phone="+5514991818571"
        email="lukaofelps@gmail.com"
        githubUrl="https://github.com/devlucasfelipe"
        linkedInUrl="https://www.linkedin.com/in/devlucasfelipe/"
        xUrl="https://x.com/elonmusk"
      />
    </div>
  );
}

export default App;
