import CompB from "./compo-B";
function CompA(){
    let Name="new"
    let Role="Role"
    let Mobile=123456789
    return (
        <div>
            <h1>Hello</h1>
            <CompB Name={Name} Role={Role} Mobile={Mobile}/>
        </div>
    )
}
export default CompA