

const Error404 = () => {
    location.hash = "/error404"
    const view = `
        <h1>El gupy esta bien meco ERROR 404</h1>
    `
    return view;
}

export default Error404;