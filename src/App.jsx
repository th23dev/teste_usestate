import Perfil from "./Perfil"

function App() {
  return (
    <>
      <Perfil 
      url="https://preview.redd.it/yall-want-some-profile-pictures-v0-f6dsujppx9ze1.jpg?width=640&crop=smart&auto=webp&s=24f135e791451032264ecac063ed6787388e73b2" 
      nome="Raffael Thauã"
      newurl="https://i.redd.it/yall-want-some-profile-pictures-v0-s78vakppx9ze1.jpg?width=736&format=pjpg&auto=webp&s=0d26177b5f1fc9e9a0d8f9a0335f558d804c341a"
      />

      <Perfil 
      url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJVXq-bvv7GA3ILLeiMKp4AOJ1cEQc_9fhik9njKx8s9sJaIHZsqlbMGI&s=10" 
      nome="Teste sem newurl"
      newurl=""
      />

      <Perfil 
      url="" 
      nome="Teste sem url"
      newurl=""
      />
    </>
  )
}

export default App
