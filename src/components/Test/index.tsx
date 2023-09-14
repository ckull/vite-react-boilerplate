import { useQuery } from "@tanstack/react-query"
import { exampleApi } from "src/apis/Example"
const Test = () => {

    useQuery(["test"], () => exampleApi.fetchItems(), {
        enabled: false,
    })

    return (
        <div>Test</div>
    )
}

export default Test