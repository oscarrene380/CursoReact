const Paciente = () => {
  return (
    <div className="mx-5 my-10 bg-white shadow-md px-5 py-10 rounded-xl">
        <p className="font-bold mb-3 text-gray-700 uppercase">
          Nombre: {''}
          <span className="font-normal normal-case">Hook</span>
        </p>

        <p className="font-bold mb-3 text-gray-700 uppercase">
          Propietario: {''}
          <span className="font-normal normal-case">Oscar</span>
        </p>

        <p className="font-bold mb-3 text-gray-700 uppercase">
          Email: {''}
          <span className="font-normal normal-case">correo@correo.com</span>
        </p>

        <p className="font-bold mb-3 text-gray-700 uppercase">
          Fecha alta: {''}
          <span className="font-normal normal-case">01 enero 2023</span>
        </p>

        <p className="font-bold mb-3 text-gray-700 uppercase">
          Sintomas: {''}
          <span className="font-normal normal-case">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam unde earum eum deserunt. Non, rem labore dicta esse sunt quos maxime dolorem quia sit iure veniam delectus ex impedit corporis?</span>
        </p>
    </div>
  )
}

export default Paciente
