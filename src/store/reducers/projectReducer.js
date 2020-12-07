const initState = {
    projects: [
        {id: '1', title: 'hadawd', content: 'lorem5'},
        {id: '2', title: 'awpodkapow', content: '45678998765445678'},
        {id: '3', title: '12345678', content: 'sebdhsenfusejfsiefkso'},
    ]
}

const projectReducer = (state = initState, action) => {
    switch (action.type){
        case 'CREATE_PROJECT':
            console.log('created project', action.project)
            return state;
        case 'CREATE_PROJECT_ERROR':
            console.log('created project error', action.err)
           return state;
        default:
            return state;
    }
}

export default projectReducer