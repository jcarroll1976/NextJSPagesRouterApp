import Link from "next/link";

export default function ClientsPage() {
    const clients = [
        {id:"josh", name:"Josh"},
        {id:"amy", name:"Amy"},
        {id:"emily", name:"Emily"}
    ]

    return (
        <div>
            <h1>The Clients Page</h1>
            <ul>
                {clients.map((client) =>
                <li key={client.id}>
                    <Link href={`/clients/${client.id}`}>{client.name}</Link>
                    {/*Alternative way of setting Link href*/}
                    {/*<Link 
                        href={{
                        pathname: "/clients/[id]",
                        query: {id: client.id}}}
                        >
                        {client.name}
                       </Link>*/}
                </li>)}
            </ul>
        </div>
    )
}