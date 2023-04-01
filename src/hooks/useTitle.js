import { useEffect } from "react"

const useTitle = title => {
    useEffect(() => {
        document.title = `${title} - Happy Bikers`
    }, [title])
}

export default useTitle;