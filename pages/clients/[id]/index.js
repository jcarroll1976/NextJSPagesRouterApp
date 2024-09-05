import { useRouter } from "next/router";

export default function ClientProjectsPage() {
    const router = useRouter();

    function loadProjectHandler() {
        // load data...
        router.push('/clients/josh/project-a')
    }

    console.log(router.query);
    return (
        <div>
            <h1>The Projects of a Given Client</h1>
            <button onClick={loadProjectHandler}>Load Project A</button>
        </div>
    )
}