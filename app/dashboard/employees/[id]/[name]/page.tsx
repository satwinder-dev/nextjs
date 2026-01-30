export default async function({ params }: { params: { id: string, name:string } }) {
  const { id } =await params;
  const {name} = await params;
  console.log("Id is this ",id)
  console.log("This is paramss",params.name)
  return (
    <div>
      <div>Emplyees {id}</div>
      <div>Emplyees Name {name}</div>   
    </div>
  )
}
