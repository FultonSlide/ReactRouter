const initState = {
    posts: [
        {id: '1', title: 'Flash Flooding in Melbournes East', body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'},
        {id: '2', title: 'Bushfires on hold but Firies wary', body: 'Sit amet consectetur adipiscing elit ut. Accumsan lacus vel facilisis volutpat est velit egestas dui id. Varius quam quisque id diam. Risus viverra adipiscing at in tellus integer. Ullamcorper dignissim cras tincidunt lobortis feugiat. Posuere sollicitudin aliquam ultrices sagittis orci a scelerisque purus semper. Velit laoreet id donec ultrices.'},
        {id: '3', title: 'Egg found smashed behind farmers wall', body: 'Laoreet non curabitur gravida arcu ac tortor dignissim convallis. Tristique nulla aliquet enim tortor. Massa enim nec dui nunc mattis enim ut. Maecenas accumsan lacus vel facilisis volutpat est. Netus et malesuada fames ac turpis egestas integer eget. Lacus sed turpis tincidunt id aliquet risus. Porttitor eget dolor morbi non arcu risus quis varius quam.'}
    ]
}

const rootReducer = (state = initState, action) => {
    return state;
}

export default rootReducer;